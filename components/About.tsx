const info = [
  {
    label: "Name",
    value: "Sugumaran S",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "sugumarankugan@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Coimbatore, Tamil Nadu, India",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Availability",
    value: "Open to internships & full-time roles",
    icon: <span className="block h-2.5 w-2.5 rounded-full bg-mint" />,
  },
];

export default function About() {
  return (
    <section id="about" className="border-b border-border-light dark:border-border">
      <div className="mx-auto max-w-content px-6 py-16 sm:px-8 lg:py-24">
        <p className="eyebrow text-violet">About Me</p>
        <h2 className="mt-2 font-display text-2xl font-bold text-ink-light dark:text-ink sm:text-3xl">
          Who I Am
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <p className="text-base leading-relaxed text-muted-light dark:text-muted sm:text-lg">
              I&apos;m Sugumaran, a final-year MCA student and full-stack
              developer specializing in Python, React, SQL and MongoDB. I
              love building functional, end-to-end applications that solve
              real problems — from AI-powered fraud detection tools to
              adaptive learning assistants.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-light dark:text-muted sm:text-lg">
              I learn by building: every project in my portfolio ships with
              a working API, a real database, and measured performance, not
              just a polished UI on top of a tutorial.
            </p>

            <a
              href="mailto:sugumarankugan@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Download CV
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" />
              </svg>
            </a>
          </div>

          <div className="rounded-2xl border border-border-light bg-surface-light p-6 dark:border-border dark:bg-surface sm:p-7">
            <dl className="space-y-5">
              {info.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet/10 text-violet">
                    {item.icon}
                  </span>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-muted-light dark:text-muted">
                      {item.label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-ink-light dark:text-ink sm:text-base">
                      {item.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
