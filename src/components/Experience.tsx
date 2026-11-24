import { experience } from '../data/profile';
import { Reveal, SectionHead } from './Reveal';

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead
          index="05"
          label="Experience"
          title="Two and a half years shipping software, the last year in production AI."
          lede="From full-stack .NET and ServiceNow to AWS serverless, and then to multi-agent LLM systems on Azure."
        />
        <ol className="timeline">
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.role}-${job.period}`} className={`job ${i === 0 ? 'is-current' : ''}`} delay={i * 60}>
              <span className="job-dot" aria-hidden="true" />
              <article className="card job-card">
                <div className="job-top">
                  <div>
                    <h3 className="job-role">{job.role}</h3>
                    <div className="job-company">{job.company}</div>
                  </div>
                  <div>
                    <div className="job-period">{job.period}</div>
                    <div className="job-place">{job.place}</div>
                  </div>
                </div>
                <p className="job-summary">{job.summary}</p>
                {job.points.length > 0 && (
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
