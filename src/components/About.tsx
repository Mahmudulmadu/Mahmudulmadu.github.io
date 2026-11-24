import type { CSSProperties } from 'react';
import { education, expertise, interests, paper, profile } from '../data/profile';
import { Icon } from './Icon';
import { Reveal, SectionHead } from './Reveal';

export function About() {
  const uits = education[0];
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead
          index="01"
          label="About me"
          title={
            <>
              Engineer by trade, <span className="gradient-text">researcher by habit.</span>
            </>
          }
        />
        <div className="bento">
          <Reveal className="card gborder spot b-summary">
            <div className="b-label">
              <Icon name="sparkles" /> Professional summary
            </div>
            <h3>
              I turn LLMs into <span className="gradient-text">reliable products</span>.
            </h3>
            <p>{profile.summary}</p>
            <div className="chip-list">
              {['Agentic AI', 'RAG', 'Fine-tuning', 'NLP-to-SQL', 'Azure', 'AWS', '.NET', 'React'].map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="card spot b-now" delay={80}>
            <div className="b-label">
              <Icon name="briefcase" /> Currently
            </div>
            <div className="b-big">
              <span className="pulse" aria-hidden="true" />
              AI Engineer
            </div>
            <p className="b-sub">Ainvio Pte Ltd · Singapore (hybrid) · since Dec 2025</p>
          </Reveal>

          <Reveal className="card spot b-place" delay={140}>
            <div className="b-label">
              <Icon name="mapPin" /> Based in
            </div>
            <div className="b-big">{profile.location}</div>
            <p className="b-sub">{profile.languages.join(' · ')}</p>
          </Reveal>

          <Reveal className="card spot b-research" delay={60}>
            <div className="b-label">
              <Icon name="flask" /> Research
            </div>
            <div className="b-big">First-author arXiv preprint</div>
            <p className="b-sub">
              {paper.status}. Plus ongoing digital-twin and RAG-LLM research. <a className="link-arrow" href="#publication">Read more <Icon name="arrowUpRight" /></a>
            </p>
          </Reveal>

          <Reveal className="card spot b-interests" delay={120}>
            <div className="b-label">
              <Icon name="target" /> Interests
            </div>
            <div className="interest-row">
              {interests.map((i) => (
                <span className="interest-chip" key={i.label}>
                  {i.label}
                  {i.note && <small>{i.note}</small>}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="card spot b-edu" delay={180}>
            <div className="b-label">
              <Icon name="graduation" /> Education
            </div>
            <div className="b-big">{uits.degree}</div>
            <p className="b-sub">
              UITS, {uits.period} · <strong style={{ color: 'var(--text)' }}>{uits.grade}</strong>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Expertise() {
  return (
    <section className="section" id="expertise">
      <div className="container">
        <SectionHead
          index="02"
          label="What I do"
          title={
            <>
              Across the <span className="gradient-text">whole AI stack</span>.
            </>
          }
          lede="From agents and retrieval to model training, research, security and the full-stack systems they run in."
        />
        <div className="expertise">
          {expertise.map((x, i) => (
            <Reveal
              key={x.title}
              as="article"
              delay={(i % 3) * 80}
              className="card spot lift xp-card"
              style={{ '--h': x.hue } as CSSProperties}
            >
              <span className="xp-icon">
                <Icon name={x.icon} />
              </span>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
              <div className="chip-list">
                {x.tags.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
