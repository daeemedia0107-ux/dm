/* global React */
const { useState: useStateTw, useEffect: useEffectTw } = React;

function TweaksPanel({ values, onChange }) {
  const [enabled, setEnabled] = useStateTw(false);
  const [open, setOpen] = useStateTw(true);

  useEffectTw(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setEnabled(true);
      if (e.data?.type === '__deactivate_edit_mode') setEnabled(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  if (!enabled) return null;

  const set = (k, v) => {
    onChange(k, v);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
  };

  return (
    <div style={{
      position: 'fixed', right: 20, bottom: 20, zIndex: 100,
      width: open ? 320 : 'auto', background: 'var(--bg-elevated)',
      border: '1px solid var(--border-strong)', borderRadius: 6,
      boxShadow: '0 18px 40px -12px rgba(20,19,15,0.24)',
      fontFamily: 'var(--font-sans)', color: 'var(--fg)',
      overflow: 'hidden',
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', background: 'transparent', border: 0, padding: '14px 18px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        cursor: 'pointer', borderBottom: open ? '1px solid var(--border)' : 'none',
      }}>
        <span style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--fg-subtle)', fontWeight: 500 }}>
          Tweaks
        </span>
        <span style={{ fontSize: 12, color: 'var(--fg-muted)' }}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Group label="Accent">
            <SwatchRow val={values.accent} onChange={(v) => set('accent', v)} opts={[
              { id: 'olive', c: '#556040' }, { id: 'clay', c: '#8A4B2E' },
              { id: 'ink', c: '#14130F' }, { id: 'moss', c: '#3F5345' },
            ]}/>
          </Group>
          <Group label="Hero">
            <PillRow val={values.hero} onChange={(v) => set('hero', v)}
              opts={[{ id: 'editorial', l: 'Editorial' }, { id: 'cover', l: 'Cover' }, { id: 'manifesto', l: 'Manifesto' }]}/>
          </Group>
          <Group label="Services layout">
            <PillRow val={values.services} onChange={(v) => set('services', v)}
              opts={[{ id: 'list', l: 'List' }, { id: 'grid', l: 'Grid' }]}/>
          </Group>
          <Group label="Display font">
            <PillRow val={values.display} onChange={(v) => set('display', v)}
              opts={[
                { id: 'instrument', l: 'Instrument' },
                { id: 'fraunces', l: 'Fraunces' },
                { id: 'eb', l: 'EB Garamond' },
              ]}/>
          </Group>
          <Group label="Dark editorial mode">
            <PillRow val={values.dark ? 'on' : 'off'} onChange={(v) => set('dark', v === 'on')}
              opts={[{ id: 'off', l: 'Off' }, { id: 'on', l: 'On' }]}/>
          </Group>
          <Group label="Arabic glyph">
            <PillRow val={values.glyph} onChange={(v) => set('glyph', v)}
              opts={[{ id: 'prominent', l: 'Prominent' }, { id: 'subtle', l: 'Subtle' }, { id: 'off', l: 'Off' }]}/>
          </Group>
        </div>
      )}
    </div>
  );
}

function Group({ label, children }) {
  return (
    <div>
      <div style={{
        fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.16em',
        color: 'var(--fg-subtle)', fontWeight: 500, marginBottom: 10,
      }}>{label}</div>
      {children}
    </div>
  );
}

function PillRow({ val, onChange, opts }) {
  return (
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      {opts.map(o => (
        <button key={o.id} onClick={() => onChange(o.id)} style={{
          fontSize: 12, padding: '6px 12px', borderRadius: 999,
          background: val === o.id ? 'var(--fg)' : 'transparent',
          color: val === o.id ? 'var(--bg)' : 'var(--fg-muted)',
          border: `1px solid ${val === o.id ? 'var(--fg)' : 'var(--border-strong)'}`,
          fontFamily: 'var(--font-sans)', cursor: 'pointer',
          transition: 'all 140ms var(--ease-out)',
        }}>{o.l}</button>
      ))}
    </div>
  );
}

function SwatchRow({ val, onChange, opts }) {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      {opts.map(o => (
        <button key={o.id} onClick={() => onChange(o.id)} aria-label={o.id} style={{
          width: 32, height: 32, borderRadius: 999, border: val === o.id ? '2px solid var(--fg)' : '1px solid var(--border-strong)',
          background: o.c, cursor: 'pointer', padding: 0,
          boxShadow: val === o.id ? '0 0 0 2px var(--bg), 0 0 0 3px var(--fg)' : 'none',
        }}/>
      ))}
    </div>
  );
}

window.TweaksPanel = TweaksPanel;
