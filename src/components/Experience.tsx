import { experience } from '../data/profile';
import { Icon } from './Icon';
import { Reveal, SectionHead } from './Reveal';

const initials = (company: string) => company.slice(0, 2).toUpperCase();

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead
          index="03"
          label="Experience"
          title={
            <>
              2.5 years of shipping, <span className="gradient-text">the last year in production AI</span>.
            </>
          }
          lede="From full-stack .NET and ServiceNow, through AWS serverless, to multi-agent LLM systems on Azure."
        />
        <ol className="timeline">
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.role}-${job.period}`} className={`job ${i === 0 ? 'is-current' : ''}`} delay={i * 60}>
              <span className="job-dot" aria-hidden="true">
                {initials(job.company)}
              </span>
              <article className={`card spot job-card ${i === 0 ? 'gborder' : ''}`}>
                <div className="job-top">
                  <div>
                    <h3 className="job-role">{job.role}</h3>
                    <div className="job-company">{job.company}</div>
                  </div>
                  <div className="job-meta">
                    <div className="job-period">{job.period}</div>
                    <div className="job-place">{job.place}</div>
                  </div>
                </div>
                <p className="job-summary">{job.summary}</p>

                {job.groups && (
                  <div className="job-groups">
                    {job.groups.map((g) => (
                      <div className="job-group" key={g.title}>
                        <h4>
                          <i>
                            <Icon name={g.icon} />
                          </i>
                          {g.title}
                        </h4>
                        <ul className="job-points">
                          {g.points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {job.points && (
                  <ul className="job-points">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}

                <div className="chip-list job-tags">
                  {job.tags.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
