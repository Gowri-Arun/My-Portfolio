export type ResumeJson = {
  name: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  };
  education: Array<{
    institution: string;
    degree?: string;
    level?: string;
    endYear?: string;
    score?: string;
    gpa?: string;
  }>;
  skills: {
    backend: string[];
    frontend: string[];
    ai_ml: string[];
    courses: string[];
  };
  projects: ProjectJson[];
  achievements: string[];
  experience: Array<{
    role: string;
    organization: string;
    duration: string;
  }>;
};

export type ProjectJson = {
  name: string;
  techStack: string[];
  description: string;
  date?: string;
  type?: string;
  status?: string;
  github?: string;
  demo?: string;
};

export type WorldItem = {
  id: string;
  label: string;
  body: string;
  position: [number, number, number];
  color: string;
  theme: 'ai' | 'security' | 'research' | 'web' | 'systems';
  metadata: Record<string, string | string[] | undefined>;
};

export type WorldZone = {
  type: 'landing' | 'projects' | 'skills' | 'research' | 'achievements' | 'experience';
  position: [number, number, number];
  items: WorldItem[];
};

export type WorldConfig = {
  zones: WorldZone[];
};
