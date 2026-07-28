import { useState } from "react";
import { motion } from "framer-motion";
import MagicCard from "./MagicCard.jsx";
import { ExternalLink, ArrowUpRight, GitBranch } from "lucide-react";

const projectMeta = {
  "ML-Powered Fake Job Detector": {
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    alt: "Machine learning code and data analysis",
    stats: ["87.57% F1", "Sub-800ms", "17,880 samples"],
  },
  "AI-Generated Text Detector": {
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    alt: "AI and natural language processing",
    stats: ["Perplexity scoring", "FastAPI", "Sentence XAI"],
  },
  "Sketchline — Real-Time Collaborative Whiteboard": {
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    alt: "Real-time collaboration and whiteboard",
    stats: ["Sub-100ms sync", "WS protocol", "Board replay"],
  },
  "ProjectScope — Eisenhower Matrix Task Manager": {
    img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    alt: "Task management and productivity",
    stats: ["Drag & drop", "dnd-kit", "Zero backend"],
  },
};

function ProjectImage({ src, alt, stats, demoHref }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="project-img-wrap w-full aspect-[16/8] flex-shrink-0 relative overflow-hidden bg-neutral-100 dark:bg-neutral-900">
      {/* shimmer skeleton shown until image loads */}
      {!loaded && <div className="absolute inset-0 img-skeleton" />}

      {demoHref ? (
        <a href={demoHref} target="_blank" rel="noopener" className="block w-full h-full relative">
          <img
            src={src}
            alt={alt}
            onLoad={() => setLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
            loading="lazy"
          />
          {/* Stats pill row */}
          <div className="absolute bottom-0 inset-x-0 px-3 py-2 flex flex-wrap gap-1.5 bg-gradient-to-t from-black/60 to-transparent">
            {stats.map((s) => (
              <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/15 text-white/90 border border-white/15 backdrop-blur-sm">{s}</span>
            ))}
          </div>
          <div className="project-img-overlay">
            <ArrowUpRight className="w-4 h-4" />
            Open Live Demo
          </div>
        </a>
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
        />
      )}
    </div>
  );
}

export default function ProjectCard({ title, desc, tags, href, demoHref, comingSoon = false, delay = 0 }) {
  const meta = projectMeta[title] || {
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    alt: "Project screenshot",
    stats: [],
  };

  return (
    <MagicCard delay={delay} className="glass-card flex flex-col h-full">
      <ProjectImage src={meta.img} alt={meta.alt} stats={meta.stats} demoHref={demoHref} />

      <div className="p-5 flex flex-col gap-2.5 flex-1">
        <h3 className="text-[15px] font-semibold leading-snug">{title}</h3>
        <p className="text-[13px] text-inkMuted dark:text-white/55 leading-relaxed line-clamp-3">{desc}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {tags.map((tag) => (
            <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-ink dark:text-white/80">
              {tag}
            </span>
          ))}
        </div>

        {comingSoon ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 w-fit mt-1">
            🚧 Coming Soon
          </span>
        ) : (
          <div className="flex items-center gap-4 mt-2">
            {demoHref && (
              <a href={demoHref} target="_blank" rel="noopener"
                className="line-hover inline-flex items-center gap-1.5 text-xs font-semibold text-accent dark:text-accentDark hover:opacity-80 transition-opacity">
                <ExternalLink className="w-3.5 h-3.5" /> View Demo
              </a>
            )}
            {href && (
              <a href={href} target="_blank" rel="noopener"
                className="line-hover inline-flex items-center gap-1.5 text-xs text-inkMuted dark:text-white/55 hover:text-ink dark:hover:text-white transition-colors">
                <GitBranch className="w-3.5 h-3.5" /> GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </MagicCard>
  );
}
