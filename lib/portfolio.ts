import { prisma } from './prisma';
import type { PortfolioData, SkillIcon } from '@/types/portfolio';

export async function getPortfolioData(): Promise<PortfolioData> {
  const [profile, skills, projects, experience, education] = await Promise.all([
    prisma.profile.findFirst(),
    prisma.skill.findMany({ orderBy: { order: 'asc' } }),
    prisma.project.findMany({ orderBy: { order: 'asc' } }),
    prisma.experience.findFirst(),
    prisma.education.findFirst(),
  ]);

  if (!profile || !experience || !education) {
    throw new Error('Portfolio data not seeded. Run: npm run db:push && npm run db:seed');
  }

  return {
    profile,
    skills: skills.map((s) => ({
      id: s.id,
      name: s.name,
      icon: s.icon as SkillIcon,
    })),
    projects: projects.map((p) => ({
      id: p.id,
      title: p.title,
      description: p.description,
      tags: JSON.parse(p.tags) as string[],
      image: p.image,
    })),
    experience: {
      role: experience.role,
      company: experience.company,
      period: experience.period,
      highlights: JSON.parse(experience.highlights) as string[],
    },
    education,
  };
}
