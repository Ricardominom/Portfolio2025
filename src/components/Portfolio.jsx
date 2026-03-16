import { useState } from "react"
import { db } from "../data/db"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Portfolio() {
  const [selected, setSelected] = useState(db[0])
  const [hovered, setHovered] = useState(null)

  const displayed = hovered || selected

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Heading */}
      <div className="mb-12">
        <p style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          Selected Work
        </p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: 'var(--text)' }}>
          Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0" style={{ border: '1px solid var(--border)', alignItems: 'start' }}>

        {/* Sidebar — project list (scrollable) */}
        <div className="lg:col-span-2" style={{ borderRight: '1px solid var(--border)', maxHeight: '80vh', overflowY: 'auto' }}>
          {db.map((project, i) => {
            const isActive = selected.id === project.id
            return (
              <div
                key={project.id}
                onClick={() => setSelected(project)}
                onMouseEnter={() => setHovered(project)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding: '1.25rem 1.5rem',
                  borderBottom: '1px solid var(--border)',
                  cursor: 'pointer',
                  backgroundColor: isActive ? 'var(--surface)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'background 0.15s',
                }}
              >
                <span style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '0.75rem',
                  color: isActive ? 'var(--gold)' : 'var(--border)',
                  fontWeight: 400,
                  minWidth: '28px',
                  transition: 'color 0.15s',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{
                  fontSize: '0.85rem',
                  color: isActive ? 'var(--text)' : 'var(--muted)',
                  fontWeight: isActive ? 500 : 400,
                  transition: 'color 0.15s',
                  flex: 1,
                }}>
                  {project.projectName}
                </span>
                {isActive && (
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--gold)', flexShrink: 0 }} />
                )}
              </div>
            )
          })}
        </div>

        {/* Main preview — sticky */}
        <div className="lg:col-span-3 flex flex-col" style={{ position: 'sticky', top: '73px' }}>
          {/* Image */}
          <div style={{ overflow: 'hidden', aspectRatio: '16/9', borderBottom: '1px solid var(--border)', position: 'relative' }}>
            {displayed.image ? (
              <img
                key={displayed.id}
                src={`/${displayed.image}.jpg`}
                alt={displayed.projectName}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            ) : (
              <div style={{
                width: '100%', height: '100%',
                backgroundColor: 'var(--surface2)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: '1rem',
              }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 300, color: 'var(--gold)', opacity: 0.4 }}>
                  {displayed.projectName}
                </span>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', padding: '0 2rem' }}>
                  {(displayed.tags || []).map(tag => (
                    <span key={tag} style={{
                      fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                      border: '1px solid var(--border)', color: 'var(--muted)', padding: '0.25rem 0.6rem',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Info */}
          <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', fontWeight: 400, color: 'var(--text)' }}>
              {displayed.projectName}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.75, flex: 1 }}>
              {displayed.description}
            </p>
            <div className="flex items-center gap-4 flex-wrap" style={{ paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
              {displayed.url && (
                <a href={displayed.url} target="_blank" rel="noreferrer">
                  <button style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    backgroundColor: 'var(--gold)', color: '#0a0a0a',
                    fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em',
                    textTransform: 'uppercase', padding: '0.6rem 1.25rem',
                    border: 'none', cursor: 'pointer', transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--gold-light)'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--gold)'}
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
                    View Project
                  </button>
                </a>
              )}
              <a href="https://github.com/Ricardominom" target="_blank" rel="noreferrer">
                <button style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  backgroundColor: 'transparent', color: 'var(--muted)',
                  fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em',
                  textTransform: 'uppercase', padding: '0.6rem 1.25rem',
                  border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
                >
                  <FontAwesomeIcon icon={faGithub} />
                  GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
