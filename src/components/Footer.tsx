import { Box, Container, Link, Stack, Typography } from '@mui/material';
import { profile } from '../data/content';
import { colors } from '../theme';

const footerLinks = [
  { label: 'Github', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Twitter', href: '#' },
  { label: 'Email', href: `mailto:${profile.email}` },
];

export function Footer() {
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
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'text.secondary',
          }}
        >
          © 2024 {profile.name}
        </Typography>

        <Stack direction="row" spacing={4}>
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
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
