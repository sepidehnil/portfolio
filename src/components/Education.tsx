import { Box, Container, Typography } from '@mui/material';
import { education } from '../data/content';
import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';
import { colors } from '../theme';

export function Education() {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 10, md: 15 } }}>
      <Container maxWidth="lg">
        <Reveal>
          <SectionTitle title="Education" />
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
            <Typography variant="h3" sx={{ mb: 1 }}>
              {education.school}
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 1 }}>
              {education.degree}
            </Typography>
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.875rem',
                color: 'secondary.main',
              }}
            >
              {education.period}
            </Typography>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
