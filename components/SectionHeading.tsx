'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="mb-12 md:mb-16"
    >
      {label && (
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
        {title}
      </h2>
      <div className="h-1 w-12 bg-primary rounded-full mb-4" />
      {description && (
        <p className="text-muted max-w-2xl text-base md:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
