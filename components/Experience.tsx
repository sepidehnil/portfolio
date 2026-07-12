'use client';

import { motion } from 'framer-motion';
import type { Experience as ExperienceType, Education as EducationType } from '@/types/portfolio';
import { SectionHeading } from './SectionHeading';
import { fadeInUp, staggerContainer } from '@/lib/motion';

interface ExperienceProps {
  experiences: ExperienceType[];
  education: EducationType;
}

export function Experience({ experiences, education }: ExperienceProps) {
  return (
    <section id="about" className="py-20 md:py-28 px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Background"
          title="Experience & Education"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-6"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={fadeInUp}
              className="p-6 md:p-8 border border-border rounded-xl bg-surface hover:border-primary/20 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-primary">{exp.role}</h3>
                  <p className="text-muted">{exp.company}</p>
                </div>
                <span className="font-mono text-sm text-secondary shrink-0">{exp.period}</span>
              </div>
              <ul className="space-y-2 text-muted text-sm leading-relaxed list-disc list-inside">
                {exp.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            variants={fadeInUp}
            className="p-6 md:p-8 border border-border rounded-xl bg-surface-elevated/50"
          >
            <h3 className="text-lg font-bold mb-1">{education.school}</h3>
            <p className="text-muted mb-2">{education.degree}</p>
            <span className="font-mono text-sm text-secondary">{education.period}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
