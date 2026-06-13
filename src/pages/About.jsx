export default function About() {
  return (
    <main style={{ position: 'relative', minHeight: '100svh' }}>

      {/* Floral corners */}
      <span className="floral-corner floral-corner--tl" aria-hidden="true">❧</span>
      <span className="floral-corner floral-corner--br" aria-hidden="true">❧</span>

      <div
        className="page-content"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          paddingTop: 'calc(14px + 5rem)',
        }}
      >

        {/* ── Header ── */}
        <div className="anim-fade-up" style={{ marginBottom: '3rem' }}>
          <p className="overline" style={{ marginBottom: '1rem' }}>
            Chapter I · About Me
          </p>
          <h1 className="display-lg">
            The <em className="text-italic-accent">Manuscript</em>
          </h1>
        </div>

        <hr className="h-rule anim-fade-up" style={{ marginBottom: '3rem' }} />

        {/* ── Main layout ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >

          {/* ── Manuscript frame ── */}
          <div
            className="manuscript-frame anim-fade-up"
            style={{
              animationDelay: '150ms',
              padding: '3rem',
              minHeight: '520px',
              position: 'relative',
            }}
          >
            {/* Heraldic crest */}
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <span
                style={{
                  fontSize: '1.5rem',
                  color: 'var(--accent)',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
                aria-hidden="true"
              >
                ⚜
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--muted-fg)',
                }}
              >
                Codex Felicis — Anno Domini 2025
              </p>
            </div>

            <div
              style={{
                width: '60%',
                height: '1px',
                background: 'var(--accent)',
                opacity: 0.3,
                margin: '0 auto 2rem',
              }}
            />

            {/* Drop-cap intro */}
            <p
              className="drop-cap"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1rem',
                lineHeight: 1.9,
                color: 'var(--fg)',
                marginBottom: '1.25rem',
              }}
            >
              nce upon a time, at the crossroads of art, finance, and
              artificial intelligence, a storyteller emerged — equal parts
              dreamer and analyst, equally at home in a museum and a
              spreadsheet. They called her Felice.
            </p>

            {/* Ruled lines placeholder */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                style={{
                  height: '1px',
                  background: 'rgba(107, 58, 42, 0.1)',
                  margin: '1.4rem 0',
                }}
                aria-hidden="true"
              />
            ))}

            {/* Decorative seal */}
            <div
              style={{
                position: 'absolute',
                bottom: '2rem',
                right: '2rem',
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                border: '1px solid rgba(184, 64, 64, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                opacity: 0.4,
                fontSize: '1.2rem',
              }}
              aria-hidden="true"
            >
              ✦
            </div>
          </div>

          {/* ── Side content ── */}
          <div
            className="anim-fade-up"
            style={{ animationDelay: '300ms', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
          >

            {/* Identity block */}
            <div>
              <p className="overline" style={{ marginBottom: '1rem' }}>Identity</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { label: 'Name',        value: 'Felice' },
                  { label: 'Archetype',   value: 'Romantic Rationalist' },
                  { label: 'MBTI',        value: 'ESFJ' },
                  { label: 'Domains',     value: 'Art · Finance · AI' },
                  { label: 'Focus',       value: 'AI Wellbeing Research' },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '1rem',
                      paddingBottom: '0.75rem',
                      borderBottom: '1px solid rgba(44,44,44,0.08)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--muted-fg)',
                        width: '7rem',
                        flexShrink: 0,
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1rem',
                        color: 'var(--fg)',
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Manifesto */}
            <div
              style={{
                background: 'var(--muted-bg)',
                padding: '2rem',
                borderLeft: '2px solid var(--accent)',
                position: 'relative',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  lineHeight: 1.75,
                  color: 'var(--fg)',
                  marginBottom: '1rem',
                }}
              >
                "Me + AI = 1 team = A legend written by me."
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}
              >
                — Felice's Manifesto
              </p>
            </div>

            {/* Vertical editorial label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.5 }}>
              <div style={{ flex: 1, height: '1px', background: 'var(--accent)', opacity: 0.3 }} />
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--muted-fg)',
                }}
              >
                Crafted with intention
              </span>
              <div style={{ flex: 1, height: '1px', background: 'var(--accent)', opacity: 0.3 }} />
            </div>

          </div>
        </div>

        {/* ── Dark bottom section ── */}
        <section
          className="section--dark anim-fade-up"
          style={{
            animationDelay: '500ms',
            marginTop: '4rem',
            padding: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
          }}
        >
          {[
            { num: '03',  label: 'Disciplines',  desc: 'Art · Finance · AI'          },
            { num: 'ESFJ', label: 'Archetype',    desc: 'Protagonist · Caregiver'     },
            { num: '∞',   label: 'Stories',      desc: 'Waiting to be written'       },
          ].map(({ num, label, desc }) => (
            <div key={label}>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  color: 'var(--bg)',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                  fontWeight: 400,
                }}
              >
                {num}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '0.4rem',
                }}
              >
                {label}
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--dark-muted)' }}>
                {desc}
              </p>
            </div>
          ))}
        </section>

      </div>
    </main>
  )
}
