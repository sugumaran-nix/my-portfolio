import { motion } from 'framer-motion';

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 flex-shrink-0">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

/**
 * Animated project card. Hover lifts the border/background; entrance
 * fades up on scroll. Mount with client:visible in .astro pages.
 *
 * Props:
 *  num: string        e.g. "01 / PRODUCTION FRAMEWORKS"
 *  title: string
 *  desc: string
 *  metric: string
 *  stack: string[]
 *  href: string
 *  delay?: number      stagger delay for entrance animation
 */
export default function ProjectCard({ num, title, desc, metric, stack, href, delay = 0 }) {
  return (
    <motion.div
      className="bg-bg2 border border-border rounded-[14px] p-7 flex flex-col gap-3.5 h-full"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      whileHover={{ borderColor: 'rgba(255,255,255,0.18)', backgroundColor: '#161616' }}
    >
      <span className="font-mono text-[10px] text-textDim tracking-wider">{num}</span>
      <h3 className="text-base font-semibold leading-snug">{title}</h3>
      <p className="text-[13px] text-textMuted leading-7 flex-1">{desc}</p>
      <div className="text-xs text-white font-medium border-l-2 border-white/20 pl-3">{metric}</div>
      <div className="flex flex-wrap gap-1.5">
        {stack.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] px-2.5 py-1 bg-white/5 border border-border rounded-full text-textMuted tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        className="inline-flex items-center gap-1.5 font-mono text-[11px] text-textMuted tracking-wide transition-colors hover:text-white"
        href={href}
        target="_blank"
        rel="noopener"
      >
        <GitHubIcon />
        View Source on GitHub
      </a>
    </motion.div>
  );
}
