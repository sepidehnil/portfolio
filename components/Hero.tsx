'use client';

import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import type { Profile } from '@/types/portfolio';
import { HeroShader } from './HeroShader';
import { colors } from '@/theme/theme';

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  const parts = profile.heroHeading.split(profile.heroHighlight);

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: { xs: '85vh', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        py: { xs: 10, md: 15 },
      }}
    >
      <HeroShader />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: `linear-gradient(to bottom, ${colors.background}66, transparent 40%, ${colors.background}99)`,
        }}
      />
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <Chip
          label={profile.tagline}
          icon={
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: 'secondary.main',
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0.4 },
                },
              }}
            />
          }
          sx={{
            mb: 4,
            bgcolor: `${colors.surfaceContainer}99`,
            backdropFilter: 'blur(8px)',
            border: `1px solid ${colors.outlineVariant}`,
            color: 'text.secondary',
            fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
            fontSize: '0.875rem',
            '& .MuiChip-icon': { ml: 1 },
          }}
        />

        <Typography variant="h1" sx={{ mb: 3 }}>
          {parts[0]}
          <Box component="span" sx={{ color: 'primary.main' }}>
            {profile.heroHighlight}
          </Box>
          {parts[1]}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 640, mx: 'auto', mb: 5, fontSize: { xs: '1rem', md: '1.125rem' } }}
        >
          {profile.bio.split(/(React|Next\.js|TypeScript)/).map((part, i) =>
            ['React', 'Next.js', 'TypeScript'].includes(part) ? (
              <Box key={i} component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>
                {part}
              </Box>
            ) : (
              part
            ),
          )}
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            sx={{
              px: 4,
              py: 1.75,
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: `0 0 20px ${colors.primary}4D`,
              },
            }}
          >
            View Projects
          </Button>
          <Button
            variant="outlined"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            sx={{
              px: 4,
              py: 1.75,
              borderColor: colors.outlineVariant,
              color: 'text.primary',
              '&:hover': { borderColor: colors.outlineVariant, bgcolor: `${colors.surfaceBright}33` },
            }}
          >
            Get In Touch
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
