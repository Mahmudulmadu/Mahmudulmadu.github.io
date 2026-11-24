import type { CSSProperties, ReactNode } from 'react';
import { useReveal } from '../hooks';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'article' | 'li' | 'section' | 'a';
  style?: CSSProperties;
  href?: string;
  target?: string;
  rel?: string;
}

export function Reveal({ children, className = '', delay = 0, as = 'div', style, ...rest }: RevealProps) {
  const [ref, visible] = useReveal<HTMLElement>();
  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ ...style, '--delay': `${delay}ms` } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function SectionHead({
  index,
  label,
  title,
  lede,
  center = false,
}: {
  index: string;
  label: string;
  title: ReactNode;
  lede?: ReactNode;
  center?: boolean;
}) {
  return (
    <Reveal className={`section-head ${center ? 'center' : ''}`}>
      <div className="eyebrow">
        <b>{index}</b> {label}
      </div>
      <h2 className="section-title">{title}</h2>
      {lede && <p className="section-lede">{lede}</p>}
    </Reveal>
  );
}
