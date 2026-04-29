/* global React, Container, Section, Eyebrow, Tag, Button, Reveal */
const { useState: useStatePP, useEffect: useEffectPP, useRef: useRefPP } = React;

const PP_SECTIONS = [
  { id: 'pp-problem', label: 'Problem' },
  { id: 'pp-diagnosis', label: 'Diagnosis' },
  { id: 'pp-foundation', label: 'Foundation' },
  { id: 'pp-machine', label: 'The Machine' },
  { id: 'pp-crisis', label: 'Crisis & Comeback' },
  { id: 'pp-results', label: 'Results' },
  { id: 'pp-insight', label: 'Hidden Insight' },
  { id: 'pp-system', label: 'The System' },
  { id: 'pp-takeaway', label: 'Takeaway' },
];

function ProteinPalsCase({ onBack, onApply }) {
  const [active, setActive] = useStatePP('pp-problem');
  useEffectPP(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });
    PP_SECTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <article>
      {/* SEO schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'CaseStudy',
        name: 'How We Took a Meal Delivery Service From 15 Subscribers to 240',
        description: 'Daee Media generated 1,942 pre-qualified leads at 98.67% quality for Protein Pals, growing subscribers 12×.',
        author: { '@type': 'Organization', name: 'Daee Media' },
        datePublished: '2026-04-27',
      }) }}/>

      {/* HERO */}
      <Section pad={88}>
        <Container>
          <button onClick={onBack} style={{
            background: 'transparent', border: 0, padding: 0, cursor: 'pointer',
            fontSize: 13, color: 'var(--fg-muted)', marginBottom: 36,
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}><span aria-hidden>←</span> Back to all case studies</button>

          <Reveal>
            <div className="pp-hero-meta" style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32, flexWrap: 'wrap' }}>
              <Eyebrow>Case № 04 · Meal delivery · Toronto GTA</Eyebrow>
              <span className="pp-rule" style={{ width: 24, height: 1, background: 'var(--border-strong)' }}/>
              <Eyebrow>Protein Pals</Eyebrow>
              <span className="pp-rule" style={{ width: 24, height: 1, background: 'var(--border-strong)' }}/>
              <Eyebrow>May 2025 → Mar 2026 · 10 months</Eyebrow>
            </div>
          </Reveal>

          <Reveal delay={80} y={16}>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 6.6vw, 104px)',
              lineHeight: 0.96, letterSpacing: '-0.025em', margin: 0, fontWeight: 400, maxWidth: 1180,
            }}>
              From <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>15 subscribers</em> to 240 — with a 98.67% lead quality rate.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p style={{
              fontSize: 20, lineHeight: 1.55, color: 'var(--fg-muted)',
              maxWidth: 780, marginTop: 32,
            }}>
              A high-protein Indian fusion meal delivery startup in the Toronto GTA had a
              great product and no engine to sell it. We built the engine — Meta Ads,
              ManyChat, Zoho CRM, Conversion API — and ran it for ten months. By month
              six, the founder asked us to pause the campaign because the kitchen
              couldn't keep up.
            </p>
          </Reveal>

          {/* Three metric cards */}
          <Reveal delay={240}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 64,
            }}>
              <PPMetric icon="trend" num="1,942" label="Leads generated" sub="Across 10 months · 6–7k CAD spend"/>
              <PPMetric icon="check" num="98.67%" label="Pre-qualified rate" sub="Only 26 junk leads in 1,942"/>
              <PPMetric icon="grow" num="12×" label="Subscriber growth" sub="15 → 240 active · 4–8× ROAS"/>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* MAIN BODY: sidebar + content */}
      <Section pad={96} topRule>
        <Container>
          <div className="pp-grid" style={{
            display: 'grid', gridTemplateColumns: '220px 1fr', gap: 96, alignItems: 'start',
          }}>
            {/* Sidebar */}
            <aside className="pp-sidebar" style={{ position: 'sticky', top: 120 }}>
              <Eyebrow>§ Read this</Eyebrow>
              <ol style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', display: 'flex', flexDirection: 'column', gap: 2 }}>
                {PP_SECTIONS.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }} style={{
                      display: 'flex', alignItems: 'baseline', gap: 12,
                      padding: '10px 14px',
                      background: active === s.id ? 'var(--accent-subtle)' : 'transparent',
                      borderLeft: `2px solid ${active === s.id ? 'var(--accent)' : 'var(--border)'}`,
                      color: active === s.id ? 'var(--fg)' : 'var(--fg-muted)',
                      textDecoration: 'none', fontSize: 14,
                      transition: 'all 180ms var(--ease-out)',
                    }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: active === s.id ? 'var(--accent)' : 'var(--fg-faint)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{s.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <div style={{ marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--border)', fontSize: 12, color: 'var(--fg-subtle)', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--fg-muted)' }}>Engagement</strong><br/>
                10 months · May ’25 – Mar ’26<br/>
                <strong style={{ color: 'var(--fg-muted)', display: 'inline-block', marginTop: 8 }}>Stack</strong><br/>
                Meta Ads · ManyChat · Zoho CRM · Conversion API<br/>
                <strong style={{ color: 'var(--fg-muted)', display: 'inline-block', marginTop: 8 }}>Geography</strong><br/>
                Ajax · Brampton · Scarborough · Markham · Mississauga
              </div>
            </aside>

            {/* Main content */}
            <div className="pp-body" style={{ maxWidth: 800 }}>
              {/* PROBLEM */}
              <PPSection id="pp-problem" eyebrow="01 · The problem">
                <h2 style={ppH2}>A good product, and <em style={ppEm}>no system to sell it.</em></h2>
                <p style={ppLead}>
                  Three Indian co-founders running a high-protein meal delivery service across the
                  Greater Toronto Area. Subscription model. Multiple plans — starter, weekly, monthly,
                  muscle gain, fat loss, veg, non-veg, breakfast-lunch-dinner combinations.
                </p>
                <p style={ppP}>
                  They had <strong>15–20 unreliable subscriptions</strong> at best. They'd spent 1–3k CAD on
                  event sponsorships targeting the Indian community in Toronto and converted exactly zero.
                  Not one subscriber.
                </p>
                <p style={ppP}>
                  Their Instagram had under 300 followers. No human face on the brand — just photos
                  of tiffins. No one watching could tell what the service was, how it worked, what
                  plans existed, or how to subscribe. The offer wasn't clear. The product wasn't
                  clear. The system didn't exist.
                </p>
                <p style={ppP}>
                  The core issue wasn't the food. It was that <em>no system existed</em> to turn attention
                  into subscriptions.
                </p>
                <SoftCTA to="pp-diagnosis">Here's what we found</SoftCTA>
              </PPSection>

              {/* DIAGNOSIS */}
              <PPSection id="pp-diagnosis" eyebrow="02 · Diagnosis">
                <h2 style={ppH2}>Three root causes — before a single ad ran.</h2>
                <p style={ppLead}>
                  We don't run ads on a broken funnel. Before we touched Meta, we mapped exactly
                  why a subscriber wasn't being made. Three things were missing.
                </p>

                <DiagnosisList items={[
                  {
                    n: '01',
                    title: 'The brand had no face.',
                    body: 'People buy from people — especially with food. Protein Pals was showing tiffins, not humans. No founders on camera. No customers tasting. No real-life experience of the service. In a trust-driven business, this is fatal.',
                  },
                  {
                    n: '02',
                    title: "The offer wasn't visible.",
                    body: 'They had multiple plans — starter, weekly, monthly, muscle gain, fat loss, veg, non-veg — but none of it was visible to a new visitor. A potential customer would have to dig through the website to figure out what they\'d actually get. The Instagram told them nothing.',
                  },
                  {
                    n: '03',
                    title: 'There was no acquisition system.',
                    body: 'Word of mouth and event sponsorships. No ads. No automation. No CRM. No way to capture interest, qualify it, and convert it. Every potential subscriber who showed interest was being lost because there was no pipeline to catch them.',
                  },
                ]}/>

                <p style={{ ...ppP, marginTop: 40 }}>
                  This wasn't a marketing problem. It was a <em>system</em> problem.
                </p>
              </PPSection>

              {/* FOUNDATION */}
              <PPSection id="pp-foundation" eyebrow="03 · Foundation (Before Ads)">
                <h2 style={ppH2}>Two free moves <em style={ppEm}>before</em> we spent a dollar.</h2>
                <p style={ppLead}>
                  We gave Protein Pals two pieces of feedback before formal onboarding — and both
                  started working immediately.
                </p>

                <FreeMove
                  num="A"
                  title="Pinned-post carousels on Instagram"
                  body="We asked them to build carousel posts for their highest-selling packages — each slide showing the dish, the macros, the price, real photos of the food. Not stock images. Real meals. Pinned to the top of the page. Anyone landing on the profile could now see, in seconds: what the plans are, what the food looks like, what the nutritional breakdown is, and how much it costs."
                  outcome="The offer became visible in seconds, not minutes."
                />

                <FreeMove
                  num="B"
                  title="UGC creator outreach (for content, not sales)"
                  body="We told them to reach out to Indian creators in Canada. Not for reach. Not for sales. For content. Follower count didn't matter. The goal: get multiple real faces on the page — people tasting the food, showing the packaging, reacting honestly. This served two purposes — warm up the Instagram for new visitors, and give us creative assets we could use in paid campaigns later."
                  outcome="Trust was the primary objective. Sales would be a side effect."
                />

                <p style={ppP}>
                  These two moves — before any ad spend — gave Protein Pals their first taste of
                  traction. Inbound DMs picked up. Subscriber count crept past the early-twenties.
                  That was the signal we needed: the foundation was strong enough to put weight on.
                </p>
              </PPSection>

              {/* THE MACHINE */}
              <PPSection id="pp-machine" eyebrow="04 · The Machine (June – July 2025)">
                <h2 style={ppH2}>What we actually built.</h2>
                <p style={ppLead}>
                  End of May, we directed Protein Pals' first ad shoot. Founders on camera,
                  lifestyle, packaging, real kitchen footage. By the end of June, the
                  backend was live and the ads were running.
                </p>

                <BackendStack/>

                <PullQuote>
                  45 new subscriptions in less than 15 days 💪📈📈📈
                  <span>— Saad, Daee Media · 13 July 2025</span>
                </PullQuote>

                <PullQuote>
                  Haha thank you so much Saad bhai — credit goes to you bro! Abhi to shuru kia hai.
                  <span>— Rohan, Co-founder, Protein Pals · 13 July 2025</span>
                </PullQuote>

                <h3 style={ppH3}>The creative strategy</h3>
                <p style={ppP}>
                  We started with engagement ads paired with ManyChat to validate the offer.
                  Message conversations were coming in at <strong>0.5 CAD each</strong>. The automation
                  pooled audiences into categories, qualified interest, and built custom audiences
                  we could re-target later.
                </p>
                <p style={ppP}>
                  When the lead-gen campaigns went live, the leads were pre-warmed.
                  Quality was high from day one. We tested four angles:
                </p>

                <AngleGrid angles={[
                  { tag: 'Founder-led', body: 'Direct-to-camera. The Indian co-founder talking about the kitchen, the recipes, the why.' },
                  { tag: 'Working women', body: 'Busy professionals who need healthy meals delivered. The "no time to cook" hook.' },
                  { tag: 'Muscle gain', body: 'Fitness audience. Macros-first creative. Plan = 40g protein per meal.' },
                  { tag: 'Casual / street Q&A', body: 'Unscripted reactions, eating-experience footage, walk-up taste tests.' },
                ]}/>

                <p style={ppP}>
                  Each angle attracted a slightly different segment of the ICP — all valid,
                  all converting. Founder-led ads ran at <strong>3–4 CAD per lead</strong>. Then we
                  layered UGC.
                </p>

                <PPScreenshot
                  caption="Meta Ads Manager · 33 leads at $1.28 CPL · 3 Oct 2025"
                  alt="Meta Ads Manager dashboard showing 33 leads generated at $1.28 cost per lead for Protein Pals meal delivery service"
                  variant="ads"
                />

                <p style={ppP}>
                  UGC dropped CPL from 3–4 CAD to <strong>2–3 CAD with close to zero junk</strong>.
                  Real people talking about real food performed better than founder-led ads
                  because it felt like a recommendation, not a pitch.
                </p>
              </PPSection>

              {/* CRISIS */}
              <PPSection id="pp-crisis" eyebrow="05 · Crisis & Comeback (Aug – Oct 2025)">
                <h2 style={ppH2}>Then Meta started rejecting our ads.</h2>
                <p style={ppLead}>
                  We aren't shy about sharing great results. We also aren't shy about sharing
                  the hard parts. This was hard.
                </p>

                <CrisisTimeline/>

                <p style={ppP}>
                  Starting in August, ad after ad got flagged. Meta's reasons were generic and
                  contradictory — "forms collecting data" cited as a violation, even though Meta's
                  own lead-gen forms exist to collect data. We escalated to Meta support. We
                  challenged the reasoning. We got nowhere. CPL spiked from 2–3 CAD to 4–5,
                  then 8–9 in September.
                </p>

                <PullQuote>
                  Our prime focus is not to make leads but to make sure our ads are not getting
                  rejected. Once we find our testing is working we will scale it from there.
                  12 hours+ since we launched and fingers crossed none of the ads are rejected yet.
                  <span>— Saad, Daee Media · 5 September 2025</span>
                </PullQuote>

                <p style={ppP}>
                  We iterated relentlessly. Four creatives, four forms, four campaigns — minimal
                  budget, single goal: find what Meta wouldn't reject, then scale it. Protein
                  Pals stayed with us through this period. They believed we'd figure it out.
                  That trust is the foundation of how we work — partners, not vendors.
                </p>

                <PullQuote>
                  Sat a few nights back to back to figure out long-withstanding campaigns…
                  Team Daee Media is nothing but grateful for your patience and we promise to
                  make a comeback with a bang.
                  <span>— Saad, Daee Media · 30 September 2025</span>
                </PullQuote>

                <h3 style={ppH3}>The comeback</h3>
                <p style={ppP}>
                  Late September, Saad personally sat through multiple late nights — shortlisting
                  8–10 creatives from a pool of 20–25, mapping them against 15+ audience segments,
                  scripting a campaign structure designed to withstand Meta's review while
                  delivering peak performance.
                </p>

                <ComebackBlock/>

                <PullQuote big>
                  Absolutely insanneee bhai. Maza aata hai ye dekhke — let's keep the momentum going!!!!
                  <span>— Mayank, Co-founder, Protein Pals · 3 October 2025</span>
                </PullQuote>

                <p style={ppP}>
                  That campaign scaled to <strong>70–80 leads per day</strong>. <strong>700 leads in 10–12 days.</strong>
                  UGC-led creative was now running at <strong>1.13–1.50 CAD per lead</strong> — a 60%
                  reduction from the founder-only ads. And then something happened that we
                  consider the ultimate proof of a system working.
                </p>

                <PullQuote big>
                  Bhai ads rok do ab kuch time ke liye. Leads already bahut hain, manpower bhi
                  kam hai apne paas toh backlog hi khatam nahi ho raha hai.
                  <span>— Rohan · 19 October 2025, 1:53 AM</span>
                </PullQuote>

                <p style={ppP}>
                  Translation: <em>Stop the ads for now. There are already too many leads. We don't
                  have enough people to handle them. The backlog isn't clearing.</em> They paused
                  advertising because demand exceeded operational capacity. They moved out
                  of their small kitchen into a larger commercial facility. They needed more
                  staff to handle calls and deliveries.
                </p>
                <p style={ppP}>
                  This is what a revenue system looks like when it works.
                </p>
              </PPSection>

              {/* RESULTS */}
              <PPSection id="pp-results" eyebrow="06 · Results">
                <h2 style={ppH2}>10 months. <em style={ppEm}>1,942 leads.</em></h2>
                <p style={ppLead}>
                  At a 98.67% pre-qualified rate. The sales team stopped chasing and started
                  picking. The founders ran out of capacity before they ran out of attention.
                </p>

                <ResultsSplit/>

                <h3 style={ppH3}>Cost per lead — the journey</h3>
                <CPLJourney/>

                <h3 style={ppH3}>Revenue (conservative)</h3>
                <p style={ppP}>
                  At a conservative average lifetime value of <strong>100–200 CAD per converted
                  subscriber:</strong>
                </p>
                <ul style={ppUl}>
                  <li>242 customers × 100 CAD = <strong>24,200 CAD</strong></li>
                  <li>242 customers × 200 CAD = <strong>48,400 CAD</strong></li>
                  <li>On 6–7k CAD total ad spend = <strong>4–8× return on ad spend</strong>, minimum.</li>
                </ul>
                <p style={ppP}>
                  With <strong>420 leads still in pipeline</strong> at the time of writing and a 20–30%
                  retention rate on subscriptions, the actual revenue impact is significantly
                  higher than the floor above.
                </p>

                <HardCTA onApply={onApply}/>
              </PPSection>

              {/* HIDDEN INSIGHT */}
              <PPSection id="pp-insight" eyebrow="07 · The hidden insight">
                <h2 style={ppH2}><em style={ppEm}>60–70%</em> of converters were vegetarian.</h2>
                <p style={ppLead}>
                  Protein Pals didn't expect this. Neither did we. But the CRM — which captured
                  dietary preference on every single lead — made it undeniable.
                </p>

                <InsightCallout/>

                <p style={ppP}>
                  The majority of their paying subscriber base preferred veg meals. This insight
                  reshaped the entire strategy. We adjusted ad creatives to lead with vegetarian
                  dishes. We briefed UGC creators to feature veg meals prominently. We restructured
                  targeting to lean into this audience segment.
                </p>
                <p style={ppP}>
                  The point: a lead generation system isn't just about generating leads. It's
                  about generating <em>intelligence</em>. The CRM data didn't just help us optimise
                  ads — it helped Protein Pals understand their own market better than they did
                  before.
                </p>
              </PPSection>

              {/* SYSTEM */}
              <PPSection id="pp-system" eyebrow="08 · The system">
                <h2 style={ppH2}>The loop, end-to-end.</h2>
                <p style={ppLead}>
                  Four components, one feedback loop. Each is a service we run — but only as part
                  of one revenue system, never separately.
                </p>
                <SystemDiagram/>

                <ol style={ppOl}>
                  <li>A prospect sees an ad on Instagram or Facebook.</li>
                  <li>They engage — tapping <strong>"Menu"</strong> (PDF menu with dish photos) or <strong>"Trial"</strong> (free 2-day trial) in ManyChat.</li>
                  <li>The automation qualifies them by capturing name, zip code, city, dietary preference, profession, and health goal.</li>
                  <li>Their data flows into Zoho CRM, categorised and tagged.</li>
                  <li>The founders call the lead, have the conversation, and update the CRM with the outcome — qualified, contacted, closed, junk.</li>
                  <li>That outcome flows back to Meta via the Conversion API.</li>
                  <li>Meta's algorithm uses that feedback to find more leads like the converters — and fewer like the junk.</li>
                </ol>

                <p style={ppP}>
                  Every cycle makes the system smarter. Every lead gives it more data. Every
                  conversion teaches it what a good customer looks like. That's why the CPL
                  dropped from 3–4 CAD to 1.13 CAD over time — the system was learning.
                </p>
                <p style={ppP}>
                  This is the difference between <em>running ads</em> and <em>building a revenue system.</em>
                </p>
              </PPSection>

              {/* TAKEAWAY */}
              <PPSection id="pp-takeaway" eyebrow="09 · Takeaway">
                <h2 style={ppH2}>What Protein Pals didn't expect.</h2>
                <p style={ppLead}>
                  When Rohan and Mayank came to us, they expected ads. What they got was a system.
                </p>
                <p style={ppP}>
                  They expected leads. What they got was market intelligence — the discovery
                  that 70% of their customers were vegetarian reshaped their entire menu strategy.
                  They expected a vendor. What they got was a partner who sat up late rebuilding
                  campaigns when Meta kept rejecting them, who told them to stop running ads when
                  demand exceeded capacity, and who treated their business like our own.
                </p>
                <p style={ppP}>
                  That's the Daee difference. We don't run ads. <em>We build systems that generate revenue.</em>
                </p>
              </PPSection>

              {/* FAQ */}
              <PPFAQ/>

              {/* Final CTA */}
              <FinalCTA onApply={onApply}/>
            </div>
          </div>
        </Container>
      </Section>

      <style>{`
        @media (max-width: 1024px) {
          .pp-sidebar { display: none; }
          .pp-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
          .pp-body { max-width: 100% !important; }
          .pp-hero-meta { gap: 8px 14px !important; }
          .pp-hero-meta .pp-rule { display: none !important; }
        }
      `}</style>
    </article>
  );
}

/* -------- shared style tokens for this case -------- */
const ppH2 = {
  fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4.2vw, 56px)',
  lineHeight: 1.05, letterSpacing: '-0.02em', margin: '0 0 24px', fontWeight: 400,
};
const ppH3 = {
  fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 2.4vw, 30px)',
  lineHeight: 1.2, letterSpacing: '-0.01em', margin: '48px 0 20px', fontWeight: 400,
};
const ppEm = { fontStyle: 'italic', color: 'var(--accent)' };
const ppLead = {
  fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2vw, 26px)',
  lineHeight: 1.4, color: 'var(--fg)', margin: '0 0 28px', fontWeight: 400,
  letterSpacing: '-0.005em',
};
const ppP = {
  fontSize: 18, lineHeight: 1.7, color: 'var(--fg-muted)', margin: '0 0 24px',
};
const ppUl = {
  fontSize: 18, lineHeight: 1.9, color: 'var(--fg-muted)', margin: '0 0 24px',
  paddingLeft: 20,
};
const ppOl = {
  fontSize: 18, lineHeight: 1.85, color: 'var(--fg-muted)', margin: '40px 0',
  paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 8,
};

/* -------- subcomponents -------- */
function PPSection({ id, eyebrow, children }) {
  return (
    <section id={id} style={{ paddingBottom: 80, marginBottom: 80, borderBottom: '1px solid var(--border)' }}>
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <div style={{ marginTop: 24 }}>{children}</div>
      </Reveal>
    </section>
  );
}

function PPMetric({ icon, num, label, sub }) {
  return (
    <div style={{
      background: 'var(--bg-elevated)', border: '1px solid var(--border-strong)',
      borderRadius: 4, padding: 32, position: 'relative',
      boxShadow: 'var(--shadow-sm)',
    }}>
      <div style={{ marginBottom: 20, color: 'var(--accent)' }}>
        <PPIcon kind={icon}/>
      </div>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 4.4vw, 60px)',
        letterSpacing: '-0.02em', lineHeight: 1, color: 'var(--fg)', marginBottom: 12,
      }}>{num}</div>
      <div style={{ fontSize: 14, color: 'var(--fg)', fontWeight: 500, marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 12, color: 'var(--fg-subtle)' }}>{sub}</div>
    </div>
  );
}

function PPIcon({ kind }) {
  const s = { width: 22, height: 22, stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' };
  if (kind === 'trend') return <svg {...s} viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>;
  if (kind === 'check') return <svg {...s} viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>;
  return <svg {...s} viewBox="0 0 24 24"><path d="M3 21V3"/><path d="M3 21h18"/><path d="M7 17V11"/><path d="M12 17V7"/><path d="M17 17V13"/></svg>;
}

function DiagnosisList({ items }) {
  return (
    <div style={{ margin: '40px 0', display: 'flex', flexDirection: 'column', gap: 0 }}>
      {items.map((it, i) => (
        <Reveal key={i} delay={i * 80}>
          <div style={{
            display: 'grid', gridTemplateColumns: '80px 1fr', gap: 24,
            padding: '28px 0',
            borderTop: '1px solid var(--border-strong)',
            borderBottom: i === items.length - 1 ? '1px solid var(--border-strong)' : 'none',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent)',
              letterSpacing: '0.1em', paddingTop: 4,
            }}>{it.n}</div>
            <div>
              <h4 style={{
                fontFamily: 'var(--font-display)', fontSize: 26, lineHeight: 1.2,
                margin: '0 0 12px', fontWeight: 400, letterSpacing: '-0.01em',
              }}>{it.title}</h4>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--fg-muted)', margin: 0 }}>
                {it.body}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function FreeMove({ num, title, body, outcome }) {
  return (
    <Reveal>
      <div style={{
        margin: '32px 0', padding: '28px 32px',
        background: 'var(--paper-100)', borderRadius: 4,
        border: '1px solid var(--border)',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 12 }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)',
            textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 500,
          }}>Move {num}</span>
          <span style={{ flex: 1, height: 1, background: 'var(--border)' }}/>
          <span style={{ fontSize: 11, color: 'var(--fg-subtle)', fontFamily: 'var(--font-mono)' }}>FREE · BEFORE ADS</span>
        </div>
        <h4 style={{
          fontFamily: 'var(--font-display)', fontSize: 24, lineHeight: 1.25,
          margin: '0 0 14px', fontWeight: 400, letterSpacing: '-0.01em',
        }}>{title}</h4>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--fg-muted)', margin: '0 0 14px' }}>
          {body}
        </p>
        <div style={{
          fontSize: 14, color: 'var(--accent)', fontStyle: 'italic',
          paddingTop: 12, borderTop: '1px dashed var(--border-strong)',
        }}>→ {outcome}</div>
      </div>
    </Reveal>
  );
}

function BackendStack() {
  const items = [
    { tag: 'Front-end capture', name: 'Meta Lead Ads', body: 'Engagement → message → lead. Two-tap UX.' },
    { tag: 'Qualification layer', name: 'ManyChat automation', body: 'When someone tapped "Menu" or "Trial", the bot captured name, zip code, city, dietary preference (veg / non-veg), profession (student, WFO, WFH), and health goal.' },
    { tag: 'Pipeline', name: 'Zoho CRM', body: 'Every lead landed tagged and categorised. Founders called, updated outcome — qualified, contacted, closed, junk.' },
    { tag: 'Feedback loop', name: 'Conversion API', body: "When a lead was marked converted in the CRM, that data flowed back to Meta's optimisation engine in real time. Meta learned what a good lead looked like — for this specific business." },
  ];
  return (
    <Reveal>
      <div style={{
        margin: '40px 0', display: 'flex', flexDirection: 'column', gap: 0,
        border: '1px solid var(--border-strong)', borderRadius: 4, overflow: 'hidden',
      }}>
        {items.map((it, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '180px 1fr', gap: 24,
            padding: '24px 28px',
            background: i % 2 === 0 ? 'var(--bg-elevated)' : 'var(--paper-100)',
            borderTop: i === 0 ? 'none' : '1px solid var(--border)',
          }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                color: 'var(--fg-subtle)', textTransform: 'uppercase',
                letterSpacing: '0.12em', marginBottom: 6,
              }}>{it.tag}</div>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 22,
                color: 'var(--fg)', letterSpacing: '-0.01em',
              }}>{it.name}</div>
            </div>
            <div style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--fg-muted)' }}>
              {it.body}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function AngleGrid({ angles }) {
  return (
    <Reveal>
      <div style={{
        margin: '32px 0', display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)', gap: 16,
      }}>
        {angles.map((a, i) => (
          <div key={i} style={{
            padding: '20px 22px', background: 'var(--bg-elevated)',
            border: '1px solid var(--border)', borderRadius: 4,
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10,
              color: 'var(--accent)', textTransform: 'uppercase',
              letterSpacing: '0.15em', marginBottom: 10, fontWeight: 500,
            }}>{a.tag}</div>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg-muted)' }}>
              {a.body}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function CrisisTimeline() {
  const events = [
    { date: 'Aug 2025', label: 'Meta starts rejecting ads. Reasons generic, contradictory.', state: 'bad' },
    { date: 'Sep 2025', label: 'CPL spikes from 2–3 CAD to 4–5, then 8–9.', state: 'bad' },
    { date: 'Late Sep', label: 'Saad rebuilds campaigns over multiple late nights. 8–10 creatives. 15+ segments.', state: 'work' },
    { date: '3 Oct 2025', label: '33 leads in <12 hours. $1.28 CPL. Comeback confirmed.', state: 'good' },
    { date: 'Oct 2025', label: '70–80 leads/day. 700 in 10–12 days at 1.13–1.50 CAD.', state: 'good' },
    { date: '19 Oct, 1:53 AM', label: 'Founder asks us to pause. Demand exceeds kitchen capacity.', state: 'good' },
  ];
  const tone = (s) => s === 'bad' ? 'var(--clay-600)' : s === 'good' ? 'var(--olive-700)' : 'var(--fg-muted)';
  return (
    <Reveal>
      <div style={{ margin: '40px 0', position: 'relative' }}>
        <div aria-hidden style={{
          position: 'absolute', left: 7, top: 6, bottom: 6, width: 1,
          background: 'var(--border-strong)',
        }}/>
        {events.map((e, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '32px 130px 1fr', gap: 16,
            alignItems: 'start', padding: '12px 0',
          }}>
            <div style={{
              width: 14, height: 14, borderRadius: 999,
              background: 'var(--bg)',
              border: `2px solid ${tone(e.state)}`,
              marginTop: 2, position: 'relative', zIndex: 1,
            }}/>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 12,
              color: 'var(--fg-subtle)', letterSpacing: '0.05em',
              paddingTop: 1,
            }}>{e.date}</div>
            <div style={{
              fontSize: 15, lineHeight: 1.55, color: 'var(--fg)',
            }}>{e.label}</div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function ComebackBlock() {
  return (
    <Reveal>
      <div style={{
        margin: '32px 0', padding: '36px 32px',
        background: 'var(--accent-subtle)', borderRadius: 4,
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)',
          textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 16,
        }}>3 October 2025 · &lt; 12 hours</div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32,
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 56, lineHeight: 1,
              letterSpacing: '-0.02em', color: 'var(--fg)',
            }}>33</div>
            <div style={{ fontSize: 13, color: 'var(--fg-muted)', marginTop: 6 }}>leads</div>
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 56, lineHeight: 1,
              letterSpacing: '-0.02em', color: 'var(--fg)',
            }}>5,134</div>
            <div style={{ fontSize: 13, color: 'var(--fg-muted)', marginTop: 6 }}>reach</div>
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 56, lineHeight: 1,
              letterSpacing: '-0.02em', color: 'var(--accent)',
            }}>$1.28</div>
            <div style={{ fontSize: 13, color: 'var(--fg-muted)', marginTop: 6 }}>cost per lead</div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ResultsSplit() {
  return (
    <div style={{ margin: '40px 0' }}>
      <Reveal>
        <h3 style={{ ...ppH3, marginTop: 0 }}>Lead generation</h3>
      </Reveal>
      <PPTable
        rows={[
          ['Total leads generated', '1,942'],
          ['Junk leads', '26'],
          ['Junk rate', '1.33%'],
          ['Pre-qualified rate', '98.67%'],
          ['Closed-won customers', '242'],
          ['Conversion rate (on pre-qualified)', '12.6%'],
          ['Leads still in pipeline', '420'],
          ['Total approximate ad spend', '6–7k CAD'],
        ]}
      />

      <Reveal>
        <h3 style={ppH3}>Business growth</h3>
      </Reveal>
      <BeforeAfterTable
        rows={[
          { metric: 'Active subscriptions', before: '15–20', after: '230–240' },
          { metric: 'Kitchen', before: 'Small home kitchen', after: 'Upgraded commercial' },
          { metric: 'Acquisition system', before: 'Events + word of mouth', after: 'Meta → ManyChat → CRM → CAPI' },
          { metric: 'Cost per lead (best)', before: 'N/A', after: '1.13 CAD' },
        ]}
      />
    </div>
  );
}

function PPTable({ rows }) {
  return (
    <Reveal>
      <div style={{
        margin: '24px 0 40px', border: '1px solid var(--border-strong)', borderRadius: 4,
        overflow: 'hidden',
      }}>
        {rows.map((r, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '1.6fr 1fr',
            background: i % 2 === 0 ? 'var(--bg)' : 'var(--paper-100)',
            borderTop: i === 0 ? 'none' : '1px solid var(--border)',
          }}>
            <div style={{
              padding: '14px 18px', fontSize: 16,
              color: 'var(--fg-muted)',
            }}>{r[0]}</div>
            <div style={{
              padding: '14px 18px', fontSize: 20,
              color: 'var(--fg)',
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.005em',
            }}>{r[1]}</div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function BeforeAfterTable({ rows }) {
  return (
    <Reveal>
      <div style={{
        margin: '24px 0 40px', border: '1px solid var(--border-strong)', borderRadius: 4,
        overflow: 'hidden',
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr',
          background: 'var(--accent-subtle)',
        }}>
          {['Metric', 'Before', 'After'].map((h, i) => (
            <div key={i} style={{
              padding: '12px 18px', fontSize: 11, fontWeight: 500,
              textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--fg)',
            }}>{h}</div>
          ))}
        </div>
        {rows.map((r, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr',
            background: i % 2 === 0 ? 'var(--bg)' : 'var(--paper-100)',
            borderTop: '1px solid var(--border)',
          }}>
            <div style={{ padding: '14px 18px', fontSize: 15, color: 'var(--fg)' }}>{r.metric}</div>
            <div style={{ padding: '14px 18px', fontSize: 15, color: 'var(--fg-subtle)', textDecoration: 'line-through' }}>{r.before}</div>
            <div style={{
              padding: '14px 18px', fontSize: 18, color: 'var(--fg)',
              fontFamily: 'var(--font-display)', letterSpacing: '-0.005em',
            }}>{r.after}</div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function CPLJourney() {
  const phases = [
    { period: 'Jun 2025', label: 'Engagement phase', cpl: 0.5, creative: 'Founders + ManyChat' },
    { period: 'Jul 2025', label: 'Lead-gen launch', cpl: 3.5, creative: 'Founders ads' },
    { period: 'Jul–Aug', label: 'UGC phase', cpl: 2.5, creative: 'UGC creators' },
    { period: 'Aug–Sep', label: 'Rejection crisis', cpl: 6.5, creative: 'Various (rejected)' },
    { period: 'Oct 2025', label: 'Comeback', cpl: 1.3, creative: 'UGC-led, scripted' },
  ];
  const max = 9;
  return (
    <Reveal>
      <div style={{
        margin: '24px 0 40px', padding: '32px 28px',
        background: 'var(--bg-elevated)', border: '1px solid var(--border-strong)',
        borderRadius: 4,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {phases.map((p, i) => {
            const w = (p.cpl / max) * 100;
            const isCrisis = p.label === 'Rejection crisis';
            return (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '110px 1fr 80px', gap: 14, alignItems: 'center' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-subtle)' }}>{p.period}</div>
                <div style={{ position: 'relative', height: 32, background: 'var(--paper-100)', borderRadius: 2 }}>
                  <div style={{
                    width: `${w}%`, height: '100%',
                    background: isCrisis ? 'var(--clay-500)' : 'var(--accent)',
                    borderRadius: 2,
                    display: 'flex', alignItems: 'center', paddingLeft: 12,
                    fontSize: 12, color: isCrisis ? 'white' : 'var(--accent-fg)',
                    fontWeight: 500,
                  }}>{p.label}</div>
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--fg)',
                  textAlign: 'right',
                }}>${p.cpl}</div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px dashed var(--border-strong)', fontSize: 12, color: 'var(--fg-subtle)', fontStyle: 'italic' }}>
          CAD per lead, by phase. Crisis bar in clay; everything else in accent.
        </div>
      </div>
    </Reveal>
  );
}

function InsightCallout() {
  return (
    <Reveal>
      <div style={{
        margin: '32px 0', padding: '40px 36px',
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border-strong)', borderRadius: 4,
        position: 'relative', overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute', top: -40, right: -40,
          fontFamily: 'var(--font-display)', fontSize: 220, lineHeight: 1,
          color: 'var(--accent-subtle)', fontStyle: 'italic',
          pointerEvents: 'none',
        }}>veg.</div>
        <div style={{ position: 'relative' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)',
            textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 16,
          }}>The data said:</div>
          <p style={{
            fontFamily: 'var(--font-display)', fontSize: 28, lineHeight: 1.3,
            color: 'var(--fg)', margin: 0, fontWeight: 400, maxWidth: 560,
            letterSpacing: '-0.01em',
          }}>
            Most paying subscribers ordered <em style={ppEm}>vegetarian</em> — even though
            the brand was marketed as a high-protein, gym-friendly service.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

function PullQuote({ children, big }) {
  // children: array — first is quote, second is the <span> attribution
  const arr = React.Children.toArray(children);
  const quote = arr[0];
  const attribution = arr[1];
  return (
    <Reveal>
      <blockquote style={{
        margin: '40px 0', padding: '28px 32px',
        background: 'var(--paper-100)',
        borderLeft: '3px solid var(--accent)', borderRadius: 2,
        position: 'relative',
      }}>
        <div aria-hidden style={{
          position: 'absolute', top: 8, right: 18,
          fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 1,
          color: 'var(--accent)', opacity: 0.18,
        }}>”</div>
        <p style={{
          fontFamily: 'var(--font-display)', fontStyle: 'italic',
          fontSize: big ? 28 : 22, lineHeight: 1.4, color: 'var(--fg)',
          margin: 0, fontWeight: 400, letterSpacing: '-0.005em',
        }}>{quote}</p>
        <div style={{
          marginTop: 14, fontSize: 14, color: 'var(--fg-subtle)',
        }}>{attribution}</div>
      </blockquote>
    </Reveal>
  );
}

function PPScreenshot({ caption, alt, variant }) {
  return (
    <Reveal>
      <figure style={{
        margin: '40px auto', maxWidth: 600,
        boxShadow: '0 8px 24px -8px rgba(20,19,15,0.14), 0 0 0 1px var(--border-strong)',
        borderRadius: 6, overflow: 'hidden', background: 'var(--bg-elevated)',
      }} role="img" aria-label={alt}>
        <div style={{
          padding: '10px 14px', borderBottom: '1px solid var(--border)',
          background: 'var(--paper-100)', display: 'flex', gap: 6, alignItems: 'center',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--paper-300)' }}/>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--paper-300)' }}/>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--paper-300)' }}/>
          <span style={{ marginLeft: 12, fontSize: 11, color: 'var(--fg-subtle)', fontFamily: 'var(--font-mono)' }}>
            {variant === 'ads' ? 'business.facebook.com / ads-manager' : 'daee — internal audit'}
          </span>
        </div>
        {variant === 'ads' ? <AdsPlaceholder/> : <AuditPlaceholder/>}
        <figcaption style={{
          padding: '12px 16px', fontSize: 12, color: 'var(--fg-subtle)',
          borderTop: '1px solid var(--border)', textAlign: 'center',
        }}>{caption} · placeholder for real screenshot</figcaption>
      </figure>
    </Reveal>
  );
}

function AdsPlaceholder() {
  return (
    <div style={{ padding: 24, fontFamily: 'var(--font-mono)', fontSize: 12 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 12, padding: '8px 0', borderBottom: '1px solid var(--border)', color: 'var(--fg-subtle)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        <div>Campaign</div><div>Leads</div><div>CPL</div><div>Spend</div>
      </div>
      {[
        ['PP / UGC-vegetarian', '14', '$1.13', '$15.82'],
        ['PP / UGC-working-women', '12', '$1.24', '$14.88'],
        ['PP / UGC-muscle-gain', '7', '$1.51', '$10.57'],
      ].map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 12, padding: '12px 0', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
          <div style={{ color: 'var(--fg)' }}>{r[0]}</div>
          <div style={{ color: 'var(--accent)', fontWeight: 600 }}>{r[1]}</div>
          <div>{r[2]}</div>
          <div>{r[3]}</div>
        </div>
      ))}
      <div style={{ marginTop: 16, fontSize: 11, color: 'var(--fg-subtle)' }}>Total: 33 leads · 5,134 reach · avg CPL $1.28</div>
    </div>
  );
}

function AuditPlaceholder() {
  return (
    <div style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {[
        { l: 'Brand → no human face', s: 'Critical', ok: false },
        { l: 'Offer → not visible on IG', s: 'Critical', ok: false },
        { l: 'Acquisition → none', s: 'Missing', ok: false },
        { l: 'Product / kitchen', s: 'Strong', ok: true },
        { l: 'Audience demand', s: 'Confirmed', ok: true },
      ].map((row, i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '10px 14px', background: row.ok ? 'var(--bg)' : 'var(--paper-100)',
          border: `1px solid ${row.ok ? 'var(--border)' : 'var(--clay-100)'}`, borderRadius: 4,
          fontSize: 13,
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--fg)' }}>{row.l}</span>
          <span style={{ color: row.ok ? 'var(--olive-700)' : 'var(--clay-600)', fontWeight: 500, fontSize: 12 }}>{row.s}</span>
        </div>
      ))}
    </div>
  );
}

function SystemDiagram() {
  const nodes = [
    { id: 'meta', label: 'Meta Ads', sub: 'Demand layer' },
    { id: 'mc',   label: 'ManyChat',  sub: 'Qualification' },
    { id: 'zoho', label: 'Zoho CRM',  sub: 'Pipeline + intel' },
  ];
  return (
    <Reveal>
      <div style={{
        margin: '40px 0', padding: '40px 32px',
        background: 'var(--paper-100)', border: '1px solid var(--border-strong)', borderRadius: 4,
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, position: 'relative' }}>
          {nodes.map((n, i) => (
            <div key={n.id} style={{
              padding: '20px 18px', background: 'var(--bg-elevated)',
              border: '1px solid var(--border-strong)', borderRadius: 4,
              position: 'relative', textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', marginBottom: 8 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: 4 }}>{n.label}</div>
              <div style={{ fontSize: 12, color: 'var(--fg-subtle)' }}>{n.sub}</div>
              {i < 2 && (
                <div aria-hidden style={{
                  position: 'absolute', right: -16, top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: 18, color: 'var(--accent)', fontWeight: 600,
                }}>→</div>
              )}
            </div>
          ))}
        </div>
        {/* Feedback loop */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24, position: 'relative' }}>
          <div style={{
            padding: '16px 24px', background: 'var(--accent)', color: 'var(--accent-fg)',
            borderRadius: 4, textAlign: 'center', maxWidth: 320,
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, opacity: 0.7, marginBottom: 4 }}>
              FEEDBACK LOOP · 04
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 20 }}>Conversion API</div>
            <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>CRM outcomes → Meta optimisation</div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 16, fontSize: 12, color: 'var(--fg-subtle)', fontStyle: 'italic' }}>
          Every closed lead trains the next dollar to find a more qualified one.
        </div>
      </div>
    </Reveal>
  );
}

function SoftCTA({ to, children }) {
  return (
    <a href={`#${to}`} onClick={(e) => {
      e.preventDefault();
      document.getElementById(to)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }} style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontSize: 15, color: 'var(--fg-muted)', textDecoration: 'none',
      borderBottom: '1px solid var(--border-strong)', paddingBottom: 2,
      marginTop: 8,
    }}>
      {children} <span aria-hidden>↓</span>
    </a>
  );
}

function HardCTA({ onApply }) {
  return (
    <Reveal>
      <div style={{
        margin: '60px 0', padding: '40px 36px',
        background: 'var(--accent-subtle)', borderRadius: 4,
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: 32,
          letterSpacing: '-0.015em', lineHeight: 1.15, fontWeight: 400,
          marginBottom: 24, color: 'var(--fg)', maxWidth: 540, margin: '0 auto 24px',
        }}>
          Ready to build a system like this for your business?
        </div>
        <Button size="lg" onClick={onApply}>Book a system audit <span aria-hidden>→</span></Button>
      </div>
    </Reveal>
  );
}

function FinalCTA({ onApply }) {
  return (
    <Reveal>
      <div style={{
        marginTop: 80, paddingTop: 48, borderTop: '1px solid var(--border-strong)',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)', fontSize: 24, lineHeight: 1.4,
          color: 'var(--fg)', maxWidth: 600, margin: '0 auto 32px', fontWeight: 400,
        }}>
          Daee Media builds revenue systems for service businesses. If your business has a
          proven service and needs consistent, qualified leads — not just ads — <em style={ppEm}>we should talk.</em>
        </p>
        <Button size="lg" onClick={onApply}>Book a system audit <span aria-hidden>→</span></Button>
      </div>
    </Reveal>
  );
}

function PPFAQ() {
  const items = [
    { q: 'How long did this campaign take?', a: 'The engagement ran for 10 months — May 2025 through March 2026. The first 45 subscriptions came in within 15 days of launching paid campaigns, after a foundation phase of pinned posts and UGC outreach that we did before any ad spend.' },
    { q: 'What was the cost per lead?', a: 'It varied by phase. Engagement ads: 0.5 CAD. Founder-led lead gen: 3–4 CAD. UGC phase: 2–3 CAD. Rejection crisis (Aug–Sep): 4–9 CAD. Comeback (Oct): 1.13–1.50 CAD. The peak performance — UGC-led, scripted, post-comeback — was the system at its best.' },
    { q: 'What happened when Meta started rejecting your ads in Aug–Sep?', a: 'We iterated relentlessly. Four creatives, four forms, four campaigns on minimal budget until we found what Meta wouldn\'t reject. Then we scaled. The comeback campaign generated 700 leads in 10–12 days at 1.13–1.50 CAD.' },
    { q: 'Why did the founder ask you to pause?', a: 'When the ads outpace the kitchen, the bottleneck has moved. The 19 October message at 1:53 AM was the kindest signal we could get — they had to stop because operational capacity was the limit, not demand.' },
    { q: 'Why did the cost per lead drop over time?', a: 'The Conversion API feedback loop made Meta\'s algorithm smarter with every conversion. When we fed CRM outcomes back to Meta — converters vs. junk — it learned to find more of the former. UGC-led creative also outperformed founder ads by roughly 60%.' },
    { q: 'Could this work for a business outside Canada?', a: 'Yes. The architecture — Meta Ads → ManyChat → CRM → Conversion API — works anywhere Meta Ads is available. We\'ve run versions of this loop for mental health, financial advisory, and wellness — same underlying system.' },
  ];
  const [open, setOpen] = useStatePP(0);
  return (
    <section style={{ marginTop: 80, paddingTop: 48, borderTop: '1px solid var(--border)' }}>
      <Eyebrow>§ FAQ</Eyebrow>
      <h2 style={{ ...ppH2, marginTop: 20 }}>Common questions.</h2>
      <div style={{ marginTop: 32 }}>
        {items.map((item, i) => (
          <div key={i} style={{ borderTop: '1px solid var(--border)' }}>
            <button onClick={() => setOpen(open === i ? -1 : i)} style={{
              width: '100%', textAlign: 'left', background: 'transparent', border: 0,
              padding: '20px 0', cursor: 'pointer',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
              fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--fg)',
              letterSpacing: '-0.005em',
            }}>
              <span>{item.q}</span>
              <span style={{ fontSize: 22, color: 'var(--accent)', transform: open === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 220ms' }}>+</span>
            </button>
            <div style={{
              maxHeight: open === i ? 280 : 0, overflow: 'hidden',
              transition: 'max-height 320ms var(--ease-out)',
            }}>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--fg-muted)', margin: '0 0 24px', maxWidth: 700 }}>
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.ProteinPalsCase = ProteinPalsCase;
