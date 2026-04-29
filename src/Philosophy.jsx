/* global React, Container, Section, Eyebrow, Reveal */

function Philosophy() {
  return (
    <Section id="philosophy" pad={160} bg="var(--paper-100)" style={{ position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{
        position: 'absolute', left: '-6%', top: '50%', transform: 'translateY(-50%)',
        fontFamily: 'var(--font-display)', fontSize: 'clamp(320px, 46vw, 640px)',
        lineHeight: 1, color: 'var(--fg)', opacity: 0.04, pointerEvents: 'none',
      }}>“</div>

      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 96, alignItems: 'start' }}>
          <Reveal>
            <div>
              <Eyebrow>§ Philosophy</Eyebrow>
              <p style={{
                fontSize: 15, color: 'var(--fg-muted)', marginTop: 28, lineHeight: 1.6, maxWidth: 320,
              }}>
                We built Daee around a set of beliefs about how the work should be done.
                We don't apologise for them. They're the whole reason the work lands.
              </p>
              <div style={{
                marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border-strong)',
                fontSize: 13, color: 'var(--fg-subtle)',
              }}>
                Saad · Founder<br/>
                Pune, India
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={120}>
              <blockquote style={{
                margin: 0, padding: 0,
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(44px, 5.4vw, 76px)',
                lineHeight: 1.08, letterSpacing: '-0.02em', fontWeight: 400,
              }}>
                We invite.{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                  We don't chase.
                </em>
              </blockquote>
            </Reveal>

            <Reveal delay={220}>
              <div style={{
                fontSize: 18, lineHeight: 1.65, color: 'var(--fg-muted)',
                marginTop: 44, maxWidth: 620,
              }}>
                <p style={{ margin: '0 0 20px' }}>
                  Most agencies sell retainers. We build relationships. The difference shows up in
                  every decision — who we say yes to, how we price the work, what we refuse to
                  optimize for.
                </p>
                <p style={{ margin: 0 }}>
                  We work with fewer clients, deeper. If we're not convinced we can move the
                  number, we'll tell you — and we'll tell you why. Then we'll introduce you to
                  someone who can.
                </p>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32,
                marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--border-strong)',
              }}>
                <Principle n="i." title="Partner, not vendor"
                  body="One team, no account chain. You get Saad in the room."/>
                <Principle n="ii." title="Fewer, better"
                  body="Two or three active partners at a time. Deeper work, quieter books."/>
                <Principle n="iii." title="Honest before easy"
                  body="We'll say no if the fit isn't right. The number matters more than the contract."/>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Principle({ n, title, body }) {
  return (
    <div>
      <div style={{
        fontFamily: 'var(--font-display)', fontStyle: 'italic',
        fontSize: 20, color: 'var(--accent)', marginBottom: 8,
      }}>{n}</div>
      <div style={{
        fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 500,
        color: 'var(--fg)', marginBottom: 8,
      }}>{title}</div>
      <div style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.55 }}>{body}</div>
    </div>
  );
}

window.Philosophy = Philosophy;
