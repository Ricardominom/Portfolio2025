import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '1.5rem 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
    }}>
      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.85rem', color: 'var(--muted)', letterSpacing: '0.05em' }}>
        © {new Date().getFullYear()} Ricardo Mino
      </span>
      <div style={{ display: 'flex', gap: '1.25rem' }}>
        {[
          { icon: faLinkedin, href: 'https://www.linkedin.com/in/ricardo-daniel-mino-m%C3%A1rquez-385870223/' },
          { icon: faGithub, href: 'https://github.com/Ricardominom' },
          { icon: faInstagram, href: 'https://www.instagram.com/ricardominom/?hl=es-es' },
        ].map(({ icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
      </div>
    </footer>
  )
}
