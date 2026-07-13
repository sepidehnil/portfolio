'use client';

import { motion } from 'framer-motion';
import { services } from '@/types/portfolio';
import { SectionHeading } from './SectionHeading';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export function Services() {
  return (
    <section id="services" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Services"
          title="How I can help your business"
          description="Practical frontend services for founders and teams who need a reliable React/Next.js partner."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={fadeInUp}
              className="rounded-2xl border border-border bg-surface p-6 transition hover:border-primary/30 hover:bg-surface-elevated"
            >
              <p className="mb-3 font-mono text-xs text-primary">0{index + 1}</p>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{service.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
