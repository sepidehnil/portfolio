'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Profile, Project } from '@/types/portfolio';
import { SectionHeading } from './SectionHeading';
import { fadeInUp, staggerContainer } from '@/lib/motion';

interface ProjectsProps {
  projects: Project[];
  profile: Profile;
}

export function Projects({ projects, profile }: ProjectsProps) {
  return (
    <section id="work" className="bg-surface/40 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            label="Selected work"
            title="Project case studies"
            description="Business-focused builds with clear outcomes — responsive UI, clean architecture, and production delivery."
          />
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 text-sm font-medium text-muted transition hover:text-primary sm:inline-flex"
          >
            View GitHub →
          </a>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-10"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={fadeInUp}
              className="group overflow-hidden rounded-2xl border border-border bg-background transition hover:border-primary/25 hover:shadow-[0_0_0_1px_rgba(159,202,255,0.08)]"
            >
              <div
                className={`grid lg:grid-cols-2 ${
                  index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div className="relative min-h-[260px] overflow-hidden bg-surface-elevated md:min-h-[320px]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title} project`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      priority={index === 0}
                    />
                  ) : (
                    <div className="flex h-full min-h-[260px] items-center justify-center text-sm text-muted">
                      Project preview
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>

                <div className="flex flex-col p-6 md:p-8 lg:p-10">
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-primary">
                    Case study 0{index + 1}
                  </p>
                  <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground md:text-[1.75rem]">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted md:text-base">
                    {project.description}
                  </p>

                  {project.role && (
                    <div className="mb-5">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-foreground">
                        My contribution
                      </p>
                      <p className="text-sm text-muted">{project.role}</p>
                    </div>
                  )}

                  {project.features && project.features.length > 0 && (
                    <div className="mb-5">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground">
                        Features
                      </p>
                      <ul className="space-y-1.5 text-sm text-muted">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-secondary" aria-hidden />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-6">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 border-t border-border pt-5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-[#003258] transition hover:-translate-y-0.5 hover:opacity-90"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-surface"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
