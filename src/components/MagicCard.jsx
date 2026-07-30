import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

// Magic UI — Magic Card (https://magicui.design/docs/components/magic-card)
// Mouse-position spotlight gradient on hover
export default function MagicCard({ children, className = "", delay = 0 }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const onMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width)  * 100;
      const y = ((e.clientY - rect.top)  / rect.height) * 100;
      card.style.setProperty("--mouse-x", `${x}%`);
      card.style.setProperty("--mouse-y", `${y}%`);
    };
    card.addEventListener("mousemove", onMove);
    return () => card.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`magic-card-wrap ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.15, delay: 0 } }}
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "50%",
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      {/* Magic spotlight */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(74,74,71,0.07) 0%, transparent 55%)",
          pointerEvents: "none",
          zIndex: 0,
          transition: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 1, height: "100%" }}>
        {children}
      </div>
    </motion.div>
  );
}
