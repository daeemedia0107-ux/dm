/* global React, Container, Button */
const { useState: useStateNav, useEffect: useEffectNav } = React;

function Nav({ currentPage, onNav }) {
  const [scrolled, setScrolled] = useStateNav(false);
  const [menuOpen, setMenuOpen] = useStateNav(false);
  
  useEffectNav(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffectNav(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const pages = [
    { id: 'home', label: 'Work', anchor: '#case' },
    { id: 'home', label: 'Services', anchor: '#services' },
    { id: 'home', label: 'Philosophy', anchor: '#philosophy' },
    { id: 'home', label: 'About', anchor: '#about' },
    { id: 'case', label: 'Case study', anchor: null },
  ];

  const goApply = () => {
    if (currentPage !== 'home') { onNav('home', 'apply'); }
    else document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'color-mix(in srgb, var(--bg) 85%, transparent)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'background 220ms var(--ease-out), border-color 220ms, padding 220ms',
    }}>
      <Container>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: scrolled ? '14px 0' : '22px 0',
          transition: 'padding 220ms var(--ease-out)',
        }}>
          <a onClick={(e) => { e.preventDefault(); onNav('home'); }} href="#"
             style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', cursor: 'pointer' }}>
            <DaeeMark />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{
                fontFamily: 'var(--font-display)', fontSize: 22,
                letterSpacing: '-0.015em', color: 'var(--fg)', lineHeight: 1,
              }}>Daee Media<span style={{ color: 'var(--accent)' }}>.</span></span>
              <span style={{
                fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.18em',
                color: 'var(--fg-subtle)', fontWeight: 500, marginTop: 5,
              }}>Revenue systems</span>
            </div>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              {pages.slice(0, 4).map((p, i) => (
                <NavLink key={i}
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage !== 'home') onNav('home', p.anchor?.slice(1));
                    else document.querySelector(p.anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}>
                  {p.label}
                </NavLink>
              ))}
              <span style={{ width: 1, height: 14, background: 'var(--border-strong)' }}/>
            </div>
            <Button size="sm" onClick={goApply}>
              Apply <span aria-hidden>→</span>
            </Button>
            
            {/* Mobile Hamburger Toggle */}
            <button 
              className="mobile-flex-only"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'transparent', border: 'none', padding: 8, cursor: 'pointer',
                display: 'none', flexDirection: 'column', gap: 6, zIndex: 100,
                alignItems: 'center', justifyContent: 'center',
              }}
            >
              <div style={{ width: 24, height: 2, background: 'var(--fg)', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }} />
              <div style={{ width: 24, height: 2, background: 'var(--fg)', transition: 'opacity 0.3s', opacity: menuOpen ? 0 : 1 }} />
              <div style={{ width: 24, height: 2, background: 'var(--fg)', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }} />
            </button>
          </div>
        </div>
      </Container>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, top: 0, left: 0, width: '100%', height: '100vh',
          background: 'var(--bg)', zIndex: 40, display: 'flex', flexDirection: 'column',
          padding: '120px 24px 40px', boxSizing: 'border-box',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, fontSize: 24 }}>
            {pages.slice(0, 4).map((p, i) => (
              <a key={i} href="#" onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                if (currentPage !== 'home') onNav('home', p.anchor?.slice(1));
                else document.querySelector(p.anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }} style={{ color: 'var(--fg)', textDecoration: 'none', fontFamily: 'var(--font-sans)', borderBottom: '1px solid var(--border)', paddingBottom: 16 }}>
                {p.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function DaeeMark() {
  return (
    <svg width="38" height="38" viewBox="0 0 120 120" fill="none" aria-hidden>
      <rect x="1" y="1" width="118" height="118" rx="4" stroke="var(--fg)" strokeWidth="1.5"/>
      {/* Stylized DM serif monogram */}
      <g fill="var(--fg)" fontFamily="var(--font-display)">
        <text x="28" y="78" fontSize="68" style={{ letterSpacing: '-0.04em' }}>D</text>
        <text x="60" y="78" fontSize="68" style={{ letterSpacing: '-0.04em' }}>M</text>
      </g>
      <line x1="18" y1="94" x2="102" y2="94" stroke="var(--fg)" strokeWidth="1"/>
      <text x="60" y="108" textAnchor="middle" fontFamily="var(--font-sans)"
            fontSize="9" fill="var(--fg)" style={{ letterSpacing: '0.24em' }}>DAEE MEDIA</text>
    </svg>
  );
}

function NavLink({ onClick, children }) {
  const [hover, setHover] = useStateNav(false);
  return (
    <a href="#" onClick={onClick}
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
         fontSize: 14, color: hover ? 'var(--fg)' : 'var(--fg-muted)',
         textDecoration: 'none', fontFamily: 'var(--font-sans)',
         transition: 'color 120ms var(--ease-out)', cursor: 'pointer',
       }}>{children}</a>
  );
}

window.Nav = Nav;
