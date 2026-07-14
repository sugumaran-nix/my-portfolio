import { motion } from 'framer-motion';

export default function ProjectCard({ image, title, badge, desc, tags, href, demoHref, delay = 0 }) {
  return (
    <motion.div
      className="group rounded-xl overflow-hidden border border-borderLight dark:border-borderDark bg-cardLight dark:bg-cardDark shadow-card dark:shadow-cardDark hover:shadow-cardHover dark:hover:shadow-cardDarkHover flex flex-col"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ y: -4, transition: { duration: 0.15, ease: 'easeOut', delay: 0 } }}
    >
      {/* Image */}
      <div className="w-full aspect-[16/7] overflow-hidden bg-black/5 dark:bg-white/5 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Badge overlay on image */}
        {badge && (
          <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white bg-gradient-to-r from-violet-600 to-fuchsia-500 shadow-md">
            {badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-[14px] font-semibold leading-snug">{title}</h3>
        <p className="text-xs text-inkMuted dark:text-white/55 leading-relaxed flex-1">{desc}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/8 text-inkMuted dark:text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-2">
          {demoHref && (
            <a
              href={demoHref}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500 dark:from-violet-400 dark:to-fuchsia-400 hover:opacity-75 transition-opacity"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#grad)" strokeWidth="2" className="w-3.5 h-3.5 flex-shrink-0 text-accent dark:text-accentDark">
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#D946EF" />
                  </linearGradient>
                </defs>
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Live Demo</span>
            </a>
          )}
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-xs text-inkMuted dark:text-white/45 hover:text-accent dark:hover:text-accentDark transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
