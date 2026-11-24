import { useRef, useState, type KeyboardEvent } from 'react';
import { dtResearch, paper, productionSecurity, profile, readingNow, securityStudies } from '../data/profile';
import { Icon, type IconName } from './Icon';
import { NullChart } from './NullChart';
import { Reveal, SectionHead } from './Reveal';

const tabs: { id: string; label: string; icon: IconName }[] = [
  { id: 'paper', label: 'Publication', icon: 'file' },
  { id: 'twin', label: 'Digital-twin research', icon: 'layers' },
  { id: 'security', label: 'AI security', icon: 'shield' },
];

function PaperPanel() {
  return (
    <div className="panel-grid">
      <div>
        <div className="paper-meta">
          <span className="badge badge-grad">{paper.status}</span>
          {paper.areas.map((a) => (
            <span className="badge" key={a}>
              {a}
            </span>
          ))}
        </div>
        <h3 className="paper-title">{paper.title}</h3>
        <p className="paper-authors">
          <strong>{paper.authors}</strong> ·{' '}
          <a href={profile.links.orcid} target="_blank" rel="noopener">
            ORCID 0009-0001-0778-064X
          </a>
        </p>
        <p className="paper-venue">{paper.venueNote}</p>
        <p className="paper-summary">{paper.summary}</p>
        <div className="findings">
          {paper.findings.map((f) => (
            <div className="finding" key={f.label}>
              <div className="finding-value gradient-text">{f.value}</div>
              <div className="finding-label">{f.label}</div>
            </div>
          ))}
        </div>
        <div className="paper-links">
          <a className="btn btn-grad btn-sm" href={paper.links.pdf} target="_blank" rel="noopener">
            <Icon name="file" /> Read the paper
          </a>
          <a className="btn btn-sm" href={paper.links.code} target="_blank" rel="noopener">
            <Icon name="github" /> Code
          </a>
          <a className="btn btn-sm btn-ghost" href={paper.links.registry} target="_blank" rel="noopener">
            <Icon name="database" /> Claim registry
          </a>
        </div>
      </div>
      <NullChart />
    </div>
  );
}

function TwinPanel() {
  return (
    <div>
      <div className="dt-head">
        <div>
          <div className="dt-role">Independent research · {dtResearch.period}</div>
          <h3 className="dt-title">{dtResearch.title}</h3>
        </div>
        <span className="badge badge-warm">{dtResearch.status}</span>
      </div>
      <p className="dt-question">
        “<span className="gradient-text">{dtResearch.question}</span>”
      </p>
      <ol className="pipeline" aria-label="Framework pipeline">
        {dtResearch.pipeline.map((p, i) => (
          <li key={p.name} className={`pipe-node ${p.name === 'Output contract' || p.name === 'Contract checker' ? 'is-key' : ''}`}>
            <div className="pipe-icon">
              <Icon name={p.icon} />
              <span className="pipe-step">{i + 1}</span>
            </div>
            <div className="pipe-name">{p.name}</div>
            <div className="pipe-detail">{p.detail}</div>
          </li>
        ))}
      </ol>
      <div className="rq-grid">
        {dtResearch.questions.map((q, i) => (
          <div className="rq" key={q}>
            <b>RQ{i + 1}</b>
            <span>{q}</span>
          </div>
        ))}
      </div>
      <div className="dt-foot">
        <span className="subhead">Datasets</span>
        <div className="chip-list">
          {dtResearch.datasets.map((d) => (
            <span className="chip" key={d}>
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SecurityPanel() {
  return (
    <div>
      <div className="sec-head">
        <div>
          <h3>In production at Ainvio</h3>
          <p>The hiring agent I ship reads CVs and job ads written by strangers, so its defenses live in code and in CI.</p>
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
      <div className="sec-lower">
        <div>
          <span className="subhead">Next studies</span>
          <ol className="studies">
            {securityStudies.map((s) => (
              <li key={s.title}>
                <b>{s.title}</b>
                <span>{s.text}</span>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <span className="subhead">Reading</span>
          <div className="chip-list">
            {readingNow.map((p) => (
              <span className="chip chip-accent" key={p}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Research() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = (active + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length;
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <section className="section" id="research">
      <div className="container">
        <SectionHead
          index="05"
          label="Research"
          title={
            <>
              Research that asks <span className="gradient-text">what the evidence supports</span>.
            </>
          }
          lede="A first-author paper, an ongoing digital-twin framework, and AI security for the agents I build."
        />

        <Reveal>
          <div className="tabs" role="tablist" aria-label="Research areas" onKeyDown={onKey}>
            {tabs.map((t, i) => (
              <button
                key={t.id}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={active === i}
                aria-controls={`panel-${t.id}`}
                tabIndex={active === i ? 0 : -1}
                className="tab"
                onClick={() => setActive(i)}
              >
                <Icon name={t.icon} /> {t.label}
              </button>
            ))}
          </div>

          <div className="card gborder research-panel" role="tabpanel" id={`panel-${tabs[active].id}`} aria-labelledby={`tab-${tabs[active].id}`}>
            {active === 0 && <PaperPanel />}
            {active === 1 && <TwinPanel />}
            {active === 2 && <SecurityPanel />}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
