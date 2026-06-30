import { Box, Typography } from '@mui/material';

interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <Box sx={{ mb: 8 }}>
      <Typography variant="h2" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Box sx={{ width: 48, height: 4, bgcolor: 'primary.main' }} />
    </Box>
  );
}
