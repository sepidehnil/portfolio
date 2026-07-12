'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Profile, Project } from '@/types/portfolio';
import { SectionHeading } from './SectionHeading';
import { staggerContainer, scaleIn } from '@/lib/motion';

interface ProjectsProps {
  projects: Project[];
  profile: Profile;
}

export function Projects({ projects, profile }: ProjectsProps) {
  return (
    <section id="work" className="py-20 md:py-28 px-5 md:px-8 bg-surface/50">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 md:mb-16">
          <SectionHeading
            label="Portfolio"
            title="Featured Projects"
            description="Selected work showcasing front-end engineering, performance, and UI craft."
          />
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex font-mono text-xs font-semibold uppercase tracking-wider text-muted hover:text-primary transition-colors shrink-0"
          >
            View GitHub →
          </a>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden border border-border rounded-xl bg-background hover:border-primary/30 transition-colors"
            >
              {project.image && (
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
              )}
              <div className="flex flex-col flex-1 p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span
                      key={tag}
                      className={`font-mono text-[10px] py-1 px-2 border-l-2 bg-surface-elevated ${
                        j === 0
                          ? 'border-primary text-primary'
                          : j === 1
                            ? 'border-secondary text-secondary'
                            : 'border-border text-muted'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-semibold uppercase tracking-wider text-primary hover:underline"
                    >
                      Live Demo →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-semibold uppercase tracking-wider text-muted hover:text-foreground transition-colors"
                    >
                      Source Code →
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
