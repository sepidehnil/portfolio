'use client';

import { motion } from 'framer-motion';
import { services } from '@/types/portfolio';
import { SectionHeading } from './SectionHeading';
import { fadeInUp, staggerContainer } from '@/lib/motion';

const icons: Record<string, string> = {
  react: '⚛',
  next: '▲',
  frontend: '</>',
  figma: '◇',
  ui: '◈',
};

export function Services() {
  return (
    <section id="services" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Services"
          title="What I can build for you"
          description="Frontend services for founders and teams who need a reliable React and Next.js partner."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/35 hover:bg-surface-elevated"
            >
              <div
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-lg text-primary transition group-hover:border-primary/30"
                aria-hidden
              >
                {icons[service.icon] ?? '◆'}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{service.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
