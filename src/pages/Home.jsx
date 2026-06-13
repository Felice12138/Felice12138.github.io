import Button from '../components/Button'
import { Link } from 'react-router-dom'

const terminal = [
  { type: 'cmd', text: '$ whoami' },
  { type: 'res', text: '> Felice' },
  { type: 'blank' },
  { type: 'cmd', text: '$ cat about.md' },
  { type: 'res', text: '> A romantic rationalist  |  ESFJ' },
  { type: 'res', text: '> Art 🎨  Finance 💰  AI  —  cross-disciplinary by nature' },
  { type: 'res', text: '> AI wellbeing researcher' },
  { type: 'blank' },
  { type: 'quote', text: '$ Courage is mankind\'s hymn.' },
  { type: 'quote', text: '$ Me + AI = 1 team = A legend written by me.' },
  { type: 'blank' },
  { type: 'quote', text: '$ Welcome to my fairy tale.' },
  { type: 'res',   text: '}' },
]

export default function Home() {
  return (
    <main style={{ position: 'relative', overflow: 'hidden', minHeight: '100svh' }}>

      {/* ── Watermark Logo ── */}
      <span className="logo-watermark" aria-hidden="true">F</span>

      {/* ── Floral corners ── */}
      <span className="floral-corner floral-corner--tl" aria-hidden="true">❧</span>
      <span className="floral-corner floral-corner--tr" aria-hidden="true">❧</span>
      <span className="floral-corner floral-corner--bl" aria-hidden="true">❧</span>
      <span className="floral-corner floral-corner--br" aria-hidden="true">❧</span>

      {/* ── Vertical editorial label ── */}
      <div
        className="vert-label"
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '2.5rem',
          top: '50%',
          transform: 'translateY(-50%) rotate(180deg)',
          display: 'none',
        }}
      >
        Felice / Vol. 01 / Personal
      </div>

      {/* ── Page Content ── */}
      <div
        className="page-content"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          maxWidth: '1400px',
          margin: '0 auto',
          paddingTop: 'calc(14px + 5rem)',
        }}
      >

        {/* ── Hero ── */}
        <section style={{ position: 'relative' }}>
          <div className="anim-fade-up">
            <p className="overline" style={{ marginBottom: '1.5rem' }}>
              Personal · Portfolio · 2025
            </p>
          </div>

          <div className="anim-fade-up" style={{ animationDelay: '100ms' }}>
            <h1
              className="display-xl"
              style={{ marginBottom: '0.1em', maxWidth: '14ch' }}
            >
              This is{' '}
              <em className="text-italic-accent">Felice</em>
            </h1>
          </div>

          <div
            className="anim-fade-up"
            style={{
              animationDelay: '200ms',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              margin: '1.5rem 0 2.5rem',
            }}
          >
            <div className="ornament" style={{ maxWidth: '260px', flex: 1 }}>
              <span className="ornament__symbol">✦</span>
            </div>
          </div>
        </section>

        {/* ── Two-column: terminal + crest area ── */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Terminal */}
          <div className="terminal anim-fade-up" style={{ animationDelay: '300ms' }}>
            {terminal.map((line, i) => {
              if (line.type === 'blank') return <div key={i} style={{ height: '0.6rem' }} />
              return (
                <div key={i} className={line.type} style={{ display: 'block' }}>
                  {line.text}
                </div>
              )
            })}
            <span
              style={{
                display: 'inline-block',
                width: '0.55rem',
                height: '0.9em',
                background: 'var(--coral)',
                marginLeft: '2px',
                verticalAlign: 'middle',
                animation: 'terminalBlink 1.2s step-end infinite',
                opacity: 0.7,
              }}
              aria-hidden="true"
            />
          </div>

          {/* Right — Crest + Gothic Spire + CTA */}
          <div
            className="anim-fade-up"
            style={{
              animationDelay: '450ms',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              paddingTop: '1rem',
            }}
          >
            {/* Heraldic crest */}
            <div style={{ textAlign: 'left' }}>
              <div
                className="crest"
                style={{ fontSize: '2rem', marginBottom: '1rem' }}
                aria-hidden="true"
              >
                ⚜
              </div>
              <p className="body-text">
                A dreamer who codes, creates, and connects across art, finance, and
                artificial intelligence. This is my corner of the internet — a fairy
                tale written in real time.
              </p>
            </div>

            {/* Gothic spire decoration */}
            <div
              className="gothic-spire"
              aria-hidden="true"
              style={{ margin: '1rem 0', alignItems: 'flex-start' }}
            >
              <div className="spire-tip" />
              <div className="spire-body" />
              <div className="spire-tower" />
              <div className="spire-base" />
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button variant="primary" to="/contact">
                Contact Me
              </Button>
              <Button variant="secondary" to="/works">
                View Works
              </Button>
            </div>
          </div>
        </section>

        {/* ── Dark quote section ── */}
        <section
          className="section--dark anim-fade-up"
          style={{
            animationDelay: '600ms',
            padding: '3rem',
            marginTop: '2rem',
            position: 'relative',
          }}
        >
          <span
            className="floral-corner floral-corner--tl"
            aria-hidden="true"
            style={{ color: 'rgba(240,128,96,0.15)', fontSize: '3rem' }}
          >
            ❧
          </span>
          <span
            className="floral-corner floral-corner--br"
            aria-hidden="true"
            style={{ color: 'rgba(240,128,96,0.15)', fontSize: '3rem' }}
          >
            ❧
          </span>
          <p
            className="overline"
            style={{
              color: 'rgba(245,240,232,0.4)',
              marginBottom: '1.25rem',
            }}
          >
            Motto
          </p>
          <blockquote
            className="display-md"
            style={{
              color: 'var(--bg)',
              fontStyle: 'italic',
              maxWidth: '38ch',
              lineHeight: 1.4,
            }}
          >
            "Courage is mankind's hymn."
          </blockquote>
          <p
            style={{
              marginTop: '1rem',
              color: 'rgba(245,240,232,0.5)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            — Felice
          </p>
        </section>

        {/* ── Bottom nav hint ── */}
        <section
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '1rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p className="overline">Explore the site</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {[
              { to: '/about',   label: 'About'   },
              { to: '/works',   label: 'Works'   },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--muted-fg)',
                  textDecoration: 'none',
                  transition: 'color var(--t-slow)',
                }}
                onMouseEnter={e => (e.target.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.target.style.color = 'var(--muted-fg)')}
              >
                {label} →
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
