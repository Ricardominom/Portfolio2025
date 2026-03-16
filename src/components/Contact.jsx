import { faWhatsapp, faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { useRef } from "react"
import { faMailBulk, faMapLocation, faSquarePhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import emailjs from "@emailjs/browser"

const inputStyle = {
  width: '100%',
  backgroundColor: 'var(--surface)',
  border: '1px solid var(--border)',
  color: 'var(--text)',
  padding: '0.75rem 1rem',
  fontSize: '0.85rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  fontFamily: 'Inter, sans-serif',
}

const labelStyle = {
  fontSize: '0.65rem',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
  marginBottom: '0.4rem',
  display: 'block',
}

const contactInfo = [
  { icon: faSquarePhone, text: '(+52) 222 657 4451' },
  { icon: faWhatsapp, text: '(+52) 222 657 4451' },
  { icon: faMailBulk, text: 'rdmm.291191@gmail.com' },
  { icon: faMapLocation, text: 'Puebla, Mexico' },
]

const socials = [
  { icon: faLinkedin, href: 'https://www.linkedin.com/in/ricardo-daniel-mino-m%C3%A1rquez-385870223/' },
  { icon: faGithub, href: 'https://github.com/Ricardominom' },
  { icon: faInstagram, href: 'https://www.instagram.com/ricardominom/?hl=es-es' },
]

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm("service_aubk6oh", "template_3l61o8p", form.current, { publicKey: "7dHXq8BKTJGMXPKiX" })
      .then(() => { form.current.reset() })
      .catch((error) => { console.log("FAILED...", error.text) })
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">

      {/* Heading */}
      <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '2rem', marginBottom: '4rem' }}>
        <p style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          Get in touch
        </p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: 'var(--text)' }}>
          Contact
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="lg:col-span-3 flex flex-col gap-6"
        >
          <div>
            <label style={labelStyle}>Name</label>
            <input
              type="text"
              name="user_name"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--gold)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>
          <div>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              name="user_email"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--gold)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>
          <div>
            <label style={labelStyle}>Message</label>
            <textarea
              name="message"
              rows={5}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => e.target.style.borderColor = 'var(--gold)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>
          <input
            type="submit"
            value="Send Message"
            style={{
              backgroundColor: 'var(--gold)',
              color: '#0a0a0a',
              fontWeight: 600,
              fontSize: '0.72rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '0.9rem 2rem',
              border: 'none',
              cursor: 'pointer',
              width: 'fit-content',
              transition: 'background 0.2s',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--gold-light)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--gold)'}
          />
        </form>

        {/* Info */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          <div>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>
              Contact Info
            </p>
            <ul className="flex flex-col gap-4">
              {contactInfo.map(({ icon, text }) => (
                <li key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <FontAwesomeIcon icon={icon} style={{ color: 'var(--gold)', width: '16px', flexShrink: 0 }} />
                  <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>
              Social
            </p>
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              {socials.map(({ icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                >
                  <FontAwesomeIcon icon={icon} size="lg" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
