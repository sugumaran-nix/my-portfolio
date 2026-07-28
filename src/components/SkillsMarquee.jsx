import { useRef } from "react";

// MagicUI-style Marquee — two rows, top scrolls left, bottom right
// Pure CSS animation — no dependency, works in Astro client:visible

const skillRows = [
  [
    { name: "Python",        color: "#3776AB" },
    { name: "JavaScript",    color: "#F7DF1E" },
    { name: "TypeScript",    color: "#3178C6" },
    { name: "React.js",      color: "#61DAFB" },
    { name: "Next.js",       color: "#000000" },
    { name: "FastAPI",       color: "#009688" },
    { name: "Tailwind CSS",  color: "#38BDF8" },
    { name: "HTML5",         color: "#E34F26" },
    { name: "CSS3",          color: "#1572B6" },
    { name: "SQL",           color: "#4479A1" },
  ],
  [
    { name: "Scikit-learn",  color: "#F7931E" },
    { name: "Hugging Face",  color: "#FFD21F" },
    { name: "BERT",          color: "#8B5CF6" },
    { name: "NLP",           color: "#10B981" },
    { name: "Flask",         color: "#000000" },
    { name: "WebSockets",    color: "#4F46E5" },
    { name: "MongoDB",       color: "#47A248" },
    { name: "MySQL",         color: "#4479A1" },
    { name: "Git",           color: "#F05032" },
    { name: "Linux",         color: "#FCC624" },
    { name: "Jupyter",       color: "#F37626" },
    { name: "TF-IDF",        color: "#10B981" },
  ],
];

function Pill({ name, color }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-borderLight dark:border-borderDark bg-white/80 dark:bg-white/[0.04] text-ink dark:text-white/80 text-sm font-medium whitespace-nowrap mx-2 select-none shadow-sm"
      style={{ "--pill-color": color }}
    >
      {/* color dot */}
      <span
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ background: color, boxShadow: `0 0 6px ${color}55` }}
      />
      {name}
    </span>
  );
}

function MarqueeRow({ items, reverse = false, duration = 30 }) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
      <div
        className="flex"
        style={{
          animation: `marquee-scroll${reverse ? "-rev" : ""} ${duration}s linear infinite`,
          willChange: "transform",
        }}
      >
        {doubled.map((skill, i) => (
          <Pill key={`${skill.name}-${i}`} name={skill.name} color={skill.color} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <div className="flex flex-col gap-4 mt-10">
      <MarqueeRow items={skillRows[0]} duration={28} />
      <MarqueeRow items={skillRows[1]} reverse duration={22} />
    </div>
  );
}
