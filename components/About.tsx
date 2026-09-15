'use client';

import { motion } from 'framer-motion';
import type { Profile } from '@/types/portfolio';
import { SectionHeading } from './SectionHeading';
import { fadeInUp } from '@/lib/motion';

interface AboutProps {
  profile: Profile;
}

export function About({ profile }: AboutProps) {
  return (
    <section id="about" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About"
          title="Web developer with 3 years of experience"
          description="Scalable, performant web applications with React, Next.js, Redux, and TypeScript — plus REST APIs and structured architecture."
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
            <p>
              I&apos;m {profile.name}, a web developer with 3 years of experience developing
              scalable and performant web applications using{' '}
              <strong className="font-semibold text-foreground">React</strong>,{' '}
              <strong className="font-semibold text-foreground">Next.js</strong>,{' '}
              <strong className="font-semibold text-foreground">Redux</strong>, and{' '}
              <strong className="font-semibold text-foreground">TypeScript</strong>. Strong
              background in responsive UI development, RESTful API integration, and code quality
              through version control and structured architecture.
            </p>
            <p>
              At Adanic I developed front-end features for enterprise banking and insurance
              platforms serving 3M+ users. At RayDana I built and maintained enterprise web
              applications with React, TypeScript, and Next.js — reusable UI components, REST API
              integrations, and performance improvements.
            </p>
            <p>
              I stay focused on efficient, user-friendly interfaces while optimizing performance and
              maintainability — and I keep aligning with modern development standards, including
              Prisma, PostgreSQL, and Auth.js on products like FlowBoard.
            </p>
          </div>

          <aside className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Focus areas
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              {[
                'React, Next.js, Redux, and TypeScript',
                'Responsive UI development',
                'RESTful API integration',
                'Enterprise banking and insurance UI',
                'Performance, SSR, and maintainability',
                'Prisma, PostgreSQL, and Auth.js',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
