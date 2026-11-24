import { profile } from '../data/profile';
import { socialLinks } from './Hero';
import { Icon } from './Icon';
import { Reveal } from './Reveal';

export function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <Reveal className="card contact">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            09 · Contact
          </div>
          <h2>Working on agent security, trustworthy ML or evaluation methodology?</h2>
          <p>
            I would like to hear from professors and research groups in AI security, and from teams building agents that
            need to hold up under attack.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <Icon name="mail" /> {profile.email}
            </a>
            <a className="btn" href={profile.cv} target="_blank" rel="noopener">
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
            <a className="btn btn-sm btn-ghost" href={profile.links.codeforces} target="_blank" rel="noopener">
              <Icon name="terminal" /> Codeforces
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </span>
          <span className="mono">Built with React + TypeScript</span>
        </div>
      </footer>
    </section>
  );
}
