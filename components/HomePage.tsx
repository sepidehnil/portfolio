'use client';

import { Toolbar } from '@mui/material';
import type { PortfolioData } from '@/types/portfolio';
import { Header } from './Header';
import { Hero } from './Hero';
import { Skills } from './Skills';
import { Education } from './Education';
import { WorkExperience } from './WorkExperience';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer } from './Footer';

interface HomePageProps {
  data: PortfolioData;
}

export function HomePage({ data }: HomePageProps) {
  return (
    <>
      <Header profile={data.profile} />
      <Toolbar />
      <main>
        <Hero profile={data.profile} />
        <Skills skills={data.skills} />
        <Education education={data.education} />
        <WorkExperience experience={data.experience} />
        <Projects projects={data.projects} profile={data.profile} />
        <Contact profile={data.profile} />
      </main>
      <Footer profile={data.profile} />
    </>
  );
}
