import type { CSSProperties, ReactNode } from 'react';
import { useReveal } from '../hooks';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'article' | 'li' | 'section';
}

export function Reveal({ children, className = '', delay = 0, as = 'div' }: RevealProps) {
  const [ref, visible] = useReveal<HTMLElement>();
  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

export function SectionHead({ index, label, title, lede }: { index: string; label: string; title: ReactNode; lede?: ReactNode }) {
  return (
    <Reveal className="section-head">
      <div className="eyebrow">
        {index} · {label}
      </div>
      <h2 className="section-title">{title}</h2>
      {lede && <p className="section-lede">{lede}</p>}
    </Reveal>
  );
}
