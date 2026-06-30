import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navLinks, profile } from '../data/content';
import { colors } from '../theme';

const scrollTo = (href: string) => {
  const id = href.replace('#', '');
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed" color="transparent">
        <Toolbar
          sx={{
            maxWidth: 1200,
            width: '100%',
            mx: 'auto',
            px: { xs: 2.5, md: 3 },
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="h2"
            component="div"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              fontWeight: 700,
              color: 'primary.main',
              letterSpacing: '-0.02em',
            }}
          >
            {profile.name.toUpperCase()}
          </Typography>

          {isMobile ? (
            <IconButton color="primary" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {navLinks.map((link, i) => (
                <Button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  sx={{
                    color: i === 0 ? 'primary.main' : 'text.secondary',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    fontWeight: i === 0 ? 700 : 400,
                    textTransform: 'none',
                    letterSpacing: 0,
                    borderBottom: i === 0 ? '2px solid' : 'none',
                    borderColor: 'primary.main',
                    borderRadius: 0,
                    pb: i === 0 ? 0.5 : 0,
                    '&:hover': { color: 'primary.main', background: 'transparent' },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <Button variant="contained" color="primary" size="small">
                Resume
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: '100%',
            bgcolor: colors.background,
            p: 3,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 6 }}>
          <Typography variant="h2" sx={{ fontSize: '1.25rem', color: 'primary.main', fontWeight: 700 }}>
            {profile.name.toUpperCase()}
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                onClick={() => {
                  scrollTo(link.href);
                  setDrawerOpen(false);
                }}
                sx={{ py: 2 }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: 'primary.main',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 'auto' }}>
          <Button variant="contained" color="primary" fullWidth size="large">
            Resume
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
