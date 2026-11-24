import { certifications, education, honors, skills } from '../data/profile';
import { Icon, type IconName } from './Icon';
import { Reveal, SectionHead } from './Reveal';

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead
          index="08"
          label="Skills"
          title={
            <>
              My <span className="gradient-text">toolbox</span>.
            </>
          }
        />
        <div className="skills-grid">
          {skills.map((g, i) => (
            <Reveal
              key={g.group}
              delay={(i % 3) * 60}
              className={`card spot skill-card ${g.group === 'Concepts' ? 'is-full' : g.wide ? 'is-wide' : ''}`}
            >
              <h3>
                <i>
                  <Icon name={g.icon} />
                </i>
                {g.group}
                <small>{g.items.length}</small>
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

function Item({ title, by, date, link, icon }: { title: string; by: string; date: string; link?: string; icon?: IconName }) {
  return (
    <div className="item-row">
      <span className="item-icon">
        <Icon name={icon ?? 'award'} />
      </span>
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
        <SectionHead
          index="09"
          label="Recognition"
          title={
            <>
              Honors, certifications <span className="gradient-text">& education</span>.
            </>
          }
        />
        <div className="two-col">
          <Reveal className="card spot list-card">
            <h3>
              <i>
                <Icon name="trophy" />
              </i>
              Achievements
            </h3>
            {honors.map((h) => (
              <Item key={h.title} {...h} />
            ))}
          </Reveal>
          <Reveal className="card spot list-card" delay={90}>
            <h3>
              <i>
                <Icon name="award" />
              </i>
              Certifications
            </h3>
            {certifications.map((c) => (
              <Item key={c.title} {...c} icon="checkCircle" />
            ))}
          </Reveal>
        </div>

        <div className="edu-grid">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 70} className={`card spot edu ${i === 0 ? 'gborder' : ''}`}>
              <div className="edu-period">{e.period}</div>
              <h3>{e.school}</h3>
              <div className="edu-degree">{e.degree}</div>
              <span className="edu-grade">{e.grade}</span>
              {e.detail && <p className="edu-detail">{e.detail}</p>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
