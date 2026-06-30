import { ThemeProvider, CssBaseline, Toolbar } from '@mui/material';
import { theme } from './theme';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { WorkExperience } from './components/WorkExperience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Toolbar />
      <main>
        <Hero />
        <Skills />
        <Education />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
