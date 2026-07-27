import { useEffect, useState, useMemo, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Vengeance UI - Flip Fade Text adapted for Astro/React
const Letter = memo(function Letter({ char, letterDuration }) {
  return (
    <motion.span
      style={{ transformStyle: "preserve-3d", display: "inline-block" }}
      variants={{
        initial: { rotateX: 90, y: 20, opacity: 0, filter: "blur(8px)" },
        animate: {
          rotateX: 0, y: 0, opacity: 1, filter: "blur(0px)",
          transition: { duration: letterDuration, ease: [0.2, 0.65, 0.3, 0.9] },
        },
        exit: {
          rotateX: -90, y: -20, opacity: 0, filter: "blur(8px)",
          transition: { duration: letterDuration * 0.67, ease: "easeIn" },
        },
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
});

const Word = memo(function Word({ text, staggerDelay, exitStaggerDelay, letterDuration, className }) {
  const letters = useMemo(() => text.split(""), [text]);
  return (
    <motion.span
      className={className}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 1 },
        animate: { opacity: 1, transition: { staggerChildren: staggerDelay } },
        exit: { opacity: 1, transition: { staggerChildren: exitStaggerDelay } },
      }}
    >
      {letters.map((char, i) => (
        <Letter key={`${char}-${i}`} char={char} letterDuration={letterDuration} />
      ))}
    </motion.span>
  );
});

export default function FlipFadeText({
  words = [],
  interval = 2800,
  className = "",
  letterDuration = 0.5,
  staggerDelay = 0.06,
  exitStaggerDelay = 0.04,
}) {
  const [index, setIndex] = useState(0);
  const updateIndex = useCallback(() => {
    setIndex((prev) => (prev + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    if (words.length <= 1) return;
    const timer = setInterval(updateIndex, interval);
    return () => clearInterval(timer);
  }, [updateIndex, interval, words.length]);

  const currentWord = useMemo(() => words[index], [words, index]);

  return (
    <span style={{ perspective: "800px", display: "inline-block" }}>
      <AnimatePresence mode="wait">
        <Word
          key={currentWord}
          text={currentWord}
          staggerDelay={staggerDelay}
          exitStaggerDelay={exitStaggerDelay}
          letterDuration={letterDuration}
          className={className}
        />
      </AnimatePresence>
    </span>
  );
}
