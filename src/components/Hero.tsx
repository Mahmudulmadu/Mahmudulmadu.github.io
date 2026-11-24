import { heroStats, profile } from '../data/profile';
import { Icon, type IconName } from './Icon';
import { Reveal } from './Reveal';

export const socialLinks: { label: string; href: string; icon: IconName }[] = [
  { label: 'GitHub', href: profile.links.github, icon: 'github' },
  { label: 'LinkedIn', href: profile.links.linkedin, icon: 'linkedin' },
  { label: 'Kaggle', href: profile.links.kaggle, icon: 'kaggle' },
  { label: 'ORCID', href: profile.links.orcid, icon: 'orcid' },
  { label: 'LeetCode', href: profile.links.leetcode, icon: 'code' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
];

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div>
            <Reveal>
              <div className="status-pill">
                <span className="pulse" aria-hidden="true" />
                {profile.availability}
              </div>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="hero-name">
                {profile.name}
                <span className="accent-dot">.</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <div className="hero-role">
                <span>AI Engineer @ Ainvio</span>
                <span>AI Security Research</span>
                <span>Kaggle Expert</span>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <p className="hero-headline">
                I build production <em>multi-agent AI systems</em>, and I research how they can be <em>broken</em>.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="hero-intro">{profile.intro}</p>
            </Reveal>
            <Reveal delay={300}>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#security">
                  Research focus <Icon name="arrowRight" />
                </a>
                <a className="btn" href="#publication">
                  <Icon name="file" /> Read the paper
                </a>
                <a className="btn btn-ghost" href={profile.cv} target="_blank" rel="noopener">
                  <Icon name="download" /> CV
                </a>
              </div>
            </Reveal>
            <Reveal delay={360}>
              <div className="hero-social">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    className="icon-btn"
                    href={s.href}
                    target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener"
                    aria-label={s.label}
                    title={s.label}
                  >
                    <Icon name={s.icon} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="hero-visual">
            <div className="photo-frame">
              <img src={profile.photo} alt={`Portrait of ${profile.name}`} width={600} height={600} />
            </div>
            <div className="terminal" aria-label="Current focus, written as a terminal session">
              <div className="terminal-bar" aria-hidden="true">
                <i />
                <i />
                <i />
                <span>~/research</span>
              </div>
              <div className="terminal-body">
                <div>
                  <span className="p">$</span> <span className="c">whoami</span>
                </div>
                <div>ai_engineer · independent_researcher</div>
                <div>
                  <span className="p">$</span> <span className="c">cat focus.txt</span>
                </div>
                <div>
                  agent security · <span className="w">prompt injection</span>
                </div>
                <div>honest evaluation of ML claims</div>
                <div>
                  <span className="p">$</span> <span className="cursor" aria-hidden="true" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <dl className="stats-strip">
            {heroStats.map((s) => (
              <div className="stat" key={s.label}>
                <dt className="stat-label">{s.label}</dt>
                <dd className="stat-value">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
