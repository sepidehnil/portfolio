import { Box, Container, Link, Stack, Typography } from '@mui/material';
import type { Profile } from '@/types/portfolio';
import { colors } from '@/theme/theme';

const footerLinks = (profile: Profile) => [
  { label: 'Github', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: `mailto:${profile.email}` },
];

interface FooterProps {
  profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: colors.surfaceContainerLowest,
        borderTop: `1px solid ${colors.outlineVariant}`,
        py: 3,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'text.secondary',
          }}
        >
          © {new Date().getFullYear()} {profile.name}
        </Typography>

        <Stack direction="row" spacing={4}>
          {footerLinks(profile).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              sx={{
                fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
                fontSize: '0.875rem',
                color: 'text.secondary',
                textDecoration: 'none',
                opacity: 0.8,
                '&:hover': { color: 'secondary.main', opacity: 1 },
              }}
            >
              {link.label}
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
