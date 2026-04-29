/* global React, Container, Section, Eyebrow, Tag, Button, Reveal */

const caseStudies = [
  {
    id: 'protein-pals',
    num: '04',
    client: 'Protein Pals',
    sector: 'Meal delivery · India',
    tags: ['Meal delivery', 'Full system', 'Meta Ads + CRM'],
    problem: 'They had 15 subscribers.',
    insight: 'Then 240 — at 98.67% lead quality.',
    body: "A meal delivery startup stuck on the engine. We rebuilt the funnel end-to-end — Meta Ads, ManyChat qualification, Zoho CRM, Conversion API feedback loop. 1,942 leads across 10 months. The founder eventually asked us to pause the campaign because the kitchen couldn't keep up.",
    metrics: [
      { label: 'Leads generated', before: '0', after: '1,942', delta: '10 mo' },
      { label: 'Pre-qualified rate', before: 'n/a', after: '98.67%', delta: '+98pts' },
      { label: 'Active subscribers', before: '15', after: '240', delta: '+1500%' },
    ],
  },
  {
    id: 'mirror',
    num: '01',
    client: 'Mirror Mental Health',
    sector: 'Mental health · US',
    tags: ['Mental health', 'Funnel rebuild', 'High-trust'],
    problem: 'They didn\'t have a lead problem.',
    insight: 'They had a system problem.',
    body: "Their ads worked — on paper. Leads came in, dropped into a CRM nobody opened, and sat there while the sales team chased Instagram DMs. We rebuilt the funnel end-to-end — landing path, CRM routing, tracking, creative loop. Sales started picking from a queue instead of chasing.",
    metrics: [
      { label: 'Cost per booked consult', before: '$184', after: '$114', delta: '−38%' },
      { label: 'Monthly qualified leads', before: '47', after: '112', delta: '+138%' },
      { label: 'Sales team utilization', before: '42%', after: '81%', delta: '+39pts' },
    ],
  },
  {
    id: 'north',
    num: '02',
    client: 'Northbank Advisory',
    sector: 'Financial advisory · UK',
    tags: ['Financial advisory', 'Lead gen', 'Creative'],
    problem: 'The offer was strong.',
    insight: 'The positioning was quiet.',
    body: 'We repositioned the advisory around the one client outcome that actually mattered and rebuilt the entire inbound system to match. New creative. New qualification. Fewer leads — and a much higher close rate.',
    metrics: [
      { label: 'Close rate', before: '11%', after: '27%', delta: '+16pts' },
      { label: 'Cost per qualified lead', before: '£420', after: '£188', delta: '−55%' },
    ],
  },
  {
    id: 'atelier',
    num: '03',
    client: 'Atelier Wellness',
    sector: 'Wellness · India',
    tags: ['Wellness', 'Creative direction', 'Organic'],
    problem: 'Instagram was busy.',
    insight: 'The business wasn\'t.',
    body: 'High follower count, low revenue. We rebuilt the creative system around an offer structure the audience could actually buy into. Organic became the feeder for a paid system that closed.',
    metrics: [
      { label: 'Monthly bookings', before: '34', after: '96', delta: '+182%' },
      { label: 'Revenue per follower', before: '₹4.2', after: '₹18.6', delta: '+343%' },
    ],
  },
];

function CaseStudyIndex({ onOpen }) {
  return (
    <Section id="case" pad={140} topRule>
      <Container>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <Eyebrow>§ Case studies</Eyebrow>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(44px, 5.2vw, 72px)', lineHeight: 1.02,
                letterSpacing: '-0.02em', margin: '16px 0 0', fontWeight: 400,
              }}>
                The work, <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>as it happened.</em>
              </h2>
            </div>
            <p style={{ fontSize: 15, color: 'var(--fg-muted)', maxWidth: 340, margin: 0, lineHeight: 1.55 }}>
              Numbers are illustrative of category; specifics are anonymized where partners asked us to.
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
        display: 'grid', gridTemplateColumns: '120px 1fr 1fr auto',
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
      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: primary ? 44 : 34,
          lineHeight: 1.08, letterSpacing: '-0.02em', margin: 0, fontWeight: 400,
        }}>
          {c.problem}<br/>
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{c.insight}</em>
        </h3>
        <div style={{ display: 'flex', gap: 8, marginTop: 20, flexWrap: 'wrap' }}>
          {c.tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>
      </div>
      <div>
        <div style={{ fontSize: 13, color: 'var(--fg-subtle)', marginBottom: 14, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          {c.client}
        </div>
        <div style={{ display: 'grid', gap: 16 }}>
          {c.metrics.slice(0, 2).map(m => (
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
  const c = caseStudies[0];
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
                {c.tags.map(t => <Tag key={t}>{t}</Tag>)}
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
              {c.metrics.map(m => <Metric key={m.label} {...m}/>)}
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
