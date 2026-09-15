'use client';

import type { Profile } from '@/types/portfolio';
import { SectionHeading } from './SectionHeading';

interface ContactFormProps {
  profile: Profile;
}

export function ContactForm({ profile }: ContactFormProps) {
  const resumeHref = profile.resumeUrl ?? `mailto:${profile.email}?subject=Resume%20request`;

  return (
    <section id="contact" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-2xl border border-border bg-surface p-8 md:p-12">
          <SectionHeading
            label="Contact"
            title="Let's Build Something Great Together"
            description="Reach out by email or LinkedIn — I usually reply within 24 hours."
          />

          <div className="mx-auto max-w-xl space-y-3">
            <a
              href={`mailto:${profile.email}?subject=Project%20inquiry`}
              className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3.5 text-sm transition hover:border-primary/40"
            >
              <span className="text-muted">Email</span>
              <span className="font-medium text-foreground">{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}
              className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3.5 text-sm transition hover:border-primary/40"
            >
              <span className="text-muted">Phone</span>
              <span className="font-medium text-foreground">{profile.phone}</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3.5 text-sm transition hover:border-primary/40"
            >
              <span className="text-muted">LinkedIn</span>
              <span className="font-medium text-foreground">Connect →</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3.5 text-sm transition hover:border-primary/40"
            >
              <span className="text-muted">GitHub</span>
              <span className="font-medium text-foreground">View code →</span>
            </a>
            <a
              href={resumeHref}
              target={profile.resumeUrl ? '_blank' : undefined}
              rel={profile.resumeUrl ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3.5 text-sm transition hover:border-primary/40"
            >
              <span className="text-muted">Resume</span>
              <span className="font-medium text-foreground">
                {profile.resumeUrl ? 'Download →' : 'Request via email →'}
              </span>
            </a>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href={`mailto:${profile.email}?subject=Hire%20request`}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-[#003258] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
