import { Box, Chip, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import type { Experience as ExperienceType } from '@/types/portfolio';
import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';
import { colors } from '@/theme/theme';

interface WorkExperienceProps {
  experience: ExperienceType;
}

export function WorkExperience({ experience }: WorkExperienceProps) {
  return (
    <Box component="section" id="experience" sx={{ py: { xs: 10, md: 15 } }}>
      <Container maxWidth="lg">
        <Reveal>
          <SectionTitle title="Work Experience" />
        </Reveal>
        <Reveal>
          <Box
            sx={{
              p: 4,
              border: '1px solid #222',
              bgcolor: `${colors.surfaceContainerLow}4D`,
              backdropFilter: 'blur(8px)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', md: 'center' },
                gap: 2,
                mb: 3,
              }}
            >
              <Box>
                <Typography variant="h3" sx={{ color: 'primary.main', mb: 0.5 }}>
                  {experience.role}
                </Typography>
                <Typography color="text.secondary" fontWeight={500}>
                  {experience.company}
                </Typography>
              </Box>
              <Chip
                label={experience.period}
                sx={{
                  fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
                  fontSize: '0.875rem',
                  color: 'secondary.main',
                  bgcolor: colors.surfaceContainer,
                  border: `1px solid ${colors.outlineVariant}`,
                }}
              />
            </Box>
            <List sx={{ listStyleType: 'disc', pl: 2 }}>
              {experience.highlights.map((item) => (
                <ListItem key={item} disablePadding sx={{ display: 'list-item', py: 0.75 }}>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{ color: 'text.secondary', variant: 'body1' }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
