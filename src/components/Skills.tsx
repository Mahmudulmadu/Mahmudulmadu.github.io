import { certifications, education, honors, skills } from '../data/profile';
import { Icon, type IconName } from './Icon';
import { Reveal, SectionHead } from './Reveal';

const skillIcons: Record<string, IconName> = {
  'Agents & LLMs': 'workflow',
  'ML & research': 'flask',
  Security: 'shield',
  'Backend & cloud': 'database',
  'Languages & frontend': 'code',
};

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead index="07" label="Skills" title="Tools I reach for." />
        <div className="skills-grid">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={(i % 2) * 70} className={`card skill-card ${i === skills.length - 1 && skills.length % 2 === 1 ? 'is-wide' : ''}`}>
              <h3>
                <Icon name={skillIcons[g.group] ?? 'layers'} />
                {g.group}
              </h3>
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
      </div>
    </section>
  );
}

function Item({ title, by, date, link }: { title: string; by: string; date: string; link?: string }) {
  return (
    <div className="item-row">
      <div>
        <div className="item-title">
          {link ? (
            <a href={link} target="_blank" rel="noopener">
              {title} <Icon name="arrowUpRight" />
            </a>
          ) : (
            title
          )}
        </div>
        <div className="item-by">{by}</div>
      </div>
      <div className="item-date">{date}</div>
    </div>
  );
}

export function Honors() {
  return (
    <section className="section" id="honors">
      <div className="container">
        <SectionHead index="08" label="Recognition" title="Honors, certifications and education." />
        <div className="two-col">
          <Reveal className="card list-card">
            <h3>
              <Icon name="trophy" /> Honors & awards
            </h3>
            {honors.map((h) => (
              <Item key={h.title} {...h} />
            ))}
          </Reveal>
          <Reveal className="card list-card" delay={90}>
            <h3>
              <Icon name="award" /> Certifications
            </h3>
            {certifications.map((c) => (
              <Item key={c.title} {...c} />
            ))}
          </Reveal>
        </div>

        <div className="edu-grid" style={{ marginTop: 20 }}>
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 70} className={`card edu ${i === 0 ? 'is-main' : ''}`}>
              <div className="edu-period">{e.period}</div>
              <h3>{e.school}</h3>
              <div className="edu-degree">{e.degree}</div>
              <p className="edu-detail">{e.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
