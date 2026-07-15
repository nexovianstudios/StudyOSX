import { useState } from 'react';
import { DayPicker, type DayButtonProps } from 'react-day-picker';
import 'react-day-picker/style.css';
import * as Icons from 'lucide-react';
import { useStore, type CalendarEvent } from '../store';
import { GlassCard, SectionTitle, NeonButton, Modal } from '../components/ui';

const EVENT_TYPES: { id: CalendarEvent['type']; label: string; color: string }[] = [
  { id: 'exam', label: 'Exam', color: '#ff3b6b' },
  { id: 'homework', label: 'Homework', color: '#ffb800' },
  { id: 'revision', label: 'Revision', color: '#00d4ff' },
  { id: 'study', label: 'Study', color: '#00ff9d' },
  { id: 'custom', label: 'Custom', color: '#a78bfa' },
];

function toDateStr(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default function CalendarCenter() {
  const { state, setState } = useStore();
  const [month, setMonth] = useState<Date>(new Date());
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  const [showAdd, setShowAdd] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [newEvent, setNewEvent] = useState({ title: '', type: 'study' as CalendarEvent['type'], subject: '' });

  const todayStr = toDateStr(new Date());

  const eventsForDate = (date: string) => state.events.filter((e) => e.date === date);
  const upcomingEvents = state.events
    .filter((e) => e.date >= todayStr)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 10);

  const addEvent = () => {
    if (!newEvent.title.trim() || !selectedDate) return;
    const event: CalendarEvent = {
      id: crypto.randomUUID(),
      title: newEvent.title,
      date: selectedDate,
      type: newEvent.type,
      subject: newEvent.subject || undefined,
    };
    setState((s) => ({ ...s, events: [...s.events, event] }));
    setNewEvent({ title: '', type: 'study', subject: '' });
    setShowAdd(false);
  };

  const removeEvent = (id: string) => setState((s) => ({ ...s, events: s.events.filter((e) => e.id !== id) }));

  const openAdd = (date: Date) => {
    const dateStr = toDateStr(date);
    setSelected(date);
    setSelectedDate(dateStr);
    setShowAdd(true);
  };

  const jumpToToday = () => {
    const now = new Date();
    setMonth(now);
    setSelected(now);
  };

  // Custom day button: shows the date number + colored dot indicators for that day's events
  function EventDayButton(props: DayButtonProps) {
    const { day, modifiers, ...rest } = props;
    const dateStr = toDateStr(day.date);
    const events = eventsForDate(dateStr);

    return (
      <button
        {...rest}
        type="button"
        onClick={(e) => {
          openAdd(day.date);
          rest.onClick?.(e);
        }}
        className={`
w-full
h-full
rounded-2xl
glass
border
border-white/5
flex
flex-col
items-start
justify-start
p-2
transition-all
duration-200
hover:scale-[1.03]
hover:border-cyan-400/40
hover:shadow-[0_0_18px_rgba(0,212,255,0.15)]
${
  modifiers.today
    ? 'border-cyan-400 shadow-[0_0_20px_rgba(0,212,255,0.25)]'
    : ''
}
${
  modifiers.selected
    ? 'bg-cyan-500/10 border-cyan-400'
    : ''
}
${
  modifiers.outside
    ? 'opacity-30'
    : ''
}
`}
      >
        <span className="text-sm font-semibold">{day.date.getDate()}</span>
        <span className="flex flex-wrap gap-1 mt-2">
          {events.slice(0, 3).map((e) => {
            const type = EVENT_TYPES.find((t) => t.id === e.type)!;
            return (
              <span
                key={e.id}
                className="w-2 h-2 rounded-full shadow-sm"
                style={{ background: type.color }}
                title={e.title}
              />
            );
          })}
          {events.length > 3 && (
            <span className="text-[8px] text-muted-c leading-none">+{events.length - 3}</span>
          )}
        </span>
      </button>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <SectionTitle title="Calendar Center" subtitle="Exams, deadlines, and study schedule" icon={<Icons.Calendar size={24} />} />
        <div className="flex gap-2">
          <button onClick={jumpToToday} className="glass rounded-xl px-4 py-2 text-sm text-secondary-c hover:text-primary-c transition-colors">
            Today
          </button>
          <NeonButton onClick={() => openAdd(new Date())}>
            <Icons.Plus size={16} /> Add Event
          </NeonButton>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Calendar */}
        <GlassCard className="p-4 sm:p-6 lg:col-span-2 osx-calendar">
          <DayPicker
            mode="single"
            month={month}
            onMonthChange={setMonth}
            selected={selected}
            onSelect={setSelected}
            showOutsideDays
            className="w-full"
            classNames={{
              root: 'w-full',
              months: 'w-full',
              month: 'w-full',
              month_grid: 'w-full border-collapse',
              weekdays: 'flex',
              weekday: 'flex-1 text-center text-[10px] text-muted-c uppercase tracking-wider py-1 font-medium',
              week: 'flex w-full gap-2 mt-2',
              day: 'flex-1 aspect-square',
              month_caption: 'flex items-center justify-between mb-4 relative',
              caption_label: 'font-display text-xl font-bold gradient-text',
              nav: 'flex items-center gap-1',
              button_previous: 'p-2 rounded-lg hover:bg-white/5 text-secondary-c',
              button_next: 'p-2 rounded-lg hover:bg-white/5 text-secondary-c',
            }}
            components={{
              DayButton: EventDayButton,
              Chevron: ({ orientation }) =>
                orientation === 'left' ? <Icons.ChevronLeft size={20} /> : <Icons.ChevronRight size={20} />,
            }}
          />
        </GlassCard>

        {/* Upcoming events */}
        <GlassCard className="p-6">
          <h3 className="font-display font-semibold text-sm mb-4 text-primary-c">Upcoming</h3>
          {upcomingEvents.length === 0 ? (
            <p className="text-sm text-muted-c py-8 text-center">No upcoming events. Click a date to add one.</p>
          ) : (
            <div className="space-y-2">
              {upcomingEvents.map((e) => {
                const type = EVENT_TYPES.find((t) => t.id === e.type)!;
                const days = Math.ceil((new Date(e.date).getTime() - Date.now()) / 86400000);
                return (
                  <div key={e.id} className="glass rounded-lg p-3 group">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-primary-c truncate">{e.title}</div>
                        {e.subject && <div className="text-xs text-secondary-c">{e.subject}</div>}
                        <div className="text-[10px] text-muted-c mt-1">
                          {new Date(e.date).toLocaleDateString('en', { weekday: 'short', month: 'short', day: 'numeric' })} ·{' '}
                          {days === 0 ? 'Today' : `${days} day${days > 1 ? 's' : ''} away`}
                        </div>
                      </div>
                      <div
                        className="px-2 py-0.5 rounded-full text-[9px] font-medium flex-shrink-0"
                        style={{ background: `${type.color}20`, color: type.color }}
                      >
                        {type.label}
                      </div>
                      <button
                        onClick={() => removeEvent(e.id)}
                        className="text-muted-c hover:text-error opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Icons.X size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </GlassCard>
      </div>

      <Modal
        open={showAdd}
        onClose={() => setShowAdd(false)}
        title={`Add Event — ${selectedDate ? new Date(selectedDate).toLocaleDateString('en', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}`}
      >
        <div className="space-y-4">
          <div>
            <label className="text-xs text-secondary-c">Title</label>
            <input
              autoFocus
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              placeholder="e.g. Math Mock Test"
              className="w-full bg-base-2 border border-white/10 rounded-xl px-3 py-2 text-sm text-primary-c mt-1 focus:outline-none focus:border-[rgba(var(--accent),0.5)]"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-secondary-c">Type</label>
              <select
                value={newEvent.type}
                onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value as CalendarEvent['type'] })}
                className="w-full bg-base-2 border border-white/10 rounded-xl px-3 py-2 text-sm text-primary-c mt-1"
              >
                {EVENT_TYPES.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs text-secondary-c">Subject (optional)</label>
              <input
                value={newEvent.subject}
                onChange={(e) => setNewEvent({ ...newEvent, subject: e.target.value })}
                placeholder="e.g. Physics"
                className="w-full bg-base-2 border border-white/10 rounded-xl px-3 py-2 text-sm text-primary-c mt-1"
              />
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <button onClick={() => setShowAdd(false)} className="glass rounded-xl px-4 py-2 text-sm text-secondary-c">
              Cancel
            </button>
            <NeonButton onClick={addEvent}>
              <Icons.Plus size={16} /> Add
            </NeonButton>
          </div>
        </div>
      </Modal>
    </div>
  );
}