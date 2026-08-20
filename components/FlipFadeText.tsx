'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';

const defaultWords = [
  'AI/ML Engineer',
  'Full-Stack Engineer',
  'Software Engineer',
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

type LetterProps = {
  letterDuration: number;
};

const letterVariants = {
  initial: {
    opacity: 0,
    y: 12,
    rotateX: -55,
  },
  animate: ({ letterDuration }: LetterProps) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: letterDuration,
      ease: [0.2, 0.65, 0.3, 0.9] as const,
    },
  }),
  exit: ({ letterDuration }: LetterProps) => ({
    opacity: 0,
    y: -12,
    rotateX: 55,
    transition: {
      duration: Math.min(letterDuration * 0.67, 0.24),
      ease: [0.4, 0, 1, 1] as const,
    },
  }),
};

function Letter({ char, letterDuration }: { char: string; letterDuration: number }) {
  return (
    <motion.span
      aria-hidden="true"
      className="flip-letter inline-block"
      custom={{ letterDuration }}
      variants={letterVariants}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {char === ' ' ? '\u00a0' : char}
    </motion.span>
  );
}

function Word({
  text,
  letterDuration,
  staggerDelay,
  exitStaggerDelay,
  textClassName,
}: {
  text: string;
  letterDuration: number;
  staggerDelay: number;
  exitStaggerDelay: number;
  textClassName?: string;
}) {
  const letters = useMemo(() => [...text], [text]);

  return (
    <motion.span
      aria-hidden="true"
      className={`flip-word ${textClassName ?? ''}`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 1 },
        animate: { opacity: 1, transition: { staggerChildren: staggerDelay } },
        exit: { opacity: 1, transition: { staggerChildren: exitStaggerDelay } },
      }}
    >
      {letters.map((char, letterIndex) => (
        <Letter key={`${text}-${char}-${letterIndex}`} char={char} letterDuration={letterDuration} />
      ))}
    </motion.span>
  );
}

export function FlipFadeText({
  words = defaultWords,
  interval = 3000,
  className = '',
  textClassName = '',
  letterDuration = 0.34,
  staggerDelay = 0.035,
  exitStaggerDelay = 0.02,
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
            <Word
              key={currentWord}
              text={currentWord}
              letterDuration={letterDuration}
              staggerDelay={staggerDelay}
              exitStaggerDelay={exitStaggerDelay}
              textClassName={textClassName}
            />
          </AnimatePresence>
        </span>
      )}
    </span>
  );
}

export default FlipFadeText;
