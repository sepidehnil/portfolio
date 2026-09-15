'use client';

import { motion } from 'framer-motion';
import { techStack } from '@/types/portfolio';
import { SectionHeading } from './SectionHeading';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export function TechStack() {
  return (
    <section id="stack" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Tech stack"
          title="Tools I use to ship production apps"
          description="React, Next.js, TypeScript, and REST APIs — the same stack on my resume, including Prisma, PostgreSQL, and Auth.js on FlowBoard."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {techStack.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeInUp}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2" aria-label={`${group.category} technologies`}>
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted transition hover:border-primary/30 hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
