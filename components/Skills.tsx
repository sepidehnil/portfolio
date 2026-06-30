'use client';

import { Box, Container, Grid2 as Grid, Typography } from '@mui/material';
import ApiIcon from '@mui/icons-material/Api';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import PaletteIcon from '@mui/icons-material/Palette';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import WidgetsIcon from '@mui/icons-material/Widgets';
import type { Skill, SkillIcon } from '@/types/portfolio';
import { SkillsCrystal } from './SkillsCrystal';
import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';
import { colors } from '@/theme/theme';

const iconMap: Record<SkillIcon, typeof CodeIcon> = {
  polymer: WidgetsIcon,
  terminal: TerminalIcon,
  code: CodeIcon,
  settings_input_component: SettingsInputComponentIcon,
  palette: PaletteIcon,
  api: ApiIcon,
};

const iconColors = [
  'primary.main',
  'text.primary',
  'secondary.main',
  'primary.main',
  colors.tertiary,
  'secondary.main',
];

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <Box component="section" id="skills" sx={{ py: { xs: 10, md: 15 } }}>
      <Container maxWidth="lg">
        <Reveal>
          <SectionTitle title="Technical Arsenal" />
        </Reveal>

        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, lg: 8 }}>
            <Grid container spacing={3}>
              {skills.map((skill, i) => {
                const Icon = iconMap[skill.icon];
                return (
                  <Grid key={skill.id} size={{ xs: 6, sm: 4, md: 4 }}>
                    <Reveal delay={i * 0.1}>
                      <Box
                        sx={{
                          p: 4,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 2,
                          border: '1px solid #222',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            borderColor: '#444',
                            bgcolor: '#1a1a1a',
                            transform: 'translateY(-4px) scale(1.02)',
                            boxShadow: `0 10px 30px -10px ${colors.primary}26`,
                          },
                        }}
                      >
                        <Icon sx={{ fontSize: 40, color: iconColors[i] }} />
                        <Typography
                          sx={{
                            fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {skill.name}
                        </Typography>
                      </Box>
                    </Reveal>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <Reveal delay={0.6}>
              <Box sx={{ position: 'relative', height: { xs: 300, lg: 400 }, minHeight: 300 }}>
                <SkillsCrystal />
              </Box>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
