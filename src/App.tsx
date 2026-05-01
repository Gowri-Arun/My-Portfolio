import { Download, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyEmail } from './components/CopyEmail';
import { ProjectCard } from './components/ProjectCard';
import { ProjectDetailsDialog } from './components/ProjectDetailsDialog';
import { Section } from './components/Section';
import { portfolio, type Project } from './data/portfolio';
import { mailto } from './utils/content';

const selectedProjectNames = portfolio.featuredProjectNames.slice(0, 4);
const researchProjectNames = ['JANUS', 'ST-HF-VVI-ReID', 'UNSW-NB15 Intrusion Detection Research'];
const archiveProjectNames = ['Vanta AI', 'Aegis', 'ToN-IoT Rare-Class IDS'];
const filters = ['All', 'Software & Backend', 'Applied AI', 'Research', 'Security'] as const;
type Filter = (typeof filters)[number];

function projectsByName(names: readonly string[]) {
  return names
    .map((name) => portfolio.projects.find((project) => project.name === name))
    .filter((project): project is Project => Boolean(project));
}

function matchesFilter(project: Project, filter: Filter) {
  if (filter === 'All') return true;
  if (filter === 'Research') return project.category === 'Research';
  if (filter === 'Applied AI') return project.category === 'AI Engineering';
  if (filter === 'Software & Backend') return /Full-stack|Backend|Security Engineering/.test(project.type);
  return /Intrusion|Aegis|Security/.test(project.name) || /Security/.test(project.type);
}

const skillGroups = [
  ['Languages', portfolio.skills.languages.slice(0, 5)],
  ['Backend & Databases', portfolio.skills.backend.slice(0, 7)],
  ['Frontend', portfolio.skills.frontend.slice(0, 5)],
  ['AI & Machine Learning', portfolio.skills.ai_ml.slice(0, 7)],
  ['Developer Tools', portfolio.skills.infrastructure],
] as const;

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<Filter>('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const selectedProjects = useMemo(() => projectsByName(selectedProjectNames), []);
  const researchProjects = useMemo(() => projectsByName(researchProjectNames), []);
  const archiveProjects = useMemo(() => projectsByName(archiveProjectNames), []);
  const allFilteredProjects = useMemo(() => portfolio.projects.filter((project) => matchesFilter(project, activeFilter)), [activeFilter]);
  const visibleArchive = isArchiveOpen ? allFilteredProjects : archiveProjects;

  return (
    <main className="portfolio-shell min-h-screen overflow-x-hidden bg-[#fbfaf6] text-zinc-950 antialiased dark:bg-zinc-950 dark:text-zinc-50">
      <div className="page-grid fixed inset-0 -z-10" />

      <header className="site-header mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <a className="text-sm font-black tracking-tight" href="#top">{portfolio.name}</a>
        <button className="icon-button sm:hidden" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-zinc-600 dark:text-zinc-300 sm:flex" aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
        </nav>
      </header>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></nav>}

      <section id="top" className="hero-section mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-20 lg:grid-cols-[1.35fr_.65fr] lg:items-center">
        <div className="hero-copy max-w-3xl">
          <p className="availability-note">Available for Summer 2027 internships</p>
          <h1 className="hero-name mt-5">Gowri Arun</h1>
          <p className="hero-headline mt-5">Software Engineering <span aria-hidden="true">&middot;</span> Backend Systems <span aria-hidden="true">&middot;</span> Applied AI</p>
          <p className="hero-lede mt-6 max-w-2xl">Building reliable software and AI systems, backed by measurable engineering results.</p>
          <p className="hero-meta mt-5">Third-year Computer Science student at IIIT Kottayam</p>
          <div className="hero-actions mt-9">
            <a className="primary-button" href="#work">Explore selected work</a>
            <a className="secondary-button" href="/Gowri-Arun-Resume.pdf" download><Download className="h-4 w-4" /> Resume</a>
            <a className="secondary-button" href={portfolio.contact.github} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" /> GitHub</a>
            <a className="secondary-button" href={portfolio.contact.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            {portfolio.contact.email && <a className="secondary-button" href={mailto(portfolio)}><Mail className="h-4 w-4" /> Contact</a>}
          </div>
        </div>
        <aside className="portrait-card hero-portrait mx-auto w-full max-w-[290px] lg:mx-0 lg:justify-self-end">
          <span className="portrait-orbit" aria-hidden="true" />
          <img className="aspect-[6/7] w-full rounded-[1.15rem] object-cover" src={portfolio.profileImage.src} alt={portfolio.profileImage.alt} />
        </aside>
      </section>

      <Section id="work" eyebrow="Selected work" title="Four projects. Four different engineering strengths.">
        <div className="grid gap-5 md:grid-cols-2">{selectedProjects.map((project) => <ProjectCard key={project.name} project={project} onViewDetails={setActiveProject} />)}</div>
      </Section>

      <Section id="experience" eyebrow="Experience & research" title="Building dependable systems in research and practice">
        <div className="timeline">{portfolio.experience.slice(0, 3).map((item) => <article className="timeline-item" key={`${item.role}-${item.organization}`}><div><p className="text-sm font-semibold text-cyan-800 dark:text-cyan-200">{item.organization}</p><h3 className="mt-1 text-xl font-bold">{item.role}</h3><details className="mt-3"><summary>Read summary</summary><p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{item.description}</p></details></div><p className="shrink-0 text-sm font-semibold text-zinc-500 dark:text-zinc-400">{item.duration}</p></article>)}</div>
        <details className="additional-details"><summary>Additional community experience</summary><div className="mt-4 grid gap-3 md:grid-cols-2">{portfolio.experience.slice(3).map((item) => <article className="quiet-card" key={`${item.role}-${item.organization}`}><p className="text-sm font-semibold text-cyan-800 dark:text-cyan-200">{item.organization} &middot; {item.duration}</p><h3 className="mt-1 font-bold">{item.role}</h3><p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{item.description}</p></article>)}</div></details>
      </Section>

      <Section eyebrow="Research & technical exploration" title="Exploring systems beyond the product surface"><div className="grid gap-4 lg:grid-cols-3">{researchProjects.map((project) => <ProjectCard compact key={project.name} project={project} onViewDetails={setActiveProject} />)}</div></Section>

      <Section id="more-projects" eyebrow="More projects" title="The complete project archive">
        <p className="max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">{isArchiveOpen ? 'Browse all ten projects by focus area.' : 'Three additional projects spanning digital safety, network defense, and rare-class intrusion detection.'}</p>
        {isArchiveOpen && <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects">{filters.map((filter) => <button className={activeFilter === filter ? 'filter-button filter-button-active' : 'filter-button'} type="button" onClick={() => setActiveFilter(filter)} key={filter}>{filter}</button>)}</div>}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{visibleArchive.map((project) => <ProjectCard compact key={project.name} project={project} onViewDetails={setActiveProject} />)}</div>
        {isArchiveOpen && visibleArchive.length === 0 && <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-300">No projects match this focus yet.</p>}
        <button className="secondary-button mt-6" type="button" onClick={() => setIsArchiveOpen((open) => !open)} aria-expanded={isArchiveOpen}>{isArchiveOpen ? 'Show archive highlights' : 'View all projects'}</button>
      </Section>

      <Section id="skills" eyebrow="Skills" title="A practical engineering stack"><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{skillGroups.map(([label, skills]) => <article className="quiet-card" key={label}><h3 className="text-base font-bold">{label}</h3><div className="mt-4 flex flex-wrap gap-2">{skills.map((skill) => <span className="tech-pill" key={skill}>{skill}</span>)}</div></article>)}</div><details className="additional-details"><summary>Courses & continued learning</summary><div className="mt-4 flex flex-wrap gap-2">{portfolio.skills.courses.map((course) => <span className="tech-pill" key={course}>{course}</span>)}</div></details></Section>
      <Section id="education" eyebrow="Education" title="Academic foundation"><div className="grid gap-3">{portfolio.education.map((item) => <article className="quiet-card" key={item.institution}><div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"><div><h3 className="font-bold">{item.institution}</h3><p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{'degree' in item ? item.degree : item.level}</p></div><p className="text-sm font-semibold text-cyan-800 dark:text-cyan-200">{'gpa' in item && item.gpa ? item.gpa : 'score' in item ? item.score : item.endYear}</p></div></article>)}</div></Section>
      <Section id="achievements" eyebrow="Achievements" title="Signals of momentum"><ul className="achievement-list">{[...portfolio.achievements, ...portfolio.additionalAchievements].map((achievement) => <li key={achievement}>{achievement}</li>)}</ul></Section>
      <Section id="contact" eyebrow="Contact" title="Let's build something useful."><div className="contact-panel"><div><h3 className="text-2xl font-bold">Interested in reliable software, backend systems, or applied AI?</h3><p className="mt-3 max-w-2xl leading-7 text-zinc-700 dark:text-zinc-300">I'm seeking Summer 2027 internship opportunities and would love to connect.</p></div><div className="mt-7 flex flex-wrap gap-3">{portfolio.contact.email && <CopyEmail email={portfolio.contact.email} />}<a className="contact-link" href={portfolio.contact.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a><a className="contact-link" href={portfolio.contact.github} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" /> GitHub</a>{portfolio.contact.email && <a className="contact-link" href={mailto(portfolio)}><Mail className="h-4 w-4" /> Email</a>}</div></div></Section>
      <footer className="mx-auto max-w-6xl px-5 py-10 text-sm text-zinc-500 md:px-8">&copy; {new Date().getFullYear()} {portfolio.name}. Built with intention.</footer>
      <ProjectDetailsDialog project={activeProject} onClose={() => setActiveProject(null)} />
    </main>
  );
}
