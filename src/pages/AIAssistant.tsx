import { useState, useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';
import { useStore } from '../store';
import { GlassCard, SectionTitle, NeonButton, EmptyState } from '../components/ui';
import {
  askGroq,
  askGroqJSON,
  summarizeConversation,
  GroqError,
  friendlyGroqMessage,
  type ChatHistoryMessage,
} from '../lib/groq';
import {
  DOUBT_PROMPT,
  EXPLAIN_PROMPT,
  QUIZ_SYSTEM_PROMPT,
  FLASHCARDS_SYSTEM_PROMPT,
  CHEATSHEET_PROMPT,
  PLAN_SYSTEM_PROMPT,
  FUNCHAT_PROMPT,
} from '../lib/prompts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Tool = 'doubt' | 'quiz' | 'explain' | 'flashcards' | 'summarize' | 'plan' | 'funchat';

const TOOLS: { id: Tool; name: string; icon: string; desc: string; color: string }[] = [
  { id: 'doubt', name: 'Ask a Doubt', icon: 'HelpCircle', desc: 'Get explanations', color: '#00d4ff' },
  { id: 'quiz', name: 'Generate Quiz', icon: 'FileQuestion', desc: 'Test yourself', color: '#22f5ff' },
  { id: 'explain', name: 'Explain Concept', icon: 'Lightbulb', desc: 'Break it down', color: '#00ff9d' },
  { id: 'flashcards', name: 'Create Flashcards', icon: 'CreditCard', desc: 'Study cards', color: '#ffb800' },
  { id: 'summarize', name: 'Cheat Sheet', icon: 'FileText', desc: 'Key points', color: '#a78bfa' },
  { id: 'plan', name: 'Revision Plan', icon: 'CalendarCheck', desc: 'Study schedule', color: '#ff6b35' },
  { id: 'funchat', name: 'Fun Chat', icon: 'MessageCircle', desc: 'Chill & motivate', color: '#ff6bcb' },
];

const iconMap = Icons as unknown as Record<string, Icons.LucideIcon>;

interface QuizQuestion {
  question: string;
  difficulty: 'easy' | 'medium' | 'hard';
  answer: string;
  explanation: string;
}

interface Flashcard {
  front: string;
  back: string;
  keyword: string;
  mnemonic: string | null;
}

interface PlanItem {
  day: number;
  subject: string;
  task: string;
  notes: string;
}

type MsgData =
  | { kind: 'quiz'; items: QuizQuestion[] }
  | { kind: 'flashcards'; items: Flashcard[] }
  | { kind: 'plan'; items: PlanItem[] }
  | undefined;

interface Msg {
  role: 'user' | 'ai';
  content: string;
  data?: MsgData;
}

const DIFFICULTY_COLOR: Record<QuizQuestion['difficulty'], string> = {
  easy: '#00ff9d',
  medium: '#ffb800',
  hard: '#ff3b6b',
};

// --- Conversation-memory tuning -------------------------------------------------
// How many of the most recent messages are sent to Groq verbatim as chat history.
const MAX_CONTEXT_MESSAGES = 12;
// How far past that window we let the conversation grow before triggering a
// background summarization pass (avoids summarizing on every single message).
const SUMMARY_TRIGGER_BUFFER = 6;

export default function AIAssistant() {
  const { addXp } = useStore();
  const [tool, setTool] = useState<Tool>('doubt');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Msg[]>([]);
  const [loading, setLoading] = useState(false);
  const [quizRevealed, setQuizRevealed] = useState<Record<string, boolean>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Rolling summary of everything older than the current live context window.
  // Kept in refs (not state) since it's never rendered — it only needs to be
  // read/written between async calls without triggering re-renders.
  const summaryRef = useRef<string>('');
  const summarizedUpToRef = useRef<number>(0); // index into `messages` already folded into summaryRef
  const isSummarizingRef = useRef<boolean>(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const placeholderFor = (t: Tool) => {
    switch (t) {
      case 'plan':
        return 'Number of days (e.g. 7)';
      case 'summarize':
        return 'Chapter name (e.g. Electricity)';
      case 'funchat':
        return "Say what's on your mind...";
      default:
        return 'Ask about any Class 10 topic...';
    }
  };

  // Build the `history` array Groq should see for the *next* call: the
  // rolling summary (if any, as a leading assistant-visible note folded into
  // the first history turn) plus the most recent messages verbatim. This is
  // everything BEFORE the new user turn — askGroq appends the current prompt
  // itself.
  const buildHistory = (allMessages: Msg[]): ChatHistoryMessage[] => {
    const history: ChatHistoryMessage[] = [];

    if (summaryRef.current) {
      // The API only accepts 'user' | 'assistant' roles in history, so the
      // summary is threaded in as an assistant note the model can rely on.
      history.push({
        role: 'assistant',
        content: `[Context from earlier in our conversation: ${summaryRef.current}]`,
      });
    }

    const recent = allMessages.slice(-MAX_CONTEXT_MESSAGES);
    for (const m of recent) {
      history.push({ role: m.role === 'user' ? 'user' : 'assistant', content: m.content });
    }

    return history;
  };

  // Fire-and-forget: once the conversation has grown well past the live
  // context window, compress the messages that fell out of that window into
  // (or on top of) the rolling summary. Keeps token usage bounded without
  // ever discarding what's shown on screen.
  const maybeSummarize = (allMessages: Msg[]) => {
    if (isSummarizingRef.current) return;

    const unsummarizedCount = allMessages.length - summarizedUpToRef.current;
    if (unsummarizedCount <= MAX_CONTEXT_MESSAGES + SUMMARY_TRIGGER_BUFFER) return;

    const cutoff = allMessages.length - MAX_CONTEXT_MESSAGES; // keep this many newest messages live
    const chunk = allMessages.slice(summarizedUpToRef.current, cutoff);
    if (chunk.length === 0) return;

    isSummarizingRef.current = true;

    const chunkForSummary: ChatHistoryMessage[] = chunk.map((m) => ({
      role: m.role === 'user' ? 'user' : 'assistant',
      content: m.content,
    }));

    summarizeConversation(chunkForSummary, summaryRef.current || undefined)
      .then((newSummary) => {
        summaryRef.current = newSummary.trim();
        summarizedUpToRef.current = cutoff;
      })
      .catch((err) => {
        // Summarization is best-effort; on failure we just keep the larger
        // live window next time instead of breaking the conversation.
        console.error('Conversation summarization failed:', err);
      })
      .finally(() => {
        isSummarizingRef.current = false;
      });
  };

  const run = async () => {
    if (loading) return; // prevent duplicate/rapid submissions
    if (!input.trim()) return;

    const currentInput = input.trim();

    // History is everything said so far (across all tools), built *before*
    // the new user turn is appended.
    const history = buildHistory(messages);

    const userMsg: Msg = { role: 'user', content: currentInput };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);

    try {
      switch (tool) {
        case 'quiz': {
          const result = await askGroqJSON<{ questions: QuizQuestion[] }>(currentInput, {
            systemPrompt: QUIZ_SYSTEM_PROMPT,
            history,
            temperature: 0.7,
          });
          setMessages((m) => {
            const next: Msg[] = [
              ...m,
              { role: 'ai', content: `Here's a quiz on **${currentInput}**:`, data: { kind: 'quiz', items: result.questions } },
            ];
            maybeSummarize(next);
            return next;
          });
          break;
        }

        case 'flashcards': {
          const result = await askGroqJSON<{ cards: Flashcard[] }>(currentInput, {
            systemPrompt: FLASHCARDS_SYSTEM_PROMPT,
            history,
            temperature: 0.6,
          });
          setMessages((m) => {
            const next: Msg[] = [
              ...m,
              { role: 'ai', content: `Flashcards for **${currentInput}**:`, data: { kind: 'flashcards', items: result.cards } },
            ];
            maybeSummarize(next);
            return next;
          });
          break;
        }

        case 'plan': {
          const days = Math.max(1, Math.min(60, parseInt(currentInput, 10) || 7));
          const result = await askGroqJSON<{ plan: PlanItem[] }>(currentInput, {
            systemPrompt: PLAN_SYSTEM_PROMPT,
            history,
            temperature: 0.6,
          });
          setMessages((m) => {
            const next: Msg[] = [
              ...m,
              { role: 'ai', content: `Here's your ${days}-day revision plan:`, data: { kind: 'plan', items: result.plan } },
            ];
            maybeSummarize(next);
            return next;
          });
          break;
        }

        case 'summarize': {
          const content = await askGroq(currentInput, {
            systemPrompt: CHEATSHEET_PROMPT,
            history,
            temperature: 0.5,
          });
          setMessages((m) => {
            const next: Msg[] = [...m, { role: 'ai', content }];
            maybeSummarize(next);
            return next;
          });
          break;
        }

        case 'explain': {
          const content = await askGroq(currentInput, {
            systemPrompt: EXPLAIN_PROMPT,
            history,
            temperature: 0.6,
          });
          setMessages((m) => {
            const next: Msg[] = [...m, { role: 'ai', content }];
            maybeSummarize(next);
            return next;
          });
          break;
        }

        case 'funchat': {
          const content = await askGroq(currentInput, {
            systemPrompt: FUNCHAT_PROMPT,
            history,
            temperature: 0.8,
          });
          setMessages((m) => {
            const next: Msg[] = [...m, { role: 'ai', content }];
            maybeSummarize(next);
            return next;
          });
          break;
        }

        case 'doubt':
        default: {
          const content = await askGroq(currentInput, {
            systemPrompt: DOUBT_PROMPT,
            history,
            temperature: 0.6,
          });
          setMessages((m) => {
            const next: Msg[] = [...m, { role: 'ai', content }];
            maybeSummarize(next);
            return next;
          });
          break;
        }
      }

      addXp(5);
    } catch (err) {
      const message = err instanceof GroqError ? friendlyGroqMessage(err) : friendlyGroqMessage(err);
      setMessages((m) => [...m, { role: 'ai', content: message }]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const currentTool = TOOLS.find((t) => t.id === tool)!;

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col gap-6">
      <SectionTitle title="AI Assistant" subtitle="Your personal study companion" icon={<Icons.Bot size={24} />} />

      <GlassCard className="p-4 flex items-center gap-3">
        <Icons.Sparkles size={18} className="text-[rgb(var(--accent-soft))] flex-shrink-0" />
        <p className="text-sm text-secondary-c">
          Powered by Groq. Ask about any topic, generate quizzes, flashcards, cheat sheets, revision plans, or just chat. Earn 5 XP per interaction.
        </p>
      </GlassCard>

      {/* Tool selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
        {TOOLS.map((t) => {
          const Icon = iconMap[t.icon] || Icons.Circle;
          return (
            <button
              key={t.id}
              onClick={() => {
                // Switching tools no longer clears the conversation — memory
                // is shared across all tools for the lifetime of the page.
                setTool(t.id);
              }}
              className={`glass card-hover rounded-xl p-4 text-center transition-all ${tool === t.id ? 'neon-border' : ''}`}
            >
              <div
                className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center"
                style={{ background: `${t.color}20`, border: `1px solid ${t.color}40` }}
              >
                <Icon size={18} style={{ color: t.color }} />
              </div>
              <div className="text-xs font-semibold text-primary-c">{t.name}</div>
              <div className="text-[10px] text-muted-c">{t.desc}</div>
            </button>
          );
        })}
      </div>

      {/* Messages */}
      <div className="flex flex-col flex-1 min-h-0">
        <div className="flex-1 min-h-0 overflow-y-auto space-y-4 pr-2">
          {messages.length === 0 ? (
            <EmptyState icon={<Icons.Bot size={48} />} title={`AI ${currentTool.name}`} subtitle="Type your query above and hit Generate" />
          ) : (
            <>
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`glass rounded-2xl p-4 max-w-3xl w-fit ${m.role === 'user' ? 'neon-border' : ''}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {m.role === 'user' ? (
                        <Icons.User size={14} className="text-[rgb(var(--accent-soft))]" />
                      ) : (
                        <Icons.Bot size={14} className="text-[rgb(var(--accent-soft))]" />
                      )}
                      <span className="text-xs text-muted-c uppercase tracking-wider">{m.role === 'user' ? 'You' : 'AI'}</span>
                    </div>

                    <div className="text-sm text-secondary-c leading-relaxed prose prose-invert max-w-none">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content}</ReactMarkdown>
                    </div>

                    {m.data?.kind === 'quiz' && (
                      <div className="mt-3 space-y-2">
                        {m.data.items.map((item, j) => {
                          const key = `${i}-${j}`;
                          return (
                            <div key={key} className="glass rounded-lg p-3">
                              <div className="flex items-start justify-between gap-2">
                                <div className="text-sm font-medium text-primary-c">
                                  {j + 1}. {item.question}
                                </div>
                                <span
                                  className="px-2 py-0.5 rounded-full text-[9px] font-medium flex-shrink-0"
                                  style={{ background: `${DIFFICULTY_COLOR[item.difficulty]}20`, color: DIFFICULTY_COLOR[item.difficulty] }}
                                >
                                  {item.difficulty}
                                </span>
                              </div>
                              <button
                                onClick={() => setQuizRevealed((r) => ({ ...r, [key]: !r[key] }))}
                                className="text-xs neon-btn rounded px-2 py-1 mt-2"
                              >
                                {quizRevealed[key] ? 'Hide answer' : 'Reveal answer'}
                              </button>
                              {quizRevealed[key] && (
                                <div className="mt-2 text-xs text-secondary-c">
                                  <div className="text-[rgb(var(--accent-soft))] font-medium">{item.answer}</div>
                                  <div className="mt-1 text-muted-c">{item.explanation}</div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {m.data?.kind === 'flashcards' && (
                      <div className="mt-3 space-y-2">
                        {m.data.items.map((card, j) => (
                          <div key={j} className="glass rounded-lg p-3">
                            <div className="flex justify-between items-start gap-2">
                              <span className="text-sm text-primary-c font-medium">{card.front}</span>
                              <span className="text-[9px] px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: 'rgba(var(--accent),0.15)', color: 'rgb(var(--accent-soft))' }}>
                                {card.keyword}
                              </span>
                            </div>
                            <div className="text-xs font-mono text-secondary-c mt-1">{card.back}</div>
                            {card.mnemonic && (
                              <div className="text-[10px] text-muted-c mt-1 italic">💡 {card.mnemonic}</div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {m.data?.kind === 'plan' && (
                      <div className="mt-3 space-y-2">
                        {m.data.items.map((p, j) => (
                          <div key={j} className="glass rounded-lg p-3 flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg neon-border flex items-center justify-center text-xs font-bold text-[rgb(var(--accent-soft))] flex-shrink-0">
                              {p.day}
                            </div>
                            <div className="flex-1">
                              <div>
                                <span className="text-sm text-primary-c font-medium">{p.subject}</span>
                                <span className="text-xs text-secondary-c ml-2">· {p.task}</span>
                              </div>
                              {p.notes && <div className="text-[10px] text-muted-c mt-1">{p.notes}</div>}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="glass rounded-2xl p-4 w-fit flex items-center gap-2 text-sm text-secondary-c">
                    <Icons.Loader2 size={14} className="animate-spin text-[rgb(var(--accent-soft))]" />
                    Thinking...
                  </div>
                </div>
              )}
            </>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <GlassCard className="p-4 mt-4 shrink-0">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !loading && run()}
              placeholder={placeholderFor(tool)}
              disabled={loading}
              className="flex-1 bg-base-2 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-primary-c placeholder:text-muted-c focus:outline-none focus:border-[rgba(var(--accent),0.5)] disabled:opacity-50"
            />
            <NeonButton onClick={run} disabled={loading} className="!px-6">
              {loading ? <Icons.Loader2 size={16} className="animate-spin" /> : <Icons.Send size={16} />}
              {loading ? 'Generating...' : 'Generate'}
            </NeonButton>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
