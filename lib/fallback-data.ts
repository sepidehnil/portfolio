import type { PortfolioData } from '@/types/portfolio';

/** Used when the database is unavailable (e.g. Vercel without Postgres). */
export const fallbackPortfolio: PortfolioData = {
  profile: {
    name: 'Sepideh Nilforoushan',
    title: 'Front-End Developer · React & Next.js',
    email: '3pd.nilforoushan@gmail.com',
    phone: '+1 (647) 655-3294',
    location: 'Canada',
    tagline: 'Available for freelance projects',
    heroHeading: 'I build fast, responsive React and Next.js websites for businesses and startups.',
    heroHighlight: 'React and Next.js',
    bio: 'I help founders and businesses turn ideas into clean, production-ready frontends — with React, Next.js, and TypeScript. My focus is usable interfaces, solid performance, and code that is easy to maintain after launch.',
    github: 'https://github.com/sepidehnil',
    linkedin: 'https://linkedin.com/in/sepideh-nilforoushan',
  },
  skills: [
    { id: 1, name: 'React & Redux', icon: 'polymer' },
    { id: 2, name: 'Next.js & TypeScript', icon: 'terminal' },
    { id: 3, name: 'Zustand & TanStack Query', icon: 'code' },
    { id: 4, name: 'Material-UI & Tailwind', icon: 'palette' },
    { id: 5, name: 'Docker & REST APIs', icon: 'api' },
    { id: 6, name: 'HTML, CSS & SCSS', icon: 'settings_input_component' },
  ],
  projects: [
    {
      id: 1,
      title: 'Velora — Premium Footwear',
      description:
        'Built a responsive e-commerce storefront for a premium footwear brand — product browsing, category filters, and a polished shopping experience aimed at conversion.',
      tags: ['React', 'Tailwind CSS', 'E-commerce'],
      image: '/velora-brand.png',
      liveUrl: 'https://shoea-eight.vercel.app/',
      githubUrl: null,
    },
    {
      id: 2,
      title: 'Weather Forecast',
      description:
        'Created a weather search app that helps users get real-time conditions by location, with a clean interface and smooth interactions for everyday use.',
      tags: ['JavaScript', 'Tailwind CSS', 'REST API'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBdZqZfsDiy3-wrnuvYGJz4G_ODl_YjUMMmXerKzWYlpRjI_dxnFvx5xZdy22aQve6L6YCz5Janjoz0EXpLvJc0YzoMQ-4uRMpmO_7_QD26oRFgg4YugTjfj6ewRpiDBiZtLwUMeYeWzkGGcZo_6ooajo6NEMu79vcwiI7LojCqRgcURXVVXSCunmJ190VxdUHlnSvMra1e82ck7ATok0MGlB6UkyCvus4czZrVWYXWfhlp229qHSipKp9Qsf0PEeK3XXc7BkBHn3Q',
      liveUrl: 'https://weather-forecast-jw9qduwtc-gfdg3.vercel.app/',
      githubUrl: null,
    },
    {
      id: 3,
      title: 'Luxury Home Online Shop',
      description:
        'Developed a furniture e-commerce platform so customers can shop smoothly while admins manage products, orders, and accounts efficiently.',
      tags: ['React', 'Tailwind CSS', 'MUI', 'React Query'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAW5GPniI73A-my2z1x2g0Eio9YFcgigsbcwOiIq-oIMCgxAx6b6iN5BOsg-wifVsJ8TnwD4w5C92dcvb9fNjqqMWfhokcu_wSYxQAaUNr23DJU6P5qu0PPd8-kx-nvboG-mTMo4n9nIqfOl-dwUiwtTeiNUYo2UeknRIx1dnsZzc8M4eSr_fFu1yoJEUw0WNFJGqVdF8GNK-_WIHiJR08EnyQIxc3b-3VrjNNeWJf_zNKESOSybTUcr2RQyFpd3x0Vje-tSlxVz1g',
      liveUrl: null,
      githubUrl: 'https://github.com/sepidehnil/Luxury-Home-Online-Shop',
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
