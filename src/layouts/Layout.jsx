import { useState, useCallback } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cursor from '../components/Cursor'
import Intro from '../components/Intro'

export default function Layout() {
  const [introDone, setIntroDone] = useState(false)
  const location = useLocation()
  const handleIntroDone = useCallback(() => setIntroDone(true), [])

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Cursor />
      {!introDone && <Intro onDone={handleIntroDone} />}
      <Header />
      <main style={{ flex: 1 }}>
        <div key={location.pathname} className="page-transition">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
