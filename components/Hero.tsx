import AvatarCard from "./AvatarCard";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <section id="top" className="bg-grid relative overflow-hidden border-b border-border-light dark:border-border">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div className="animate-fade-up">
          <span className="eyebrow inline-block rounded-full border border-violet/30 bg-violet/10 px-4 py-1.5 text-violet">
            Full Stack Developer
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.08] text-ink-light dark:text-ink sm:text-5xl">
            Sugumaran{" "}
            <span className="bg-gradient-to-r from-violet to-blue bg-clip-text text-transparent">
              S
            </span>
          </h1>
          <p className="mt-2 font-display text-xl font-semibold text-muted-light dark:text-muted sm:text-2xl">
            Full Stack Developer
          </p>

          <p className="mt-5 max-w-lg text-balance text-base leading-relaxed text-muted-light dark:text-muted sm:text-lg">
            I build modern, responsive and scalable web applications with
            Python, React and MongoDB — and bring ideas to life on the web.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet/30"
            >
              View My Work
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border-light px-6 py-3 text-sm font-semibold text-ink-light transition-colors hover:border-violet hover:text-violet dark:border-border dark:text-ink"
            >
              Contact Me
            </a>
          </div>

          <SocialIcons className="mt-8" />
        </div>

        <AvatarCard />
      </div>
    </section>
  );
}
