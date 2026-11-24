import { About, Skills } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';
import { Achievements, Education } from './components/Recognition';
import { Research } from './components/Research';
import { useSpotlight, useTheme } from './hooks';

export default function App() {
  const { theme, toggle } = useTheme();
  useSpotlight();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="backdrop" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="grid" />
      </div>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero theme={theme} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
