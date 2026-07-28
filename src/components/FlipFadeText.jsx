import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Whole-phrase flip — no per-letter stagger, instant and clean
export default function FlipFadeText({
  words = [],
  interval = 2800,
  className = "",
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval]);

  return (
    <span
      style={{
        display: "inline-block",
        perspective: "600px",
        verticalAlign: "bottom",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          className={className}
          style={{ display: "inline-block", transformOrigin: "50% 50%" }}
          initial={{ rotateX: 70, opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ rotateX: 0,  opacity: 1, y: 0,  filter: "blur(0px)" }}
          exit={{    rotateX: -60, opacity: 0, y: -10, filter: "blur(4px)" }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
