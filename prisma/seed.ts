import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.contactMessage.deleteMany();
  await prisma.project.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.education.deleteMany();
  await prisma.profile.deleteMany();

  await prisma.profile.create({
    data: {
      id: 1,
      name: 'Sepideh Nilforoushan',
      title: 'Front-End Developer · React & Next.js',
      email: '3pd.nilforoushan@gmail.com',
      phone: '+1 (647) 655-3294',
      location: 'Canada',
      tagline: 'Available for freelance projects',
      heroHeading:
        'I build fast, responsive React and Next.js websites for businesses and startups.',
      heroHighlight: 'React and Next.js',
      bio: 'I help founders and businesses turn ideas into clean, production-ready frontends — with React, Next.js, and TypeScript. My focus is usable interfaces, solid performance, and code that is easy to maintain after launch.',
      github: 'https://github.com/sepidehnil',
      linkedin: 'https://linkedin.com/in/sepideh-nilforoushan',
    },
  });

  const skills = [
    { name: 'React & Redux', icon: 'polymer', order: 0 },
    { name: 'Next.js & TypeScript', icon: 'terminal', order: 1 },
    { name: 'Zustand & TanStack Query', icon: 'code', order: 2 },
    { name: 'Material-UI & Tailwind', icon: 'palette', order: 3 },
    { name: 'Docker & REST APIs', icon: 'api', order: 4 },
    { name: 'HTML, CSS & SCSS', icon: 'settings_input_component', order: 5 },
  ];
  for (const skill of skills) {
    await prisma.skill.create({ data: skill });
  }

  const projects = [
    {
      title: 'Velora — Premium Footwear',
      description:
        'A modern e-commerce storefront for premium sneakers — featured collections, category browsing, product cards, and a polished responsive shopping experience.',
      tags: JSON.stringify(['REACT', 'TAILWIND', 'E-COMMERCE']),
      image: '/velora-brand.png',
      liveUrl: 'https://shoea-eight.vercel.app/',
      githubUrl: null,
      order: 0,
    },
    {
      title: 'Weather Forecast',
      description:
        'A weather forecasting app that lets users search global weather data via REST APIs, with a responsive UI, smooth animations, and authentication flow.',
      tags: JSON.stringify(['JAVASCRIPT', 'TAILWIND', 'REST API']),
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBdZqZfsDiy3-wrnuvYGJz4G_ODl_YjUMMmXerKzWYlpRjI_dxnFvx5xZdy22aQve6L6YCz5Janjoz0EXpLvJc0YzoMQ-4uRMpmO_7_QD26oRFgg4YugTjfj6ewRpiDBiZtLwUMeYeWzkGGcZo_6ooajo6NEMu79vcwiI7LojCqRgcURXVVXSCunmJ190VxdUHlnSvMra1e82ck7ATok0MGlB6UkyCvus4czZrVWYXWfhlp229qHSipKp9Qsf0PEeK3XXc7BkBHn3Q',
      liveUrl: 'https://weather-forecast-jw9qduwtc-gfdg3.vercel.app/',
      githubUrl: null,
      order: 1,
    },
    {
      title: 'Luxury Home Online Shop',
      description:
        'Full-stack e-commerce platform with client and server-side features — seamless shopping for users and admin tools for managing products, orders, and accounts.',
      tags: JSON.stringify(['REACT', 'TAILWIND', 'MUI', 'REACT QUERY', 'REST API']),
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAW5GPniI73A-my2z1x2g0Eio9YFcgigsbcwOiIq-oIMCgxAx6b6iN5BOsg-wifVsJ8TnwD4w5C92dcvb9fNjqqMWfhokcu_wSYxQAaUNr23DJU6P5qu0PPd8-kx-nvboG-mTMo4n9nIqfOl-dwUiwtTeiNUYo2UeknRIx1dnsZzc8M4eSr_fFu1yoJEUw0WNFJGqVdF8GNK-_WIHiJR08EnyQIxc3b-3VrjNNeWJf_zNKESOSybTUcr2RQyFpd3x0Vje-tSlxVz1g',
      liveUrl: null,
      githubUrl: 'https://github.com/sepidehnil/Luxury-Home-Online-Shop',
      order: 2,
    },
  ];
  for (const project of projects) {
    await prisma.project.create({ data: project });
  }

  const experiences = [
    {
      role: 'Front-End Developer',
      company: 'Adanic',
      period: 'Aug 2024 – Present',
      order: 0,
      highlights: JSON.stringify([
        'Developed features for enterprise banking and insurance platforms (3M+ users) using React, Next.js, and TypeScript.',
        'Improved load time by 35% through route-based code splitting and lazy loading with next/dynamic.',
        'Implemented SSR for improved performance and SEO across production applications.',
        'Designed and implemented a CAPTCHA-based SMS flow, reducing abusive requests by 90%.',
        'Collaborated in Agile (Scrum) environments with cross-functional engineering teams.',
        'Maintained whitelist configuration features for secure enterprise deployments.',
      ]),
    },
    {
      role: 'Front-End Development Bootcamp',
      company: 'Maktab Sharif',
      period: 'Feb 2023 – Jul 2024',
      order: 1,
      highlights: JSON.stringify([
        'Ranked among the Top 3 students in an intensive 7-month front-end development program.',
        'Built multiple projects using React, Redux, Next.js, and modern JavaScript (ES6+).',
        'Strengthened fundamentals in component architecture, state management, and RESTful API integration.',
      ]),
    },
  ];
  for (const experience of experiences) {
    await prisma.experience.create({ data: experience });
  }

  await prisma.education.create({
    data: {
      id: 1,
      school: 'University of Kashan, Iran',
      degree: 'Bachelor of Electrical Engineering',
      period: 'Sep 2017 – May 2021',
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
