'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/types/portfolio';
import { SectionHeading } from './SectionHeading';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export function Process() {
  return (
    <section id="process" className="bg-surface/40 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Process"
          title="How I Work"
          description="A clear path from requirements to delivery — so you always know what happens next."
        />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          <div
            className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
            aria-hidden
          />
          {processSteps.map((step) => (
            <motion.li
              key={step.step}
              variants={fadeInUp}
              className="relative rounded-2xl border border-border bg-background p-6"
            >
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-mono text-xs font-semibold text-primary">
                {step.step}
              </span>
              <h3 className="mb-2 text-base font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
