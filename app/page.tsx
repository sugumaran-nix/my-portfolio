import { ContactForm } from '@/components/ContactForm';
import { CopyEmail } from '@/components/CopyEmail';
import { FlipFadeText } from '@/components/FlipFadeText';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ProjectCard } from '@/components/ProjectCard';
import { Reveal } from '@/components/Reveal';
import { ScrollToTop } from '@/components/ScrollToTop';
import { SplineHeroBackground } from '@/components/SplineHeroBackground';
import { SkillsBento } from '@/components/SkillsBento';
import { projects, socials } from '@/lib/content';

const githubPath = 'M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z';

function SocialLinks({ bordered = false }: { bordered?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-6">
      {socials.map((social) => (
        <a key={social.label} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined} aria-label={social.label} className={bordered ? 'social-link flex-shrink-0' : 'text-inkMuted transition-colors duration-150 hover:text-ink dark:text-white/60 dark:hover:text-white'}>
          <svg viewBox="0 0 24 24" className={bordered ? 'h-[15px] w-[15px] fill-current' : 'h-5 w-5 fill-current'} aria-hidden="true"><path d={social.path} /></svg>
        </a>
      ))}
    </div>
  );
}

function IconBox({ children }: { children: React.ReactNode }) {
  return <div className="icon-box flex-shrink-0">{children}</div>;
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <main>
        <section id="home" className="hero-section relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pb-6 pt-16 md:py-0">
          <SplineHeroBackground />

          <div className="relative z-10 mx-auto flex w-full max-w-[760px] flex-col items-center px-4 text-center">
            <p className="hero-kicker">AI/ML &amp; FULL-STACK ENGINEER</p>
            <h1 className="hero-name-display mb-4 text-[42px] leading-[1.1] tracking-tight text-ink sm:text-[56px] md:text-[68px] dark:text-white">Hi, I&apos;m <em>Sugumaran</em></h1>
            <div className="mb-6 flex h-9 items-center justify-center text-[18px] font-semibold text-ink sm:text-[21px] md:text-[23px] dark:text-white">
              <FlipFadeText className="text-ink dark:text-white" />
            </div>
            <p className="mb-10 max-w-[540px] text-[16px] leading-[1.8] text-inkMuted dark:text-white/55">I build AI products, browser ML tools, and resilient full-stack systems — from model to frontend.</p>

            <div className="mb-10 flex w-full max-w-sm flex-row items-center justify-center gap-2 sm:w-auto sm:max-w-none sm:gap-4">
              <a href="/sugumaran-s-resume.pdf" download className="btn-filled-pill flex-1 justify-center sm:flex-initial">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className="sm:hidden">Resume</span><span className="hidden sm:inline">Download Resume</span>
              </a>
              <a href="#contact" className="btn-outline-pill flex-1 justify-center sm:flex-initial">Get In Touch</a>
            </div>

            <SocialLinks />
            <a href="#about" className="hero-scroll-cue mt-12 flex select-none flex-col items-center gap-1.5 text-inkMuted/70 dark:text-white/60" aria-label="Scroll to About section">
              <span className="text-[9px] font-bold uppercase tracking-[.2em]">scroll</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="hero-scroll-arrow h-4 w-4" aria-hidden="true"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </section>

        <section id="about" className="section-divider px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1100px]">
            <Reveal className="mb-2">
              <p className="section-eyebrow">✦ Who I Am</p>
              <h2 className="section-heading text-2xl font-bold tracking-tight sm:text-3xl md:text-[48px]">About <em>Me</em></h2>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 items-start gap-10 md:grid-cols-[3fr_2fr] md:gap-14">
              <Reveal className="order-first md:order-last" delay={0.08}>
                <div className="card-surface flex flex-col items-center p-6 text-center">
                  <div className="mb-4 h-36 w-36 overflow-hidden rounded-full ring-2 ring-borderLight shadow-md dark:ring-borderDark"><img src="/profile.webp" alt="Sugumaran S." width="144" height="144" className="h-full w-full object-cover" /></div>
                  <h3 className="shimmer-text mb-0.5 text-lg font-semibold">Sugumaran S.</h3>
                  <p className="mb-0.5 font-display text-sm italic text-inkMuted dark:text-white/55">AI/ML &amp; Full-Stack Engineer</p>
                  <p className="mb-5 text-xs text-inkMuted dark:text-white/60">Coimbatore, Tamil Nadu · India</p>
                  <div className="flex flex-wrap justify-center gap-2"><span className="status-chip text-[11px] font-medium"><span className="avail-dot h-1.5 w-1.5 flex-shrink-0 rounded-full" />Available Immediately</span><span className="status-chip text-[11px] font-medium">Remote · Open to Relocation</span></div>
                </div>
              </Reveal>

              <Reveal className="order-last flex flex-col gap-5 text-[16px] leading-[1.8] text-inkMuted md:order-first dark:text-white/60" delay={0.04}>
                <p>MCA &apos;26 from Anna University, Coimbatore. I&apos;ve been building across AI/ML, full-stack, and real-time systems throughout my degree — training models, wiring APIs, shipping frontends.</p>
                <p>My strongest work sits where applied ML meets dependable product engineering: Python services, browser inference, real-time APIs, and polished Next.js interfaces.</p>
                <div className="mt-1 flex flex-col gap-4 border-t border-borderLight pt-5 dark:border-borderDark">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-ink dark:text-white">Education</p>
                  <div><p className="text-[15px] font-semibold text-ink dark:text-white">MCA — Anna University</p><p className="mt-0.5 text-[13px] font-medium text-inkMuted dark:text-white/60">Sri Venkateshwara College · 2024–2026 · 80%</p></div>
                  <div><p className="text-[15px] font-semibold text-ink dark:text-white">BCA — Bharathiar University</p><p className="mt-0.5 text-[13px] font-medium text-inkMuted dark:text-white/60">Govt Arts &amp; Science College, Gudalur · 2021–2024 · 83.71%</p></div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="skills" className="section-divider section-muted px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1100px]">
            <Reveal className="mb-2">
              <p className="section-eyebrow">✦ What I Work With</p>
              <h2 className="section-heading text-2xl font-bold tracking-tight sm:text-3xl md:text-[48px]">Skills &amp; <em>Technologies</em></h2>
              <p className="section-lede">A practical stack for taking intelligent products from experiment to reliable interface.</p>
            </Reveal>
            <SkillsBento />
          </div>
        </section>

        <section id="projects" className="section-divider px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1100px]">
            <Reveal className="mb-2">
              <p className="section-eyebrow">✦ Things I&apos;ve Shipped</p>
              <h2 className="section-heading text-2xl font-bold tracking-tight sm:text-3xl md:text-[48px]">Featured <em>Projects</em></h2>
              <p className="section-lede">A selection of shipped work across applied ML, browser inference, real-time collaboration, and product systems.</p>
            </Reveal>
            <div className="project-grid mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {projects.map((project, index) => <Reveal key={project.title} delay={index * 0.04}><ProjectCard project={project} priority={index === 0} /></Reveal>)}
            </div>
            <div className="mt-12 flex justify-center"><a href="https://github.com/sugumaran-nix" target="_blank" rel="noopener noreferrer" className="btn-ghost-pill project-all-link"><svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 flex-shrink-0" aria-hidden="true"><path d={githubPath} /></svg>View All Projects on GitHub</a></div>
          </div>
        </section>

        <section id="contact" className="section-divider section-muted px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1100px]">
            <Reveal className="mb-2">
              <p className="section-eyebrow">✦ Let&apos;s Connect</p>
              <h2 className="section-heading text-2xl font-bold tracking-tight sm:text-3xl md:text-[48px]">Say hello — <em>let&apos;s talk.</em></h2>
              <p className="mt-3 w-full max-w-[760px] text-[16px] leading-[1.8] text-inkMuted dark:text-white/65">Open to AI/ML and full-stack roles, internships, and thoughtful collaborations.</p>
            </Reveal>

            <div className="contact-grid mt-12 grid grid-cols-1 items-stretch gap-8 md:grid-cols-[2fr_3fr] md:gap-12">
              <Reveal className="contact-info-column flex h-full flex-col justify-between gap-8 pb-6">
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4"><IconBox><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[18px] w-[18px]" aria-hidden="true"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 002-2zm0 4l-8 5-8-5" strokeLinecap="round" strokeLinejoin="round" /></svg></IconBox><div><p className="mb-0.5 text-[14px] font-semibold text-ink dark:text-white">Email</p><a href="mailto:sugumarankugan@gmail.com" className="line-hover contact-detail-link font-mono text-[14px] text-inkMuted dark:text-white/55">sugumarankugan@gmail.com</a></div></div>
                  <div className="flex items-start gap-4"><IconBox><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[18px] w-[18px]" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="10" r="3" /></svg></IconBox><div><p className="mb-0.5 text-[14px] font-semibold text-ink dark:text-white">Location</p><p className="text-[14px] text-inkMuted dark:text-white/55">Coimbatore, Tamil Nadu · Open to relocation</p></div></div>
                </div>
                <CopyEmail />
                <div className="flex flex-col gap-3 pt-1">{socials.map((social) => <a key={social.label} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="line-hover contact-social-link inline-flex w-fit items-center gap-3 text-[14px] text-inkMuted transition-colors hover:text-ink dark:text-white/55 dark:hover:text-white"><span className="social-link flex-shrink-0"><svg viewBox="0 0 24 24" className="h-[15px] w-[15px] fill-current" aria-hidden="true"><path d={social.path} /></svg></span>{social.label}</a>)}</div>
                <a href="/sugumaran-s-resume.pdf" download className="btn-filled-pill contact-download-action w-fit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" strokeLinecap="round" strokeLinejoin="round" /></svg>Download Resume</a>
              </Reveal>

              <Reveal className="card-surface flex h-full flex-col p-6" delay={0.08}><ContactForm /></Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
