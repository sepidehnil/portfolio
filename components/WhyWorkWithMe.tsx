'use client';

import { motion } from 'framer-motion';
import { whyClientsChooseMe } from '@/types/portfolio';
import { SectionHeading } from './SectionHeading';
import { fadeInUp, staggerContainer } from '@/lib/motion';

const icons: Record<string, string> = {
  code: '{ }',
  responsive: '▣',
  performance: '⚡',
  pixel: '◎',
  comms: '◉',
  delivery: '✓',
};

export function WhyWorkWithMe() {
  return (
    <section id="why" className="bg-surface/40 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Why clients choose me"
          title="A frontend partner you can trust"
          description="Every engagement is built around quality, clarity, and delivery — not just demos."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyClientsChooseMe.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeInUp}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-border bg-background p-6 transition hover:border-primary/30"
            >
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-sm text-secondary"
                aria-hidden
              >
                {icons[item.icon] ?? '◆'}
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
