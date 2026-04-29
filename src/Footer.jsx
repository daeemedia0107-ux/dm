/* global React, Container */

function Footer({ onNav }) {
  return (
    <footer style={{
      background: 'var(--paper-100)', padding: '140px 0 40px',
      borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden',
    }}>
      <div aria-hidden style={{
        position: 'absolute', right: '-4%', bottom: '-30%',
        fontFamily: 'var(--font-display)', fontSize: 'clamp(320px, 44vw, 600px)',
        color: 'var(--fg)', opacity: 0.05, lineHeight: 1, pointerEvents: 'none',
        letterSpacing: '-0.03em',
      }}>داعي</div>

      <Container>
        {/* Big editorial outro */}
        <div style={{ position: 'relative', marginBottom: 96 }}>
          <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--fg-subtle)', fontWeight: 500, marginBottom: 24 }}>
            § On the way out
          </div>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 6.4vw, 92px)',
            lineHeight: 1.02, letterSpacing: '-0.025em', fontWeight: 400, maxWidth: 1040,
          }}>
            We help businesses that <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>deserve</em> to grow.
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 48,
          paddingTop: 48, borderTop: '1px solid var(--border-strong)', position: 'relative',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <svg width="48" height="48" viewBox="0 0 120 120" fill="none" aria-hidden>
                <rect x="1" y="1" width="118" height="118" rx="4" stroke="var(--fg)" strokeWidth="1.5"/>
                <g fill="var(--fg)" fontFamily="var(--font-display)">
                  <text x="28" y="78" fontSize="68" style={{ letterSpacing: '-0.04em' }}>D</text>
                  <text x="60" y="78" fontSize="68" style={{ letterSpacing: '-0.04em' }}>M</text>
                </g>
                <line x1="18" y1="94" x2="102" y2="94" stroke="var(--fg)" strokeWidth="1"/>
                <text x="60" y="108" textAnchor="middle" fontFamily="var(--font-sans)"
                      fontSize="9" fill="var(--fg)" style={{ letterSpacing: '0.24em' }}>DAEE MEDIA</text>
              </svg>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 40, letterSpacing: '-0.015em',
                lineHeight: 1,
              }}>Daee Media<span style={{ color: 'var(--accent)' }}>.</span></div>
            </div>
            <div style={{
              fontSize: 13, color: 'var(--fg-muted)', marginTop: 20, maxWidth: 360, lineHeight: 1.65,
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 17, color: 'var(--fg)' }}>داعي</span>
              {' '}— Arabic for <em>the one who invites</em>. We invite aligned partners. We don't chase.
            </div>
          </div>
          <FooterCol title="Site" links={[
            { l: 'Home', to: 'home' }, { l: 'Services', to: 'home#services' },
            { l: 'Case studies', to: 'case' }, { l: 'About', to: 'home#about' },
            { l: 'Apply', to: 'home#apply' },
          ]} onNav={onNav}/>
          <FooterCol title="Written" links={[
            { l: 'Field notes', href: '#' }, { l: 'Library', href: '#' }, { l: '@saadshares', href: '#' },
          ]}/>
          <FooterCol title="Contact" links={[
            { l: 'hello@daeemedia.com', href: 'mailto:hello@daeemedia.com' },
            { l: 'Based in Pune, India', href: null },
            { l: 'Apply →', to: 'home#apply' },
          ]} onNav={onNav}/>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          marginTop: 96, paddingTop: 28, borderTop: '1px solid var(--border)',
          fontSize: 13, color: 'var(--fg-subtle)', flexWrap: 'wrap', gap: 16,
        }}>
          <span>© {new Date().getFullYear()} Daee Media · Revenue systems, not ad management.</span>
          <span><em style={{ fontFamily: 'var(--font-display)' }}>Built slowly. On purpose.</em></span>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, links, onNav }) {
  return (
    <div>
      <div style={{
        fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em',
        color: 'var(--fg-subtle)', fontWeight: 500, marginBottom: 20,
      }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {links.map(l => (
          <li key={l.l}>
            {l.href === null ? (
              <span style={{ fontSize: 14, color: 'var(--fg-muted)' }}>{l.l}</span>
            ) : (
              <a href={l.href || '#'}
                 onClick={(e) => {
                   if (l.to) { e.preventDefault();
                     if (l.to === 'case') onNav?.('case');
                     else if (l.to.startsWith('home#')) onNav?.('home', l.to.split('#')[1]);
                     else onNav?.(l.to);
                   }
                 }}
                 style={{
                   fontSize: 14, color: 'var(--fg-muted)', textDecoration: 'none',
                   transition: 'color 120ms',
                 }}
                 onMouseOver={(e) => e.currentTarget.style.color = 'var(--fg)'}
                 onMouseOut={(e) => e.currentTarget.style.color = 'var(--fg-muted)'}>
                {l.l}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

window.Footer = Footer;
