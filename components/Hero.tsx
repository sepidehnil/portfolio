'use client';

import { motion } from 'framer-motion';
import type { Profile } from '@/types/portfolio';

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[88vh] items-center overflow-hidden px-5 pb-20 pt-28 md:px-8 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-[90px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/80 px-3 py-1.5 font-mono text-xs text-muted"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" aria-hidden />
            {profile.tagline} · {profile.location}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary"
          >
            {profile.title}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl md:text-[3.25rem]"
          >
            I build fast, responsive{' '}
            <span className="text-primary">React</span> and{' '}
            <span className="text-primary">Next.js</span> websites for businesses and startups.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-9 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-[#003258] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-surface-elevated"
            >
              Hire Me
            </a>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="rounded-2xl border border-border bg-surface/80 p-6 backdrop-blur-sm md:p-8"
          aria-label="Quick highlights"
        >
          <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            What clients get
          </p>
          <ul className="space-y-4 text-sm text-muted">
            {[
              'Production-ready React / Next.js frontends',
              'Responsive UI that matches your brand',
              'Performance and maintainability baked in',
              'Clear updates from kickoff to delivery',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-2 gap-3 border-t border-border pt-6">
            <div>
              <p className="text-2xl font-bold text-foreground">3+</p>
              <p className="text-xs text-muted">Years experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">3M+</p>
              <p className="text-xs text-muted">Users impacted at work</p>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
