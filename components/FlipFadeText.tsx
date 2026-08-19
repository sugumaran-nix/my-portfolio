'use client';

import { useEffect, useRef, useState } from 'react';

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
};

export function FlipFadeText({ words = defaultWords, interval = 3000, className = '' }: FlipFadeTextProps) {
  const safeWords = words.length > 0 ? words : defaultWords;
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<number | null>(null);
  const finishRef = useRef<number | null>(null);
  const currentWord = safeWords[index % safeWords.length];
  const nextWord = nextIndex === null ? '' : safeWords[nextIndex];

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener('change', updateMotion);
    return () => media.removeEventListener('change', updateMotion);
  }, []);

  useEffect(() => {
    if (reducedMotion || safeWords.length < 2) return;

    timerRef.current = window.setInterval(() => {
      setNextIndex((index + 1) % safeWords.length);
      finishRef.current = window.setTimeout(() => {
        setIndex((value) => (value + 1) % safeWords.length);
        setNextIndex(null);
      }, 460);
    }, interval);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      if (finishRef.current) window.clearTimeout(finishRef.current);
    };
  }, [index, interval, reducedMotion, safeWords.length]);

  useEffect(() => {
    if (reducedMotion) {
      setIndex(0);
      setNextIndex(null);
    }
  }, [reducedMotion]);

  return (
    <span role="status" aria-live="polite" aria-atomic="true" className={`flip-fade-text inline-grid items-center justify-center ${className}`}>
      <span className="sr-only">{currentWord}</span>
      <span aria-hidden="true" className="flip-stage">
        <span className={`flip-word flip-word-current ${nextIndex !== null ? 'flip-word--exit' : ''}`}>{currentWord}</span>
        {nextIndex !== null && <span className="flip-word flip-word-next" key={`${nextIndex}-${nextWord}`}>{nextWord}</span>}
      </span>
    </span>
  );
}
