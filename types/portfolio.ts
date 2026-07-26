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
  'Responsive Design',
  'Clean Code',
  'Performance Focused',
  'Modern UI Development',
] as const;

export const services = [
  {
    title: 'React Development',
    description:
      'Modern React apps with reusable components, clear structure, and UI that scales as your product grows.',
    icon: 'react',
  },
  {
    title: 'Next.js Development',
    description:
      'Fast Next.js websites with strong performance, SEO-friendly rendering, and production-ready structure.',
    icon: 'next',
  },
  {
    title: 'Frontend Development',
    description:
      'Responsive interfaces built with HTML, CSS, JavaScript, and TypeScript — polished across every screen size.',
    icon: 'frontend',
  },
  {
    title: 'Figma to Code',
    description:
      'Pixel-accurate implementation of your Figma designs into clean, responsive React and Next.js UI.',
    icon: 'figma',
  },
  {
    title: 'UI Improvements',
    description:
      'Refresh existing interfaces for better usability, responsiveness, and faster, more consistent user flows.',
    icon: 'ui',
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
    title: 'Pixel Perfect Development',
    description: 'Careful attention to spacing, typography, and details so the build matches the design.',
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
    description: 'Clarify goals, users, and success criteria before writing a single line of code.',
  },
  {
    step: '02',
    title: 'Planning the Architecture',
    description: 'Map components and structure so the frontend stays scalable and easy to maintain.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Build responsive UI, connect APIs when needed, and share progress as we go.',
  },
  {
    step: '04',
    title: 'Testing & Delivery',
    description: 'Polish interactions, check responsiveness, and hand off a production-ready frontend.',
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
