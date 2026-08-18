import { useEffect, useRef, useState } from "react";
import MagicCard from "./MagicCard.jsx";
import { ExternalLink, GitBranch } from "lucide-react";

// Watches for Tailwind's class-based dark mode on <html>
function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
}

function ProjectImage({ imgLight, imgDark, alt }) {
  const isDark = useDarkMode();
  const src = isDark ? imgDark : imgLight;
  const [status, setStatus] = useState("loading");
  const prevSrc = useRef(null);

  useEffect(() => {
    if (prevSrc.current === src) return;
    prevSrc.current = src;
    setStatus("loading");

    const img = new Image();
    img.onload  = () => setStatus("loaded");
    img.onerror = () => setStatus("error");
    img.src = src;
  }, [src]);

  return (
    <div className="w-full aspect-[16/8] flex-shrink-0 relative overflow-hidden rounded-t-2xl group">
      {status === "loading" && <div className="absolute inset-0 img-skeleton" />}

      {status === "error" && (
        <div className="absolute inset-0 bg-gradient-to-br from-stone-700 to-stone-900 flex items-center justify-center">
          <span className="text-white/30 text-xs font-mono">screenshot coming soon</span>
        </div>
      )}

      {status === "loaded" && (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      )}
    </div>
  );
}

export default function ProjectCard({ title, desc, tags, href, demoHref, imgLight, imgDark, delay = 0 }) {
  return (
    <MagicCard delay={delay} className="glass-card flex flex-col h-full">
      <ProjectImage imgLight={imgLight} imgDark={imgDark} alt={title} />

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

        <div className="flex items-center gap-2 pt-1 flex-wrap">
          {demoHref && (
            <a href={demoHref} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full border border-ink/20 dark:border-white/20 text-ink dark:text-white hover:bg-ink hover:text-white dark:hover:bg-white dark:hover:text-ink transition-all">
              <ExternalLink className="w-3 h-3" /> View Live
            </a>
          )}
          {href && (
            <a href={href} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-full border border-black/[.07] dark:border-white/[.07] text-inkMuted dark:text-white/50 hover:text-ink dark:hover:text-white hover:border-ink/20 dark:hover:border-white/20 transition-all">
              <GitBranch className="w-3 h-3" /> GitHub
            </a>
          )}
        </div>
      </div>
    </MagicCard>
  );
}
