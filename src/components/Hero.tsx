import { heroBadges, heroStats, profile, techMarquee } from '../data/profile';
import { useCountUp, useReveal, useTypewriter, type Theme } from '../hooks';
import { Icon, type IconName } from './Icon';
import { NetworkCanvas } from './NetworkCanvas';
import { Reveal } from './Reveal';

export const socialLinks: { label: string; href: string; icon: IconName }[] = [
  { label: 'GitHub', href: profile.links.github, icon: 'github' },
  { label: 'LinkedIn', href: profile.links.linkedin, icon: 'linkedin' },
  { label: 'Kaggle', href: profile.links.kaggle, icon: 'kaggle' },
  { label: 'ORCID', href: profile.links.orcid, icon: 'orcid' },
  { label: 'LeetCode', href: profile.links.leetcode, icon: 'code' },
  { label: 'Codeforces', href: profile.links.codeforces, icon: 'terminal' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
];

function Stat({ value, decimals, suffix, label, start }: (typeof heroStats)[number] & { start: boolean }) {
  const n = useCountUp(value, start);
  return (
    <div className="card spot stat">
      <dt className="stat-label">{label}</dt>
      <dd className="stat-value gradient-text">
        {n.toFixed(decimals)}
        {suffix}
      </dd>
    </div>
  );
}

function Stats() {
  const [ref, visible] = useReveal<HTMLDListElement>();
  return (
    <dl ref={ref} className={`stats reveal ${visible ? 'is-visible' : ''}`}>
      {heroStats.map((s) => (
        <Stat key={s.label} {...s} start={visible} />
      ))}
    </dl>
  );
}

export function Hero({ theme }: { theme: Theme }) {
  const word = useTypewriter(profile.typewriter);
  const [first, ...rest] = profile.name.split(' ');
  const loop = [...techMarquee, ...techMarquee];

  return (
    <section className="hero" id="top">
      <NetworkCanvas theme={theme} />
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
              <p className="hello">
                <span>&gt;</span> Hi, I’m
              </p>
              <h1 className="hero-name">
                {first} {rest.slice(0, -1).join(' ')}
                <span className="line2">{rest[rest.length - 1]}.</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="hero-title">{profile.title} · Independent researcher</p>
            </Reveal>
            <Reveal delay={160}>
              <p className="typer" aria-label={`I build ${profile.typewriter.join(', ')}`}>
                <span aria-hidden="true">
                  I build <span className="word">{word}</span>
                  <span className="caret" />
                </span>
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="hero-intro">{profile.intro}</p>
            </Reveal>
            <Reveal delay={280}>
              <div className="hero-cta">
                <a className="btn btn-grad" href="#projects">
                  View my work <Icon name="arrowRight" />
                </a>
                <a className="btn" href={profile.cv} target="_blank" rel="noopener">
                  <Icon name="download" /> Download CV
                </a>
                <a className="btn btn-ghost" href="#publication">
                  <Icon name="file" /> Read the paper
                </a>
              </div>
            </Reveal>
            <Reveal delay={340}>
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

          <Reveal delay={200} className="avatar-wrap">
            <div className="avatar-glow" aria-hidden="true" />
            <div className="orbit-dashes" aria-hidden="true" />
            <div className="avatar-ring" aria-hidden="true" />
            <div className="avatar">
              <img src={profile.photo} alt={`Portrait of ${profile.name}`} width={600} height={600} />
            </div>
            {heroBadges.map((b) => (
              <span className="float-badge" key={b.label}>
                <i>
                  <Icon name={b.icon} />
                </i>
                {b.label}
              </span>
            ))}
          </Reveal>
        </div>

        <Stats />

        <div className="marquee" aria-label="Technologies I work with">
          <div className="marquee-track">
            {loop.map((t, i) => (
              <span className="marquee-item" key={`${t}-${i}`} aria-hidden={i >= techMarquee.length}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
