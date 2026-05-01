import { ExternalLink, Github, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { Project } from '../data/portfolio';

type ProjectDetailsDialogProps = { project: Project | null; onClose: () => void };

export function ProjectDetailsDialog({ project, onClose }: ProjectDetailsDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;
    previouslyFocused.current = document.activeElement as HTMLElement;
    dialogRef.current?.querySelector<HTMLElement>('button, a[href]')?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const elements = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button, a[href]'));
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => { document.removeEventListener('keydown', handleKeyDown); previouslyFocused.current?.focus(); };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" className="project-dialog">
        <div className="flex items-start justify-between gap-5 border-b border-zinc-200 pb-5 dark:border-white/10">
          <div><p className="eyebrow">Project detail</p><h2 id="project-dialog-title" className="mt-2 text-2xl font-black tracking-tight text-zinc-950 dark:text-white sm:text-3xl">{project.name}</h2></div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close project details"><X className="h-5 w-5" /></button>
        </div>
        <div className="dialog-content">
          <section><h3>Problem & system</h3><p>{project.description}</p></section>
          <section><h3>My contribution</h3><p>{project.contribution}</p></section>
          <section><h3>Technical architecture</h3><p>The implementation uses {project.techStack.join(', ')}.</p></section>
          <section><h3>Results & evaluation context</h3>{project.metrics.length ? <ul>{project.metrics.map((metric) => <li key={metric}>{metric}</li>)}</ul> : <p>Experimental evaluation is in progress; see the repository for the latest implementation context.</p>}</section>
          <section><h3>Tech stack</h3><div className="flex flex-wrap gap-2">{project.techStack.map((tech) => <span className="tech-pill" key={tech}>{tech}</span>)}</div></section>
          <div className="mt-7 flex flex-wrap gap-3">
            {project.demoUrl && <a className="project-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Open demo <ExternalLink className="h-4 w-4" /></a>}
            {project.sourceUrl && <a className="project-link project-link-muted" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">View GitHub <Github className="h-4 w-4" /></a>}
          </div>
        </div>
      </div>
    </div>
  );
}
