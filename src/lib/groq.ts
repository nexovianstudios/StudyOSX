const API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "llama-3.3-70b-versatile";

export type GroqErrorCode =
  | "empty_prompt"
  | "network"
  | "rate_limit"
  | "invalid_response"
  | "api_error";

export class GroqError extends Error {
  code: GroqErrorCode;
  constructor(message: string, code: GroqErrorCode) {
    super(message);
    this.code = code;
    this.name = "GroqError";
  }
}

export interface ChatHistoryMessage {
  role: "user" | "assistant";
  content: string;
}

interface AskGroqOptions {
  systemPrompt: string;
  history?: {
    role: "user" | "assistant";
    content: string;
  }[];
  jsonMode?: boolean;
  temperature?: number;
  retries?: number;
}

async function callGroqOnce(prompt: string, opts: AskGroqOptions): Promise<string> {
  const body: Record<string, unknown> = {
    model: MODEL,
    messages: [
  {
    role: "system",
    content: opts.systemPrompt,
  },

  ...(opts.history ?? []),

  {
    role: "user",
    content: prompt,
  },
],
    temperature: opts.temperature ?? 0.6,
  };

  if (opts.jsonMode) {
    body.response_format = { type: "json_object" };
  }

  let response: Response;
  try {
    response = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(body),
    });
  } catch {
    throw new GroqError("Network request failed", "network");
  }

  if (response.status === 429) {
    throw new GroqError("Rate limited by Groq", "rate_limit");
  }

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Groq Error:", errorText);
    throw new GroqError(errorText, "api_error");
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content;

  if (!content || typeof content !== "string") {
    throw new GroqError("Invalid response shape from Groq", "invalid_response");
  }

  return content;
}

/** Plain-text / Markdown response from Groq, with retry on network/rate-limit errors. */
export async function askGroq(prompt: string, opts: AskGroqOptions): Promise<string> {
  if (!prompt || !prompt.trim()) {
    throw new GroqError("Prompt is empty", "empty_prompt");
  }

  const retries = opts.retries ?? 1;
  let lastErr: unknown;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await callGroqOnce(prompt, opts);
    } catch (err) {
      lastErr = err;
      const isRetryable =
        err instanceof GroqError && (err.code === "rate_limit" || err.code === "network");
      if (isRetryable && attempt < retries) {
        await new Promise((r) => setTimeout(r, 700 * (attempt + 1)));
        continue;
      }
      throw err;
    }
  }
  throw lastErr;
}

/** JSON-structured response from Groq (for quiz, flashcards, plans, etc). */
export async function askGroqJSON<T>(prompt: string, opts: AskGroqOptions): Promise<T> {
  const raw = await askGroq(prompt, { ...opts, jsonMode: true });
  try {
    const cleaned = raw.replace(/```json|```/g, "").trim();
    return JSON.parse(cleaned) as T;
  } catch {
    throw new GroqError("Failed to parse JSON response from Groq", "invalid_response");
  }
}

/**
 * Compress a chunk of older conversation turns into a short running summary,
 * optionally folding in a previous summary. Used to keep chat-history token
 * usage bounded on long conversations without discarding the on-screen
 * message list or losing earlier context.
 */
export async function summarizeConversation(
  messagesToSummarize: ChatHistoryMessage[],
  previousSummary?: string
): Promise<string> {
  const systemPrompt =
    "You compress study-assistant conversation history into a short factual summary (max ~120 words). " +
    "Preserve: the subject/topic being discussed, any concrete requests or tasks the user made, any commitments " +
    "or plans the assistant proposed, and unresolved threads. Do not add commentary, opinions, or formatting — " +
    "plain prose only.";

  const transcript = messagesToSummarize
    .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
    .join("\n");

  const prompt = previousSummary
    ? `Existing summary of earlier conversation:\n${previousSummary}\n\nNewer messages to fold in:\n${transcript}\n\nProduce one updated summary covering everything.`
    : `Conversation so far:\n${transcript}\n\nSummarize it.`;

  return askGroq(prompt, {
    systemPrompt,
    temperature: 0.3,
    retries: 1,
  });
}

/** Friendly, student-facing message for a given error. */
export function friendlyGroqMessage(err: unknown): string {
  if (err instanceof GroqError) {
    switch (err.code) {
      case "empty_prompt":
        return "Type something first, then hit Generate! 🙂";
      case "network":
        return "⚠️ Network hiccup — check your connection and try again.";
      case "rate_limit":
        return "⚠️ Too many requests right now. Wait a few seconds and try again.";
      case "invalid_response":
        return "⚠️ Got a strange response from the AI. Please try again.";
      case "api_error":
      default:
        return "⚠️ Something went wrong talking to the AI. Please try again.";
    }
  }
  return "⚠️ Something unexpected happened. Please try again.";
}