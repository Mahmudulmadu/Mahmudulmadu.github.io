import { profile, teaching } from '../data/profile';
import { Icon } from './Icon';
import { Reveal, SectionHead } from './Reveal';

export function Teaching() {
  return (
    <section className="section" id="teaching">
      <div className="container">
        <SectionHead
          index="07"
          label="Teaching & competitive programming"
          title={
            <>
              Teaching others to <span className="gradient-text">think in algorithms</span>.
            </>
          }
        />

        <Reveal className="card gborder teach">
          <div>
            <span className="teach-icon">
              <Icon name="users" />
            </span>
            <h3>{teaching.role}</h3>
            <div className="teach-org">{teaching.org}</div>
            <div className="teach-since">{teaching.since}</div>
            <p className="teach-text">{teaching.text}</p>
            <div className="chip-list">
              {teaching.topics.map((t) => (
                <span className="chip chip-accent" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="teach-links">
              <a className="btn btn-sm" href={profile.links.leetcode} target="_blank" rel="noopener">
                <Icon name="code" /> LeetCode
              </a>
              <a className="btn btn-sm" href={profile.links.codeforces} target="_blank" rel="noopener">
                <Icon name="terminal" /> Codeforces
              </a>
            </div>
          </div>

          <div className="record">
            {teaching.record.map((r) =>
              r.link ? (
                <a className="record-item" key={r.label} href={r.link} target="_blank" rel="noopener">
                  <div className="record-value gradient-text">{r.value}</div>
                  <div className="record-label">{r.label}</div>
                </a>
              ) : (
                <div className="record-item" key={r.label}>
                  <div className="record-value gradient-text">{r.value}</div>
                  <div className="record-label">{r.label}</div>
                </div>
              ),
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
