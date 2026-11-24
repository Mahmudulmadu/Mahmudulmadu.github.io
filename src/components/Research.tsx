import { dtResearch } from '../data/profile';
import { Icon } from './Icon';
import { Reveal, SectionHead } from './Reveal';

export function Research() {
  return (
    <section className="section" id="research">
      <div className="container">
        <SectionHead
          index="04"
          label="Ongoing research"
          title="Digital twins, retrieval and LLMs for predictive maintenance that can explain itself."
          lede="The larger project the paper came from: an end-to-end framework for industrial electric motors where an LLM explains a prediction in plain language, grounded in the unit’s own documentation, and is checked so it never claims more than the evidence supports."
        />

        <Reveal className="card dt" as="article">
          <div className="dt-head">
            <h3 className="dt-title">{dtResearch.title}</h3>
            <span className="badge badge-warm">{dtResearch.status}</span>
          </div>
          <p className="dt-question">“{dtResearch.question}”</p>

          <ol className="pipeline" aria-label="Framework pipeline">
            {dtResearch.pipeline.map((p, i) => (
              <li key={p.name} className={`pipe-node ${p.name === 'Output contract' || p.name === 'Contract checker' ? 'is-key' : ''}`}>
                <div className="pipe-step">{String(i + 1).padStart(2, '0')}</div>
                <div className="pipe-name">{p.name}</div>
                <div className="pipe-detail">{p.detail}</div>
              </li>
            ))}
          </ol>

          <div className="dt-lower">
            <div>
              <div className="subhead">Research questions</div>
              {dtResearch.questions.map((q) => (
                <div className="rq" key={q.id}>
                  <b>{q.id}</b>
                  <span>{q.text}</span>
                </div>
              ))}
            </div>
            <div className="dt-side">
              <div>
                <div className="subhead">Datasets</div>
                <div className="chip-list">
                  {dtResearch.datasets.map((d) => (
                    <span className="chip" key={d}>
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="subhead">Stack</div>
                <div className="chip-list">
                  {dtResearch.stack.map((d) => (
                    <span className="chip" key={d}>
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bridge-quote" style={{ display: 'flex', gap: 12 }}>
                <Icon name="shield" width={18} height={18} style={{ flex: 'none', marginTop: 3, color: 'var(--accent-ink)' }} />
                <span>{dtResearch.securityLink}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
