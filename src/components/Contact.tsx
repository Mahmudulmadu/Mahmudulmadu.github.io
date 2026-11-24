import { useState } from 'react';
import { profile } from '../data/profile';
import { useScroll } from '../hooks';
import { socialLinks } from './Hero';
import { Icon } from './Icon';
import { Reveal } from './Reveal';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { far } = useScroll();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <Reveal className="card gborder contact">
          <div className="eyebrow">
            <b>08</b> Contact
          </div>
          <h2>
            Let’s build something <span className="gradient-text">intelligent</span> together.
          </h2>
          <p>
            Open to AI engineering roles, research collaborations and PhD opportunities. Whether it is agents, RAG, ML
            research or AI security, I’d like to hear from you.
          </p>
          <div className="contact-actions">
            <a className="btn btn-grad" href={`mailto:${profile.email}`}>
              <Icon name="mail" /> Email me
            </a>
            <button type="button" className="btn" onClick={copy} aria-live="polite">
              <Icon name={copied ? 'check' : 'copy'} /> {copied ? 'Copied!' : profile.email}
            </button>
            <a className="btn btn-ghost" href={profile.cv} target="_blank" rel="noopener">
              <Icon name="download" /> Download CV
            </a>
          </div>
          <div className="contact-links">
            {socialLinks
              .filter((s) => s.label !== 'Email')
              .map((s) => (
                <a key={s.label} className="btn btn-sm btn-ghost" href={s.href} target="_blank" rel="noopener">
                  <Icon name={s.icon} /> {s.label}
                </a>
              ))}
          </div>
        </Reveal>
      </div>

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </span>
          <span className="mono">Designed & built with React + TypeScript</span>
        </div>
      </footer>

      <button
        type="button"
        className={`to-top ${far ? 'is-shown' : ''}`}
        aria-label="Back to top"
        tabIndex={far ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon name="arrowUp" />
      </button>
    </section>
  );
}
