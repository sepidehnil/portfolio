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
    <footer className="border-t border-border bg-surface py-8 px-5 md:px-8">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="font-mono text-sm text-muted hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
