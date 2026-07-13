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
  resumeUrl?: string;
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
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;

export const heroTrustPoints = [
  'Responsive Design',
  'Clean Code',
  'Performance Focused',
  'Modern UI Development',
] as const;

export const services = [
  {
    title: 'React Development',
    description:
      'Building modern React applications with reusable and scalable components.',
    icon: 'react',
  },
  {
    title: 'Next.js Development',
    description:
      'Creating high-performance websites with server-side rendering and optimized SEO.',
    icon: 'next',
  },
  {
    title: 'Frontend Development',
    description:
      'Responsive websites using modern HTML, CSS, JavaScript and TypeScript.',
    icon: 'frontend',
  },
  {
    title: 'Figma to Code',
    description:
      'Converting Figma designs into pixel-perfect responsive websites.',
    icon: 'figma',
  },
  {
    title: 'UI Improvements',
    description:
      'Improving existing interfaces with better usability, responsiveness and performance.',
    icon: 'ui',
  },
] as const;

export const whyClientsChooseMe = [
  {
    title: 'Clean & Maintainable Code',
    description: 'Readable architecture and reusable components that are easy to extend after launch.',
    icon: 'code',
  },
  {
    title: 'Responsive Design',
    description: 'Layouts that feel intentional on mobile, tablet, and desktop — not just scaled down.',
    icon: 'responsive',
  },
  {
    title: 'Performance Optimization',
    description: 'Faster loads through lean UI, smart rendering, and image optimization practices.',
    icon: 'performance',
  },
  {
    title: 'Pixel Perfect Development',
    description: 'Careful implementation of design details so the product matches what you approved.',
    icon: 'pixel',
  },
  {
    title: 'Strong Communication',
    description: 'Clear updates on scope, progress, and decisions — so you always know where things stand.',
    icon: 'comms',
  },
  {
    title: 'Reliable Delivery',
    description: 'Focused execution against milestones so you can plan launches with confidence.',
    icon: 'delivery',
  },
] as const;

export const processSteps = [
  {
    step: '01',
    title: 'Understanding Your Requirements',
    description: 'Clarify goals, users, constraints, and success criteria before writing code.',
  },
  {
    step: '02',
    title: 'Planning the Architecture',
    description: 'Map components, data flow, and structure so the build stays scalable and maintainable.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Implement responsive UI, integrate APIs, and iterate with visible progress.',
  },
  {
    step: '04',
    title: 'Testing & Delivery',
    description: 'Polish interactions, verify responsiveness, and hand off a production-ready frontend.',
  },
] as const;

export const techStack = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Vercel', 'Figma'],
  },
] as const;
