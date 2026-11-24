import type { CSSProperties } from 'react';
import { about, concepts, profile, skillGroups } from '../data/profile';
import { Icon } from './Icon';
import { Reveal, SectionHead } from './Reveal';

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead
          index="01"
          label="About"
          title={
            <>
              Engineer by trade, <span className="gradient-text">researcher by habit</span>.
            </>
          }
        />
        <div className="about-grid">
          <Reveal className="about-text">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <div className="about-interests">
              <span className="subhead">Interests</span>
              <div className="chip-list">
                {about.interests.map((i) => (
                  <span className="chip chip-accent" key={i}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="card gborder facts" delay={100}>
            <ul>
              {about.facts.map((f) => (
                <li key={f.label}>
                  <span className="fact-icon">
                    <Icon name={f.icon} />
                  </span>
                  <span>
                    <span className="fact-label">{f.label}</span>
                    <span className="fact-value">{f.value}</span>
                  </span>
                </li>
              ))}
            </ul>
            <a className="btn btn-grad facts-cta" href={profile.cv} target="_blank" rel="noopener">
              <Icon name="download" /> Download CV
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead
          index="02"
          label="Skills"
          title={
            <>
              What I <span className="gradient-text">work with</span>.
            </>
          }
        />
        <div className="skill-grid">
          {skillGroups.map((g, i) => (
            <Reveal
              key={g.title}
              as="article"
              delay={(i % 3) * 70}
              className="card spot lift skill-card"
              style={{ '--h': g.hue } as CSSProperties}
            >
              <div className="skill-head">
                <span className="xp-icon">
                  <Icon name={g.icon} />
                </span>
                <div>
                  <h3>{g.title}</h3>
                  <p>{g.text}</p>
                </div>
              </div>
              <div className="chip-list">
                {g.items.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="concepts">
          <span className="subhead">Foundations</span>
          <div className="chip-list">
            {concepts.map((c) => (
              <span className="chip" key={c}>
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
