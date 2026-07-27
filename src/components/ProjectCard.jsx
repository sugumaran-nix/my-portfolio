import { motion } from "framer-motion";
import MagicCard from "./MagicCard.jsx";

// Lucide icons — https://lucide.dev (actually imported)
import { ExternalLink, ArrowUpRight, GitBranch } from "lucide-react";

const projectMeta = {
  "ML-Powered Fake Job Detector":                  { gradient: "from-slate-900 via-blue-950 to-slate-900",    icon: "🔍", stats: ["87.57% F1","Sub-800ms","17,880 samples"] },
  "AI-Generated Text Detector":                    { gradient: "from-zinc-900 via-purple-950 to-zinc-900",    icon: "🤖", stats: ["Perplexity scoring","FastAPI","Sentence XAI"] },
  "Sketchline — Real-Time Collaborative Whiteboard":{ gradient: "from-neutral-900 via-teal-950 to-neutral-900", icon: "✏️", stats: ["Sub-100ms sync","WS protocol","Board replay"] },
  "ProjectScope — Eisenhower Matrix Task Manager": { gradient: "from-stone-900 via-amber-950 to-stone-900",   icon: "📋", stats: ["Drag & drop","dnd-kit","Zero backend"] },
};

export default function ProjectCard({ title, desc, tags, href, demoHref, comingSoon = false, delay = 0 }) {
  const meta = projectMeta[title] || { gradient: "from-zinc-900 to-neutral-900", icon: "🚀", stats: [] };

  return (
    <MagicCard
      delay={delay}
      className="glass-card flex flex-col h-full"
    >
      {/* Banner */}
      <div className={`project-img-wrap w-full aspect-[16/8] bg-gradient-to-br ${meta.gradient} flex-shrink-0`}>
        {demoHref ? (
          <a href={demoHref} target="_blank" rel="noopener" className="block w-full h-full relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
              <span className="text-4xl">{meta.icon}</span>
              <div className="flex flex-wrap justify-center gap-1.5 px-4">
                {meta.stats.map((s) => (
                  <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/10">{s}</span>
                ))}
              </div>
            </div>
            <div className="project-img-overlay">
              <ArrowUpRight className="w-4 h-4" />
              Open Live Demo
            </div>
          </a>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl">{meta.icon}</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-2.5 flex-1">
        <h3 className="text-[15px] font-semibold leading-snug">{title}</h3>
        <p className="text-[13px] text-inkMuted dark:text-white/55 leading-relaxed line-clamp-3">{desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {tags.map((tag) => (
            <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-ink dark:text-white/80">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
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
