'use client';

import { motion } from 'framer-motion';
import type { Profile } from '@/types/portfolio';
import { heroTrustPoints } from '@/types/portfolio';

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center overflow-hidden px-5 pb-20 pt-28 md:px-8 md:pb-28"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-1/2 top-[-10%] h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-primary/12 blur-[110px]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-80 w-80 rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/80 px-3.5 py-1.5 font-mono text-xs text-muted"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" aria-hidden />
          {profile.title} · {profile.location}
        </motion.p>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          I build scalable web apps with{' '}
          <span className="text-primary">React</span>,{' '}
          <span className="text-primary">Next.js</span> &{' '}
          <span className="text-primary">TypeScript</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-10 max-w-2xl text-base leading-relaxed text-muted md:text-xl"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-[#003258] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-surface-elevated"
          >
            Hire Me
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap gap-x-6 gap-y-3"
          aria-label="Trust indicators"
        >
          {heroTrustPoints.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm text-muted">
              <span className="text-secondary" aria-hidden>
                ✓
              </span>
              {point}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
