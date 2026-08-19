'use client';

import { useEffect, useMemo, useState } from 'react';

const defaultWords = [
  'AI/ML ENGINEER',
  'FULL-STACK ENGINEER',
  'REAL-TIME SYSTEMS',
  'SOFTWARE ENGINEER',
];

type FlipFadeTextProps = {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  letterDuration?: number;
  staggerDelay?: number;
  exitStaggerDelay?: number;
};

export function FlipFadeText({
  words = defaultWords,
  interval = 3000,
  className = '',
  textClassName = '',
  letterDuration = 0.6,
  staggerDelay = 0.1,
  exitStaggerDelay = 0.05,
}: FlipFadeTextProps) {
  const safeWords = words.length > 0 ? words : defaultWords;
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'visible' | 'exit' | 'enter'>('visible');
  const [reducedMotion, setReducedMotion] = useState(false);
  const currentWord = safeWords[index % safeWords.length];
  const letters = useMemo(() => currentWord.split(''), [currentWord]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener('change', updateMotion);
    return () => media.removeEventListener('change', updateMotion);
  }, []);

  useEffect(() => {
    if (reducedMotion || safeWords.length < 2) return;

    let enterTimer: number | undefined;
    const timer = window.setInterval(() => {
      setPhase('exit');
      enterTimer = window.setTimeout(() => {
        setIndex((current) => (current + 1) % safeWords.length);
        setPhase('enter');
        enterTimer = window.setTimeout(() => setPhase('visible'), letterDuration * 1000 + staggerDelay * 1000 + 40);
      }, Math.max(240, letterDuration * 670));
    }, interval);

    return () => {
      window.clearInterval(timer);
      if (enterTimer) window.clearTimeout(enterTimer);
    };
  }, [interval, letterDuration, reducedMotion, safeWords.length, staggerDelay]);

  return (
    <span role="status" aria-live="polite" aria-atomic="true" className={`flip-fade-text inline-flex items-center justify-center ${className}`}>
      <span className="sr-only">{currentWord}</span>
      <span
        aria-hidden="true"
        className={`flip-word ${phase === 'exit' ? 'flip-fade-text--out' : phase === 'enter' ? 'flip-fade-text--in' : ''} ${textClassName}`}
        style={{
          '--letter-duration': `${letterDuration}s`,
          '--letter-stagger': `${staggerDelay}s`,
          '--letter-exit-stagger': `${exitStaggerDelay}s`,
        } as React.CSSProperties}
      >
        {letters.map((char, letterIndex) => (
          <span
            key={`${currentWord}-${letterIndex}`}
            className="flip-letter inline-block"
            style={{ '--letter-index': letterIndex } as React.CSSProperties}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </span>
  );
}
