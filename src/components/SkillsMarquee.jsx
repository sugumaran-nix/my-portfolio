import { useRef } from "react";

// MagicUI-style Marquee — two rows, top scrolls left, bottom right
// Pure CSS animation — no dependency, works in Astro client:visible
// All dot colors are warm graphite monochrome shades only

const skillRows = [
  [
    { name: "Python",        color: "#4A4A47" },
    { name: "JavaScript",    color: "#6B6860" },
    { name: "TypeScript",    color: "#4A4A47" },
    { name: "React.js",      color: "#6B6860" },
    { name: "Next.js",       color: "#0D0D0B" },
    { name: "FastAPI",       color: "#4A4A47" },
    { name: "Tailwind CSS",  color: "#6B6860" },
    { name: "HTML5",         color: "#2E2D2B" },
    { name: "CSS3",          color: "#4A4A47" },
    { name: "SQL",           color: "#6B6860" },
  ],
  [
    { name: "Scikit-learn",  color: "#6B6860" },
    { name: "Hugging Face",  color: "#4A4A47" },
    { name: "BERT",          color: "#2E2D2B" },
    { name: "NLP",           color: "#6B6860" },
    { name: "Flask",         color: "#0D0D0B" },
    { name: "WebSockets",    color: "#4A4A47" },
    { name: "MongoDB",       color: "#6B6860" },
    { name: "MySQL",         color: "#4A4A47" },
    { name: "Git",           color: "#2E2D2B" },
    { name: "Linux",         color: "#6B6860" },
    { name: "Jupyter",       color: "#4A4A47" },
    { name: "TF-IDF",        color: "#2E2D2B" },
  ],
];

function Pill({ name, color }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-borderLight dark:border-borderDark bg-white/80 dark:bg-white/[0.04] text-ink dark:text-white/80 text-sm font-medium whitespace-nowrap mx-2 select-none shadow-sm"
      style={{ "--pill-color": color }}
    >
      <span
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ background: color }}
      />
      {name}
    </span>
  );
}

function MarqueeRow({ items, reverse = false, duration = 30 }) {
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
