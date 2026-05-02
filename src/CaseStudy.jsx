/* global React, Container, Section, Eyebrow, Tag, Button, Reveal */

function CaseStudyIndex({ onOpen }) {
  const content = window.CMS_CONTENT?.caseStudies || {};
  const caseStudies = content.items || [];
  const eyebrow = content.indexEyebrow || "Selected work";
  const title = content.indexTitle || "The work, as it happened.";
  const intro = content.indexIntro || "Numbers are illustrative of category; specifics are anonymized where partners asked us to.";

  return (
    <Section id="case" pad={140} topRule>
      <Container>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <Eyebrow>§ {eyebrow}</Eyebrow>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(44px, 5.2vw, 72px)', lineHeight: 1.02,
                letterSpacing: '-0.02em', margin: '16px 0 0', fontWeight: 400,
              }} dangerouslySetInnerHTML={{ __html: title.replace('as it happened.', '<em style="font-style: italic; color: var(--accent);">as it happened.</em>') }} />
            </div>
            <p style={{ fontSize: 15, color: 'var(--fg-muted)', maxWidth: 340, margin: 0, lineHeight: 1.55 }}>
              {intro}
            </p>
          </div>
        </Reveal>

        {caseStudies.map((c, i) => (
          <Reveal key={c.id} delay={i * 80}>
            <CaseCard c={c} onOpen={onOpen} primary={i === 0}/>
          </Reveal>
        ))}
      </Container>
    </Section>
  );
}

function CaseCard({ c, onOpen, primary }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onClick={() => onOpen(c.id)}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid', gridTemplateColumns: c.image ? '120px 140px 1fr 1fr auto' : '120px 1fr 1fr auto',
        gap: 48, alignItems: 'start',
        padding: primary ? '56px 0' : '44px 0',
        borderTop: '1px solid var(--border-strong)',
        cursor: 'pointer', transition: 'opacity 180ms',
      }}>
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: hover ? 'var(--accent)' : 'var(--fg-subtle)', transition: 'color 180ms' }}>
          Case № {c.num}
        </div>
        <div style={{ fontSize: 12, color: 'var(--fg-subtle)', marginTop: 8 }}>
          {c.sector}
        </div>
      </div>
      {c.image && (
        <div style={{
          aspectRatio: '4/5', background: 'var(--ink-800)',
          borderRadius: 4, overflow: 'hidden', border: '1px solid var(--border)'
        }}>
          <img src={c.image} alt={c.client} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      )}
      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: primary ? 44 : 34,
          lineHeight: 1.08, letterSpacing: '-0.02em', margin: 0, fontWeight: 400,
        }}>
          {c.problem}<br/>
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{c.insight}</em>
        </h3>
        <div style={{ display: 'flex', gap: 8, marginTop: 20, flexWrap: 'wrap' }}>
          {c.tags && c.tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>
      </div>
      <div>
        <div style={{ fontSize: 13, color: 'var(--fg-subtle)', marginBottom: 14, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          {c.client}
        </div>
        <div style={{ display: 'grid', gap: 16 }}>
          {c.metrics && c.metrics.slice(0, 2).map(m => (
            <div key={m.label}>
              <div style={{ fontSize: 11, color: 'var(--fg-subtle)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6 }}>
                {m.label}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, letterSpacing: '-0.01em', lineHeight: 1 }}>{m.after}</span>
                <span style={{ fontSize: 13, color: 'var(--olive-700)', fontWeight: 500 }}>{m.delta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{
        fontSize: 13, color: hover ? 'var(--accent)' : 'var(--fg-muted)',
        display: 'flex', alignItems: 'center', gap: 6,
        transform: hover ? 'translateX(4px)' : 'translateX(0)',
        transition: 'transform 220ms var(--ease-out), color 180ms',
        paddingTop: 2,
      }}>
        Read the story <span aria-hidden>→</span>
      </div>
    </article>
  );
}

/* ---------- Home teaser version ---------- */
function CaseStudyTeaser({ onOpen }) {
  const caseStudies = window.CMS_CONTENT?.caseStudies?.items || [];
  const c = caseStudies[0];

  if (!c) return null;
  return (
    <Section id="case" pad={140} topRule>
      <Container>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24, rowGap: 20 }}>
            <div style={{ minWidth: 0, flex: '1 1 320px' }}>
              <Eyebrow>§ Case study · 01</Eyebrow>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4.2vw, 56px)',
                lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 0', fontWeight: 400,
              }}>{c.client}</h2>
            </div>
            <a onClick={(e) => { e.preventDefault(); onOpen('index'); }} href="#" style={{
              fontSize: 14, color: 'var(--fg)', textDecoration: 'none',
              borderBottom: '1px solid var(--border-strong)', paddingBottom: 2,
              flexShrink: 0,
            }}>See all case studies →</a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 72 }}>
            <div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
                {c.tags && c.tags.map(t => <Tag key={t}>{t}</Tag>)}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 3.6vw, 48px)',
                lineHeight: 1.08, letterSpacing: '-0.015em', margin: '0 0 28px', fontWeight: 400,
              }}>
                {c.problem}<br/>
                <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{c.insight}</em>
              </h3>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--fg-muted)', marginBottom: 32 }}>
                {c.body}
              </p>
              <Button variant="secondary" onClick={() => onOpen(c.id)}>Read the full story <span aria-hidden>→</span></Button>
            </div>

            <aside style={{
              background: 'var(--paper-100)', border: '1px solid var(--border)',
              borderRadius: 4, padding: 36, display: 'flex', flexDirection: 'column', gap: 28,
            }}>
              {c.metrics && c.metrics.map(m => <Metric key={m.label} {...m}/>)}
              <div style={{
                paddingTop: 20, borderTop: '1px solid var(--border)',
                fontSize: 12, color: 'var(--fg-subtle)', lineHeight: 1.5,
              }}>
                Measured across 14 weeks, Q2 2025.<br/>
                Attribution via first-party tracking.
              </div>
            </aside>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function Metric({ label, before, after, delta }) {
  return (
    <div>
      <div style={{
        fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em',
        color: 'var(--fg-subtle)', fontWeight: 500, marginBottom: 10,
      }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: 40, color: 'var(--fg)',
          letterSpacing: '-0.015em', lineHeight: 1,
        }}>{after}</span>
        <span style={{ fontSize: 14, color: 'var(--fg-subtle)', textDecoration: 'line-through' }}>{before}</span>
        <span style={{
          fontSize: 12, color: 'var(--olive-700)', fontWeight: 500,
          background: 'var(--olive-100)', padding: '3px 10px', borderRadius: 999,
          letterSpacing: '0.02em',
        }}>{delta}</span>
      </div>
    </div>
  );
}

window.caseStudies = caseStudies;
window.CaseStudyIndex = CaseStudyIndex;
window.CaseStudyTeaser = CaseStudyTeaser;
