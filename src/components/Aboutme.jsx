import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { useInView } from "../hooks/useInView"

const CV = '/Ricardo_Mino_Resume.pdf'

const skills = {
  Frontend: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML & CSS', 'TailwindCSS', 'Redux', 'React Hook Form', 'Axios'],
  Backend:  ['Java', 'Spring Boot', 'PHP', 'Laravel', 'Node.js', 'Express', 'REST APIs', 'JWT Auth'],
  Databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
  'DevOps & Tools': ['Git / GitHub', 'Docker', 'Postman', 'Swagger', 'Cypress', 'Jest'],
}

const experience = [
  {
    role: 'Frontend Developer',
    company: 'Esporadix',
    period: '2025',
    bullets: [
      'Developed SaaS platforms using React, Next.js, TypeScript and TailwindCSS.',
      'Integrated REST APIs and backend features using PHP and Laravel.',
      'Created dynamic forms, real-time dashboards and reusable components.',
      'Implemented automated testing with Cypress and Jest.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Itransition',
    period: '2024',
    bullets: [
      'Built full-stack apps with React, TypeScript, Node.js and MongoDB.',
      'Designed REST APIs with Express, Swagger docs and JWT authentication.',
      'Contributed to Itemplates — a form-builder with CSV export and auth.',
    ],
  },
  {
    role: 'Process Engineer',
    company: 'EFTEC',
    period: '2018 – 2024',
    bullets: [
      'Managed client requirements and Integrated Management System compliance.',
      'Implemented 5W+1H and 5S methodologies for operational efficiency.',
      'Conducted data analysis and generated KPI reports.',
    ],
  },
  {
    role: 'Engineering Intern',
    company: 'Federal Mogul',
    period: '2015',
    bullets: [
      'Collaborated in quality testing and production control.',
      'Optimized processes in the supply chain.',
    ],
  },
]

const education = [
  { title: 'Java Full Stack Developer', institution: 'Certificate of Completion', period: '2024' },
  { title: 'Full Stack Web Developer', institution: 'Certificate of Completion', period: '2023' },
  { title: 'Bachelor of Music', institution: 'Conservatorio de Música de Puebla', period: '2012 – 2018' },
  { title: 'Mechanical & Electrical Engineering', institution: 'Benemérita Universidad Autónoma de Puebla', period: '2009 – 2014' },
]

const sectionTitle = (label) => (
  <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>
    {label}
  </p>
)

export default function Aboutme() {
  const [bioRef, bioVisible] = useInView()
  const [skillsRef, skillsVisible] = useInView()
  const [expRef, expVisible] = useInView()
  const [eduRef, eduVisible] = useInView()

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">

      {/* Header */}
      <div className="flex flex-wrap justify-between items-start gap-6 mb-16" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '2rem' }}>
        <div>
          <p style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>About</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: 'var(--text)' }}>
            Ricardo Mino
          </h1>
        </div>
        <a
          href={CV} download
          style={{
            display: 'flex', alignItems: 'center', gap: '0.6rem',
            border: '1px solid var(--border)', color: 'var(--muted)',
            fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '0.75rem 1.5rem', textDecoration: 'none', transition: 'all 0.2s', alignSelf: 'flex-end',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
        >
          <FontAwesomeIcon icon={faDownload} /> Resume / CV
        </a>
      </div>

      {/* Bio + Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-20">
        {/* Bio */}
        <div ref={bioRef} className={`lg:col-span-3 flex flex-col gap-5 reveal ${bioVisible ? 'visible' : ''}`} style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.85 }}>
          {sectionTitle('Professional Profile')}
          <p>
            Full Stack Developer with experience in frontend and backend development. Proficient in <span style={{ color: 'var(--text)' }}>JavaScript, React, and TypeScript</span> for UI development, as well as <span style={{ color: 'var(--text)' }}>PHP with Laravel, Java, and Spring Boot</span> for backend services.
          </p>
          <p>
            Experienced in building scalable web applications, CMS-style platforms, and RESTful APIs with a strong focus on <span style={{ color: 'var(--text)' }}>performance, maintainability, and clean architecture</span>.
          </p>
          <p>
            Background in <span style={{ color: 'var(--text)' }}>Mechanical Engineering</span> and a degree in <span style={{ color: 'var(--text)' }}>Music (piano)</span> — disciplines that bring precision, creativity and discipline to every project.
          </p>
          {/* Languages */}
          <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1.5rem' }}>
            {[{ lang: 'Spanish', level: 'Native' }, { lang: 'English', level: 'C1 Professional' }].map(({ lang, level }) => (
              <div key={lang} style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                <span style={{ color: 'var(--text)', fontSize: '0.82rem', fontWeight: 500 }}>{lang}</span>
                <span style={{ color: 'var(--gold)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div ref={skillsRef} className={`lg:col-span-2 flex flex-col gap-8 reveal reveal-d2 ${skillsVisible ? 'visible' : ''}`}>
          {sectionTitle('Technical Skills')}
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <p style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.6rem' }}>
                {category}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {items.map(item => (
                  <span key={item} style={{
                    fontSize: '0.72rem', padding: '0.25rem 0.65rem',
                    border: '1px solid var(--border)', color: 'var(--muted)',
                    transition: 'all 0.2s', cursor: 'default',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
                  >{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div ref={expRef} className={`mb-20 reveal ${expVisible ? 'visible' : ''}`}>
        {sectionTitle('Work Experience')}
        <div className="flex flex-col" style={{ borderLeft: '1px solid var(--border)', paddingLeft: '2rem', gap: '2.5rem' }}>
          {experience.map(({ role, company, period, bullets }) => (
            <div key={company} style={{ position: 'relative' }}>
              {/* Gold dot */}
              <span style={{
                position: 'absolute', left: '-2.45rem', top: '0.35rem',
                width: '8px', height: '8px', borderRadius: '50%',
                backgroundColor: 'var(--gold)', flexShrink: 0,
              }} />
              <div className="flex flex-wrap justify-between items-baseline gap-2" style={{ marginBottom: '0.75rem' }}>
                <div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.35rem', fontWeight: 400, color: 'var(--text)' }}>
                    {role}
                  </h3>
                  <span style={{ color: 'var(--gold)', fontSize: '0.78rem', letterSpacing: '0.05em' }}>{company}</span>
                </div>
                <span style={{ fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.08em' }}>{period}</span>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {bullets.map(b => (
                  <li key={b} style={{ color: 'var(--muted)', fontSize: '0.82rem', lineHeight: 1.7, display: 'flex', gap: '0.6rem' }}>
                    <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.1rem' }}>—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div ref={eduRef} className={`reveal ${eduVisible ? 'visible' : ''}`}>
        {sectionTitle('Education')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {education.map(({ title, institution, period }) => (
            <div key={title} style={{
              padding: '1.25rem 1.5rem',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--surface)',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <p style={{ color: 'var(--text)', fontSize: '0.88rem', fontWeight: 500, marginBottom: '0.3rem' }}>{title}</p>
              <p style={{ color: 'var(--muted)', fontSize: '0.75rem' }}>{institution}</p>
              <p style={{ color: 'var(--gold)', fontSize: '0.65rem', letterSpacing: '0.1em', marginTop: '0.5rem' }}>{period}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
