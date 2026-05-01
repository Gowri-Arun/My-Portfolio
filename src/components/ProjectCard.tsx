import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import type { Project } from '../data/portfolio';

type ProjectCardProps = {
  project: Project;
  onViewDetails: (project: Project) => void;
  compact?: boolean;
};

export function ProjectCard({ project, onViewDetails, compact = false }: ProjectCardProps) {
  const technologies = project.techStack.slice(0, 3);
  const highlight = project.metrics[0];
  const accentClass = compact ? '' : `project-card--${project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <article className={compact ? 'research-card' : `project-card ${accentClass}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          {compact && <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">{project.type}</p>}
          <h3 className="mt-3 text-xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-2xl">{project.name}</h3>
        </div>
        <button className="icon-button" type="button" onClick={() => onViewDetails(project)} aria-label={`View details for ${project.name}`}>
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{project.subtitle}</p>
      {highlight && <p className="metric-callout">{highlight}</p>}
      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((tech) => <span className="tech-pill" key={tech}>{tech}</span>)}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
        <button className="text-link" type="button" onClick={() => onViewDetails(project)}>View details <ArrowUpRight className="h-3.5 w-3.5" /></button>
        {project.demoUrl && <a className="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo <ExternalLink className="h-3.5 w-3.5" /></a>}
        {project.sourceUrl && <a className="text-link" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">GitHub <Github className="h-3.5 w-3.5" /></a>}
      </div>
    </article>
  );
}
