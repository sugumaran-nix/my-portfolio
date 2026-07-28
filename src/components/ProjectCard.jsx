import { useState } from "react";
import MagicCard from "./MagicCard.jsx";
import { ExternalLink, GitBranch } from "lucide-react";

const projectMeta = {
  "ML-Powered Fake Job Detector": {
    img: "/images/project-fake-job.jpg",
    alt: "ML Fake Job Detector project screenshot",
  },
  "AI-Generated Text Detector": {
    img: "/images/project-ai-detector.jpg",
    alt: "AI Text Detector project screenshot",
  },
  "Sketchline — Real-Time Collaborative Whiteboard": {
    img: "/images/project-sketchline.jpg",
    alt: "Sketchline collaborative whiteboard screenshot",
  },
  "ProjectScope — Eisenhower Matrix Task Manager": {
    img: "/images/project-scope.jpg",
    alt: "ProjectScope task manager screenshot",
  },
};

function ProjectImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="w-full aspect-[16/8] flex-shrink-0 relative overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-t-2xl">
      {!loaded && <div className="absolute inset-0 img-skeleton" />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        loading="lazy"
      />
    </div>
  );
}

export default function ProjectCard({ title, desc, tags, href, demoHref, delay = 0 }) {
  const meta = projectMeta[title] ?? {
    img: "/images/project-fake-job.jpg",
    alt: "Project screenshot",
  };

  return (
    <MagicCard delay={delay} className="glass-card flex flex-col h-full">
      <ProjectImage src={meta.img} alt={meta.alt} />

      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-[15px] font-semibold leading-snug text-ink dark:text-white">
          {title}
        </h3>
        <p className="text-[14px] text-inkMuted dark:text-white/55 leading-[1.75] line-clamp-3">
          {desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-full bg-black/[.04] dark:bg-white/[.07] text-ink dark:text-white/80 border border-borderLight dark:border-borderDark"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-1">
          {demoHref && (
            <a
              href={demoHref}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accentGreen hover:opacity-75 transition-opacity"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View Demo
            </a>
          )}
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-xs text-inkMuted dark:text-white/50 hover:text-ink dark:hover:text-white transition-colors"
            >
              <GitBranch className="w-3.5 h-3.5" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </MagicCard>
  );
}
