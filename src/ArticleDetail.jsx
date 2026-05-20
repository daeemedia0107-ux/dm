/* global React, Container, Section, Eyebrow, Reveal, marked */

function ArticleDetail({ id, onNav }) {
  const articles = window.CMS_CONTENT?.articles || [];
  const article = articles.find(a => a.id === id) || articles[0];

  React.useEffect(() => {
    if (!article) return;
    
    // SEO: Update document title and description dynamically
    document.title = `${article.title} | Daee Media`;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = article.description || "Daee Media Article";

    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      document.title = "Daee Media | Revenue Systems";
    };
  }, [article]);

  if (!article) return null;

  // Use marked.js to convert CMS markdown to HTML
  const htmlContent = window.marked ? marked.parse(article.body || '') : '<p>Loading content...</p>';

  return (
    <Section id="article-detail" pad={140} style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Container>
        <Reveal>
          <div style={{ marginBottom: 40 }}>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav('articles'); }} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13,
              fontFamily: 'var(--font-mono)', color: 'var(--fg-subtle)', textDecoration: 'none',
              textTransform: 'uppercase', letterSpacing: '0.05em'
            }}>
              ← Back to articles
            </a>
          </div>
          
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div style={{ marginBottom: 64, textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent)', marginBottom: 16 }}>
                {article.date || 'Recent'}
              </div>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)',
                lineHeight: 1.05, letterSpacing: '-0.02em', margin: '0 0 24px', fontWeight: 400
              }}>
                {article.title}
              </h1>
              <p style={{ fontSize: 18, color: 'var(--fg-muted)', lineHeight: 1.6, margin: '0 0 32px' }}>
                {article.description}
              </p>
              <div style={{ fontSize: 14, color: 'var(--fg-subtle)' }}>
                By {article.author || 'Daee Media'}
              </div>
            </div>

            {article.image && (
              <div style={{ marginBottom: 64, borderRadius: 8, overflow: 'hidden', background: 'var(--border)' }}>
                <img src={article.image} alt={article.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            )}

            <div 
              className="article-content"
              style={{
                fontSize: 18, lineHeight: 1.7, color: 'var(--fg)',
              }}
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </Reveal>
      </Container>
      
      {/* Article Content Styles */}
      <style>{`
        .article-content h2 { font-family: var(--font-display); font-size: 36px; margin: 64px 0 24px; font-weight: 400; letter-spacing: -0.01em; }
        .article-content h3 { font-family: var(--font-display); font-size: 28px; margin: 48px 0 16px; font-weight: 400; }
        .article-content p { margin-bottom: 24px; color: var(--fg-muted); }
        .article-content a { color: var(--accent); text-decoration: underline; text-underline-offset: 4px; }
        .article-content ul, .article-content ol { margin: 0 0 32px 24px; color: var(--fg-muted); }
        .article-content li { margin-bottom: 12px; }
        .article-content blockquote { border-left: 2px solid var(--accent); margin: 40px 0; padding: 12px 0 12px 24px; font-style: italic; color: var(--fg); font-size: 22px; }
        .article-content img { max-width: 100%; border-radius: 4px; margin: 32px 0; }
      `}</style>
    </Section>
  );
}

window.ArticleDetail = ArticleDetail;
