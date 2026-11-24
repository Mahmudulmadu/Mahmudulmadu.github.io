import { experience } from '../data/profile';
import { Icon } from './Icon';
import { Reveal, SectionHead } from './Reveal';

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead
          index="03"
          label="Experience"
          title={
            <>
              Where I’ve <span className="gradient-text">worked and taught</span>.
            </>
          }
        />
        <ol className="timeline">
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.role}-${job.period}`} className={`job ${i === 0 ? 'is-current' : ''}`} delay={i * 60}>
              <span className="job-dot" aria-hidden="true">
                <Icon name={job.kind === 'teaching' ? 'users' : 'briefcase'} />
              </span>
              <article className="card spot job-card">
                <div className="job-top">
                  <div>
                    <h3 className="job-role">
                      {job.role}
                      {job.kind === 'teaching' && <span className="badge badge-accent">Teaching</span>}
                    </h3>
                    <div className="job-company">{job.company}</div>
                  </div>
                  <div className="job-meta">
                    <div className="job-period">{job.period}</div>
                    <div className="job-place">{job.place}</div>
                  </div>
                </div>
                <ul className="job-points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
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
