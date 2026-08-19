'use client';

import { useEffect, useState } from 'react';

const roles = [
  'AI/ML ENGINEER',
  'FULL-STACK ENGINEER',
  'REAL-TIME SYSTEMS',
  'SOFTWARE ENGINEER',
];

export function FlipFadeText({ className = '', interval = 3000 }: { className?: string; interval?: number }) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'idle' | 'out' | 'in'>('idle');

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return;

    let enterTimer = 0;
    const timer = window.setInterval(() => {
      setPhase('out');
      enterTimer = window.setTimeout(() => {
        setIndex((current) => (current + 1) % roles.length);
        setPhase('in');
        enterTimer = window.setTimeout(() => setPhase('idle'), 420);
      }, 220);
    }, interval);

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(enterTimer);
    };
  }, [interval]);

  const role = roles[index];
  return (
    <span role="status" aria-live="polite" aria-atomic="true" aria-label={role} className={`flip-fade-text inline-flex items-center justify-center ${className}`}>
      <span aria-hidden="true" className={`flip-word ${phase === 'out' ? 'flip-fade-text--out' : phase === 'in' ? 'flip-fade-text--in' : ''}`}>{role}</span>
    </span>
  );
}
