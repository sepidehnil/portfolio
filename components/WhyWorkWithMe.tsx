'use client';

import { motion } from 'framer-motion';
import { whyWorkWithMe } from '@/types/portfolio';
import { SectionHeading } from './SectionHeading';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export function WhyWorkWithMe() {
  return (
    <section id="why" className="bg-surface/40 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Why work with me"
          title="A frontend partner you can rely on"
          description="Built for clients who care about quality, communication, and delivery — not just pretty demos."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {whyWorkWithMe.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeInUp}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <h3 className="mb-2 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
