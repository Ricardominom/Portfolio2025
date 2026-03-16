import { useState, useEffect } from 'react'

export default function Intro({ onDone }) {
  const [phase, setPhase] = useState('visible') // visible | fadeOut | slideUp

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('fadeOut'), 1600)
    const t2 = setTimeout(() => setPhase('slideUp'), 2200)
    const t3 = setTimeout(() => onDone(), 2800)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onDone])

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      backgroundColor: '#0a0a0a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '1rem',
      transform: phase === 'slideUp' ? 'translateY(-100%)' : 'translateY(0)',
      transition: phase === 'slideUp' ? 'transform 0.7s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
      pointerEvents: 'none',
    }}>
      {/* Name */}
      <div style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(4rem, 14vw, 9rem)',
        fontWeight: 300,
        color: '#f5f0e8',
        letterSpacing: '-0.02em',
        lineHeight: 1,
        opacity: phase === 'visible' ? 1 : 0,
        transform: phase === 'visible' ? 'translateY(0)' : 'translateY(-12px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        animation: 'introEnter 0.8s ease forwards',
      }}>
        RM<span style={{ color: '#c9a84c' }}>.</span>
      </div>

      {/* Subtitle */}
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.65rem',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: '#888',
        opacity: phase === 'visible' ? 1 : 0,
        transition: 'opacity 0.5s ease 0.1s',
        animation: 'introEnter 0.8s ease 0.3s both',
      }}>
        Ricardo Mino · Full Stack Developer
      </p>

      {/* Loading bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '2px',
        backgroundColor: '#c9a84c',
        animation: 'introBar 1.6s ease forwards',
      }} />
    </div>
  )
}
