import { motion } from 'framer-motion';

/**
 * Single skills category row/card. Used inside the Skills section grid.
 * Mount the parent grid with client:visible.
 */
export default function SkillCard({ category, skills, delay = 0 }) {
  return (
    <motion.div
      className="bg-bg2 border border-border rounded-[14px] px-6 py-5"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={{ borderColor: 'rgba(255,255,255,0.18)' }}
    >
      <p className="font-mono text-[10px] text-textDim uppercase tracking-widest mb-3">{category}</p>
      <p className="text-[13px] text-textMuted leading-loose">{skills}</p>
    </motion.div>
  );
}
