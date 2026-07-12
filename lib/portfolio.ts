import { prisma } from './prisma';
import { fallbackPortfolio } from './fallback-data';
import type { PortfolioData, SkillIcon } from '@/types/portfolio';

export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    const [profile, skills, projects, experiences, education] = await Promise.all([
      prisma.profile.findFirst(),
      prisma.skill.findMany({ orderBy: { order: 'asc' } }),
      prisma.project.findMany({ orderBy: { order: 'asc' } }),
      prisma.experience.findMany({ orderBy: { order: 'asc' } }),
      prisma.education.findFirst(),
    ]);

    if (!profile || experiences.length === 0 || !education) {
      return fallbackPortfolio;
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
        liveUrl: p.liveUrl,
        githubUrl: p.githubUrl,
      })),
      experiences: experiences.map((e) => ({
        id: e.id,
        role: e.role,
        company: e.company,
        period: e.period,
        highlights: JSON.parse(e.highlights) as string[],
      })),
      education,
    };
  } catch (error) {
    console.warn('Database unavailable, using fallback portfolio data:', error);
    return fallbackPortfolio;
  }
}
