import { Box, Card, CardContent, Container, Grid2 as Grid, Link, Typography } from '@mui/material';
import Image from 'next/image';
import type { Profile, Project } from '@/types/portfolio';
import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';
import { colors } from '@/theme/theme';

interface ProjectsProps {
  projects: Project[];
  profile: Profile;
}

export function Projects({ projects, profile }: ProjectsProps) {
  return (
    <Box
      component="section"
      id="work"
      sx={{ py: { xs: 10, md: 15 }, bgcolor: `${colors.surfaceContainerLow}33` }}
    >
      <Container maxWidth="lg">
        <Reveal>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 8 }}>
            <SectionTitle title="Featured Projects" />
            <Link
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: { xs: 'none', md: 'block' },
                fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': { color: 'primary.main' },
              }}
            >
              View Github Archive →
            </Link>
          </Box>
        </Reveal>

        <Grid container spacing={5}>
          {projects.map((project, i) => (
            <Grid key={project.id} size={{ xs: 12, md: 6, lg: 4 }}>
              <Reveal delay={i * 0.1}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: colors.background,
                    border: '1px solid #222',
                    borderRadius: 0,
                    boxShadow: 'none',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      borderColor: '#444',
                      bgcolor: '#1a1a1a',
                      transform: 'translateY(-4px)',
                      boxShadow: `0 10px 30px -10px ${colors.primary}26`,
                    },
                  }}
                >
                  {project.image && (
                    <Box sx={{ height: 256, overflow: 'hidden', position: 'relative' }}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: 'cover', transition: 'transform 0.7s' }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background: `linear-gradient(to top, ${colors.background}CC, transparent)`,
                        }}
                      />
                    </Box>
                  )}
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.tags.map((tag, j) => (
                        <Typography
                          key={tag}
                          component="span"
                          sx={{
                            fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
                            fontSize: '10px',
                            py: 0.5,
                            px: 1,
                            bgcolor: colors.surfaceContainer,
                            color:
                              j === 0 ? colors.primaryFixedDim : j === 1 ? colors.secondary : 'text.secondary',
                            borderLeft: `1px solid ${j === 0 ? colors.primary : j === 1 ? colors.secondary : colors.outline}`,
                          }}
                        >
                          {tag}
                        </Typography>
                      ))}
                    </Box>
                    <Typography variant="h3" sx={{ mb: 1.5, fontSize: '1.25rem' }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
