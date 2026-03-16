import { NavLink } from "react-router-dom"

// Syntax highlight helpers
const Kw  = ({ children }) => <span style={{ color: '#c9a84c' }}>{children}</span>        // keyword — gold
const Fn  = ({ children }) => <span style={{ color: '#e8c86a' }}>{children}</span>        // function — light gold
const Str = ({ children }) => <span style={{ color: '#a8c07a' }}>{children}</span>        // string — green
const Prop= ({ children }) => <span style={{ color: '#9eb4cc' }}>{children}</span>        // property — blue-gray
const Op  = ({ children }) => <span style={{ color: '#888' }}>{children} </span>          // operator — muted

export default function Home() {
  return (
    <div style={{ minHeight: 'calc(100vh - 73px)', display: 'flex', alignItems: 'center' }}>
      <div className="mx-auto max-w-6xl px-6 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — Typography */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="fade-up fade-up-1" style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                Full Stack Developer · Frontend & Backend
              </p>
              <h1 className="fade-up fade-up-2" style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                fontWeight: 300,
                lineHeight: 1.05,
                color: 'var(--text)',
                letterSpacing: '-0.01em',
              }}>
                Ricardo<br />
                <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Mino</span>
              </h1>
            </div>

            <div className="gold-line fade-up fade-up-3" />

            <p className="fade-up fade-up-4" style={{ color: 'var(--muted)', lineHeight: 1.7, maxWidth: '380px', fontSize: '0.9rem' }}>
              Proficient in React, TypeScript and Next.js on the frontend — Java, Spring Boot, PHP and Laravel on the backend. Focused on performance, clean architecture and scalable systems.
            </p>

            <div className="flex items-center gap-6 flex-wrap fade-up fade-up-5">
              <NavLink to="/portfolio">
                <button style={{
                  backgroundColor: 'var(--gold)',
                  color: '#0a0a0a',
                  fontWeight: 600,
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '0.85rem 2rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--gold-light)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--gold)'}
                >
                  View Work
                </button>
              </NavLink>
              <NavLink to="/aboutme">
                <button style={{
                  backgroundColor: 'transparent',
                  color: 'var(--muted)',
                  fontWeight: 400,
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '0.85rem 2rem',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
                >
                  About Me
                </button>
              </NavLink>
            </div>
          </div>

          {/* Right — Code block */}
          <div className="hidden md:flex justify-end fade-up fade-up-3">
            <div style={{
              width: '380px',
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              fontFamily: "'Courier New', monospace",
              fontSize: '0.82rem',
              lineHeight: 1.75,
              overflow: 'hidden',
            }}>
              {/* Terminal bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.65rem 1rem',
                borderBottom: '1px solid var(--border)',
                backgroundColor: 'var(--surface2)',
              }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f57' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#febc2e' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#28c840' }} />
                <span style={{ marginLeft: '0.5rem', color: 'var(--muted)', fontSize: '0.7rem', letterSpacing: '0.05em' }}>
                  ricardo.js
                </span>
              </div>
              {/* Code */}
              <div style={{ padding: '1.5rem 1.5rem' }}>
                <div><Kw>const</Kw> <Fn>dev</Fn> <Op>=</Op> {'{'}</div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <Prop>name</Prop><Op>:</Op> <Str>'Ricardo Mino'</Str><Op>,</Op>
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <Prop>role</Prop><Op>:</Op> <Str>'Full Stack Developer'</Str><Op>,</Op>
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <Prop>frontend</Prop><Op>:</Op> [
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <Str>'React'</Str><Op>,</Op> <Str>'Next.js'</Str><Op>,</Op>
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <Str>'TypeScript'</Str><Op>,</Op> <Str>'TailwindCSS'</Str>
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>]<Op>,</Op></div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <Prop>backend</Prop><Op>:</Op> [
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <Str>'Node.js'</Str><Op>,</Op> <Str>'Express'</Str><Op>,</Op>
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <Str>'Java'</Str><Op>,</Op> <Str>'Spring Boot'</Str><Op>,</Op>
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <Str>'PHP'</Str><Op>,</Op> <Str>'Laravel'</Str>
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>]<Op>,</Op></div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <Prop>databases</Prop><Op>:</Op> [<Str>'MySQL'</Str><Op>,</Op> <Str>'PostgreSQL'</Str><Op>,</Op> <Str>'MongoDB'</Str>]<Op>,</Op>
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <Prop>tools</Prop><Op>:</Op> [<Str>'Docker'</Str><Op>,</Op> <Str>'Cypress'</Str><Op>,</Op> <Str>'Git'</Str>]<Op>,</Op>
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <Prop>available</Prop><Op>:</Op> <Kw>true</Kw>
                </div>
                <div>{'}'}</div>
                <div style={{ marginTop: '0.75rem' }}>
                  <span style={{ color: 'var(--gold)', opacity: 0.5 }}>// open to new opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{ borderTop: '1px solid var(--border)', marginTop: '5rem', paddingTop: '3rem' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 fade-up fade-up-6"
        >
          {[
            { number: '11+', label: 'Projects Built' },
            { number: '3+', label: 'Years Experience' },
            { number: '8+', label: 'Technologies' },
            { number: '∞', label: 'Lines of Code' },
          ].map(({ number, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 300, color: 'var(--gold)' }}>
                {number}
              </span>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
