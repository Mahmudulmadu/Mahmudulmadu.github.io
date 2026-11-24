import { useMemo, useState, type PointerEvent } from 'react';
import { nullSets } from '../data/nulls';
import { nullMeta } from '../data/profile';
import { useWidth } from '../hooks';
import { Icon } from './Icon';

const BIN = 0.025;
const HEIGHT = 250;
const M = { top: 44, right: 10, bottom: 30, left: 34 };

const order = ['Paderborn|geometry', 'Paderborn|load-zone', 'XJTU-SY|geometry', 'XJTU-SY|load-zone'];
const sets = order
  .map((k) => nullSets.find((s) => `${s.rig}|${s.channel}` === k))
  .filter((s): s is (typeof nullSets)[number] => Boolean(s));

const pct = (v: number, d = 1) => `${(v * 100).toFixed(d)} %`;

function niceMax(v: number) {
  const steps = [5, 10, 20, 25, 50, 100, 200];
  for (const s of steps) if (v <= s * 4) return { max: Math.ceil(v / s) * s, step: s };
  return { max: Math.ceil(v / 500) * 500, step: 500 };
}

/** Rounded-top column: 4px radius at the data end, square at the baseline. */
function columnPath(x: number, y: number, w: number, h: number) {
  const r = Math.min(4, w / 2, h);
  return `M${x},${y + h}V${y + r}Q${x},${y} ${x + r},${y}H${x + w - r}Q${x + w},${y} ${x + w},${y + r}V${y + h}Z`;
}

export function NullChart() {
  const [selected, setSelected] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const [plotRef, width] = useWidth<HTMLDivElement>();

  const set = sets[selected];
  const key = `${set.rig}|${set.channel}`;
  const meta = nullMeta[key];

  const bins = useMemo(() => {
    const lo = Math.floor(Math.min(...sets.flatMap((s) => s.acc)) / 0.05) * 0.05;
    const hi = 1;
    const n = Math.round((hi - lo) / BIN);
    const counts = new Array<number>(n).fill(0);
    for (const a of set.acc) {
      const i = Math.min(n - 1, Math.max(0, Math.floor((a - lo) / BIN + 1e-9)));
      counts[i] += 1;
    }
    return { lo, hi, n, counts };
  }, [set]);

  const { lo, hi, n, counts } = bins;
  const total = set.acc.length;
  const innerW = Math.max(0, width - M.left - M.right);
  const innerH = HEIGHT - M.top - M.bottom;
  const x = (v: number) => M.left + ((v - lo) / (hi - lo)) * innerW;
  const { max: yMax, step: yStep } = niceMax(Math.max(...counts));
  const y = (c: number) => M.top + innerH - (c / yMax) * innerH;
  const slot = innerW / n;
  const barW = Math.max(2, Math.min(24, slot - 2));

  const yTicks: number[] = [];
  for (let t = 0; t <= yMax; t += yStep) yTicks.push(t);
  // Ten-point ticks when there is room, twenty-point ticks on narrow screens.
  const tickStep = innerW < 460 ? 0.2 : 0.1;
  const xTicks: number[] = [];
  for (let t = Math.ceil(lo / tickStep) * tickStep; t <= hi + 1e-9; t += tickStep) xTicks.push(Math.round(t * 10) / 10);

  const xObs = x(set.observed);
  const x95 = x(meta.pct95);
  const anchorFor = (px: number) => (px > width * 0.72 ? 'end' : px < width * 0.28 ? 'start' : 'middle');
  // The 95th-percentile label sits on the side away from the true-label line, so the two never overlap.
  const p95Left = xObs >= x95;
  const p95LabelX = p95Left ? x95 - 6 : x95 + 6;
  const p95Anchor = p95Left ? 'end' : 'start';
  const clears = meta.verdict === 'clears its null';
  const atOrAbove = set.acc.filter((a) => a >= set.observed - 1e-9).length;

  const onMove = (e: PointerEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    if (px < M.left || px > M.left + innerW) return setHover(null);
    setHover(Math.min(n - 1, Math.max(0, Math.floor((px - M.left) / slot))));
  };

  const label = `${set.rig}, ${set.channel} features: histogram of accuracy under all ${total} class-preserving labellings of ${meta.units} bearings. True labels score ${pct(set.observed)}; the null's 95th percentile is ${pct(meta.pct95)}; exact p = ${meta.p}.`;

  return (
    <div className="viz">
      <div className="viz-head">
        <div>
          <h4 className="viz-title">Does the result beat chance at this study size?</h4>
          <p className="viz-sub">Labellings per 2.5-point accuracy bin, with the true labelling marked.</p>
        </div>
        <div className="viz-legend" aria-hidden="true">
          <span>
            <i className="key-bar" /> Null labellings
          </span>
          <span>
            <i className="key-line" /> True labels
          </span>
          <span>
            <i className="key-ref" /> 95th percentile
          </span>
        </div>
      </div>

      <div className="viz-tabs" role="tablist" aria-label="Choose a result">
        {sets.map((s, i) => (
          <button
            key={`${s.rig}-${s.channel}`}
            type="button"
            role="tab"
            className="viz-tab"
            aria-selected={i === selected}
            onClick={() => {
              setSelected(i);
              setHover(null);
            }}
          >
            {s.rig}
            <span className="tab-sep"> · </span>
            <span className="tab-ch">{s.channel}</span>
          </button>
        ))}
      </div>

      <div className="viz-plot" ref={plotRef}>
        {width > 0 && (
          <svg
            width={width}
            height={HEIGHT}
            role="img"
            aria-label={label}
            onPointerMove={onMove}
            onPointerLeave={() => setHover(null)}
          >
            {/* gridlines + y ticks */}
            {yTicks.map((t) => (
              <g key={t}>
                <line x1={M.left} x2={M.left + innerW} y1={y(t)} y2={y(t)} stroke="var(--chart-grid)" strokeWidth={1} />
                <text x={M.left - 8} y={y(t)} dy="0.32em" textAnchor="end" fontSize={11} fill="var(--chart-muted)" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {t}
                </text>
              </g>
            ))}

            {/* share of labellings at or above the true score: this area is the p-value */}
            <rect x={xObs} y={M.top} width={Math.max(0, M.left + innerW - xObs)} height={innerH} fill="var(--chart-series-2)" opacity={0.07} />

            {/* columns */}
            {counts.map((c, i) => {
              if (c === 0) return null;
              const cx = M.left + i * slot + (slot - barW) / 2;
              const top = y(c);
              return (
                <path
                  key={i}
                  d={columnPath(cx, top, barW, M.top + innerH - top)}
                  fill="var(--chart-series-1)"
                  opacity={hover === null || hover === i ? 1 : 0.45}
                  style={{ transition: 'opacity 120ms ease' }}
                />
              );
            })}

            {/* baseline */}
            <line x1={M.left} x2={M.left + innerW} y1={M.top + innerH} y2={M.top + innerH} stroke="var(--chart-axis)" strokeWidth={1} />

            {/* x ticks */}
            {xTicks.map((t) => (
              <text key={t} x={x(t)} y={M.top + innerH + 18} textAnchor="middle" fontSize={11} fill="var(--chart-muted)" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {Math.round(t * 100)}%
              </text>
            ))}

            {/* 95th percentile reference */}
            <line x1={x95} x2={x95} y1={M.top - 14} y2={M.top + innerH} stroke="var(--chart-muted)" strokeWidth={1} />
            <text x={p95LabelX} y={M.top - 6} textAnchor={p95Anchor} fontSize={11.5} fill="var(--text-2)">
              95th pct {pct(meta.pct95)}
            </text>

            {/* true-label score */}
            <line x1={xObs} x2={xObs} y1={M.top - 30} y2={M.top + innerH} stroke="var(--chart-series-2)" strokeWidth={2} strokeLinecap="round" />
            <circle cx={xObs} cy={M.top - 30} r={4.5} fill="var(--chart-series-2)" stroke="var(--chart-surface)" strokeWidth={2} />
            <text x={xObs} y={M.top - 38} textAnchor={anchorFor(xObs)} fontSize={12} fontWeight={600} fill="var(--text)">
              True labels {pct(set.observed)}
            </text>
          </svg>
        )}

        {hover !== null && width > 0 && (
          <div className="viz-tooltip" style={{ left: M.left + hover * slot + slot / 2, top: y(counts[hover]) }} role="status">
            <div>
              <b>
                {pct(lo + hover * BIN, 1)} – {pct(lo + (hover + 1) * BIN, 1)}
              </b>
            </div>
            <div className="muted">
              {counts[hover]} labelling{counts[hover] === 1 ? '' : 's'} · {pct(counts[hover] / total)} of {total}
            </div>
          </div>
        )}
      </div>

      <dl className="viz-stats">
        <div className="viz-stat">
          <dt>Labellings enumerated</dt>
          <dd>{meta.labellings}</dd>
        </div>
        <div className="viz-stat">
          <dt>True labels</dt>
          <dd>{pct(set.observed)}</dd>
        </div>
        <div className="viz-stat">
          <dt>Null 95th pct</dt>
          <dd>{pct(meta.pct95)}</dd>
        </div>
        <div className="viz-stat">
          <dt>Exact p</dt>
          <dd>
            {meta.p} <span style={{ color: 'var(--text-2)', fontWeight: 400, fontSize: 12.5 }}>({atOrAbove} / {total})</span>
          </dd>
        </div>
        <div className="viz-stat">
          <dt>Verdict</dt>
          <dd className={clears ? 'verdict-good' : 'verdict-null'}>
            <Icon name={clears ? 'checkCircle' : 'circleDashed'} />
            {clears ? 'Clears its null' : 'Inside its null'}
          </dd>
        </div>
      </dl>

      <details className="viz-table">
        <summary>Show the data as a table</summary>
        <div className="viz-table-scroll">
          <table>
            <thead>
              <tr>
                <th scope="col">Accuracy bin</th>
                <th scope="col">Labellings</th>
                <th scope="col">Share</th>
              </tr>
            </thead>
            <tbody>
              {counts.map((c, i) => (
                <tr key={i}>
                  <td>
                    {pct(lo + i * BIN)} – {pct(lo + (i + 1) * BIN)}
                  </td>
                  <td>{c}</td>
                  <td>{pct(c / total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>

      <p className="viz-caption">
        Every class-preserving labelling of the {meta.units} bearings is scored with the same bearing-held-out protocol;
        the true labelling is one of them. The shaded area holds the labellings that score at least as high as the true
        one, and their share is the exact p. Data: the paper’s permutation nulls and claim registry.
      </p>
    </div>
  );
}
