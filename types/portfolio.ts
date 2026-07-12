export type SkillIcon =
  | 'polymer'
  | 'terminal'
  | 'code'
  | 'settings_input_component'
  | 'palette'
  | 'api';

export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  tagline: string;
  heroHeading: string;
  heroHighlight: string;
  bio: string;
  github: string;
  linkedin: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: SkillIcon;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string | null;
  liveUrl: string | null;
  githubUrl: string | null;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
  education: Education;
}

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;

export const HIGHLIGHT_TERMS = ['React', 'Next.js', 'Redux', 'TypeScript'] as const;
