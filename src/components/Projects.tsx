import { useState } from 'react';
import { profile, projects, type ProjectCategory } from '../data/profile';
import { Icon } from './Icon';
import { Reveal, SectionHead } from './Reveal';

type Filter = 'All' | ProjectCategory;
const filters: Filter[] = ['All', 'AI / ML', 'Research', 'Full-stack'];

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All');
  const shown = projects.filter((p) => filter === 'All' || p.category === filter);
  const count = (f: Filter) => (f === 'All' ? projects.length : projects.filter((p) => p.category === f).length);

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead
          index="06"
          label="Projects"
          title="Selected work, from fine-tuned models to clean APIs."
          lede="Personal and open-source projects. Production systems built at Ainvio are not public, so they are described under Experience."
        />

        <div className="filter-row" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button key={f} type="button" className="filter" aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f} <span className="count">{count(f)}</span>
            </button>
          ))}
        </div>

        <div className="project-grid">
          {shown.map((p, i) => (
            <Reveal as="article" key={`${filter}-${p.name}`} delay={(i % 3) * 70} className={`card project ${p.featured ? 'is-featured' : ''}`}>
              <div className="project-top">
                <span className="project-cat">
                  {p.category} · {p.year}
                </span>
                {p.featured && <span className="badge badge-accent">Featured</span>}
              </div>
              <h3>{p.name}</h3>
              <p className="project-desc">{p.description}</p>
              {p.highlights && (
                <ul className="project-points">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
              <div className="chip-list">
                {p.tech.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              {(p.repo || p.demo) && (
                <div className="project-links">
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noopener" aria-label={`${p.name} source code on GitHub`}>
                      <Icon name="github" /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener" aria-label={`${p.name} demo`}>
                      <Icon name="play" /> Demo
                    </a>
                  )}
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <div className="more-repos">
          <a className="btn" href={`${profile.links.github}?tab=repositories`} target="_blank" rel="noopener">
            <Icon name="github" /> All repositories on GitHub <Icon name="arrowUpRight" />
          </a>
        </div>
      </div>
    </section>
  );
}
