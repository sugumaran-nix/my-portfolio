type Project = {
  name: string;
  description: string;
  tags: string[];
  link: string;
  gradient: string;
};

const projects: Project[] = [
  {
    name: "VeritAI",
    description:
      "AI-powered fake news detector with a fine-tuned transformer backend and a live confidence-score dashboard.",
    tags: ["React", "Flask", "Hugging Face"],
    link: "https://github.com/sugumaran-nix/fake-news-detector",
    gradient: "from-violet/30 to-blue/20",
  },
  {
    name: "Job Posting Detector",
    description:
      "Explainable ML app comparing 4 classifiers to flag fraudulent job listings, with Docker deployment and tests.",
    tags: ["Flask", "scikit-learn", "Docker"],
    link: "https://github.com/sugumaran-nix/fake-job-posting-ml",
    gradient: "from-blue/25 to-mint/15",
  },
  {
    name: "AI Study Planner",
    description:
      "Adaptive study planner that turns a learning goal into a day-by-day schedule using the Claude API.",
    tags: ["Next.js", "FastAPI", "TypeScript"],
    link: "https://github.com/sugumaran-nix",
    gradient: "from-mint/20 to-violet/25",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-b border-border-light dark:border-border">
      <div className="mx-auto max-w-content px-6 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-violet">My Projects</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink-light dark:text-ink sm:text-3xl">
              Featured Projects
            </h2>
          </div>
          <a
            href="https://github.com/sugumaran-nix"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border-light px-5 py-2.5 text-sm font-semibold text-ink-light transition-colors hover:border-violet hover:text-violet dark:border-border dark:text-ink"
          >
            View All Projects
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-border-light bg-surface-light transition-colors hover:border-violet/40 dark:border-border dark:bg-surface"
            >
              <div
                className={`flex aspect-[16/10] items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <span className="font-display text-2xl font-bold text-ink-light/70 dark:text-ink/70">
                  {project.name}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-lg font-semibold text-ink-light dark:text-ink">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-light dark:text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border-light px-2.5 py-1 text-xs text-muted-light dark:border-border dark:text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
