/* global React, Container, Section, Eyebrow, Button, Reveal */
const { useState: useStateApply, useMemo: useMemoApply } = React;

function Apply() {
  const [form, setForm] = useStateApply({
    name: '', email: '', site: '', business: '',
    revenue: '', services: [], context: '',
  });
  const [touched, setTouched] = useStateApply({});
  const [submitted, setSubmitted] = useStateApply(false);
  const [step, setStep] = useStateApply(1);

  const upd = k => e => setForm({ ...form, [k]: e.target.value });
  const mark = k => () => setTouched({ ...touched, [k]: true });
  const toggleService = s => () => setForm({
    ...form,
    services: form.services.includes(s)
      ? form.services.filter(x => x !== s)
      : [...form.services, s],
  });

  const step1Valid = useMemoApply(() => (
    form.name.trim().length > 1 &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.business.trim().length > 1
  ), [form]);
  const step2Valid = useMemoApply(() => (
    form.revenue && form.services.length > 0 && form.context.trim().length > 20
  ), [form]);

  const submit = e => { e.preventDefault(); if (step2Valid) setSubmitted(true); };

  return (
    <Section id="apply" pad={140} topRule>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 96 }}>
          <Reveal>
            <div>
              <Eyebrow>§ Apply</Eyebrow>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 5vw, 68px)',
                lineHeight: 1.02, letterSpacing: '-0.02em', margin: '16px 0 0', fontWeight: 400,
              }}>
                This is an application,<br/>
                <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>not an enquiry.</em>
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--fg-muted)', marginTop: 32, maxWidth: 460 }}>
                We take on two or three new partners each quarter. The form takes four minutes.
                If the fit is right, we'll reply within two business days — directly from Saad.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '40px 0 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <Check>You run a service business with mid-to-high ticket offers</Check>
                <Check>You have real revenue already — not a pre-product idea</Check>
                <Check>You'd rather be a partner than a line item</Check>
                <Check>You value honest feedback more than a quick yes</Check>
              </ul>
              <div style={{
                marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--border-strong)',
                fontSize: 13, color: 'var(--fg-subtle)', lineHeight: 1.6,
              }}>
                Or, if the form feels formal:<br/>
                <a href="mailto:hello@daeemedia.com" style={{
                  color: 'var(--fg)', textDecoration: 'none',
                  borderBottom: '1px solid var(--border-strong)', paddingBottom: 1,
                }}>hello@daeemedia.com</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            {submitted ? (
              <div style={{
                background: 'var(--paper-100)', border: '1px solid var(--border)',
                borderRadius: 4, padding: 48,
                display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center', minHeight: 420,
              }}>
                <Eyebrow color="var(--accent)">Received</Eyebrow>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: 44, margin: 0, fontWeight: 400,
                  lineHeight: 1.1, letterSpacing: '-0.015em',
                }}>Thanks, {form.name.split(' ')[0]}.</h3>
                <p style={{ fontSize: 17, color: 'var(--fg-muted)', margin: 0, lineHeight: 1.6, maxWidth: 480 }}>
                  Your application's in. We read every one ourselves — no BDR, no intake team. If the fit is right,
                  Saad will reply within two business days with a few specific questions or a calendar link.
                </p>
                <p style={{ fontSize: 15, color: 'var(--fg-subtle)', margin: 0 }}>
                  If it's not, we'll still reply — and we'll point you at someone who might fit better.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} style={{
                background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                borderRadius: 4, padding: 36, display: 'flex', flexDirection: 'column', gap: 22,
                boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                  <Eyebrow>Step {step} of 2 · {step === 1 ? 'You' : 'The work'}</Eyebrow>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <Dot on={step >= 1}/>
                    <Dot on={step >= 2}/>
                  </div>
                </div>

                {step === 1 && (
                  <>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                      <Field label="Your name" value={form.name} onChange={upd('name')} onBlur={mark('name')}
                        error={touched.name && form.name.trim().length <= 1 ? 'Needs your real name' : null}
                        placeholder="Saad Khan"/>
                      <Field label="Email" value={form.email} onChange={upd('email')} onBlur={mark('email')}
                        error={touched.email && !/\S+@\S+\.\S+/.test(form.email) ? 'Needs a valid email' : null}
                        placeholder="you@company.com"/>
                    </div>
                    <Field label="Business name" value={form.business} onChange={upd('business')} onBlur={mark('business')}
                      error={touched.business && form.business.trim().length <= 1 ? 'Needs your business name' : null}
                      placeholder="e.g. Mirror Mental Health"/>
                    <Field label="Website (if live)" value={form.site} onChange={upd('site')}
                      placeholder="company.com"/>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                      <span style={{ fontSize: 13, color: 'var(--fg-subtle)' }}>
                        We read every application ourselves.
                      </span>
                      <Button type="button" onClick={() => step1Valid && setStep(2)}
                        style={{ opacity: step1Valid ? 1 : 0.5, pointerEvents: step1Valid ? 'auto' : 'none' }}>
                        Continue <span aria-hidden>→</span>
                      </Button>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <SelectField label="Approximate annual revenue" value={form.revenue} onChange={upd('revenue')}
                      options={['Under $250k', '$250k – $1M', '$1M – $5M', '$5M+']}/>

                    <div>
                      <div style={{ fontSize: 12, color: 'var(--fg-subtle)', fontWeight: 500, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        Where do you think you need help? (pick any)
                      </div>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {['Meta Ads', 'Creative direction', 'Lead gen', 'CRM / automation', 'Tracking', 'All of it'].map(s => (
                          <ChipToggle key={s} on={form.services.includes(s)} onClick={toggleService(s)}>
                            {s}
                          </ChipToggle>
                        ))}
                      </div>
                    </div>

                    <Field label="What are you trying to build?" textarea rows={5}
                      value={form.context} onChange={upd('context')} onBlur={mark('context')}
                      error={touched.context && form.context.trim().length <= 20 ? 'A couple of sentences helps us read properly' : null}
                      placeholder="A revenue system that produces predictable qualified consults for our high-ticket offer — we're doing ~$80k/mo and want to clear $250k without doubling headcount..."/>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, gap: 12, flexWrap: 'wrap' }}>
                      <button type="button" onClick={() => setStep(1)} style={{
                        background: 'transparent', border: 0, fontSize: 13, color: 'var(--fg-subtle)',
                        cursor: 'pointer', padding: 0, textDecoration: 'underline', textUnderlineOffset: 3,
                      }}>← Back</button>
                      <Button type="submit" style={{
                        opacity: step2Valid ? 1 : 0.5, pointerEvents: step2Valid ? 'auto' : 'none',
                      }}>Send application <span aria-hidden>→</span></Button>
                    </div>
                  </>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function Dot({ on }) {
  return <span style={{
    width: 6, height: 6, borderRadius: 999,
    background: on ? 'var(--accent)' : 'var(--border-strong)',
    transition: 'background 180ms',
  }}/>;
}

function Field({ label, textarea, rows, error, ...rest }) {
  const [focus, setFocus] = useStateApply(false);
  const borderColor = error ? 'var(--clay-600)' : (focus ? 'var(--accent)' : 'var(--border-strong)');
  const common = {
    fontFamily: 'var(--font-sans)', fontSize: 15, padding: '12px 14px',
    background: 'var(--bg)', border: `1px solid ${borderColor}`,
    borderRadius: 4, color: 'var(--fg)', outline: 'none',
    boxShadow: focus ? `0 0 0 3px color-mix(in srgb, ${error ? 'var(--clay-600)' : 'var(--accent)'} 15%, transparent)` : 'none',
    transition: 'border-color 120ms, box-shadow 120ms', resize: 'none', width: '100%',
    boxSizing: 'border-box', lineHeight: 1.5,
  };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontSize: 12, color: 'var(--fg-subtle)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</span>
      {textarea
        ? <textarea rows={rows || 3} onFocus={() => setFocus(true)} onBlur={(e) => { setFocus(false); rest.onBlur?.(e); }} style={common} {...rest}/>
        : <input onFocus={() => setFocus(true)} onBlur={(e) => { setFocus(false); rest.onBlur?.(e); }} style={common} {...rest}/>}
      {error && <span style={{ fontSize: 12, color: 'var(--clay-600)' }}>{error}</span>}
    </label>
  );
}

function SelectField({ label, options, ...rest }) {
  const [focus, setFocus] = useStateApply(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontSize: 12, color: 'var(--fg-subtle)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</span>
      <select onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          fontFamily: 'var(--font-sans)', fontSize: 15, padding: '12px 14px',
          background: 'var(--bg)',
          border: `1px solid ${focus ? 'var(--accent)' : 'var(--border-strong)'}`,
          borderRadius: 4, color: 'var(--fg)', outline: 'none',
          boxShadow: focus ? '0 0 0 3px color-mix(in srgb, var(--accent) 15%, transparent)' : 'none',
          appearance: 'none', width: '100%',
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%236B6860' stroke-width='1.2'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center',
        }} {...rest}>
        <option value="">Select one</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

function ChipToggle({ on, onClick, children }) {
  return (
    <button type="button" onClick={onClick} style={{
      fontSize: 13, padding: '8px 14px', borderRadius: 999, cursor: 'pointer',
      background: on ? 'var(--accent)' : 'transparent',
      color: on ? 'var(--accent-fg)' : 'var(--fg-muted)',
      border: `1px solid ${on ? 'var(--accent)' : 'var(--border-strong)'}`,
      fontFamily: 'var(--font-sans)', fontWeight: 500,
      transition: 'all 140ms var(--ease-out)',
    }}>{children}</button>
  );
}

function Check({ children }) {
  return (
    <li style={{ display: 'flex', gap: 14, fontSize: 15, color: 'var(--fg)', lineHeight: 1.55 }}>
      <span style={{
        width: 18, height: 18, borderRadius: 999, border: '1px solid var(--accent)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, marginTop: 3,
      }}>
        <span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--accent)' }}/>
      </span>
      {children}
    </li>
  );
}

window.Apply = Apply;
