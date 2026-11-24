import { throughLine } from '../data/profile';
import { Icon, type IconName } from './Icon';
import { Reveal, SectionHead } from './Reveal';

const icons: Record<string, IconName> = { build: 'workflow', measure: 'chart', secure: 'shield' };

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead
          index="01"
          label="About"
          title="One through-line: build it, measure it honestly, then try to break it."
          lede="I came to research from engineering. I ship agentic systems for a living, I wrote a methods paper about how easily small benchmarks flatter a model, and I now work on the security of the kind of agents I build."
        />
        <div className="thread">
          {throughLine.map((t, i) => (
            <Reveal key={t.key} delay={i * 90} as="article" className={`card thread-card ${t.key === 'secure' ? 'is-focus' : ''}`}>
              <div className="thread-step">
                <span className="thread-icon">
                  <Icon name={icons[t.key]} />
                </span>
                <span className="thread-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
              {i < throughLine.length - 1 && <Icon name="arrowRight" className="thread-arrow" />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
