import { motion } from "framer-motion";
import { Code2, Monitor, Server, Database, Wrench, Brain } from "lucide-react";

const categories = [
  {
    title: "Languages",
    Icon: Code2,
    span: "sm:col-span-2 md:col-span-2",
    skills: ["Python (Primary)", "JavaScript (ES6+)", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    Icon: Monitor,
    span: "sm:col-span-1 md:col-span-1",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    Icon: Server,
    span: "sm:col-span-1 md:col-span-1",
    skills: ["FastAPI", "Flask", "WebSockets", "REST API Design"],
  },
  {
    title: "Databases",
    Icon: Database,
    span: "sm:col-span-1 md:col-span-1",
    skills: ["MySQL", "SQLite", "MongoDB"],
  },
  {
    title: "Tools & OS",
    Icon: Wrench,
    span: "sm:col-span-1 md:col-span-1",
    skills: ["Git", "GitHub", "VS Code", "Linux", "Jupyter Notebook"],
  },
  {
    title: "AI / ML & NLP",
    Icon: Brain,
    span: "sm:col-span-2 md:col-span-3",
    skills: ["Scikit-learn", "TF-IDF", "NLP", "Hugging Face", "BERT", "Prompt Engineering", "Explainable AI"],
    featured: true,
  },
];

function SkillCard({ title, Icon, skills, span = "", delay = 0, featured = false }) {
  return (
    <motion.div
      className={`glass-card flex flex-col gap-3.5 p-5 sm:p-6 cursor-default ${span}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2, transition: { duration: 0.2, delay: 0 } }}
    >
      <div className="flex items-center gap-2.5">
        <Icon
          size={featured ? 20 : 18}
          strokeWidth={1.8}
          className="text-ink dark:text-white flex-shrink-0"
        />
        <h3 className={`font-semibold text-ink dark:text-white ${featured ? "text-[15px]" : "text-[14px]"}`}>
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-[12px] sm:text-[13px] px-2.5 py-1 rounded-lg font-medium text-inkMuted dark:text-white/65 bg-black/[.04] dark:bg-white/[.07] border border-borderLight dark:border-borderDark"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsBento() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
      {categories.map((cat, i) => (
        <SkillCard key={cat.title} {...cat} delay={i * 0.07} />
      ))}
    </div>
  );
}
