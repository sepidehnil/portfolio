export type SkillIcon =
  | 'polymer'
  | 'terminal'
  | 'code'
  | 'settings_input_component'
  | 'palette'
  | 'api'
  | 'database'
  | 'storage'
  | 'lock'
  | 'docker';

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
  /** Accent hex used for case-study chrome (e.g. #A8C686). */
  accentColor: string;
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
  '3 years of experience',
  'React, Next.js & TypeScript',
  'RESTful API integration',
  'Responsive UI',
] as const;

export const services = [
  {
    title: 'React & Next.js',
    description:
      'Scalable React and Next.js applications with TypeScript, reusable components, and production-ready structure.',
    icon: 'react',
  },
  {
    title: 'Responsive UI',
    description:
      'Efficient, user-friendly interfaces that stay polished on every screen — with Tailwind, Material-UI, and SCSS.',
    icon: 'frontend',
  },
  {
    title: 'REST API Integration',
    description:
      'RESTful API integration with TanStack Query, React Hook Form, and clear loading and error states.',
    icon: 'database',
  },
  {
    title: 'Authentication',
    description:
      'Secure sign-in with Auth.js, hashed passwords, and per-user data isolation enforced on the server.',
    icon: 'auth',
  },
  {
    title: 'Performance & SSR',
    description:
      'Faster pages through code splitting, lazy loading, and server-side rendering — the same approach used in production banking UI.',
    icon: 'fullstack',
  },
] as const;

export const whyClientsChooseMe = [
  {
    title: 'Clean & Maintainable Code',
    description: 'Readable architecture and reusable components your team can extend after launch.',
    icon: 'code',
  },
  {
    title: 'Responsive Design',
    description: 'Layouts that feel intentional on mobile, tablet, and desktop — not just squeezed down.',
    icon: 'responsive',
  },
  {
    title: 'Performance Optimization',
    description: 'Faster pages through lean UI, smart rendering, and thoughtful image handling.',
    icon: 'performance',
  },
  {
    title: 'Auth & Data Isolation',
    description: 'Server-side authentication and per-user queries so accounts stay private and data stays correct.',
    icon: 'auth',
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
    description: 'Clarify goals, users, and success criteria before writing a single line of code.',
  },
  {
    step: '02',
    title: 'Planning the Architecture',
    description: 'Map UI, APIs, and data models so the whole product stays scalable and easy to maintain.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Build the interface, wire REST APIs, and persist data with Prisma and PostgreSQL.',
  },
  {
    step: '04',
    title: 'Testing & Delivery',
    description: 'Polish flows, check auth and edge cases, and hand off a production-ready application.',
  },
] as const;

export const techStack = [
  {
    category: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Redux',
      'Zustand',
      'TanStack Query',
      'React Hook Form',
      'Formik',
      'Material-UI',
      'Styled-Components',
      'Tailwind CSS',
      'SCSS',
      'Bootstrap',
    ],
  },
  {
    category: 'Backend',
    items: ['Prisma', 'PostgreSQL', 'Auth.js', 'REST APIs', 'Server Actions'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Vercel', 'Figma'],
  },
] as const;
