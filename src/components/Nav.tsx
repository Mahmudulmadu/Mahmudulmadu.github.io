import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import { useActiveSection, type Theme } from '../hooks';
import { Icon } from './Icon';

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'security', label: 'AI Security' },
  { id: 'publication', label: 'Publication' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const ids = navItems.map((n) => n.id);

export function Nav({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled || open ? 'is-scrolled' : ''}`}>
      <nav className="container nav-inner" aria-label="Main">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">MH</span>
          <span>{profile.name}</span>
        </a>

        <ul className="nav-links">
          {navItems.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className={active === n.id ? 'is-active' : ''} aria-current={active === n.id ? 'true' : undefined}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <a className="btn btn-sm" href={profile.cv} target="_blank" rel="noopener">
            <Icon name="download" /> CV
          </a>
          <button
            type="button"
            className="icon-btn nav-menu-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`mobile-panel ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <ul>
          {navItems.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className={active === n.id ? 'is-active' : ''} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="btn btn-sm" href={profile.cv} target="_blank" rel="noopener" tabIndex={open ? 0 : -1}>
          <Icon name="download" /> Download CV
        </a>
      </div>
    </header>
  );
}
