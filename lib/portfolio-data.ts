import type { PortfolioData } from '@/types/portfolio';

/** Edit this file to update site content. */
export const portfolioData: PortfolioData = {
  profile: {
    name: 'Sepideh Nilforoushan',
    title: 'Front-End Developer · React & Next.js',
    email: '3pd.nilforoushan@gmail.com',
    phone: '+1 (647) 655-3294',
    location: 'Canada',
    tagline: 'Open for freelance projects',
    heroHeading: 'I build fast, conversion-ready websites with React and Next.js.',
    heroHighlight: 'React and Next.js',
    bio: 'I build responsive React and Next.js interfaces for products at scale — including banking and enterprise UI used by millions of users. Clear communication, polished delivery, and work that ships on deadline.',
    github: 'https://github.com/sepidehnil',
    linkedin: 'https://linkedin.com/in/sepideh-nilforoushan',
    resumeUrl: undefined,
  },
  skills: [
    { id: 1, name: 'React & Redux', icon: 'polymer' },
    { id: 2, name: 'Next.js & TypeScript', icon: 'terminal' },
    { id: 3, name: 'Zustand & TanStack Query', icon: 'code' },
    { id: 4, name: 'Material-UI & Tailwind', icon: 'palette' },
    { id: 5, name: 'REST APIs', icon: 'api' },
    { id: 6, name: 'HTML, CSS & SCSS', icon: 'settings_input_component' },
  ],
  projects: [
    {
      id: 1,
      title: 'Ventura — Camping & Outdoor Gear',
      description:
        'Designed and built a polished outdoor e-commerce storefront where shoppers can browse curated camping gear, explore categories, and move through a smooth, conversion-focused buying experience.',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Zustand', 'Framer Motion'],
      image: '/ventura-camping.webp',
      liveUrl: 'https://ventura-camping.vercel.app/',
      githubUrl: 'https://github.com/sepidehnil/Ventura',
      accentColor: '#A8C686',
    },
    {
      id: 2,
      title: 'Weather Forecast',
      description:
        'A clean weather app that lets users check live conditions by location — with a simple interface, clear feedback states, and smooth everyday interactions.',
      tags: ['JavaScript', 'Tailwind CSS', 'REST API'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBdZqZfsDiy3-wrnuvYGJz4G_ODl_YjUMMmXerKzWYlpRjI_dxnFvx5xZdy22aQve6L6YCz5Janjoz0EXpLvJc0YzoMQ-4uRMpmO_7_QD26oRFgg4YugTjfj6ewRpiDBiZtLwUMeYeWzkGGcZo_6ooajo6NEMu79vcwiI7LojCqRgcURXVVXSCunmJ190VxdUHlnSvMra1e82ck7ATok0MGlB6UkyCvus4czZrVWYXWfhlp229qHSipKp9Qsf0PEeK3XXc7BkBHn3Q',
      liveUrl: 'https://weather-forecast-jw9qduwtc-gfdg3.vercel.app/',
      githubUrl: null,
      accentColor: '#5CD5F6',
    },
    {
      id: 3,
      title: 'Luxury Home Online Shop',
      description:
        'A furniture e-commerce experience built for smooth shopping on the client side, with clear product flows and admin-friendly views for managing catalog and orders.',
      tags: ['React', 'Tailwind CSS', 'MUI', 'React Query'],
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
      period: 'Aug 2024 – Present',
      highlights: [
        'Shipped frontend features for enterprise banking and insurance platforms serving 3M+ users with React, Next.js, and TypeScript.',
        'Improved load time by 35% with route-based code splitting and next/dynamic lazy loading.',
        'Implemented SSR to strengthen performance and SEO in production apps.',
        'Built a CAPTCHA-based SMS flow that reduced abusive requests by 90%.',
        'Collaborated in Agile (Scrum) teams with clear handoffs and delivery cadence.',
      ],
    },
    {
      id: 2,
      role: 'Front-End Development Bootcamp',
      company: 'Maktab Sharif',
      period: 'Feb 2023 – Jul 2024',
      highlights: [
        'Ranked among the Top 3 students in an intensive 7-month front-end program.',
        'Built production-style projects with React, Redux, Next.js, and modern JavaScript.',
      ],
    },
  ],
  education: {
    school: 'University of Kashan, Iran',
    degree: 'Bachelor of Electrical Engineering',
    period: 'Sep 2017 – May 2021',
  },
};
