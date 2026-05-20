/* global React, Container, Section, Eyebrow, Reveal, Button, Tag */

function ArticlesIndex({ onOpen }) {
  const articles = window.CMS_CONTENT?.articles || [];

  return (
    <Section id="articles" pad={140} topRule>
      <Container>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <Eyebrow>§ Field Notes</Eyebrow>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(44px, 5.2vw, 72px)', lineHeight: 1.02,
                letterSpacing: '-0.02em', margin: '16px 0 0', fontWeight: 400,
              }}>
                Thoughts on <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>growth.</em>
              </h2>
            </div>
            <p style={{ fontSize: 15, color: 'var(--fg-muted)', maxWidth: 340, margin: 0, lineHeight: 1.55 }}>
              Articles, teardowns, and essays on building revenue systems that compound.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {articles.length === 0 && (
            <p style={{ color: 'var(--fg-muted)', fontStyle: 'italic' }}>No articles published yet.</p>
          )}
          {articles.map((a, i) => (
            <Reveal key={a.id || i} delay={i * 80}>
              <article 
                onClick={(e) => { e.preventDefault(); onOpen(a.id); }}
                style={{
                  display: 'grid', gridTemplateColumns: a.image ? '120px 1fr' : '1fr',
                  gap: 48, alignItems: 'start',
                  paddingTop: 44, borderTop: '1px solid var(--border-strong)',
                  cursor: 'pointer', transition: 'opacity 180ms',
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = 0.7}
                onMouseLeave={(e) => e.currentTarget.style.opacity = 1}
              >
                {a.image && (
                  <div style={{ aspectRatio: '1/1', background: 'var(--ink-800)', borderRadius: 4, overflow: 'hidden' }}>
                    <img src={a.image} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-subtle)', marginBottom: 12 }}>
                    {a.date || 'Recent'}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, margin: '0 0 16px', fontWeight: 400 }}>
                    {a.title}
                  </h3>
                  <p style={{ fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 640 }}>
                    {a.description}
                  </p>
                  <div style={{ fontSize: 14, color: 'var(--accent)' }}>Read article →</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

window.ArticlesIndex = ArticlesIndex;
