/* global React, Container, Section, Eyebrow, Button, Tag, Reveal, caseStudies */

function CaseStudyDetail({ id, onBack }) {
  const c = caseStudies.find(x => x.id === id) || caseStudies[0];
  return (
    <article>
      {/* Hero */}
      <Section pad={96}>
        <Container>
          <button onClick={onBack} style={{
            background: 'transparent', border: 0, padding: 0, cursor: 'pointer',
            fontSize: 13, color: 'var(--fg-muted)', marginBottom: 40,
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>
            <span aria-hidden>←</span> Back to all case studies
          </button>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32, flexWrap: 'wrap' }}>
              <Eyebrow>Case № {c.num} · {c.sector}</Eyebrow>
              <span style={{ width: 24, height: 1, background: 'var(--border-strong)' }}/>
              <Eyebrow>{c.client}</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={80} y={16}>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(56px, 7.6vw, 120px)',
              lineHeight: 0.95, letterSpacing: '-0.025em', margin: 0, fontWeight: 400, maxWidth: 1100,
            }}>
              {c.problem}<br/>
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{c.insight}</em>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <div style={{ display: 'flex', gap: 8, marginTop: 36, flexWrap: 'wrap' }}>
              {c.tags.map(t => <Tag key={t}>{t}</Tag>)}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Full-bleed metric band */}
      <Section pad={72} bg="var(--paper-100)" topRule>
        <Container>
          <Reveal>
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${c.metrics.length}, 1fr)`,
              gap: 48,
            }}>
              {c.metrics.map(m => (
                <div key={m.label}>
                  <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--fg-subtle)', fontWeight: 500, marginBottom: 14 }}>
                    {m.label}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 5vw, 68px)', letterSpacing: '-0.02em', lineHeight: 1 }}>{m.after}</span>
                    <span style={{ fontSize: 15, color: 'var(--fg-subtle)', textDecoration: 'line-through' }}>{m.before}</span>
                    <span style={{
                      fontSize: 13, color: 'var(--olive-700)', fontWeight: 500,
                      background: 'var(--olive-100)', padding: '4px 10px', borderRadius: 999,
                    }}>{m.delta}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Long-form body */}
      <Section pad={120} topRule>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 96, alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: 120 }}>
              <Eyebrow>§ The read</Eyebrow>
              <div style={{ marginTop: 16, fontSize: 13, color: 'var(--fg-subtle)', lineHeight: 1.6 }}>
                7 min read · Q2 2025
              </div>
            </div>
            <div style={{ maxWidth: 720 }}>
              <Reveal>
                <p style={{
                  fontSize: 22, lineHeight: 1.5, color: 'var(--fg)',
                  marginBottom: 32, fontFamily: 'var(--font-display)',
                  fontWeight: 400, letterSpacing: '-0.005em',
                }}>
                  {c.body}
                </p>
              </Reveal>

              <Reveal delay={80}>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontSize: 40, lineHeight: 1.08,
                  letterSpacing: '-0.015em', margin: '48px 0 20px', fontWeight: 400,
                }}>What we actually built</h2>
              </Reveal>

              <Reveal>
                <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { n: '01', t: 'Mapped the revenue system end-to-end', b: "Before touching ads, we mapped how a lead moves from first impression to closed consult. That's where the leaks were." },
                    { n: '02', t: 'Rebuilt the creative loop', b: "New hooks, new formats, a monthly test cadence tied to actual pipeline — not platform-level vanity metrics." },
                    { n: '03', t: 'Rewired the CRM', b: "Routing based on qualification, not first-come. Sales picks from a priority queue; cold leads get nurtured, not dropped." },
                    { n: '04', t: 'Built first-party tracking', b: "Server-side events into the CRM, so attribution reflected what actually happened — not what Meta wanted us to see." },
                  ].map((s, i) => (
                    <Reveal key={s.n} delay={i * 80}>
                      <li style={{
                        display: 'grid', gridTemplateColumns: '60px 1fr', gap: 24,
                        padding: '24px 0', borderTop: '1px solid var(--border)',
                      }}>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent)' }}>{s.n}</div>
                        <div>
                          <div style={{ fontSize: 19, fontWeight: 500, marginBottom: 6 }}>{s.t}</div>
                          <div style={{ fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.6 }}>{s.b}</div>
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </Reveal>

              <Reveal>
                <blockquote style={{
                  margin: '72px 0 0', padding: '32px 0 0',
                  borderTop: '1px solid var(--border-strong)',
                }}>
                  <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--fg-subtle)', fontWeight: 500, marginBottom: 20 }}>
                    What the partner said
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 1.2,
                    letterSpacing: '-0.01em', margin: 0, fontWeight: 400,
                  }}>
                    "They told us the ads weren't the problem. They were right. We'd spent two years
                    and three agencies on the wrong answer."
                  </p>
                  <footer style={{
                    marginTop: 24, fontSize: 14, color: 'var(--fg-subtle)',
                  }}>
                    — Founder, {c.client}
                  </footer>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Next / CTA */}
      <Section pad={120} bg="var(--paper-100)" topRule>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center' }}>
            <Reveal>
              <div>
                <Eyebrow>§ If this sounds like you</Eyebrow>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 4.6vw, 60px)',
                  lineHeight: 1.05, letterSpacing: '-0.02em', margin: '16px 0 24px', fontWeight: 400,
                }}>
                  Most of our partners<br/>didn't have an <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>ad problem.</em>
                </h2>
                <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--fg-muted)', maxWidth: 500 }}>
                  They had a system problem. If any of this feels familiar, the application takes four minutes.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <Button size="lg" onClick={onBack} variant="secondary">← Back to all cases</Button>
                <Button size="lg" onClick={() => { onBack(); setTimeout(() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' }), 150); }}>
                  Apply to work with us <span aria-hidden>→</span>
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </article>
  );
}

window.CaseStudyDetail = CaseStudyDetail;
