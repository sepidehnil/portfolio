import { portfolioData } from './portfolio-data';
import { projectDetails } from './project-details';
import type { PortfolioData, Project } from '@/types/portfolio';

function enrichProject(project: Project): Project {
  const details = projectDetails[project.title];
  if (!details) return project;
  return {
    ...project,
    description: details.description ?? project.description,
    role: details.role,
    features: details.features,
  };
}

/** Portfolio content is static — edit `lib/portfolio-data.ts` to update. */
export function getPortfolioData(): PortfolioData {
  return {
    ...portfolioData,
    projects: portfolioData.projects.map(enrichProject),
  };
}
