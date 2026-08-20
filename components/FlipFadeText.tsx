'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

const defaultWords = [
  'AI/ML Engineer',
  'Full-Stack Engineer',
  'Real-Time Systems',
  'Software Engineer',
];

type FlipFadeTextProps = {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
};

const wordVariants = {
  initial: {
    opacity: 0,
    y: 8,
    rotateX: -18,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.24,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    rotateX: 18,
    transition: {
      duration: 0.16,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

export function FlipFadeText({
  words = defaultWords,
  interval = 3000,
  className = '',
  textClassName = '',
}: FlipFadeTextProps) {
  const safeWords = words.length > 0 ? words : defaultWords;
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const currentWord = safeWords[index % safeWords.length];

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener('change', updateMotion);
    return () => media.removeEventListener('change', updateMotion);
  }, []);

  useEffect(() => {
    if (index >= safeWords.length) setIndex(0);
  }, [index, safeWords.length]);

  useEffect(() => {
    if (reducedMotion || safeWords.length < 2) return;
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % safeWords.length), interval);
    return () => window.clearInterval(timer);
  }, [interval, reducedMotion, safeWords.length]);

  return (
    <span
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={`flip-fade-text inline-flex items-center justify-center ${className}`}
    >
      <span className="sr-only">{currentWord}</span>
      {reducedMotion ? (
        <span aria-hidden="true" className={`flip-word ${textClassName}`}>{currentWord}</span>
      ) : (
        <span className="flip-stage" aria-hidden="true">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={currentWord}
              className={`flip-word ${textClassName}`}
              variants={wordVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ transformPerspective: 700 }}
            >
              {currentWord}
            </motion.span>
          </AnimatePresence>
        </span>
      )}
    </span>
  );
}

export default FlipFadeText;
