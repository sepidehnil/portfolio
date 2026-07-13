'use client';

import type { PortfolioData } from '@/types/portfolio';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Services } from './Services';
import { Projects } from './Projects';
import { WhyWorkWithMe } from './WhyWorkWithMe';
import { About } from './About';
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
      <main id="main">
        <Hero profile={data.profile} />
        <Services />
        <Projects projects={data.projects} profile={data.profile} />
        <WhyWorkWithMe />
        <About profile={data.profile} skills={data.skills} />
        <Experience experiences={data.experiences} education={data.education} />
        <ContactForm profile={data.profile} />
      </main>
      <Footer profile={data.profile} />
    </>
  );
}
