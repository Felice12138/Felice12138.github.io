const projects = [
  {
    num:   '001',
    title: 'Fairy Tale Engine',
    desc:  'An AI-powered narrative generator that weaves personal memories into illustrated storybooks. Cross-disciplinary fusion of NLP and editorial design.',
    tags:  ['AI', 'Narrative', 'Design'],
  },
  {
    num:   '002',
    title: 'The Wellbeing Index',
    desc:  'Research project mapping the psychological impact of AI interactions on human creative confidence. Data meets empathy.',
    tags:  ['Research', 'AI Ethics', 'Psychology'],
  },
  {
    num:   '003',
    title: 'Coral & Jade',
    desc:  'A visual art series exploring the tension between classical painting aesthetics and contemporary digital mediums.',
    tags:  ['Art', 'Digital', 'Editorial'],
  },
  {
    num:   '004',
    title: 'Portfolio Codex',
    desc:  'This very site — a living medieval manuscript of my creative output, built in React and designed in the gothic-luxury editorial tradition.',
    tags:  ['React', 'UI/UX', 'Personal'],
  },
]

function VintageTV() {
  return (
    <div className="vintage-tv">
      <div className="tv-body">
        <div className="tv-screen-outer">
          <div className="tv-screen">
            <div className="tv-screen-text">
              <div style={{ marginBottom: '0.5rem', color: 'var(--coral)', opacity: 0.6 }}>
                ◈ WORKS ◈
              </div>
              <div>Broadcasting</div>
              <div style={{ opacity: 0.5 }}>— channel 01 —</div>
            </div>
          </div>
        </div>
        <div className="tv-controls">
          <div className="tv-knob-group">
            <div className="tv-knob" />
            <div className="tv-knob" />
          </div>
          <div className="tv-brand">Felice Co.</div>
          <div className="tv-knob" />
        </div>
      </div>
      <div className="tv-legs">
        <div className="tv-leg" />
        <div className="tv-leg" />
      </div>
    </div>
  )
}

export default function Works() {
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
        <div className="anim-fade-up" style={{ marginBottom: '1rem' }}>
          <p className="overline">Chapter IV · Portfolio</p>
        </div>
        <h1 className="display-lg anim-fade-up" style={{ animationDelay: '100ms', marginBottom: '0.5rem' }}>
          Selected <em className="text-italic-accent">Works</em>
        </h1>
        <hr className="h-rule anim-fade-up" style={{ animationDelay: '200ms', marginTop: '2rem', marginBottom: '3rem' }} />

        {/* ── Two-column layout ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}
        >

          {/* ── LEFT: Vintage TV ── */}
          <div
            className="anim-fade-up"
            style={{
              animationDelay: '300ms',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              position: 'sticky',
              top: '6rem',
            }}
          >
            <VintageTV />

            {/* Stats below TV */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginTop: '1rem',
              }}
            >
              {[
                { num: '04', label: 'Projects'  },
                { num: '3+', label: 'Domains'   },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  style={{
                    borderTop: '1px solid rgba(44,44,44,0.12)',
                    paddingTop: '1rem',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2.25rem',
                      color: 'var(--fg)',
                      lineHeight: 1,
                      marginBottom: '0.25rem',
                    }}
                  >
                    {num}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: 'var(--muted-fg)',
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Vertical editorial label */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginTop: '1rem',
              }}
            >
              <div
                style={{
                  height: '40px',
                  width: '1px',
                  background: 'var(--accent)',
                  opacity: 0.3,
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--muted-fg)',
                  opacity: 0.7,
                }}
              >
                Ongoing transmission
              </span>
            </div>
          </div>

          {/* ── RIGHT: Project list ── */}
          <div
            className="anim-fade-up"
            style={{ animationDelay: '450ms' }}
          >
            <p className="overline" style={{ marginBottom: '0.5rem' }}>
              All projects
            </p>

            <div style={{ marginTop: '0.5rem' }}>
              {projects.map((project, i) => (
                <div
                  key={project.num}
                  className="project-item"
                  style={{ animationDelay: `${500 + i * 100}ms` }}
                  role="article"
                >
                  <p className="project-item__num">{project.num}</p>
                  <h2 className="project-item__title">{project.title}</h2>
                  <p className="project-item__desc">{project.desc}</p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
                    {project.tags.map(tag => (
                      <span key={tag} className="project-item__tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom ornament */}
            <div
              className="ornament"
              style={{ marginTop: '2rem', width: '50%', opacity: 0.4 }}
            >
              <span className="ornament__symbol">⚜</span>
            </div>
          </div>
        </div>

        {/* ── Dark closing section ── */}
        <section
          className="section--dark anim-fade-up"
          style={{
            animationDelay: '700ms',
            marginTop: '4rem',
            padding: '3rem',
            textAlign: 'center',
          }}
        >
          <span
            aria-hidden="true"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.4rem',
              color: 'var(--accent)',
              display: 'block',
              marginBottom: '1rem',
            }}
          >
            ⚜
          </span>
          <p
            className="display-md"
            style={{ color: 'var(--bg)', fontStyle: 'italic', marginBottom: '0.75rem' }}
          >
            More chapters to come.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.4)',
            }}
          >
            The legend is still being written
          </p>
        </section>

      </div>
    </main>
  )
}
