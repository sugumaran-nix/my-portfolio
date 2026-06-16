import type { ReactNode } from "react";

type Skill = {
  name: string;
  category: string;
  level: number; // 0-100
  color: string;
  icon: ReactNode;
};

const skills: Skill[] = [
  {
    name: "Python",
    category: "Language",
    level: 90,
    color: "#34D399",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2c-4 0-4 2-4 2v3h8M12 22c4 0 4-2 4-2v-3H8" />
        <path d="M8 7h8a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v0a4 4 0 0 1 4-4z" />
      </svg>
    ),
  },
  {
    name: "React",
    category: "Frontend",
    level: 80,
    color: "#4D7CFE",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Flask",
    category: "Backend",
    level: 85,
    color: "#F2B66D",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M10 2v6l-6 9a4 4 0 0 0 4 5h8a4 4 0 0 0 4-5l-6-9V2" />
        <path d="M8 16h8" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    category: "Database",
    level: 78,
    color: "#34D399",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2c3 4 5 7.5 5 11a5 5 0 0 1-10 0c0-3.5 2-7 5-11z" />
        <path d="M12 16v6" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border-light dark:border-border">
      <div className="mx-auto max-w-content px-6 py-16 sm:px-8 lg:py-24">
        <p className="eyebrow text-violet">My Skills</p>
        <h2 className="mt-2 font-display text-2xl font-bold text-ink-light dark:text-ink sm:text-3xl">
          Technologies I Work With
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-2xl border border-border-light bg-surface-light p-5 transition-colors hover:border-violet/40 dark:border-border dark:bg-surface sm:p-6"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${skill.color}1A`, color: skill.color }}
              >
                {skill.icon}
              </div>
              <p className="mt-4 font-display text-base font-semibold text-ink-light dark:text-ink">
                {skill.name}
              </p>
              <p className="text-xs text-muted-light dark:text-muted">{skill.category}</p>

              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-border-light dark:bg-border">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
