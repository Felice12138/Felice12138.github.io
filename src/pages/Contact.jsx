const contacts = [
  {
    platform: 'WeChat',
    handle:   '@Felice_wechat',
    symbol:   '微信',
    href:     '#',
  },
  {
    platform: 'GitHub',
    handle:   'github.com/Felice',
    symbol:   'GitHub',
    href:     'https://github.com',
  },
  {
    platform: 'RED',
    handle:   '@Felice_红书',
    symbol:   '小红书',
    href:     '#',
  },
]

export default function Contact() {
  return (
    <main style={{ position: 'relative', minHeight: '100svh' }}>

      {/* Floral corners */}
      <span className="floral-corner floral-corner--tl" aria-hidden="true">❧</span>
      <span className="floral-corner floral-corner--tr" aria-hidden="true">❧</span>
      <span className="floral-corner floral-corner--bl" aria-hidden="true">❧</span>
      <span className="floral-corner floral-corner--br" aria-hidden="true">❧</span>

      <div
        className="page-content"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          paddingTop: 'calc(14px + 5rem)',
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >

        {/* ── Header ── */}
        <div>
          <div className="anim-fade-up" style={{ marginBottom: '1rem' }}>
            <p className="overline">Chapter III · Let's Connect</p>
          </div>
          <h1 className="display-lg anim-fade-up" style={{ animationDelay: '100ms', marginBottom: '0.5rem' }}>
            Find <em className="text-italic-accent">Me</em>
          </h1>
          <hr className="h-rule anim-fade-up" style={{ animationDelay: '200ms', marginTop: '2rem', marginBottom: '3rem' }} />
        </div>

        {/* ── Main card ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '4rem',
            alignItems: 'center',
            flex: 1,
          }}
        >
          {/* Avatar + tagline */}
          <div
            className="anim-fade-up"
            style={{ animationDelay: '300ms', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2rem' }}
          >
            <div className="avatar-frame">F</div>

            <div>
              <p
                className="display-md"
                style={{ marginBottom: '0.5rem' }}
              >
                Felice
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}
              >
                Creator · Researcher · Storyteller
              </p>
            </div>

            {/* Decorative rule */}
            <div className="ornament" style={{ width: '100%', maxWidth: '240px' }}>
              <span className="ornament__symbol">✦</span>
            </div>

            <p className="body-text">
              Whether you have a project idea, a collaboration proposal, or simply
              want to say hello — I would love to hear from you. Every great story
              begins with a conversation.
            </p>
          </div>

          {/* Contact links */}
          <div
            className="anim-fade-up"
            style={{ animationDelay: '450ms' }}
          >
            <p className="overline" style={{ marginBottom: '1.5rem' }}>
              Reach out via
            </p>

            <div>
              {contacts.map(({ platform, handle, symbol, href }) => (
                <a
                  key={platform}
                  href={href}
                  className="contact-link"
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span className="contact-link__icon">{symbol}</span>
                  <span className="contact-link__text">{handle}</span>
                </a>
              ))}
            </div>

            {/* Manuscript-style note */}
            <div
              style={{
                marginTop: '2.5rem',
                padding: '1.5rem',
                background: 'var(--muted-bg)',
                borderLeft: '2px solid var(--accent)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.9rem',
                  fontStyle: 'italic',
                  lineHeight: 1.75,
                  color: 'var(--muted-fg)',
                }}
              >
                "Every connection is a new chapter in the story — I look forward
                to writing one with you."
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom dark strip ── */}
        <section
          className="section--dark anim-fade-up"
          style={{
            animationDelay: '600ms',
            marginTop: '4rem',
            padding: '2rem 3rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: 'var(--bg)',
              opacity: 0.8,
            }}
          >
            Felice · Personal Site · 2025
          </span>
          <span
            className="crest"
            style={{ color: 'rgba(245,240,232,0.3)', fontSize: '1.2rem' }}
            aria-hidden="true"
          >
            ⚜
          </span>
        </section>

      </div>
    </main>
  )
}
