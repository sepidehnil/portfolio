'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Profile } from '@/types/portfolio';
import { SectionHeading } from './SectionHeading';
import { fadeInUp } from '@/lib/motion';

interface ContactFormProps {
  profile: Profile;
}

export function ContactForm({ profile }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        const details = data.details
          ? Object.values(data.details as Record<string, string[]>).flat().join(', ')
          : data.error;
        throw new Error(details || 'Failed to send message');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please email me directly instead.',
      );
    }
  };

  const inputClass =
    'w-full rounded-lg border border-border bg-surface-elevated px-4 py-3 text-foreground placeholder:text-muted/60 transition focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20';

  return (
    <section id="contact" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-border p-8 md:p-12 lg:border-b-0 lg:border-r">
              <SectionHeading
                label="Contact"
                title="Let’s build your next frontend"
                description="Tell me about your product, timeline, and goals. I usually reply within 24 hours."
              />

              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}?subject=Freelance%20project%20inquiry`}
                  className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-sm transition hover:border-primary/40"
                >
                  <span className="text-muted">Email</span>
                  <span className="font-medium text-foreground">{profile.email}</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-sm transition hover:border-primary/40"
                >
                  <span className="text-muted">LinkedIn</span>
                  <span className="font-medium text-foreground">View profile →</span>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-sm transition hover:border-primary/40"
                >
                  <span className="text-muted">GitHub</span>
                  <span className="font-medium text-foreground">View work →</span>
                </a>
              </div>

              <p className="mt-8 text-sm text-muted">
                Open to Upwork contracts, fixed-price builds, and ongoing frontend support.
              </p>
            </div>

            <div className="p-8 md:p-12">
              <motion.form
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="space-y-4"
                noValidate
              >
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="What are you building? Timeline and budget range help too."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className={`${inputClass} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-[#003258] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                </button>

                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.p
                      role="status"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-emerald-400"
                    >
                      Message received. I&apos;ll get back to you soon.
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      role="alert"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-red-400"
                    >
                      {errorMsg} You can also email{' '}
                      <a className="underline" href={`mailto:${profile.email}`}>
                        {profile.email}
                      </a>
                      .
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
