const contactPhone = import.meta.env.VITE_PORTFOLIO_PHONE ?? 'PHONE_UNAVAILABLE';
const contactEmail = import.meta.env.VITE_PORTFOLIO_EMAIL ?? 'EMAIL_UNAVAILABLE';

export const portfolio = {
  name: 'Gowri Arun',
  contact: {
    phone: contactPhone,
    email: contactEmail,
    linkedin: 'https://www.linkedin.com/in/gowri-arun-/',
    github: 'https://github.com/Gowri-Arun',
  },
  profileImage: {
    src: '/photo.jpg',
    alt: 'Gowri Arun portrait',
  },
  education: [
    {
      institution: 'Indian Institute of Information Technology (IIIT), Kottayam',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      endYear: '2028',
      gpa: '9.06/10.00',
    },
    {
      institution: 'ST. Thomas Central School (STCS)',
      level: 'Grade 12',
      score: '96.8%',
    },
    {
      institution: 'ST. Thomas Residential School (STRS)',
      level: 'Grade 10',
      score: '99.4%',
    },
  ],
  skills: {
    backend: ['Python (FastAPI, Flask)', 'Node.js (Express)', 'RESTful APIs', 'Neo4j (Cypher)', 'MySQL'],
    frontend: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
    ai_ml: ['RAG systems', 'FAISS', 'Knowledge Graphs'],
    courses: ['Introduction to Machine Learning - IIT Kharagpur', 'Deep Learning Part 1 - IIT Madras'],
  },
  projects: [
    {
      name: 'Astra-Q ISRO AI Help Bot',
      techStack: ['Neo4j', 'LangChain', 'FAISS', 'Gemini', 'FastAPI'],
      description: "Built an AI Help Bot for ISRO's MOSDAC portal using a Neo4j knowledge graph and hybrid RAG pipeline to deliver grounded answers.",
      date: 'December 2025',
      type: 'Hackathon Project',
      demoUrl: null,
      sourceUrl: 'https://github.com/Gowri-Arun/isro_project_fork2',
    },
    {
      name: 'Vanta AI - Women Digital Safety App',
      techStack: ['React', 'Node.js', 'FastAPI', 'Machine Learning'],
      description: 'Developed a full-stack web app providing digital safety tools including deepfake detection with explainable outputs.',
      date: 'April 2025',
      type: 'Full-stack Project',
      demoUrl: null,
      sourceUrl: 'https://github.com/AnitaGeorge404/VantaAI',
    },
    {
      name: 'Neurobridge',
      techStack: ['React', 'Node.js', 'TypeScript'],
      description: 'Built ADHD and Depression feature modules for a cognitive support app.',
      date: 'March 2026',
      type: 'Program Project',
      demoUrl: null,
      sourceUrl: 'https://github.com/AnitaGeorge404/Neurobridge_V2',
    },
    {
      name: 'Network Intrusion Detection Research',
      techStack: ['Machine Learning'],
      description: 'Research on handling class imbalance in intrusion detection datasets.',
      status: 'Ongoing',
      type: 'Research',
      demoUrl: null,
      sourceUrl: ''
    },
  ],
  achievements: [
    'Global Rank 3592 among 13000+ participants in IICPC Codefest Prelims 2026',
    'First Runner-Up for Vanta AI at Girlathon 2025',
    'Top 10 teams in She Builds Tech 2.0',
    'National Merit Position 3 and State Rank 2 in ICSE Examination 2022',
  ],
  experience: [
    {
      role: 'Student Researcher',
      organization: 'IIIT Kottayam',
      duration: 'Jan 2026 - Present',
    },
    {
      role: 'Volunteer',
      organization: 'Google Developer Groups',
      duration: 'Oct 2024 - Sept 2025',
    },
  ],
} as const;

export type Portfolio = typeof portfolio;
export type Project = Portfolio['projects'][number];
