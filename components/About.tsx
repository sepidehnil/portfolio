'use client';

import { motion } from 'framer-motion';
import type { Profile, Skill } from '@/types/portfolio';
import { SectionHeading } from './SectionHeading';
import { fadeInUp } from '@/lib/motion';

interface AboutProps {
  profile: Profile;
  skills: Skill[];
}

export function About({ profile, skills }: AboutProps) {
  return (
    <section id="about" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About"
          title="Frontend developer focused on business outcomes"
          description="I build interfaces people can actually use — and codebases teams can keep shipping on."
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5 text-base leading-relaxed text-muted"
          >
            <p>
              I&apos;m {profile.name}, a front-end developer specializing in{' '}
              <strong className="font-semibold text-foreground">React</strong>,{' '}
              <strong className="font-semibold text-foreground">Next.js</strong>, and{' '}
              <strong className="font-semibold text-foreground">TypeScript</strong>. I work with
              startups and businesses that need a dependable developer to turn product requirements
              into polished, responsive web experiences.
            </p>
            <p>
              Day to day, that means translating designs into production UI, connecting APIs cleanly,
              fixing performance issues, and making sure the result still feels fast on real devices.
              At Adanic, I&apos;ve shipped features used by millions of users in regulated products —
              where reliability and clarity matter.
            </p>
            <p>
              If you need someone who can own the frontend of your Upwork project — from Figma to
              deployable Next.js — I&apos;m ready to help.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-surface p-6 md:p-8"
          >
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Core stack
            </h3>
            <ul className="flex flex-wrap gap-2" aria-label="Technologies">
              {skills.map((skill) => (
                <li
                  key={skill.id}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted"
                >
                  {skill.name}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3 border-t border-border pt-6 text-sm text-muted">
              <p>
                <span className="text-foreground">Strengths:</span> UI architecture, responsive
                layouts, API integration, performance tuning.
              </p>
              <p>
                <span className="text-foreground">Based in:</span> {profile.location}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
