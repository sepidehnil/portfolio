'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import type { Profile, Project } from '@/types/portfolio';
import { SectionHeading } from './SectionHeading';
import { fadeInUp, staggerContainer } from '@/lib/motion';

interface ProjectsProps {
  projects: Project[];
  profile: Profile;
}

function accentVars(color: string): CSSProperties {
  return {
    ['--project-accent' as string]: color,
    ['--project-accent-soft' as string]: `${color}33`,
    ['--project-accent-border' as string]: `${color}40`,
  };
}

export function Projects({ projects, profile }: ProjectsProps) {
  return (
    <section id="work" className="bg-surface/40 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            label="Selected work"
            title="Featured projects"
            description="Projects from my resume — Ventura, FlowBoard, Luxury Home, and Weather Forecast."
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
          {projects.map((project, index) => {
            const openHref = project.liveUrl ?? project.githubUrl;

            return (
              <motion.article
                key={project.id}
                variants={fadeInUp}
                style={accentVars(project.accentColor)}
                className="group overflow-hidden rounded-2xl border border-border bg-background transition hover:border-[color:var(--project-accent-border)] hover:shadow-[0_0_0_1px_var(--project-accent-soft)]"
              >
                <div
                  className={`grid lg:grid-cols-2 ${
                    index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
                  }`}
                >
                  <div className="relative min-h-[260px] overflow-hidden bg-surface-elevated md:min-h-[320px] lg:min-h-full">
                    {openHref ? (
                      <a
                        href={openHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10"
                        aria-label={`Open ${project.title}`}
                      >
                        <span className="sr-only">Open project</span>
                      </a>
                    ) : null}

                    {project.image ? (
                      <>
                        {/* Soft fill so the box stays covered while the main image zooms out */}
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="scale-110 object-cover blur-2xl"
                          aria-hidden
                          loading={index === 0 ? 'eager' : 'lazy'}
                        />
                        <Image
                          src={project.image}
                          alt={`Screenshot of ${project.title} project`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-contain transition duration-700 group-hover:scale-[1.02]"
                          loading={index === 0 ? 'eager' : 'lazy'}
                          priority={index === 0}
                        />
                      </>
                    ) : (
                      <div className="flex h-full min-h-[260px] items-center justify-center text-sm text-muted">
                        Project preview
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-1"
                      style={{ backgroundColor: project.accentColor }}
                      aria-hidden
                    />
                    {openHref ? (
                      <div className="pointer-events-none absolute inset-0 z-[11] flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                        <span
                          className="rounded-lg px-4 py-2 text-sm font-semibold text-[#0a0a0b] shadow-lg"
                          style={{ backgroundColor: project.accentColor }}
                        >
                          {project.liveUrl ? 'View live site →' : 'View on GitHub →'}
                        </span>
                      </div>
                    ) : null}
                  </div>

                  <div
                    className="flex flex-col border-l-0 p-6 md:p-8 lg:border-l-4 lg:p-10"
                    style={{ borderLeftColor: project.accentColor }}
                  >
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
                              <span
                                className="mt-2 h-1 w-1 shrink-0 rounded-full"
                                style={{ backgroundColor: project.accentColor }}
                                aria-hidden
                              />
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
                            className="rounded-md border px-2.5 py-1 font-mono text-[11px] text-muted"
                            style={{
                              borderColor: `${project.accentColor}55`,
                              backgroundColor: `${project.accentColor}14`,
                            }}
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
                          className="inline-flex items-center rounded-lg px-4 py-2.5 text-sm font-semibold text-[#0a0a0b] transition hover:-translate-y-0.5 hover:opacity-90"
                          style={{ backgroundColor: project.accentColor }}
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-lg border px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-surface"
                          style={{ borderColor: `${project.accentColor}66` }}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
