import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';
import { Publication } from './components/Publication';
import { Research } from './components/Research';
import { Security } from './components/Security';
import { Honors, Skills } from './components/Skills';
import { useTheme } from './hooks';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="page-bg" aria-hidden="true" />
      <div className="page-glow" aria-hidden="true" />
      <Nav theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <About />
        <Security />
        <Publication />
        <Research />
        <Experience />
        <Projects />
        <Skills />
        <Honors />
        <Contact />
      </main>
    </>
  );
}
