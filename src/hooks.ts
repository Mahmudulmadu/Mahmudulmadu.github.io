import { useEffect, useRef, useState } from 'react';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Adds `is-visible` once the element scrolls into view. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, visible] as const;
}

/** Returns the id of the section currently nearest the top of the viewport. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => {
      const offset = Math.min(window.innerHeight * 0.35, 320);
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids]);

  return active;
}

export type Theme = 'dark' | 'light';

function readStoredTheme(): Theme | null {
  try {
    const t = localStorage.getItem('theme');
    return t === 'light' || t === 'dark' ? t : null;
  } catch {
    return null;
  }
}

/** Dark by default; follows the OS until the visitor picks a theme, then remembers it. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = readStoredTheme();
    if (stored) return stored;
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: light)').matches) return 'light';
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage unavailable: the choice lasts for this visit only */
    }
  };

  return { theme, toggle };
}

/** Width of an element, kept current with ResizeObserver. */
export function useWidth<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setWidth(el.clientWidth);
    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) setWidth(Math.round(e.contentRect.width));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return [ref, width] as const;
}

/** Types and deletes each word in turn. With reduced motion it simply rotates the words. */
export function useTypewriter(words: string[], typeMs = 65, holdMs = 1700) {
  const [text, setText] = useState(words[0] ?? '');
  const state = useRef({ word: 0, chars: words[0]?.length ?? 0, deleting: true });

  useEffect(() => {
    if (words.length === 0) return;
    const reduced = prefersReducedMotion();
    let timer: number;

    const tick = () => {
      const s = state.current;
      const word = words[s.word];
      if (reduced) {
        s.word = (s.word + 1) % words.length;
        setText(words[s.word]);
        timer = window.setTimeout(tick, holdMs + 800);
        return;
      }
      if (s.deleting) {
        s.chars -= 1;
        if (s.chars <= 0) {
          s.deleting = false;
          s.word = (s.word + 1) % words.length;
          s.chars = 0;
        }
        setText(words[s.word].slice(0, Math.max(0, s.chars)));
        timer = window.setTimeout(tick, typeMs / 2);
      } else {
        s.chars += 1;
        setText(word.slice(0, s.chars));
        if (s.chars >= word.length) {
          s.deleting = true;
          timer = window.setTimeout(tick, holdMs);
        } else {
          timer = window.setTimeout(tick, typeMs);
        }
      }
    };

    // Hold the first word before starting to cycle.
    timer = window.setTimeout(tick, holdMs);
    return () => window.clearTimeout(timer);
  }, [words, typeMs, holdMs]);

  return text;
}

/** Counts from 0 to `target` once `start` becomes true. */
export function useCountUp(target: number, start: boolean, durationMs = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    // Land on the final value even if animation frames are throttled (background tab, low-power mode).
    const done = window.setTimeout(() => {
      cancelAnimationFrame(raf);
      setValue(target);
    }, durationMs + 150);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(done);
    };
  }, [target, start, durationMs]);

  return value;
}

/** Feeds the pointer position into `.spot` cards as --mx / --my, for the hover spotlight. */
export function useSpotlight() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.('.spot') as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
}

/** 0..1 scroll progress through the page, and whether the page is scrolled past `threshold` px. */
export function useScroll(threshold = 12) {
  const [progress, setProgress] = useState(0);
  const [past, setPast] = useState(false);
  const [far, setFar] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      setPast(window.scrollY > threshold);
      setFar(window.scrollY > 900);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [threshold]);

  return { progress, past, far };
}
