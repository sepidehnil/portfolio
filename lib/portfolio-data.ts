import type { PortfolioData } from '@/types/portfolio';

/** Edit this file to update site content. */
export const portfolioData: PortfolioData = {
  profile: {
    name: 'Sepideh Nilforoushan',
    title: 'Web Developer · React, Next.js & TypeScript',
    email: '3pd.nilforoushan@gmail.com',
    phone: '+1 (647) 333-7240',
    location: 'Canada',
    tagline: 'Web developer · 3 years of experience',
    heroHeading: 'I build scalable, performant web applications with React, Next.js, and TypeScript.',
    heroHighlight: 'React, Next.js, and TypeScript',
    bio: 'Web developer with 3 years of experience developing scalable and performant web applications using React, Next.js, Redux, and TypeScript. Strong background in responsive UI development, RESTful API integration, and code quality through version control and structured architecture. Focused on building efficient, user-friendly interfaces while optimizing performance and maintainability.',
    github: 'https://github.com/sepidehnil',
    linkedin: 'https://linkedin.com/in/sepideh-nilforoushan',
    resumeUrl: '/resume.pdf',
  },
  skills: [
    { id: 1, name: 'React & Next.js', icon: 'polymer' },
    { id: 2, name: 'TypeScript', icon: 'terminal' },
    { id: 3, name: 'Redux & Zustand', icon: 'code' },
    { id: 4, name: 'TanStack Query', icon: 'settings_input_component' },
    { id: 5, name: 'Material-UI & Tailwind', icon: 'palette' },
    { id: 6, name: 'REST APIs', icon: 'api' },
    { id: 7, name: 'Docker', icon: 'docker' },
    { id: 8, name: 'Prisma', icon: 'database' },
    { id: 9, name: 'PostgreSQL', icon: 'storage' },
    { id: 10, name: 'Auth.js', icon: 'lock' },
  ],
  projects: [
    {
      id: 1,
      title: 'Ventura — Camping & Outdoor Gear',
      description:
        'Ventura is a modern camping and outdoor gear storefront built for trail-ready shopping. Visitors can explore curated products by category, browse featured picks and timed deals, and enjoy a clean, responsive experience that feels premium from first scroll to checkout intent.',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Zustand', 'Framer Motion'],
      image: '/ventura-camping.webp',
      liveUrl: 'https://ventura-camping.vercel.app/',
      githubUrl: 'https://github.com/sepidehnil/Ventura',
      accentColor: '#A8C686',
    },
    {
      id: 2,
      title: 'FlowBoard — Multi-user SaaS Dashboard',
      description:
        'Designed a multi-user data model (projects, tasks, clients, invoices, activity) with server-side userId ownership so users never see another account’s data.',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Auth.js', 'Recharts'],
      image: '/flowboard-dashboard.webp',
      liveUrl: 'https://flowboard-self.vercel.app/',
      githubUrl: 'https://github.com/sepidehnil/flowboard',
      accentColor: '#10B981',
    },
    {
      id: 3,
      title: 'Weather Forecast',
      description:
        'This website is a weather forecasting platform that allows users to register and search for weather information for specific countries. It leverages JavaScript, Tailwind CSS, animations, and a REST API to fetch weather data.',
      tags: ['JavaScript', 'Tailwind CSS', 'REST API'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBdZqZfsDiy3-wrnuvYGJz4G_ODl_YjUMMmXerKzWYlpRjI_dxnFvx5xZdy22aQve6L6YCz5Janjoz0EXpLvJc0YzoMQ-4uRMpmO_7_QD26oRFgg4YugTjfj6ewRpiDBiZtLwUMeYeWzkGGcZo_6ooajo6NEMu79vcwiI7LojCqRgcURXVVXSCunmJ190VxdUHlnSvMra1e82ck7ATok0MGlB6UkyCvus4czZrVWYXWfhlp229qHSipKp9Qsf0PEeK3XXc7BkBHn3Q',
      liveUrl: 'https://weather-forecast-jw9qduwtc-gfdg3.vercel.app/',
      githubUrl: 'https://github.com/sepidehnil/Weather-Forecast',
      accentColor: '#5CD5F6',
    },
    {
      id: 4,
      title: 'Luxury Home Online Shop',
      description:
        'My online shop combines client-side and server-side functionalities to create a comprehensive e-commerce platform, providing users with a seamless shopping experience while enabling administrators to efficiently manage products, orders, and user accounts.',
      tags: ['React', 'Tailwind CSS', 'Material-UI', 'React Query', 'React Hook Form', 'REST API'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAW5GPniI73A-my2z1x2g0Eio9YFcgigsbcwOiIq-oIMCgxAx6b6iN5BOsg-wifVsJ8TnwD4w5C92dcvb9fNjqqMWfhokcu_wSYxQAaUNr23DJU6P5qu0PPd8-kx-nvboG-mTMo4n9nIqfOl-dwUiwtTeiNUYo2UeknRIx1dnsZzc8M4eSr_fFu1yoJEUw0WNFJGqVdF8GNK-_WIHiJR08EnyQIxc3b-3VrjNNeWJf_zNKESOSybTUcr2RQyFpd3x0Vje-tSlxVz1g',
      liveUrl: null,
      githubUrl: 'https://github.com/sepidehnil/Luxury-Home-Online-Shop',
      accentColor: '#E8C47A',
    },
  ],
  experiences: [
    {
      id: 1,
      role: 'Front-End Developer',
      company: 'Adanic',
      period: 'Aug 2024 – Aug 2026',
      highlights: [
        'Developed front-end features for enterprise banking and insurance platforms (3M+ users) using React, Next.js, and TypeScript.',
        'Improved load time by 35% through route-based code splitting and lazy loading with next/dynamic.',
        'Implemented server-side rendering (SSR) to enhance performance and SEO.',
        'Designed and implemented a CAPTCHA-based SMS flow, reducing abusive requests by 90% and boosting system efficiency by 40%.',
        'Collaborated with product managers and backend developers in agile (Scrum) environments.',
        'Built and maintained whitelist configuration features for secure, domain-specific deployments across multiple banks.',
      ],
    },
    {
      id: 2,
      role: 'Front-End Developer',
      company: 'RayDana',
      period: 'Jun 2023 – Aug 2024',
      highlights: [
        'Developed and maintained enterprise web applications using React, TypeScript, and Next.js.',
        'Built reusable and responsive UI components and integrated RESTful APIs.',
        'Collaborated with backend developers to implement business requirements and deliver new features.',
        'Improved application performance, usability, and maintainability while resolving bugs and technical issues.',
      ],
    },
  ],
  education: {
    school: 'University of Kashan, Iran',
    degree: 'Bachelor of Electrical Engineering',
    period: 'Sep 2017 – May 2021',
  },
};
