'use client';

import { motion } from 'framer-motion';
import type { Skill } from '@/types/portfolio';
import { SectionHeading } from './SectionHeading';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/motion';

const skillIcons: Record<string, string> = {
  polymer: '⚛',
  terminal: '▸',
  code: '{ }',
  palette: '◈',
  settings_input_component: '◇',
  api: '↔',
  database: '⬡',
  storage: '▣',
  lock: '◉',
  docker: '⬢',
};

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-20 md:py-28 px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Technical Stack"
          title="Skills & Tools"
          description="React, Next.js, TypeScript, Redux, Zustand, TanStack Query, Material-UI, Tailwind, Docker, and REST APIs — plus Prisma, PostgreSQL, and Auth.js from FlowBoard."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-5 gap-4 md:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={scaleIn}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group flex flex-col items-center justify-center gap-3 p-6 md:p-8 border border-border rounded-lg bg-surface hover:border-primary/40 hover:bg-surface-elevated transition-colors"
            >
              <span className="text-3xl md:text-4xl text-primary group-hover:scale-110 transition-transform">
                {skillIcons[skill.icon] ?? '◆'}
              </span>
              <span className="font-mono text-[10px] md:text-xs font-semibold uppercase tracking-wider text-center text-muted group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
