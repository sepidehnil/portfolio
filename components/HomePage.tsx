'use client';

import type { PortfolioData } from '@/types/portfolio';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Experience } from './Experience';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';

interface HomePageProps {
  data: PortfolioData;
}

export function HomePage({ data }: HomePageProps) {
  return (
    <>
      <Navbar profile={data.profile} />
      <main>
        <Hero profile={data.profile} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} profile={data.profile} />
        <Experience experiences={data.experiences} education={data.education} />
        <ContactForm profile={data.profile} />
      </main>
      <Footer profile={data.profile} />
    </>
  );
}
