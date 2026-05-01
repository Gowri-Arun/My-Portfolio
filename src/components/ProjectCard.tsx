import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import type { Project } from '../data/portfolio';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      className="project-card"
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="meta-pill">{project.type}</span>
            {'date' in project && project.date && <span className="subtle-pill">{project.date}</span>}
            {'status' in project && project.status && <span className="subtle-pill">{project.status}</span>}
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">{project.name}</h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700 dark:text-zinc-300">{project.description}</p>
          {project.techStack.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span className="tech-pill" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          )}
          <div className="mt-7 flex flex-wrap gap-3">
            {'demoUrl' in project && project.demoUrl && (
              <a className="project-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                Demo
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {'sourceUrl' in project && project.sourceUrl && (
              <a className="project-link project-link-muted" href={project.sourceUrl} target="_blank" rel="noreferrer">
                Source
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
