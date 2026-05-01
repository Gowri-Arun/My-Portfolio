import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { CopyEmail } from './components/CopyEmail';
import { ProjectCard } from './components/ProjectCard';
import { Section } from './components/Section';
import { portfolio } from './data/portfolio';
import { createTagline, mailto } from './utils/content';

const skillGroups = [
  ['Backend', portfolio.skills.backend],
  ['Frontend', portfolio.skills.frontend],
  ['AI/ML', portfolio.skills.ai_ml],
] as const;

export default function App() {
  const tagline = createTagline(portfolio);
 
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbfaf6] text-zinc-950 antialiased dark:bg-zinc-950 dark:text-zinc-50">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.045)_1px,transparent_1px)] bg-[size:42px_42px] dark:opacity-10" />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 md:px-8">
        <a className="text-sm font-bold tracking-tight" href="#top">
          {portfolio.name}
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300 sm:flex">
          <a href="#projects">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-24 lg:grid-cols-[1.35fr_.8fr] lg:items-end">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }} className="max-w-4xl">
          <p className="eyebrow">Portfolio</p>
          <h1 className="mt-5 max-w-[13ch] text-3xl font-black leading-[1.02] tracking-tight text-zinc-950 dark:text-white sm:max-w-4xl sm:text-5xl lg:text-8xl">Useful AI. Clean web.</h1>
          <div className="mt-8 border-l-8 border-cyan-600 pl-5">
            <p className="text-2xl font-black text-zinc-950 dark:text-white">{portfolio.name}</p>
            <p className="mt-1 text-lg font-semibold text-cyan-700 dark:text-cyan-300">{tagline}</p>
          </div>
          
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="primary-button" href="#projects">
              View Work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a className="secondary-button" href="/Gowri-Arun-Resume.pdf" download>
              Resume Download
              <Download className="h-4 w-4" />
            </a>
            <a className="secondary-button" href={mailto(portfolio)}>
              Contact
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
        <motion.aside
          className="portrait-card"
          initial={{ opacity: 0, rotate: 1.5, y: 18 }}
          animate={{ opacity: 1, rotate: -1.2, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
        >
          <img className="aspect-[6/7] w-full rounded-[1.35rem] object-cover" src={portfolio.profileImage.src} alt={portfolio.profileImage.alt} />
          
        </motion.aside>
      </section>

      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="intro-strip">
          <p>Currently focused on knowledge graphs, RAG systems, full-stack safety tools, and research-backed machine learning.</p>
          <a href={portfolio.contact.github} target="_blank" rel="noreferrer">
            See GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Section id="projects" eyebrow="Selected work" title="Projects with clear outcomes">
        <div className="grid gap-5">
          {portfolio.projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="Capabilities" title="A practical stack for AI-enabled products">
        <div className="grid gap-4 md:grid-cols-3">
          {skillGroups.map(([label, skills]) => (
            <article className="quiet-card" key={label}>
              <h3 className="text-lg font-bold">{label}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span className="tech-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <article className="quiet-card mt-4">
          <h3 className="text-lg font-bold">Courses</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {portfolio.skills.courses.map((course) => (
              <span className="tech-pill" key={course}>
                {course}
              </span>
            ))}
          </div>
        </article>
      </Section>

      <Section id="experience" eyebrow="Experience" title="Current work and community involvement">
        <div className="timeline">
          {portfolio.experience.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.organization}`}>
              <div>
                <h3 className="text-xl font-bold">{item.role}</h3>
                <p className="mt-1 text-zinc-700 dark:text-zinc-300">{item.organization}</p>
              </div>
              <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">{item.duration}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="achievements" eyebrow="Recognition" title="Signals of consistency and momentum">
        <div className="grid gap-3 sm:grid-cols-2">
          {portfolio.achievements.map((achievement) => (
            <article className="achievement-card" key={achievement}>
              {achievement}
            </article>
          ))}
        </div>
      </Section>

      <Section id="education" eyebrow="Education" title="Academic foundation">
        <div className="grid gap-4">
          {portfolio.education.map((item) => (
            <article className="quiet-card" key={item.institution}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold">{item.institution}</h3>
                  <p className="mt-2 text-zinc-700 dark:text-zinc-300">{'degree' in item ? item.degree : item.level}</p>
                </div>
                <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                  {'gpa' in item && item.gpa ? item.gpa : 'score' in item ? item.score : item.endYear}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let's build something useful">
        <div className="contact-panel">
          <div>
            <h3 className="text-2xl font-bold">Available for thoughtful AI and full-stack projects.</h3>
            <p className="mt-3 max-w-2xl leading-7 text-zinc-700 dark:text-zinc-300">The fastest way to reach me is via LinkedIn and email. GitHub is linked for project context and collaboration.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <CopyEmail email={portfolio.contact.email} />
            <a className="contact-link" href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a className="contact-link" href={portfolio.contact.github} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
           
          </div>
        </div>
      </Section>
    </main>
  );
}
