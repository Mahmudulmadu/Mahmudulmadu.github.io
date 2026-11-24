import { certifications, education, honors } from '../data/profile';
import { Icon, type IconName } from './Icon';
import { Reveal, SectionHead } from './Reveal';

export function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHead
          index="06"
          label="Education"
          title={
            <>
              Where I <span className="gradient-text">studied</span>.
            </>
          }
        />
        <div className="edu-grid">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 70} className={`card spot lift edu ${i === 0 ? 'gborder' : ''}`}>
              <span className="edu-icon">
                <Icon name="graduation" />
              </span>
              <div className="edu-period">{e.period}</div>
              <h3>{e.school}</h3>
              <div className="edu-degree">{e.degree}</div>
              <span className="edu-grade">{e.grade}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Item({ title, by, date, link, icon }: { title: string; by: string; date: string; link?: string; icon: IconName }) {
  return (
    <li className="item-row">
      <span className="item-icon">
        <Icon name={icon} />
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
    </li>
  );
}

export function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <SectionHead
          index="07"
          label="Achievements"
          title={
            <>
              Awards & <span className="gradient-text">certifications</span>.
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
            <ul>
              {honors.map((h) => (
                <Item key={h.title} {...h} />
              ))}
            </ul>
          </Reveal>
          <Reveal className="card spot list-card" delay={90}>
            <h3>
              <i>
                <Icon name="award" />
              </i>
              Certifications
            </h3>
            <ul>
              {certifications.map((c) => (
                <Item key={c.title} {...c} icon="checkCircle" />
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
