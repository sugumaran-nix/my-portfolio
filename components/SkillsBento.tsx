import { skillCategories } from '@/lib/content';
import { Reveal } from './Reveal';

export function SkillsBento() {
  return (
    <div className="skills-grid mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {skillCategories.map((category, index) => (
        <Reveal key={category.title} delay={index * 0.05} className={`card-surface flex cursor-default flex-col gap-3.5 p-5 sm:p-6 ${category.span}`}>
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={`flex-shrink-0 text-ink dark:text-white ${category.featured ? 'h-5 w-5' : 'h-[18px] w-[18px]'}`} aria-hidden="true">
              <path d={category.icon} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className={`font-semibold text-ink dark:text-white ${category.featured ? 'text-[15px]' : 'text-[14px]'}`}>{category.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => <span className="card-chip" key={skill}>{skill}</span>)}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
