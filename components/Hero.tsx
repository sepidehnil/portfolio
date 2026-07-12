'use client';

import { motion } from 'framer-motion';
import type { Profile } from '@/types/portfolio';
import { HIGHLIGHT_TERMS } from '@/types/portfolio';
import { fadeInUp } from '@/lib/motion';

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  const parts = profile.heroHeading.split(profile.heroHighlight);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-5 md:px-8 pt-24 pb-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#9fcaff 1px, transparent 1px), linear-gradient(90deg, #9fcaff 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/60 backdrop-blur-sm px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="font-mono text-sm text-muted">{profile.tagline}</span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          {parts[0]}
          <span className="text-primary">{profile.heroHighlight}</span>
          {parts[1]}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-muted text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {profile.bio.split(new RegExp(`(${HIGHLIGHT_TERMS.join('|')})`)).map((part, i) =>
            (HIGHLIGHT_TERMS as readonly string[]).includes(part) ? (
              <strong key={i} className="text-foreground font-semibold">
                {part}
              </strong>
            ) : (
              part
            ),
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-[#003258] font-mono text-xs font-semibold uppercase tracking-wider rounded hover:-translate-y-0.5 transition-transform"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 border border-border text-foreground font-mono text-xs font-semibold uppercase tracking-wider rounded hover:bg-surface-elevated transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 font-mono text-sm text-muted"
        >
          {profile.title} · {profile.location}
        </motion.p>
      </div>
    </section>
  );
}
