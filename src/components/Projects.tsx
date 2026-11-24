import type { CSSProperties } from 'react';
import { profile, projects } from '../data/profile';
import { Icon } from './Icon';
import { Reveal, SectionHead } from './Reveal';

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead
          index="04"
          label="Projects"
          title={
            <>
              Selected <span className="gradient-text">projects</span>.
            </>
          }
          lede="Personal and open-source work. Production systems at Ainvio are private, so they are described under Experience."
        />

        <div className="project-grid">
          {featured.map((p, i) => (
            <Reveal
              as="article"
              key={p.name}
              delay={i * 80}
              className="card spot lift project"
              style={{ '--h': p.hue } as CSSProperties}
            >
              <div className="project-cover" aria-hidden="true">
                <div className="cover-top">
                  <span className="cover-cat">
                    {p.category} · {p.year}
                  </span>
                  <span className="badge badge-grad">Featured</span>
                </div>
                <span className="cover-tagline">{p.tagline}</span>
                <Icon name={p.icon} className="cover-icon" strokeWidth={1.2} />
              </div>
              <div className="project-body">
                <h3>{p.name}</h3>
                <p className="project-desc">{p.description}</p>
                {p.highlights && (
                  <ul className="project-points">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
                <div className="chip-list">
                  {p.tech.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noopener" aria-label={`${p.name} source code on GitHub`}>
                      <Icon name="github" /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener" aria-label={`${p.name} ${p.demoLabel ?? 'demo'}`}>
                      <Icon name="play" /> {p.demoLabel ?? 'Demo'}
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <h3 className="more-title">More projects</h3>
        <div className="mini-grid">
          {others.map((p, i) => (
            <Reveal
              as="article"
              key={p.name}
              delay={(i % 4) * 60}
              className="card spot lift mini"
              style={{ '--h': p.hue } as CSSProperties}
            >
              <div className="mini-top">
                <span className="mini-icon">
                  <Icon name={p.icon} />
                </span>
                <div className="mini-links">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener" aria-label={`${p.name} ${p.demoLabel ?? 'demo'}`} title={p.demoLabel ?? 'Demo'}>
                      <Icon name="play" />
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noopener" aria-label={`${p.name} source code on GitHub`} title="Code on GitHub">
                      <Icon name="github" />
                    </a>
                  )}
                </div>
              </div>
              <span className="mini-cat">
                {p.category} · {p.year}
              </span>
              <h4>{p.name}</h4>
              <p>{p.description}</p>
              <div className="mini-tech">{p.tech.join(' · ')}</div>
            </Reveal>
          ))}
        </div>

        <div className="more-repos">
          <a className="btn" href={`${profile.links.github}?tab=repositories`} target="_blank" rel="noopener">
            <Icon name="github" /> All repositories on GitHub <Icon name="arrowUpRight" />
          </a>
        </div>
      </div>
    </section>
  );
}
