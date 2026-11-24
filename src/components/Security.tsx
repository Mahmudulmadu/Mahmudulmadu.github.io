import { readingNow, securityInterests, securityStudies } from '../data/profile';
import { Icon, type IconName } from './Icon';
import { Reveal, SectionHead } from './Reveal';

const interestIcons: IconName[] = ['bug', 'lock', 'database', 'target'];

export function Security() {
  return (
    <section className="section" id="security">
      <div className="container">
        <SectionHead
          index="02"
          label="Current focus"
          title="AI security: agents that read untrusted text and act on it."
          lede="Tool-using LLM agents turn every web page, document and tool response into a possible instruction. My focus is agent and LLM application security, and evaluating defenses with the same rigor I applied to fault diagnosis."
        />

        <div className="interest-grid">
          {securityInterests.map((it, i) => (
            <Reveal key={it.title} delay={(i % 2) * 80} as="article" className="card interest">
              <div className="interest-top">
                <span className="interest-icon">
                  <Icon name={interestIcons[i % interestIcons.length]} />
                </span>
                <h3>{it.title}</h3>
              </div>
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
          <Reveal className="card panel">
            <div className="panel-title">
              <h3>Research agenda</h3>
              <span className="badge">Next studies</span>
            </div>
            {securityStudies.map((s, i) => (
              <div className="study" key={s.title}>
                <span className="study-index">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div className="study-head">
                    <h4>{s.title}</h4>
                    <span className={`badge ${s.status === 'In progress' ? 'badge-accent' : ''}`}>{s.status}</span>
                  </div>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
            <div className="bridge-quote">
              My methods paper found that a deep baseline looked like it diagnosed faults but had learned to recognise
              individual bearings. Agent-security results can fool us the same way, so every defense I evaluate will
              face an adaptive attacker and a deliberately weak control.
            </div>
          </Reveal>

          <Reveal className="card panel" delay={100}>
            <div className="panel-title">
              <h3>On the reading list</h3>
              <Icon name="book" width={18} height={18} style={{ color: 'var(--accent-ink)' }} />
            </div>
            <div className="chip-list">
              {readingNow.map((p) => (
                <span className="chip chip-accent" key={p}>
                  {p}
                </span>
              ))}
            </div>
            <p className="panel-note">
              Part of a 70-paper structured program across prompt injection, jailbreaks and guard models, agent
              benchmarks, system-level defenses, poisoning, and MCP / multi-agent security, with AI for cyber defense as a
              second track.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
