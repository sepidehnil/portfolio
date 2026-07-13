'use client';

import { motion } from 'framer-motion';
import type { Profile } from '@/types/portfolio';
import { SectionHeading } from './SectionHeading';
import { fadeInUp } from '@/lib/motion';

interface AboutProps {
  profile: Profile;
}

export function About({ profile }: AboutProps) {
  return (
    <section id="about" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About"
          title="I build interfaces that support real business goals"
          description="Frontend work that balances user experience, performance, and maintainable architecture."
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
            <p>
              I&apos;m {profile.name}, a frontend developer specializing in{' '}
              <strong className="font-semibold text-foreground">React</strong> and{' '}
              <strong className="font-semibold text-foreground">Next.js</strong>. I partner with
              startups and businesses to turn product requirements into responsive, scalable web
              experiences that feel polished and stay maintainable after launch.
            </p>
            <p>
              My approach is practical: understand the problem, plan a clean component architecture,
              and ship interfaces that load quickly, work across devices, and respect accessibility
              basics. Whether it&apos;s a marketing site, dashboard, or e-commerce UI, I focus on
              clarity for users and reliability for your team.
            </p>
            <p>
              At Adanic, I&apos;ve contributed to enterprise banking and insurance platforms used by
              millions of people — where performance, correctness, and careful delivery matter.
            </p>
          </div>

          <aside className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Focus areas
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              {[
                'Solving business problems with clear UI',
                'Building scalable component systems',
                'Clean architecture and maintainable code',
                'Performance optimization',
                'User experience and responsive design',
                'Accessible, semantic frontend markup',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
