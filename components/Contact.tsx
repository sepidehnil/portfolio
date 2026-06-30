import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
import TerminalIcon from '@mui/icons-material/Terminal';
import type { Profile } from '@/types/portfolio';
import { Reveal } from './Reveal';
import { colors } from '@/theme/theme';

interface ContactProps {
  profile: Profile;
}

export function Contact({ profile }: ContactProps) {
  const firstName = profile.name.split(' ')[0];

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 10, md: 15 } }}>
      <Container maxWidth="lg">
        <Reveal>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 6, md: 12 },
              textAlign: 'center',
              border: '1px solid #222',
              bgcolor: colors.surfaceContainerLowest,
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 256,
                height: 256,
                bgcolor: `${colors.primary}0D`,
                borderRadius: '50%',
                filter: 'blur(48px)',
                transform: 'translate(50%, -50%)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: 256,
                height: 256,
                bgcolor: `${colors.secondary}0D`,
                borderRadius: '50%',
                filter: 'blur(48px)',
                transform: 'translate(-50%, 50%)',
              }}
            />

            <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: '2.5rem', md: '4rem' } }}>
              Let&apos;s connect,{' '}
              <Box component="span" sx={{ color: 'secondary.main' }}>
                {firstName}
              </Box>
              .
            </Typography>

            <Typography color="text.secondary" sx={{ maxWidth: 560, mx: 'auto', mb: 3 }}>
              Looking for a dedicated front-end engineer to help you scale your product or build something from
              scratch? Reach out and let&apos;s discuss your project.
            </Typography>

            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="center"
              gap={3}
              sx={{ mb: 6 }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
                  fontSize: '0.875rem',
                  color: 'text.secondary',
                }}
              >
                {profile.location}
              </Typography>
              <Typography
                component="a"
                href={`tel:${profile.phone.replace(/\D/g, '')}`}
                sx={{
                  fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
                  fontSize: '0.875rem',
                  color: 'text.secondary',
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {profile.phone}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
                  fontSize: '0.875rem',
                  color: 'text.secondary',
                }}
              >
                {profile.email}
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={3}
              justifyContent="center"
              alignItems="center"
              sx={{ mb: 6 }}
            >
              <Button
                variant="contained"
                color="primary"
                href={`mailto:${profile.email}`}
                sx={{
                  px: 5,
                  py: 2,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: `0 0 20px ${colors.primary}4D`,
                  },
                }}
              >
                Send an Email
              </Button>

              <Stack direction="row" spacing={2}>
                {[
                  { icon: EmailIcon, href: `mailto:${profile.email}` },
                  { icon: TerminalIcon, href: profile.github },
                  { icon: ShareIcon, href: profile.linkedin },
                ].map(({ icon: Icon, href }, i) => (
                  <IconButton
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      border: '1px solid #222',
                      '&:hover': { bgcolor: `${colors.surfaceBright}80` },
                    }}
                  >
                    <Icon />
                  </IconButton>
                ))}
              </Stack>
            </Stack>

            <Typography
              sx={{
                fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
                fontSize: '0.875rem',
                color: 'text.secondary',
                opacity: 0.5,
              }}
            >
              Typically responds within 24 hours.
            </Typography>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
