import { useEffect, useRef, useState } from "react";

// Animated number counter — triggers when in viewport (Motion Primitives / Anime.js style)
export default function AnimatedCounter({ end, suffix = "", duration = 1800, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <span className="text-3xl md:text-4xl font-bold tracking-tight text-ink dark:text-white font-display">
        {count}{suffix}
      </span>
      <span className="text-xs text-inkMuted dark:text-white/40 uppercase tracking-widest font-medium">{label}</span>
    </div>
  );
}
