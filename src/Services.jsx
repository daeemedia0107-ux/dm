/* global React, Container, Section, Eyebrow, Reveal */
const { useState: useStateSvc } = React;

const services = [
  {
    num: '01', title: 'Meta Ads',
    body: "Built around your funnel and your offer — not someone else's template. Creative loops, targeting and measurement, rebuilt monthly.",
    outcomes: ['Creative testing', 'Audience architecture', 'Measurement'],
  },
  {
    num: '02', title: 'Creative direction',
    body: "Ads and organic content that sound like you and convert like us. Written, scripted and art-directed against the system — not content for content's sake.",
    outcomes: ['Ad creative', 'Organic content', 'Art direction'],
  },
  {
    num: '03', title: 'Lead generation systems',
    body: 'Forms, nurture, qualification. Set up so your sales team stops chasing cold leads and starts picking from a queue of warm ones.',
    outcomes: ['Qualification logic', 'Nurture sequences', 'Hand-off'],
  },
  {
    num: '04', title: 'CRM & automation',
    body: "The invisible machinery behind the revenue. If you can't see the system, you can't improve it — and most teams can't see it.",
    outcomes: ['Pipeline design', 'Routing', 'Automation'],
  },
  {
    num: '05', title: 'Tracking & attribution',
    body: 'First-party, event-based, honest. Attribution that reflects how revenue actually moves — not what a platform tells you to believe.',
    outcomes: ['First-party events', 'Server-side', 'Reporting'],
  },
];

function Services({ variant }) {
  return (
    <Section id="services" pad={140} topRule>
      <Container>
        <Reveal>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80,
            marginBottom: 80, alignItems: 'end',
          }}>
            <div>
              <Eyebrow>§ Services</Eyebrow>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(44px, 5.2vw, 72px)', lineHeight: 1.02,
                letterSpacing: '-0.02em', margin: '16px 0 0', fontWeight: 400,
              }}>
                Six parts.<br/>
                <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>One system.</em>
              </h2>
            </div>
            <div>
              <p style={{
                fontSize: 19, lineHeight: 1.55, color: 'var(--fg-muted)',
                maxWidth: 560, margin: 0,
              }}>
                Each of these is a component of one revenue system. Alone they leak.
                Together they compound. We don't sell them as separate retainers —
                and we only sign if the whole picture makes sense.
              </p>
            </div>
          </div>
        </Reveal>

        {variant === 'grid' ? <ServicesGrid /> : <ServicesEditorial />}
      </Container>
    </Section>
  );
}

/* ---------- Layout A: Numbered editorial list (default) ---------- */
function ServicesEditorial() {
  const [active, setActive] = useStateSvc(0);
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 96, alignItems: 'start',
    }}>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {services.map((s, i) => (
          <li key={s.num}
            onMouseEnter={() => setActive(i)}
            style={{
              display: 'grid', gridTemplateColumns: '72px 1fr auto', gap: 24,
              alignItems: 'baseline', padding: '28px 0',
              borderTop: '1px solid var(--border)',
              cursor: 'pointer',
              color: active === i ? 'var(--fg)' : 'var(--fg-muted)',
              transition: 'color 180ms var(--ease-out)',
            }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 13,
              color: active === i ? 'var(--accent)' : 'var(--fg-subtle)',
              transition: 'color 180ms',
            }}>{s.num}</span>
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 3.4vw, 44px)',
              lineHeight: 1.05, letterSpacing: '-0.02em',
            }}>{s.title}</span>
            <span aria-hidden style={{
              fontSize: 20, color: active === i ? 'var(--accent)' : 'var(--fg-faint)',
              transform: active === i ? 'translateX(0)' : 'translateX(-6px)',
              opacity: active === i ? 1 : 0.5,
              transition: 'transform 180ms, color 180ms, opacity 180ms',
            }}>→</span>
          </li>
        ))}
        <li style={{ borderTop: '1px solid var(--border)', height: 1 }}/>
      </ol>

      <aside style={{ position: 'sticky', top: 120 }}>
        <div key={active} style={{
          background: 'var(--paper-100)', border: '1px solid var(--border)',
          padding: 36, borderRadius: 4,
          animation: 'fadeIn 280ms var(--ease-out)',
        }}>
          <Eyebrow color="var(--accent)">{services[active].num} · {services[active].title}</Eyebrow>
          <p style={{
            fontFamily: 'var(--font-display)', fontSize: 26, lineHeight: 1.3,
            letterSpacing: '-0.01em', color: 'var(--fg)', margin: '20px 0 0',
            fontWeight: 400,
          }}>
            {services[active].body}
          </p>
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 28,
            paddingTop: 24, borderTop: '1px solid var(--border)',
          }}>
            {services[active].outcomes.map(o => (
              <span key={o} style={{
                fontSize: 12, padding: '5px 12px', borderRadius: 999,
                border: '1px solid var(--border-strong)', color: 'var(--fg-muted)',
              }}>{o}</span>
            ))}
          </div>
        </div>
        <p style={{
          marginTop: 24, fontSize: 13, color: 'var(--fg-subtle)', maxWidth: 400,
        }}>
          Hover or tap a service to preview. In engagement, all six
          are running in concert — not stacked as retainers.
        </p>
      </aside>

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }`}</style>
    </div>
  );
}

/* ---------- Layout B: Grid (Tweak) ---------- */
function ServicesGrid() {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1,
      background: 'var(--border)', border: '1px solid var(--border)',
    }}>
      {services.map(s => <ServiceCell key={s.num} {...s}/>)}
    </div>
  );
}

function ServiceCell({ num, title, body, outcomes }) {
  const [hover, setHover] = useStateSvc(false);
  return (
    <article
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? 'var(--paper-100)' : 'var(--bg)',
        padding: '36px 28px', display: 'flex', flexDirection: 'column',
        gap: 14, minHeight: 260, transition: 'background 220ms var(--ease-out)',
      }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 12,
          color: hover ? 'var(--accent)' : 'var(--fg-subtle)',
          transition: 'color 120ms',
        }}>{num}</span>
        <span aria-hidden style={{
          fontSize: 16, color: hover ? 'var(--accent)' : 'var(--fg-faint)',
          transition: 'transform 180ms',
          transform: hover ? 'translateX(2px)' : 'translateX(-4px)',
          opacity: hover ? 1 : 0,
        }}>→</span>
      </div>
      <h3 style={{
        fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 400,
        margin: 0, letterSpacing: '-0.01em', lineHeight: 1.08,
      }}>{title}</h3>
      <p style={{
        fontSize: 15, lineHeight: 1.55, color: 'var(--fg-muted)', margin: 0,
      }}>{body}</p>
      <div style={{
        marginTop: 'auto', display: 'flex', gap: 6, flexWrap: 'wrap',
        paddingTop: 16, borderTop: '1px solid var(--border)',
      }}>
        {outcomes.map(o => (
          <span key={o} style={{ fontSize: 11, color: 'var(--fg-subtle)' }}>· {o}</span>
        ))}
      </div>
    </article>
  );
}

window.Services = Services;
