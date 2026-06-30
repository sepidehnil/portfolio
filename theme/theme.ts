import { createTheme } from '@mui/material/styles';

export const colors = {
  background: '#131313',
  surface: '#131313',
  surfaceContainer: '#201f1f',
  surfaceContainerLow: '#1c1b1b',
  surfaceContainerLowest: '#0e0e0e',
  surfaceBright: '#3a3939',
  primary: '#9fcaff',
  onPrimary: '#003258',
  primaryContainer: '#007acc',
  primaryFixedDim: '#9fcaff',
  secondary: '#5cd5f6',
  tertiary: '#ffb784',
  onSurface: '#e5e2e1',
  onSurfaceVariant: '#c0c7d3',
  outline: '#8a919d',
  outlineVariant: '#404751',
};

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary,
      contrastText: colors.onPrimary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.background,
      paper: colors.surfaceContainerLow,
    },
    text: {
      primary: colors.onSurface,
      secondary: colors.onSurfaceVariant,
    },
    divider: colors.outlineVariant,
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.background,
          color: colors.onSurface,
          WebkitFontSmoothing: 'antialiased',
        },
        '::-webkit-scrollbar': { width: 6 },
        '::-webkit-scrollbar-track': { background: colors.surfaceContainerLowest },
        '::-webkit-scrollbar-thumb': { background: '#333333', borderRadius: 10 },
        '::-webkit-scrollbar-thumb:hover': { background: '#444444' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 2, padding: '12px 32px' },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(19, 19, 19, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${colors.outlineVariant}`,
          boxShadow: 'none',
        },
      },
    },
  },
});
