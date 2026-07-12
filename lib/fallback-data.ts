import type { PortfolioData } from '@/types/portfolio';

/** Used when the database is unavailable (e.g. Vercel without Postgres). */
export const fallbackPortfolio: PortfolioData = {
  profile: {
    name: 'Sepideh Nilforoushan',
    title: 'Front-End Developer',
    email: '3pd.nilforoushan@gmail.com',
    phone: '+1 (647) 655-3294',
    location: 'Canada',
    tagline: 'Available for new opportunities',
    heroHeading: 'Building Modern Web Experiences',
    heroHighlight: 'Modern',
    bio: 'Front-end engineer with 3 years of experience developing scalable and performant web applications using React, Next.js, Redux, and TypeScript. Strong background in responsive UI development, RESTful API integration, and code quality through version control and structured architecture. Focused on building efficient, user-friendly interfaces while optimizing performance and maintainability. Continuously improving technical expertise and staying aligned with modern development standards.',
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
        'A modern e-commerce storefront for premium sneakers — featured collections, category browsing, product cards, and a polished responsive shopping experience.',
      tags: ['REACT', 'TAILWIND', 'E-COMMERCE'],
      image: '/velora-brand.png',
      liveUrl: 'https://shoea-eight.vercel.app/',
      githubUrl: null,
    },
    {
      id: 2,
      title: 'Weather Forecast',
      description:
        'A weather forecasting app that lets users search global weather data via REST APIs, with a responsive UI, smooth animations, and authentication flow.',
      tags: ['JAVASCRIPT', 'TAILWIND', 'REST API'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBdZqZfsDiy3-wrnuvYGJz4G_ODl_YjUMMmXerKzWYlpRjI_dxnFvx5xZdy22aQve6L6YCz5Janjoz0EXpLvJc0YzoMQ-4uRMpmO_7_QD26oRFgg4YugTjfj6ewRpiDBiZtLwUMeYeWzkGGcZo_6ooajo6NEMu79vcwiI7LojCqRgcURXVVXSCunmJ190VxdUHlnSvMra1e82ck7ATok0MGlB6UkyCvus4czZrVWYXWfhlp229qHSipKp9Qsf0PEeK3XXc7BkBHn3Q',
      liveUrl: 'https://weather-forecast-jw9qduwtc-gfdg3.vercel.app/',
      githubUrl: null,
    },
    {
      id: 3,
      title: 'Luxury Home Online Shop',
      description:
        'Full-stack e-commerce platform with client and server-side features — seamless shopping for users and admin tools for managing products, orders, and accounts.',
      tags: ['REACT', 'TAILWIND', 'MUI', 'REACT QUERY', 'REST API'],
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
        'Developed features for enterprise banking and insurance platforms (3M+ users) using React, Next.js, and TypeScript.',
        'Improved load time by 35% through route-based code splitting and lazy loading with next/dynamic.',
        'Implemented SSR for improved performance and SEO across production applications.',
        'Designed and implemented a CAPTCHA-based SMS flow, reducing abusive requests by 90%.',
        'Collaborated in Agile (Scrum) environments with cross-functional engineering teams.',
        'Maintained whitelist configuration features for secure enterprise deployments.',
      ],
    },
    {
      id: 2,
      role: 'Front-End Development Bootcamp',
      company: 'Maktab Sharif',
      period: 'Feb 2023 – Jul 2024',
      highlights: [
        'Ranked among the Top 3 students in an intensive 7-month front-end development program.',
        'Built multiple projects using React, Redux, Next.js, and modern JavaScript (ES6+).',
        'Strengthened fundamentals in component architecture, state management, and RESTful API integration.',
      ],
    },
  ],
  education: {
    school: 'University of Kashan, Iran',
    degree: 'Bachelor of Electrical Engineering',
    period: 'Sep 2017 – May 2021',
  },
};
