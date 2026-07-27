import { motion } from 'framer-motion';

/**
 * Wraps any static content and fades/slides it up into view once it
 * scrolls into the viewport. Replaces the old IntersectionObserver script.
 * Mount with client:visible so its JS only loads once it's near the viewport.
 */
export default function RevealOnScroll({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
