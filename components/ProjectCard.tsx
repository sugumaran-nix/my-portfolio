import type { Project } from '@/lib/content';
import { ExternalDemoLink } from './ExternalDemoLink';
import { ProjectImage } from './ProjectImage';

const githubPath = 'M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z';

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className="project-card card-surface flex h-full flex-col">
      <ProjectImage title={project.title} lightSrc={project.imgLight} darkSrc={project.imgDark} priority={priority} />
      <div className="flex flex-1 flex-col gap-2.5 px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
        <h3 className="text-[15px] font-semibold leading-snug text-ink dark:text-white">{project.title}</h3>
        <p className="line-clamp-2 text-[14px] leading-[1.6] text-inkMuted dark:text-white/55">{project.desc}</p>
        <p className="project-outcome">{project.outcome}</p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => <span className="card-chip" key={tag}>{tag}</span>)}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <ExternalDemoLink href={project.demoHref} />
          <a href={project.href} target="_blank" rel="noopener noreferrer" className="btn-ghost-pill project-action" aria-label={`Open ${project.title} GitHub repository`} title="GitHub repository">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4"><path d={githubPath} /></svg>
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
