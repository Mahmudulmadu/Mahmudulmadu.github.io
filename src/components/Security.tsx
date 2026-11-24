import { productionSecurity, readingNow, securityInterests, securityStudies } from '../data/profile';
import { Icon } from './Icon';
import { Reveal, SectionHead } from './Reveal';

export function Security() {
  return (
    <section className="section" id="security">
      <div className="container">
        <SectionHead
          index="06"
          label="AI security"
          title={
            <>
              Agents that read untrusted text <span className="gradient-text">and still behave</span>.
            </>
          }
          lede="One of my focus areas. The agent I ship at Ainvio reads CVs, job ads and form notes written by strangers, so I build its defenses in code, test them in CI, and study how such defenses fail."
        />

        <Reveal className="card gborder prod-panel">
          <div className="prod-head">
            <div>
              <h3>In production at Ainvio</h3>
              <p>Defending a multi-tenant hiring agent end to end.</p>
            </div>
            <span className="badge badge-accent">
              <span className="pulse" aria-hidden="true" /> Shipped
            </span>
          </div>
          <div className="prod-grid">
            {productionSecurity.map((s) => (
              <div className="prod-item" key={s.title}>
                <h4>
                  <i>
                    <Icon name={s.icon} />
                  </i>
                  {s.title}
                </h4>
                <p>{s.text}</p>
                <span className="metric">{s.metric}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="interest-grid">
          {securityInterests.map((it, i) => (
            <Reveal key={it.title} delay={i * 70} as="article" className="card spot lift interest">
              <h3>{it.title}</h3>
              <p>{it.text}</p>
              <div className="chip-list">
                {it.tags.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="security-lower">
          <Reveal className="card spot panel">
            <div className="panel-title">
              <h3>Research agenda</h3>
              <span className="badge">Next studies</span>
            </div>
            {securityStudies.map((s, i) => (
              <div className="study" key={s.title}>
                <span className="study-index gradient-text">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div className="study-head">
                    <h4>{s.title}</h4>
                    <span className={`badge ${s.status === 'In progress' ? 'badge-accent' : ''}`}>{s.status}</span>
                  </div>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="card spot panel" delay={100}>
            <div className="panel-title">
              <h3>On the reading list</h3>
              <Icon name="book" width={20} height={20} style={{ color: 'var(--accent-ink)' }} />
            </div>
            <div className="chip-list">
              {readingNow.map((p) => (
                <span className="chip chip-accent" key={p}>
                  {p}
                </span>
              ))}
            </div>
            <p className="panel-note">
              Part of a 70-paper program across prompt injection, jailbreaks and guard models, agent benchmarks,
              system-level defenses, poisoning, and MCP / multi-agent security.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
