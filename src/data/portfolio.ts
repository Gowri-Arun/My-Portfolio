
const contactPhone = import.meta.env.VITE_PORTFOLIO_PHONE ?? '';
const contactEmail = import.meta.env.VITE_PORTFOLIO_EMAIL ?? 'gowriarun2006@gmail.com';

export const portfolio = {
  name: 'Gowri Arun',

  headline: 'Software Engineering · Backend Systems · Applied AI',

  tagline:
    'Building reliable software and AI systems, with engineering decisions backed by measurable results.',

  about:
    'I am a third-year Computer Science undergraduate at IIIT Kottayam, working across software engineering, backend development, and applied AI. I build retrieval systems, full-stack applications, natural-language analytics, and machine-learning research pipelines. My work emphasizes correctness, reliability, reproducibility, and measurable performance — from reducing cached endpoint latency to improving analytical query accuracy.',

  availability: {
    seeking: 'Summer 2027 Internships',
    roles: [
      'Software Engineering Intern',
      'Backend Engineering Intern',
      'Applied AI Intern',
      'AI Developer Intern',
      'Machine Learning Engineer Intern',
    ],
  },

  contact: {
    phone: contactPhone,
    email: contactEmail,
    linkedin: 'https://www.linkedin.com/in/gowri-arun-/',
    github: 'https://github.com/Gowri-Arun',
  },

  profileImage: {
    src: '/photo.png',
    alt: 'Portrait of Gowri Arun',
  },

  education: [
    {
      institution:
        'Indian Institute of Information Technology (IIIT), Kottayam',
      degree:
        'Bachelor of Technology in Computer Science and Engineering',
      endYear: '2028',
      gpa: '9.11/10.00',
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
    languages: [
      'Python',
      'C++',
      'TypeScript',
      'JavaScript',
      'SQL',
    ],

    ai_ml: [
      'PyTorch',
      'TensorFlow',
      'scikit-learn',
      'Hugging Face Transformers',
      'Retrieval-Augmented Generation',
      'FAISS',
      'LangChain',
      'Neo4j',
      'Knowledge Graphs',
      'Computer Vision',
      'Model Evaluation',
    ],

    backend: [
      'FastAPI',
      'Flask',
      'Node.js',
      'Express.js',
      'REST APIs',
      'PostgreSQL',
      'SQLite',
      'DuckDB',
      'Supabase',
      'Firebase',
      'MySQL',
      'Neo4j (Cypher)',
    ],

    frontend: [
      'React',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ],

    infrastructure: [
      'Git',
      'GitHub Actions',
      'Docker',
      'Vercel',
      'Render',
    ],

    courses: [
      'Introduction to Machine Learning - IIT Kharagpur',
      'Deep Learning Part 1 - IIT Madras',
    ],
  },

  projects: [
    // ==================================================
    // 1. ASTRA-Q
    // ==================================================
    {
      name: 'Astra-Q',
      subtitle:
        'Satellite Document Intelligence with Hybrid RAG and Knowledge Graphs',
      techStack: [
        'Python',
        'FastAPI',
        'FAISS',
        'Neo4j',
        'Cypher',
        'Gemini',
        'Firebase',
        'Docker',
      ],
      description:
        'An AI-powered assistant for ISRO MOSDAC satellite documentation, combining vector retrieval, knowledge-graph queries, intent routing, and source-grounded answer generation. The retrieval infrastructure includes a 6,347-vector FAISS index.',
      contribution:
        'Developed backend retrieval and orchestration infrastructure, integrating FAISS search, Neo4j graph queries, conversation persistence, and source alignment. Eliminated duplicate retrieval operations, reducing mean local mocked-generation orchestration latency by 44.4% (90.3 ms to 50.3 ms) across 150 benchmark runs.',
      date: 'December 2025',
      status: 'Completed',
      type: 'AI Engineering',
      category: 'AI Engineering',
      featured: true,
      demoUrl: 'https://astraq-am.onrender.com/',
      sourceUrl: 'https://github.com/Gowri-Arun/Astra_Q_Backend',
      caseStudyUrl: null,
      image: null,
      metrics: [
        '6,347-vector FAISS index',
        '44.4% lower local orchestration latency',
        '150 benchmark runs',
      ],
    },

    // ==================================================
    // 2. NEUROBRIDGE
    // ==================================================
    {
      name: 'NeuroBridge',
      subtitle:
        'Reliable Personalization and Adaptive Decision-Support Workflows',
      techStack: [
        'React',
        'JavaScript',
        'FastAPI',
        'Gemini',
        'Supabase',
        'PostgreSQL',
      ],
      description:
        'A neuro-inclusive support platform built around deterministic intervention workflows, structured outcome capture, safety-aware decisions, and confidence-gated personalization memory.',
      contribution:
        'Engineered intervention lifecycle transitions, reflection and memory workflows, persistence integrity, and backend reliability improvements. Confidence gating prevented 1,000 premature memory writes across 200 synthetic streams versus an ungated baseline. Eliminated a lifecycle self-deadlock and reduced redundant repository writes by 25% in synthetic replay testing.',
      date: '2026',
      status: 'Completed',
      type: 'Full-stack AI Project',
      category: 'AI Engineering',
      featured: true,
      demoUrl: 'https://neuro-bridge-olive.vercel.app/',
      sourceUrl: 'https://github.com/Civora-Forge/NeuroBridge',
      caseStudyUrl: null,
      image: null,
      metrics: [
        '25% fewer redundant repository writes',
        '1,000 premature writes prevented in synthetic testing',
      ],
    },

    // ==================================================
    // 3. LAZYLIFT
    // ==================================================
    {
      name: 'LazyLift',
      subtitle:
        'Full-stack Study Intelligence and Constraint-Aware Scheduling',
      techStack: [
        'React',
        'TypeScript',
        'Express',
        'SQLite',
        'Docker',
        'Gemini',
        'LibreOffice',
        'Poppler',
      ],
      description:
        'A full-stack academic productivity platform that extracts source-linked questions and study priorities from course materials, maps them to syllabus topics, and generates constraint-aware study schedules.',
      contribution:
        'Co-developed document processing, topic mapping, scheduling workflows, and presentation rendering infrastructure. Implemented SHA-256 content-addressed caching and in-flight request deduplication for PPTX rendering, reducing median local endpoint latency by 99.83% from 3.49 seconds on cold requests to 5.94 milliseconds on cached requests.',
      date: '2026',
      status: 'Completed',
      type: 'Full-stack Project',
      category: 'Full Stack',
      featured: true,
      demoUrl: 'https://ll-three-gilt.vercel.app/',
      sourceUrl: 'https://github.com/GradienttAscent/ll',
      caseStudyUrl: null,
      image: null,
      metrics: [
        '99.83% lower cached endpoint latency',
        '3.49 s cold to 5.94 ms cached',
      ],
    },

    // ==================================================
    // 4. VERIDIAN AI
    // ==================================================
    {
      name: 'Veridian AI',
      subtitle:
        'Deterministic Natural-Language Analytics with Inspectable SQL',
      techStack: [
        'Python',
        'FastAPI',
        'DuckDB',
        'SQL',
        'BM25',
        'Streamlit',
      ],
      description:
        'A natural-language analytics engine that translates user questions into typed semantic representations, parameterized SQL, and read-only database operations, with transparent execution traces and retrieval evidence.',
      contribution:
        'Built semantic parsing, deterministic query planning, SQL compilation, retrieval, and inspectable execution workflows. Improved exact-result correctness from 76.3% (29/38) to 92.1% (35/38) on 38 reference-checked queries by correcting intent classification and semantic parsing.',
      date: 'May 2026 - Present',
      status: 'Ongoing',
      type: 'Backend / AI Engineering',
      category: 'AI Engineering',
      featured: true,
      demoUrl: null,
      sourceUrl: 'https://github.com/Gowri-Arun/veridianAI_v2',
      caseStudyUrl: null,
      image: null,
      metrics: [
        '92.1% exact-result correctness',
        '+15.8 percentage points',
        '38 reference-checked queries',
      ],
    },

    // ==================================================
    // 5. JANUS
    // ==================================================
    {
      name: 'JANUS',
      subtitle:
        'Compatibility-Aware Retrieval for Evolving Python APIs',
      techStack: [
        'Python',
        'AST',
        'BM25',
        'PyTorch',
        'Static Analysis',
        'Git Mining',
      ],
      description:
        'A research prototype that traces historical Python APIs across repository changes and filters retrieved code examples for compatibility with current interfaces. It combines AST analysis, Git provenance, static checks, and retrieval-aware ranking.',
      contribution:
        'Developed the AST-based compatibility core and BM25 retrieval gate, contributing to callable resolution, Git-history mining, and evaluation workflows. In a 15-slot retrieval pilot, incompatible results in the top three fell from 5/15 to 0/15 while compatible-result retention remained 100%.',
      date: '2026',
      status: 'Ongoing',
      type: 'Research / Developer Tools',
      category: 'Research',
      featured: true,
      demoUrl: null,
      sourceUrl: 'https://github.com/GradienttAscent/JANUS',
      caseStudyUrl: null,
      image: null,
      metrics: [
        '5/15 to 0/15 incompatible retrieval slots',
        '100% compatible-result retention in pilot',
      ],
    },

    // ==================================================
    // 6. ST-HF-VVI-REID
    // ==================================================
    {
      name: 'ST-HF-VVI-ReID',
      subtitle:
        'Spectral Deep Learning for Visible-Infrared Video Re-Identification',
      techStack: [
        'Python',
        'PyTorch',
        'ResNet-50',
        '3D FFT',
        'Computer Vision',
        'Metric Learning',
      ],
      description:
        'A collaborative research implementation of Spatial-Temporal High-Frequency Learning for cross-modal video person retrieval, integrating frequency-domain filtering, dual-stream visual feature extraction, and spatial-temporal refinement.',
      contribution:
        'Reconstructed core PyTorch STHF components and designed an adaptive three-branch frequency filter with learnable sequence-specific gating. Worked on modality-aware sampling, dataset preparation, and cross-camera retrieval evaluation. Final retrieval performance remains subject to complete experimental evaluation.',
      date: '2026',
      status: 'Ongoing',
      type: 'Computer Vision Research',
      category: 'Research',
      featured: true,
      demoUrl: null,
      sourceUrl: 'https://github.com/Gowri-Arun/ST-HF-VVI-ReID',
      caseStudyUrl: null,
      image: null,
      metrics: [],
    },

    // ==================================================
    // 7. UNSW-NB15 INTRUSION DETECTION RESEARCH
    // ==================================================
    {
      name: 'UNSW-NB15 Intrusion Detection Research',
      subtitle:
        'Imbalance-Aware Machine Learning and Deep Learning for Network Security',
      techStack: [
        'Python',
        'scikit-learn',
        'PyTorch',
        'PCA',
        'Mutual Information',
        'BiLSTM',
        'Machine Learning',
      ],
      description:
        'Research on class-imbalanced network intrusion detection using approximately 2.54 million UNSW-NB15 network-flow records, feature selection, dimensionality reduction, sampling strategies, and binary and multiclass model evaluation.',
      contribution:
        'Developed leakage-controlled preprocessing and evaluation workflows using mutual-information feature selection, PCA, class balancing, and stratified validation. Reported experimental results include 98.70% binary accuracy and 95.10% F1 for a shared-feature BiLSTM, and 96.66% multiclass accuracy for a DNN.',
      date: '2026',
      status: 'Ongoing',
      type: 'Machine Learning Research',
      category: 'Research',
      featured: false,
      demoUrl: null,
      sourceUrl: '',
      caseStudyUrl: null,
      image: null,
      metrics: [
        '2.54M network-flow records',
        '98.70% reported binary accuracy',
        '95.10% reported binary F1',
      ],
    },

    // ==================================================
    // 8. VANTA AI
    // ==================================================
    {
      name: 'Vanta AI',
      subtitle: 'AI-Powered Digital Safety Platform for Women',
      techStack: [
        'React',
        'FastAPI',
        'PyTorch',
        'Hugging Face',
        'SigLIP',
      ],
      description:
        'A digital safety prototype combining image deepfake classification with browser-based legal assistance, reporting tools, and FIR draft generation.',
      contribution:
        'Implemented the image classification pipeline from React uploads through FastAPI preprocessing and SigLIP/PyTorch inference. Developed legal Q&A and FIR draft generation interfaces.',
      date: 'April 2025',
      status: 'Completed',
      type: 'Hackathon Project',
      category: 'AI Engineering',
      featured: false,
      demoUrl:
        'https://drive.google.com/file/d/11GUKEs7GA5XG42qg17PTrucfO_Jm76Qm/view?usp=sharing',
      sourceUrl: 'https://github.com/AnitaGeorge404/VantaAI',
      caseStudyUrl: null,
      image: null,
      metrics: [],
    },

    // ==================================================
    // 9. AEGIS
    // ==================================================
    {
      name: 'Aegis',
      subtitle: 'Passive AI/ML Network Threat Detection',
      techStack: [
        'Python',
        'Zeek',
        'Kafka',
        'Docker',
        'Machine Learning',
      ],
      description:
        'An experimental passive network-security pipeline for converting network telemetry into behavioral features for downstream threat detection.',
      contribution:
        'Implemented traffic generation for SYN floods, UDP floods, port scans, and DNS-based threats, alongside features for packet rates, destination diversity, connection frequency, entropy, and timing statistics.',
      date: '2026',
      status: 'Ongoing',
      type: 'Security Engineering',
      category: 'AI Engineering',
      featured: false,
      demoUrl: null,
      sourceUrl: '',
      caseStudyUrl: null,
      image: null,
      metrics: [],
    },

    // ==================================================
    // 10. TON-IOT RARE-CLASS IDS
    // ==================================================
    {
      name: 'ToN-IoT Rare-Class IDS',
      subtitle: 'Imbalance-Aware Intrusion Detection Research',
      techStack: [
        'Python',
        'scikit-learn',
        'LightGBM',
        'XGBoost',
        'KMeansSMOTE',
      ],
      description:
        'Research into minority-attack classification under severe class imbalance in IoT network traffic, prioritizing rare-class detection over aggregate accuracy alone.',
      contribution:
        'Experimented with imbalance-aware sampling, tree-based classifiers, and evaluation approaches for minority-attack detection.',
      date: '2026',
      status: 'Completed',
      type: 'Research',
      category: 'Research',
      featured: false,
      demoUrl: null,
      sourceUrl: 'https://github.com/Gowri-Arun/ToN-IoT-rareclass-IDS',
      caseStudyUrl: null,
      image: null,
      metrics: [],
    },
  ],

  featuredProjectNames: [
    'Astra-Q',
    'NeuroBridge',
    'LazyLift',
    'Veridian AI',
    'JANUS',
    'ST-HF-VVI-ReID',
  ],

  experience: [
    {
      role: 'Research Intern',
      organization:
        'National Institute of Technology, Tiruchirappalli',
      supervisor: 'Dr. Brindha M',
      duration: 'May 2026 - Jul 2026',
      description:
        'Reconstructed a dual-stream PyTorch model for visible-infrared video re-identification, integrating ResNet-50, 3D FFT filtering, and spatial-temporal refinement. Designed an adaptive three-branch frequency filter with learnable gating and worked on modality-aware sampling and cross-camera retrieval evaluation.',
      type: 'Research',
    },
    {
      role: 'Student Researcher',
      organization: 'IIIT Kottayam',
      supervisor: 'Dr. Balasubramanian P',
      duration: 'Jan 2026 - Present',
      description:
        'Developed a leakage-controlled intrusion detection research pipeline for approximately 2.54 million UNSW-NB15 records. Evaluated feature selection, PCA, class balancing, and ML/deep-learning classifiers, including a shared-feature BiLSTM with 98.70% reported binary accuracy and 95.10% F1.',
      type: 'Research',
    },
    {
      role: 'Contributor',
      organization: 'GirlScript Summer of Code',
      duration: 'May 2026 - Present',
      description:
        'Participating as an open-source contributor in GirlScript Summer of Code.',
      type: 'Open Source',
    },
    {
      role: 'Volunteer',
      organization: 'Google Developer Groups',
      duration: 'Oct 2024 - Sep 2025',
      description:
        'Contributed to developer community activities and technical events.',
      type: 'Community',
    },
  ],

  achievements: [
    'Top 10 of 7,100+ registrations - NMIT Hacks 2026',
    'Runner-Up - Girlathon 2026 (NeuroBridge)',
    'First Runner-Up - Girlathon 2025, Kerala Startup Mission',
    'Top 10 Team - She Builds Tech 2.0, Kerala Startup Mission',
    'Global Rank 3,592 among 13,000+ participants - IICPC Codefest Prelims 2026',
  ],

  additionalAchievements: [
    'National Merit Position 3 and State Rank 2 - ICSE Class 10 Examination 2022',
  ],

  researchInterests: [
    'Reliable Software and AI Systems',
    'Backend Engineering and Developer Tools',
    'Retrieval-Augmented Generation',
    'Machine Learning Evaluation',
    'Computer Vision and Cross-Modal Learning',
    'Cybersecurity Machine Learning',
  ],
} as const;

export type Portfolio = typeof portfolio;
export type Project = Portfolio['projects'][number];
export type Experience = Portfolio['experience'][number];
