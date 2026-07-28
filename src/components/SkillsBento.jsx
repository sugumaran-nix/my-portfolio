import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    icon: "⌨️",
    span: "md:col-span-2",
    skills: ["Python (Primary)", "JavaScript (ES6+)", "TypeScript", "SQL"],
    accent: "#3776AB",
  },
  {
    title: "Frontend",
    icon: "🖥️",
    span: "md:col-span-1",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    accent: "#61DAFB",
  },
  {
    title: "Backend",
    icon: "⚙️",
    span: "md:col-span-1",
    skills: ["FastAPI", "Flask", "WebSockets", "REST API Design"],
    accent: "#009688",
  },
  {
    title: "Databases",
    icon: "🗄️",
    span: "md:col-span-1",
    skills: ["MySQL", "SQLite", "MongoDB"],
    accent: "#47A248",
  },
  {
    title: "Tools & OS",
    icon: "🛠️",
    span: "md:col-span-1",
    skills: ["Git", "GitHub", "VS Code", "Linux", "Jupyter Notebook"],
    accent: "#F05032",
  },
  {
    title: "AI / ML & NLP",
    icon: "🤖",
    span: "md:col-span-3",
    skills: [
      "Scikit-learn",
      "TF-IDF",
      "NLP",
      "Hugging Face",
      "BERT",
      "Prompt Engineering",
      "Explainable AI",
    ],
    accent: "#10b981",
    featured: true,
  },
];

function BentoCard({ title, icon, skills, accent, featured = false, span = "", delay = 0 }) {
  return (
    <motion.div
      className={`bento-card group relative rounded-2xl p-5 sm:p-6 flex flex-col gap-4 overflow-hidden border border-borderLight dark:border-borderDark bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm ${span} ${featured ? "bento-featured" : ""}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.18, delay: 0 } }}
      style={{ "--card-accent": accent }}
    >
      {/* Subtle accent glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${accent}12 0%, transparent 70%)`,
        }}
      />

      {/* Accent bar top */}
      <div
        className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: accent }}
      />

      <div className="relative z-10 flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-center gap-2.5">
          <span className="text-xl leading-none">{icon}</span>
          <h3 className={`font-semibold text-ink dark:text-white ${featured ? "text-[15px]" : "text-[14px]"}`}>
            {title}
          </h3>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-[12px] sm:text-[13px] px-2.5 py-1 rounded-lg font-medium text-inkMuted dark:text-white/65 bg-black/[.04] dark:bg-white/[.06] border border-black/[.06] dark:border-white/[.08] transition-colors group-hover:border-black/10 dark:group-hover:border-white/12"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsBento() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
      {categories.map((cat, i) => (
        <BentoCard
          key={cat.title}
          {...cat}
          delay={i * 0.06}
        />
      ))}
    </div>
  );
}
