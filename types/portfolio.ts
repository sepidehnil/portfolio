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
  role?: string;
  features?: string[];
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
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;

export const HIGHLIGHT_TERMS = ['React', 'Next.js', 'TypeScript', 'Tailwind'] as const;

export const services = [
  {
    title: 'React.js Development',
    description:
      'Build interactive, component-driven interfaces with clean architecture and reusable UI patterns.',
  },
  {
    title: 'Next.js Websites',
    description:
      'Ship fast, SEO-friendly web apps with server rendering, routing, and production-ready performance.',
  },
  {
    title: 'Figma to React Conversion',
    description:
      'Turn design files into pixel-accurate, responsive React components that match your brand.',
  },
  {
    title: 'Responsive Website Development',
    description:
      'Deliver layouts that look sharp and work smoothly across mobile, tablet, and desktop.',
  },
  {
    title: 'Frontend Bug Fixing & Optimization',
    description:
      'Diagnose UI issues, improve Core Web Vitals, and leave you with maintainable, faster code.',
  },
] as const;

export const whyWorkWithMe = [
  {
    title: 'Clean, maintainable code',
    description: 'Readable structure, clear components, and patterns that are easy to extend later.',
  },
  {
    title: 'Responsive by default',
    description: 'Interfaces designed to work well on phones first, then scale up to larger screens.',
  },
  {
    title: 'Performance-minded',
    description: 'Code splitting, image optimization, and lean UI so pages feel fast for real users.',
  },
  {
    title: 'Clear communication',
    description: 'Updates you can follow — scope, timelines, and trade-offs explained without jargon.',
  },
  {
    title: 'Reliable delivery',
    description: 'Focused execution on agreed milestones so you can plan launches with confidence.',
  },
] as const;
