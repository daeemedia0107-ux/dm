/* global React, Container, Section, Eyebrow, Reveal */

function Founder() {
  return (
    <Section id="about" pad={160} bg="var(--ink-900)" style={{ color: 'var(--paper-50)', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{
        position: 'absolute', right: '-4%', top: '-8%',
        fontFamily: 'var(--font-display)', fontSize: 'clamp(280px, 40vw, 540px)',
        color: 'var(--paper-50)', opacity: 0.04, lineHeight: 1, pointerEvents: 'none',
      }}>داعي</div>

      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 80, alignItems: 'start' }}>
          <Reveal>
            <FounderPortrait/>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <div style={{
                fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.14em',
                color: 'var(--olive-300)', fontWeight: 500,
              }}>§ About · داعي</div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 5.2vw, 72px)',
                lineHeight: 1.02, letterSpacing: '-0.02em', margin: '20px 0 0', fontWeight: 400,
                color: 'var(--paper-50)',
              }}>
                The name means<br/>
                <em style={{ fontStyle: 'italic', color: 'var(--olive-300)' }}>the one who invites.</em>
              </h2>
              <div style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--paper-200)', marginTop: 44, maxWidth: 640 }}>
                <p style={{ margin: '0 0 22px' }}>
                  I started Daee because most performance marketing agencies run ads without
                  understanding the business underneath them. The work is shallow on purpose —
                  it scales that way. It just doesn't produce the outcome the client actually hired for.
                </p>
                <p style={{ margin: '0 0 22px' }}>
                  I think in cause, effect, and leverage. Not in hacks, not in hype.
                  If you don't have a system that reliably converts attention into revenue,
                  running more ads just burns money faster.
                </p>
                <p style={{ margin: 0 }}>
                  We say no more than we say yes. That's the whole point.
                </p>
              </div>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: 48,
                marginTop: 56, paddingTop: 32,
                borderTop: '1px solid rgba(232,226,210,0.12)',
                justifyContent: 'start',
              }}>
                <FounderFact label="Based in" value="Pune, India"/>
                <FounderFact label="Working with" value="Partners globally"/>
                <FounderFact label="Writing at" value="@saadshares"/>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function FounderPortrait() {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{
        aspectRatio: '4/5', background: 'var(--ink-800)',
        border: '1px solid rgba(232,226,210,0.08)', borderRadius: 2,
        position: 'relative', overflow: 'hidden',
      }}>
        <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <defs>
            <radialGradient id="darkgrad" cx="60%" cy="30%" r="70%">
              <stop offset="0%" stopColor="var(--ink-700)" stopOpacity="1"/>
              <stop offset="100%" stopColor="var(--ink-900)" stopOpacity="1"/>
            </radialGradient>
          </defs>
          <rect width="400" height="500" fill="url(#darkgrad)"/>
          <g fill="var(--paper-200)" opacity="0.18">
            <ellipse cx="200" cy="180" rx="62" ry="72"/>
            <path d="M 80 500 C 80 360 140 290 200 290 C 260 290 320 360 320 500 Z"/>
          </g>
          <g fill="var(--olive-300)" opacity="0.28">
            <ellipse cx="225" cy="160" rx="40" ry="55"/>
          </g>
        </svg>
        <div style={{
          position: 'absolute', inset: 0, padding: 22,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div style={{
            fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.18em',
            color: 'var(--paper-300)', fontWeight: 500,
          }}>Founder portrait · b&w · to supply</div>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 56, lineHeight: 1,
              color: 'var(--olive-300)', fontStyle: 'italic', letterSpacing: '-0.02em',
            }}>Saad</div>
          </div>
        </div>
      </div>
    </figure>
  );
}

function FounderFact({ label, value }) {
  return (
    <div>
      <div style={{
        fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.16em',
        color: 'var(--paper-300)', fontWeight: 500, marginBottom: 8,
      }}>{label}</div>
      <div style={{ fontSize: 15, color: 'var(--paper-50)', fontWeight: 500 }}>{value}</div>
    </div>
  );
}

window.Founder = Founder;
