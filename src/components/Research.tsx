import { dtResearch } from '../data/profile';
import { Icon } from './Icon';
import { Reveal } from './Reveal';

export function Research() {
  return (
    <section className="section" id="research" style={{ paddingTop: 28 }}>
      <div className="container">
        <Reveal className="card spot dt" as="article">
          <div className="dt-head">
            <div>
              <div className="dt-role">
                {dtResearch.role} · {dtResearch.period}
              </div>
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
                  <span className="pipe-step">{String(i + 1).padStart(2, '0')}</span>
                </div>
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
              <div className="quote">{dtResearch.securityLink}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
