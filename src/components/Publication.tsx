import { paper, profile } from '../data/profile';
import { Icon } from './Icon';
import { NullChart } from './NullChart';
import { Reveal, SectionHead } from './Reveal';

export function Publication() {
  return (
    <section className="section" id="publication">
      <div className="container">
        <SectionHead
          index="03"
          label="Publication"
          title="When a benchmark has eleven bearings, chance is hard to beat."
          lede="A methods paper on what an ML result means at the real size of a public dataset, written as a sole author. The same habit, asking what a claim would look like if the model had learned nothing, is what I bring to AI security."
        />

        <Reveal className="card paper" as="article">
          <div className="paper-meta">
            <span className="badge badge-accent">{paper.status}</span>
            {paper.areas.map((a) => (
              <span className="badge" key={a}>
                {a}
              </span>
            ))}
          </div>
          <h3 className="paper-title">{paper.title}</h3>
          <p className="paper-authors">
            <strong>{paper.authors}</strong> · {paper.affiliation} ·{' '}
            <a href={profile.links.orcid} target="_blank" rel="noopener" style={{ textDecoration: 'underline', textUnderlineOffset: 3 }}>
              ORCID 0009-0001-0778-064X
            </a>
          </p>
          <p className="paper-summary">{paper.summary}</p>

          <div className="paper-links">
            <a className="btn btn-primary btn-sm" href={paper.links.pdf} target="_blank" rel="noopener">
              <Icon name="file" /> Paper PDF
            </a>
            <a className="btn btn-sm" href={paper.links.code} target="_blank" rel="noopener">
              <Icon name="github" /> Code & notebooks
            </a>
            <a className="btn btn-sm btn-ghost" href={paper.links.registry} target="_blank" rel="noopener">
              <Icon name="database" /> Claim registry
            </a>
          </div>

          <div className="findings">
            {paper.findings.map((f) => (
              <div className="finding" key={f.label}>
                <div className="finding-value">{f.value}</div>
                <div className="finding-label">{f.label}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32 }}>
            <NullChart />
          </div>

          <div className="paper-lower">
            <div>
              <div className="subhead">Five reporting rules from the paper</div>
              <ol className="rules">
                {paper.rules.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ol>
            </div>
            <div>
              <div className="subhead">The result that started it</div>
              <div className="bridge-quote" style={{ marginTop: 0 }}>
                A standard deep baseline (WDCNN) stays inside its null on both rigs (p = 0.79 and 0.72), yet tells
                individual bearings apart at 99.5 % and 95.8 %. It learned the bearings, not the faults.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
