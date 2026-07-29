import { useEffect, useRef, useState } from "react";
import MagicCard from "./MagicCard.jsx";
import { ExternalLink, GitBranch } from "lucide-react";

const projectMeta = {
  "ML-Powered Fake Job Detector":                   { img: "/images/project-fake-job.png",    alt: "ML Fake Job Detector" },
  "AI-Generated Text Detector":                     { img: "/images/project-ai-detector.png", alt: "AI Text Detector" },
  "Sketchline — Real-Time Collaborative Whiteboard":{ img: "/images/project-sketchline.png",  alt: "Sketchline Whiteboard" },
  "ProjectScope — Eisenhower Matrix Task Manager":  { img: "/images/project-scope.png",       alt: "ProjectScope Task Manager" },
};

const FALLBACK = {
  "ML-Powered Fake Job Detector":                   "from-slate-700 to-slate-900",
  "AI-Generated Text Detector":                     "from-zinc-800 to-violet-900",
  "Sketchline — Real-Time Collaborative Whiteboard":"from-neutral-800 to-teal-900",
  "ProjectScope — Eisenhower Matrix Task Manager":  "from-stone-800 to-amber-900",
};

// Eagerly loads image via JS Image object — avoids lazy-load / Astro SSR mismatch
function ProjectImage({ src, alt, title }) {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const img = new Image();
    img.onload  = () => setStatus("loaded");
    img.onerror = () => setStatus("error");
    img.src = src;
  }, [src]);

  return (
    <div className="w-full aspect-[16/8] flex-shrink-0 relative overflow-hidden rounded-t-2xl">
      {status === "loading" && <div className="absolute inset-0 img-skeleton" />}

      {status === "error" && (
        <div className={`absolute inset-0 bg-gradient-to-br ${FALLBACK[title] ?? "from-zinc-800 to-zinc-900"} flex items-center justify-center`}>
          <span className="text-white/30 text-xs font-mono">screenshot coming soon</span>
        </div>
      )}

      {status === "loaded" && (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      )}
    </div>
  );
}

export default function ProjectCard({ title, desc, tags, href, demoHref, delay = 0 }) {
  const meta = projectMeta[title] ?? { img: "/images/project-fake-job.png", alt: "Project" };

  return (
    <MagicCard delay={delay} className="glass-card flex flex-col h-full">
      <ProjectImage src={meta.img} alt={meta.alt} title={title} />

      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-[15px] font-semibold leading-snug text-ink dark:text-white">{title}</h3>
        <p className="text-[14px] text-inkMuted dark:text-white/55 leading-[1.75] line-clamp-3">{desc}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {tags.map((tag) => (
            <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-black/[.04] dark:bg-white/[.07] text-ink dark:text-white/80 border border-borderLight dark:border-borderDark">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-1">
          {demoHref && (
            <a href={demoHref} target="_blank" rel="noopener"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink dark:text-white/80 hover:opacity-75 transition-opacity">
              <ExternalLink className="w-3.5 h-3.5" /> View Demo
            </a>
          )}
          {href && (
            <a href={href} target="_blank" rel="noopener"
              className="inline-flex items-center gap-1.5 text-xs text-inkMuted dark:text-white/50 hover:text-ink dark:hover:text-white transition-colors">
              <GitBranch className="w-3.5 h-3.5" /> GitHub
            </a>
          )}
        </div>
      </div>
    </MagicCard>
  );
}
