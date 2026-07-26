import type { Profile } from '@/types/portfolio';

interface FooterProps {
  profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  const links = [
    { label: 'GitHub', href: profile.github },
    { label: 'LinkedIn', href: profile.linkedin },
    { label: 'Email', href: `mailto:${profile.email}` },
  ];

  return (
    <footer className="border-t border-border bg-surface px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-foreground">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            React & Next.js frontend developer · Open for freelance work
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-sm text-muted transition hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#003258]"
          >
            Hire Me
          </a>
        </div>
      </div>
    </footer>
  );
}
