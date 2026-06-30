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
      title: 'Front-end Engineer',
      email: '3pd.nilforoushan@gmail.com',
      tagline: 'Available for new opportunities',
      heroHeading: 'Building Modern Web Experiences',
      heroHighlight: 'Modern',
      bio: 'Front-end engineer with 3 years of experience developing scalable and performant web applications using React, Next.js, and TypeScript. Focused on building efficient, user-friendly interfaces.',
      github: 'https://github.com/sepidehnil',
      linkedin: 'https://linkedin.com/in/sepideh-nilforoushan',
    },
  });

  const skills = [
    { name: 'React & Redux', icon: 'polymer', order: 0 },
    { name: 'Next.js', icon: 'terminal', order: 1 },
    { name: 'TypeScript', icon: 'code', order: 2 },
    { name: 'Docker', icon: 'settings_input_component', order: 3 },
    { name: 'Tailwind & MUI', icon: 'palette', order: 4 },
  ];
  for (const skill of skills) {
    await prisma.skill.create({ data: skill });
  }

  const projects = [
    {
      title: 'Home Furniture online-shop',
      description:
        'Comprehensive e-commerce platform with client/server functionalities, product management, and seamless checkout.',
      tags: JSON.stringify(['REACT', 'TAILWIND']),
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAW5GPniI73A-my2z1x2g0Eio9YFcgigsbcwOiIq-oIMCgxAx6b6iN5BOsg-wifVsJ8TnwD4w5C92dcvb9fNjqqMWfhokcu_wSYxQAaUNr23DJU6P5qu0PPd8-kx-nvboG-mTMo4n9nIqfOl-dwUiwtTeiNUYo2UeknRIx1dnsZzc8M4eSr_fFu1yoJEUw0WNFJGqVdF8GNK-_WIHiJR08EnyQIxc3b-3VrjNNeWJf_zNKESOSybTUcr2RQyFpd3x0Vje-tSlxVz1g',
      order: 0,
    },
    {
      title: 'Weather Forecast',
      description:
        'Real-time weather platform allowing users to search for global weather data using external APIs.',
      tags: JSON.stringify(['JAVASCRIPT', 'REST API']),
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBdZqZfsDiy3-wrnuvYGJz4G_ODl_YjUMMmXerKzWYlpRjI_dxnFvx5xZdy22aQve6L6YCz5Janjoz0EXpLvJc0YzoMQ-4uRMpmO_7_QD26oRFgg4YugTjfj6ewRpiDBiZtLwUMeYeWzkGGcZo_6ooajo6NEMu79vcwiI7LojCqRgcURXVVXSCunmJ190VxdUHlnSvMra1e82ck7ATok0MGlB6UkyCvus4czZrVWYXWfhlp229qHSipKp9Qsf0PEeK3XXc7BkBHn3Q',
      order: 1,
    },
    {
      title: 'Grocery Cart',
      description:
        'Interactive e-commerce platform for browsing and purchasing groceries with a focus on UI responsiveness.',
      tags: JSON.stringify(['JS', 'CSS']),
      image: null,
      order: 2,
    },
  ];
  for (const project of projects) {
    await prisma.project.create({ data: project });
  }

  await prisma.experience.create({
    data: {
      id: 1,
      role: 'Front-End Developer',
      company: 'Adanic',
      period: 'Aug 2024 – Present',
      highlights: JSON.stringify([
        'Improved load time by 35% through route-based code splitting and lazy loading with next/dynamic.',
        'Designed and implemented a CAPTCHA-based SMS flow, reducing abusive requests by 90%.',
        'Developed front-end features for enterprise banking and insurance platforms (3M+ users).',
      ]),
    },
  });

  await prisma.education.create({
    data: {
      id: 1,
      school: 'University of Kashan, Iran',
      degree: 'Bachelor of Electrical Engineering',
      period: 'Sep 2017 - May 2021',
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
