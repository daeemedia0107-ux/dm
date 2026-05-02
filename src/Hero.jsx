/* global React, Container, Button, Eyebrow, Reveal */
const { useState: useStateHero, useEffect: useEffectHero } = React;

function Hero({ variant, onApply, onWork }) {
  if (variant === 'manifesto') return <HeroManifesto onApply={onApply} onWork={onWork}/>;
  if (variant === 'cover') return <HeroCover onApply={onApply} onWork={onWork}/>;
  return <HeroEditorial onApply={onApply} onWork={onWork}/>;
}

/* ---------- Variant A: Editorial (default) ---------- */
function HeroEditorial({ onApply, onWork }) {
  const content = window.CMS_CONTENT?.hero || {};
  const eyebrow = content.eyebrow || "Vol. 01 · Pune → Globally";
  const subhead = content.subhead || "A founder-led agency for service businesses that deserve to grow. Meta Ads, funnels, CRM, creative direction — treated as one compounding system, not line items on separate retainers.";
  const primaryCta = content.primaryCta || "Apply to work with us";
  const secondaryCta = content.secondaryCta || "See what we built";
  const proof = content.proof || [
    { k: "38%", v: "Lower cost per booked consult" },
    { k: "2.4×", v: "Qualified leads, same ad spend" },
    { k: "14+", v: "High-trust service partners" },
    { k: "2", v: "New partners, this quarter" }
  ];

  return (
    <section id="top" style={{ position: 'relative', paddingTop: 32, paddingBottom: 96, overflow: 'hidden' }}>
      {/* Very quiet Arabic glyph watermark, bottom-right */}
      <div aria-hidden style={{
        position: 'absolute', right: '-4%', bottom: '-12%', fontFamily: 'var(--font-display)',
        fontSize: 'clamp(300px, 44vw, 620px)', lineHeight: 1, color: 'var(--fg)',
        opacity: 0.035, letterSpacing: '-0.04em', pointerEvents: 'none',
        transform: 'rotate(-4deg)', userSelect: 'none',
      }}>داعي</div>

      <Container>
        {/* Eyebrow issue-style line */}
        <Reveal>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 16, paddingBottom: 40,
            borderBottom: '1px solid var(--border)', flexWrap: 'wrap',
          }}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <div style={{ flex: 1, minWidth: 20, height: 1, background: 'var(--border)' }}/>
            <Eyebrow>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <span style={{
                  width: 6, height: 6, borderRadius: 999, background: 'var(--accent)',
                  boxShadow: '0 0 0 4px color-mix(in srgb, var(--accent) 20%, transparent)',
                }}/>
                Accepting 2 partners · Q2
              </span>
            </Eyebrow>
          </div>
        </Reveal>

        <div style={{
          display: 'grid', gridTemplateColumns: '1.35fr 1fr',
          gap: 64, alignItems: 'end', marginTop: 56, position: 'relative',
        }}>
          <div>
            <Reveal delay={80}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: 34, color: 'var(--olive-600)',
                  lineHeight: 1, fontStyle: 'italic',
                }}>داعي</span>
                <span style={{ width: 28, height: 1, background: 'var(--border-strong)' }}/>
                <span style={{ fontSize: 13, color: 'var(--fg-subtle)', letterSpacing: '0.02em' }}>
                  <em style={{ fontFamily: 'var(--font-display)' }}>daʿī</em> — the one who invites
                </span>
              </div>
            </Reveal>

            <Reveal delay={140} y={20}>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(64px, 9vw, 132px)',
                lineHeight: 0.93, letterSpacing: '-0.025em', margin: 0,
                fontWeight: 400, color: 'var(--fg)',
              }}>
                {content.headlineLines ? (
                  <>
                    {content.headlineLines[0]}<br/>
                    {content.headlineLines[1]}<br/>
                    <span style={{ display: 'inline-block', position: 'relative' }}>
                      {content.headlineLines[2].replace('systems', '')}
                      <em style={{ fontStyle: 'italic', color: 'var(--accent)', position: 'relative' }}>systems</em>
                    </span><br/>
                    {content.headlineLines[3]}
                  </>
                ) : (
                  <>
                    We don't<br/>
                    run ads.<br/>
                    <span style={{ display: 'inline-block', position: 'relative' }}>
                      We build&nbsp;
                      <em style={{ fontStyle: 'italic', color: 'var(--accent)', position: 'relative' }}>systems</em>
                    </span><br/>
                    that earn revenue.
                  </>
                )}
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <p style={{
                fontSize: 20, lineHeight: 1.55, color: 'var(--fg-muted)',
                maxWidth: 580, marginTop: 40, marginBottom: 0,
              }}>
                {subhead}
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div style={{ display: 'flex', gap: 14, marginTop: 48, flexWrap: 'wrap' }}>
                <Button size="lg" onClick={onApply}>
                  {primaryCta} <span aria-hidden>→</span>
                </Button>
                <Button size="lg" variant="secondary" onClick={onWork}>
                  {secondaryCta}
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <FounderCard/>
          </Reveal>
        </div>

        {/* Proof strip */}
        <Reveal delay={420}>
          <div style={{
            marginTop: 112, paddingTop: 32, borderTop: '1px solid var(--border)',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40,
          }}>
            {proof.map((p, i) => (
              <ProofStat key={i} num={p.k} label={p.v} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ProofStat({ num, label }) {
  return (
    <div>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 44, lineHeight: 1,
        letterSpacing: '-0.02em', color: 'var(--fg)', marginBottom: 8,
      }}>{num}</div>
      <div style={{ fontSize: 13, color: 'var(--fg-subtle)', lineHeight: 1.45, maxWidth: 200 }}>
        {label}
      </div>
    </div>
  );
}

function FounderCard() {
  return (
    <figure style={{ margin: 0, position: 'relative' }}>
      <div style={{
        aspectRatio: '4 / 5', background: 'var(--paper-100)',
        border: '1px solid var(--border)', borderRadius: 2,
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Editorial portrait placeholder — duotone feel */}
        <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <defs>
            <radialGradient id="lightgrad" cx="55%" cy="35%" r="60%">
              <stop offset="0%" stopColor="var(--paper-50)" stopOpacity="1"/>
              <stop offset="100%" stopColor="var(--paper-200)" stopOpacity="1"/>
            </radialGradient>
            <linearGradient id="portraitShadow" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="var(--ink-800)" stopOpacity="0.0"/>
              <stop offset="1" stopColor="var(--ink-800)" stopOpacity="0.25"/>
            </linearGradient>
          </defs>
          <rect width="400" height="500" fill="url(#lightgrad)"/>
          {/* Stylized figure silhouette */}
          <g fill="var(--ink-800)" opacity="0.72">
            <ellipse cx="200" cy="180" rx="62" ry="72"/>
            <path d="M 80 500 C 80 360 140 290 200 290 C 260 290 320 360 320 500 Z"/>
          </g>
          {/* Subtle collar highlight */}
          <path d="M 135 360 C 170 340 230 340 265 360 L 240 410 L 200 380 L 160 410 Z" fill="var(--paper-50)" opacity="0.6"/>
          <rect width="400" height="500" fill="url(#portraitShadow)"/>
        </svg>

        <div style={{
          position: 'absolute', inset: 0, padding: 20,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div style={{
            fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.18em',
            color: 'var(--paper-50)', fontWeight: 500, mixBlendMode: 'difference',
          }}>Founder · portrait placeholder</div>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 48, lineHeight: 1,
              color: 'var(--paper-50)', fontStyle: 'italic', letterSpacing: '-0.02em',
              mixBlendMode: 'difference',
            }}>Saad</div>
          </div>
        </div>
      </div>
      <figcaption style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        marginTop: 14, fontSize: 12, color: 'var(--fg-subtle)',
      }}>
        <span>Saad · Founder, <em style={{ fontFamily: 'var(--font-display)' }}>daeemedia</em></span>
        <span>@saadshares</span>
      </figcaption>
    </figure>
  );
}

/* ---------- Variant B: Magazine cover ---------- */
function HeroCover({ onApply, onWork }) {
  return (
    <section id="top" style={{
      position: 'relative', padding: '24px 0 80px',
      borderBottom: '1px solid var(--border)',
    }}>
      <Container>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '16px 0 32px', borderBottom: '1px solid var(--border)',
        }}>
          <Eyebrow>Issue №01 · Revenue systems</Eyebrow>
          <Eyebrow>Pune ↔ Globally</Eyebrow>
          <Eyebrow>April 2026</Eyebrow>
        </div>
        <div style={{ paddingTop: 72, textAlign: 'center', position: 'relative' }}>
          <div aria-hidden style={{
            position: 'absolute', left: '50%', top: '40%', transform: 'translate(-50%, -50%)',
            fontFamily: 'var(--font-display)', fontSize: 'clamp(400px, 60vw, 820px)',
            color: 'var(--fg)', opacity: 0.03, pointerEvents: 'none', lineHeight: 1,
          }}>داعي</div>
          <Reveal>
            <Eyebrow style={{ marginBottom: 28 }}>A founder-led performance agency</Eyebrow>
          </Reveal>
          <Reveal delay={100} y={20}>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(72px, 11vw, 180px)',
              lineHeight: 0.88, letterSpacing: '-0.03em', margin: '0 auto',
              fontWeight: 400, maxWidth: 1100,
            }}>
              Revenue<br/>
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>systems,</em> not<br/>
              ad management.
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p style={{
              fontSize: 20, lineHeight: 1.55, color: 'var(--fg-muted)',
              maxWidth: 620, margin: '40px auto 0',
            }}>
              We build end-to-end systems that convert attention into revenue.
              Fewer clients, deeper work.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div style={{ display: 'flex', gap: 14, marginTop: 44, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button size="lg" onClick={onApply}>Apply to work with us <span aria-hidden>→</span></Button>
              <Button size="lg" variant="secondary" onClick={onWork}>See what we built</Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Variant C: Manifesto ---------- */
function HeroManifesto({ onApply, onWork }) {
  const lines = [
    { n: '01', t: 'We invite.', s: 'We don\'t chase.' },
    { n: '02', t: 'Partners.', s: 'Not vendors.' },
    { n: '03', t: 'Systems.', s: 'Not retainers.' },
    { n: '04', t: 'Fewer.', s: 'Deeper.' },
  ];
  return (
    <section id="top" style={{ padding: '56px 0 96px' }}>
      <Container>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 96, alignItems: 'start',
        }}>
          <div style={{ position: 'sticky', top: 120 }}>
            <Reveal>
              <Eyebrow>A manifesto · Vol. 01</Eyebrow>
            </Reveal>
            <Reveal delay={100} y={20}>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 5.4vw, 76px)',
                lineHeight: 1.02, letterSpacing: '-0.02em', margin: '24px 0 0',
                fontWeight: 400,
              }}>
                The agency you<br/>
                deserve to hire.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p style={{
                fontSize: 18, lineHeight: 1.6, color: 'var(--fg-muted)',
                maxWidth: 380, marginTop: 32,
              }}>
                Most performance marketing is shallow on purpose — it scales that way.
                We chose the other path.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div style={{ display: 'flex', gap: 14, marginTop: 40, flexWrap: 'wrap' }}>
                <Button size="lg" onClick={onApply}>Apply <span aria-hidden>→</span></Button>
                <Button size="lg" variant="secondary" onClick={onWork}>See case studies</Button>
              </div>
            </Reveal>
          </div>

          <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {lines.map((l, i) => (
              <Reveal key={l.n} delay={160 + i * 120} as="li">
                <li style={{
                  display: 'grid', gridTemplateColumns: '80px 1fr', gap: 32, alignItems: 'baseline',
                  padding: '32px 0',
                  borderTop: i === 0 ? '1px solid var(--border-strong)' : '1px solid var(--border)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--fg-subtle)',
                  }}>{l.n}</div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 6.4vw, 92px)',
                    lineHeight: 1, letterSpacing: '-0.025em',
                  }}>
                    {l.t} <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{l.s}</em>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

window.Hero = Hero;
