'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Profile } from '@/types/portfolio';
import { navLinks } from '@/types/portfolio';

interface NavbarProps {
  profile: Profile;
}

export function Navbar({ profile }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-border bg-background/85 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8"
          aria-label="Primary"
        >
          <button
            onClick={() => scrollTo('#hero')}
            className="text-left text-xs font-bold uppercase tracking-tight text-primary transition hover:opacity-80 sm:text-sm"
          >
            {profile.name}
          </button>

          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-muted transition hover:text-foreground"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#contact');
                }}
                className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#003258] transition hover:opacity-90"
              >
                Hire Me
              </a>
            </li>
          </ul>

          <button
            className="rounded-md p-2 text-primary md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between p-5">
              <span className="text-sm font-bold uppercase text-primary">{profile.name}</span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-5 px-5 pt-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-3xl font-bold text-foreground transition hover:text-primary"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="mt-4 w-full rounded-lg bg-primary py-3 text-sm font-semibold text-[#003258]"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
