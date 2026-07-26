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
          title="Enterprise-ready frontend, delivered on time"
          description="Banking and large-scale UI experience with React and Next.js — polished interfaces that ship when promised."
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
              I&apos;m {profile.name}, a frontend developer specializing in{' '}
              <strong className="font-semibold text-foreground">React</strong> and{' '}
              <strong className="font-semibold text-foreground">Next.js</strong>. I work on
              interfaces that need to perform at scale — from product sites to enterprise platforms
              where clarity, speed, and reliability matter.
            </p>
            <p>
              Through my work at Adanic, I&apos;ve built and improved UI for banking and insurance
              platforms serving millions of users. That environment taught me to write careful,
              maintainable frontend code and to deliver on deadline without sacrificing quality.
            </p>
            <p>
              Whether you need a marketing site, dashboard, or e-commerce experience, I bring the
              same standards: clean architecture, responsive design, and communication you can count
              on from kickoff to launch.
            </p>
          </div>

          <aside className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Focus areas
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              {[
                'Enterprise and banking UI at scale',
                'Reliable delivery on deadline',
                'Scalable React component systems',
                'Maintainable, production-ready code',
                'Performance and responsive design',
                'Figma-to-code implementation',
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
