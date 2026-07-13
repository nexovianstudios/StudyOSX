import { useEffect, useRef, useState } from 'react';
import * as Icons from 'lucide-react';
import { GlassCard, SectionTitle } from '../components/ui';

interface Sound {
  id: string;
  name: string;
  icon: string;
  color: string;
  file: string;
}

const SOUNDS: Sound[] = [
  {
    id: "lofi",
    name: "Lo-Fi Beats",
    icon: "Music",
    color: "#a78bfa",
    file: "lofi-study.mp3",
  },
  {
    id: "piano",
    name: "Deep Piano",
    icon: "Piano",
    color: "#fbbf24",
    file: "deep-piano.mp3",
  },
  {
    id: "focus",
    name: "Focus Ambient",
    icon: "Brain",
    color: "#38bdf8",
    file: "focus-ambient.mp3",
  },
  {
    id: "rain",
    name: "Rain",
    icon: "CloudRain",
    color: "#00d4ff",
    file: "rain.mp3",
  },
  {
    id: "forest",
    name: "Forest",
    icon: "Trees",
    color: "#22c55e",
    file: "forest.mp3",
  },
  {
    id: "night",
    name: "Night Crickets",
    icon: "MoonStar",
    color: "#818cf8",
    file: "night.mp3",
  },
  {
    id: "wind",
    name: "Wind",
    icon: "Wind",
    color: "#cbd5e1",
    file: "wind.mp3",
  },
  {
    id: "ocean",
    name: "Ocean Waves",
    icon: "Waves",
    color: "#06b6d4",
    file: "ocean.mp3",
  },
  {
    id: "cafe",
    name: "Coffee Shop",
    icon: "Coffee",
    color: "#d97706",
    file: "cafe.mp3",
  },
  {
    id: "library",
    name: "Library",
    icon: "BookOpen",
    color: "#84cc16",
    file: "library.mp3",
  },
  {
    id: "fireplace",
    name: "Fireplace",
    icon: "Flame",
    color: "#ff6b35",
    file: "fireplace.mp3",
  },
  {
    id: "brownnoise",
    name: "Brown Noise",
    icon: "Radio",
    color: "#b45309",
    file: "brown-noise.mp3",
  },
  {
    id: "whitenoise",
    name: "White Noise",
    icon: "RadioTower",
    color: "#22f5ff",
    file: "white-noise.mp3",
  },
];

const iconMap = Icons as unknown as Record<string, Icons.LucideIcon>;

const DEFAULT_VOLUME = 0.5;

export default function Ambience() {
  const [active, setActive] = useState<Record<string, number>>({});
  const audioRefs = useRef<Record<string, HTMLAudioElement>>({});

  // Create each Audio object exactly once, on mount.
  useEffect(() => {
    SOUNDS.forEach((s) => {
      if (!audioRefs.current[s.id]) {
        const audio = new Audio(`/audio/${s.file}`);
        audio.preload = 'auto';
        audio.loop = true;
        audio.volume = DEFAULT_VOLUME;
        audioRefs.current[s.id] = audio;
      }
    });

    // Cleanup on unmount: pause every sound and release refs.
    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        try {
          audio.pause();
          audio.currentTime = 0;
        } catch {
          /* noop */
        }
      });
      audioRefs.current = {};
    };
  }, []);

  const startSound = (id: string) => {
    const audio = audioRefs.current[id];
    if (!audio) return;
    audio.volume = active[id] ?? DEFAULT_VOLUME;
    audio.currentTime = 0;
    audio.play().catch(() => {
      /* playback blocked or interrupted — ignore */
    });
    setActive((a) => ({ ...a, [id]: a[id] ?? DEFAULT_VOLUME }));
  };

  const stopSound = (id: string) => {
    const audio = audioRefs.current[id];
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setActive((a) => {
      const n = { ...a };
      delete n[id];
      return n;
    });
  };

  const setVolume = (id: string, vol: number) => {
    const audio = audioRefs.current[id];
    if (audio) audio.volume = vol;
    setActive((a) => ({ ...a, [id]: vol }));
  };

  const toggle = (id: string) => {
    if (active[id] !== undefined) stopSound(id);
    else startSound(id);
  };

  const stopAll = () => {
    Object.keys(active).forEach(stopSound);
  };

  return (
    <div className="space-y-6">
      <SectionTitle title="Ambience Center" subtitle="Mix multiple sounds for the perfect study atmosphere" icon={<Icons.Music size={24} />} />

      <GlassCard className="p-4 flex items-center gap-3">
        <Icons.Info size={18} className="text-[rgb(var(--accent-soft))] flex-shrink-0" />
        <p className="text-sm text-secondary-c">Click a sound to start it. Adjust volume with the slider. Mix multiple sounds together for a custom ambience.</p>
      </GlassCard>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SOUNDS.map((s) => {
          const Icon = iconMap[s.icon] || Icons.Circle;
          const isActive = active[s.id] !== undefined;
          const vol = active[s.id] ?? DEFAULT_VOLUME;
          return (
            <GlassCard key={s.id} hover className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${s.color}20`, border: `1px solid ${s.color}50`, boxShadow: isActive ? `0 0 15px ${s.color}40` : 'none' }}>
                    <Icon size={22} style={{ color: s.color }} />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-c">{s.name}</div>
                    <div className="text-xs text-muted-c">{isActive ? 'Playing' : 'Tap to play'}</div>
                  </div>
                </div>
                <button onClick={() => toggle(s.id)} className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isActive ? 'neon-btn' : 'glass'}`}>
                  {isActive ? <Icons.Square size={16} /> : <Icons.Play size={16} />}
                </button>
              </div>
              {isActive && (
                <div className="animate-fade-in">
                  <div className="flex items-center gap-2">
                    <Icons.Volume1 size={14} className="text-muted-c" />
                    <input type="range" min="0" max="1" step="0.05" value={vol} onChange={(e) => setVolume(s.id, +e.target.value)} className="flex-1" />
                    <Icons.Volume2 size={14} className="text-muted-c" />
                  </div>
                </div>
              )}
            </GlassCard>
          );
        })}
      </div>

      {Object.keys(active).length > 0 && (
        <GlassCard className="p-4 flex items-center justify-between">
          <div className="text-sm text-secondary-c">{Object.keys(active).length} sound(s) active</div>
          <button onClick={stopAll} className="text-xs neon-btn rounded-lg px-3 py-1.5 flex items-center gap-1.5">
            <Icons.X size={14} /> Stop All
          </button>
        </GlassCard>
      )}
    </div>
  );
}
