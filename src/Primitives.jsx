/* global React */
const { useState, useEffect, useRef } = React;

const Eyebrow = ({ children, color, style }) => (
  <div style={{
    fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.14em',
    color: color || 'var(--fg-subtle)', fontWeight: 500,
    fontFamily: 'var(--font-sans)', ...style,
  }}>{children}</div>
);

const Button = ({ variant = 'primary', children, onClick, size = 'md', href, ...rest }) => {
  const pad = size === 'lg' ? '16px 28px' : size === 'sm' ? '10px 16px' : '14px 24px';
  const base = {
    fontFamily: 'var(--font-sans)', fontSize: size === 'sm' ? 14 : 15,
    fontWeight: 500, padding: pad, borderRadius: 4, cursor: 'pointer',
    transition: 'background 120ms var(--ease-out), color 120ms var(--ease-out), border-color 120ms, transform 120ms',
    border: '1px solid transparent', letterSpacing: 0, textDecoration: 'none',
    display: 'inline-flex', alignItems: 'center', gap: 8, lineHeight: 1.2,
  };
  const variants = {
    primary:   { background: 'var(--accent)', color: 'var(--accent-fg)' },
    secondary: { background: 'transparent', color: 'var(--fg)', borderColor: 'var(--fg)' },
    ghost:     { background: 'transparent', color: 'var(--fg)', padding: '8px 12px' },
  };
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const hoverStyle = hover ? (
    variant === 'primary' ? { background: 'var(--accent-hover)' }
    : variant === 'secondary' ? { background: 'var(--fg)', color: 'var(--bg)' }
    : { background: 'var(--paper-100)' }
  ) : {};
  const pressStyle = press ? { transform: 'scale(0.99)' } : {};
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      onClick={onClick} style={{ ...base, ...variants[variant], ...hoverStyle, ...pressStyle }} {...rest}
    >{children}</Tag>
  );
};

const Container = ({ children, narrow, style }) => (
  <div style={{
    maxWidth: narrow ? 860 : 1240, width: '100%', margin: '0 auto',
    padding: '0 32px', ...style,
  }}>{children}</div>
);

const Section = ({ children, bg, pad = 120, id, style, topRule }) => (
  <section id={id} style={{
    background: bg || 'transparent', padding: `${pad}px 0`,
    borderTop: topRule ? '1px solid var(--border)' : 'none',
    ...style,
  }}>{children}</section>
);

const Tag = ({ children, tone = 'paper' }) => {
  const tones = {
    olive: { bg: 'var(--olive-100)', fg: 'var(--olive-700)', border: 'transparent' },
    clay:  { bg: 'var(--clay-100)',  fg: 'var(--clay-600)',  border: 'transparent' },
    paper: { bg: 'transparent',      fg: 'var(--fg-muted)',  border: 'var(--border-strong)' },
  };
  const t = tones[tone];
  return (
    <span style={{
      fontSize: 11, padding: '4px 10px', borderRadius: 999,
      background: t.bg, color: t.fg, fontWeight: 500,
      border: `1px solid ${t.border}`, fontFamily: 'var(--font-sans)',
      textTransform: 'uppercase', letterSpacing: '0.1em',
      display: 'inline-block',
    }}>{children}</span>
  );
};

// IntersectionObserver-based fade + translateY reveal.
const Reveal = ({ children, delay = 0, y = 12, as: Tag = 'div', style }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    // Reveal immediately if already visible on mount (above the fold)
    const rect = ref.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { setShown(true); io.disconnect(); }
      });
    }, { threshold: 0.08 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
      transition: `opacity 520ms var(--ease-out) ${delay}ms, transform 520ms var(--ease-out) ${delay}ms`,
      ...style,
    }}>{children}</Tag>
  );
};

Object.assign(window, { Eyebrow, Button, Container, Section, Tag, Reveal });
