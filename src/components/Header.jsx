import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/aboutme", label: "About" },
  { to: "/portfolio", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'color-mix(in srgb, var(--bg) 85%, transparent)',
        backdropFilter: 'blur(12px)',
        transition: 'background-color 0.3s ease',
      }}
    >
      <div className="flex justify-between items-center mx-auto max-w-6xl px-6 py-5">
        {/* Logo */}
        <NavLink to="/" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--text)', letterSpacing: '0.05em' }}>
          RM
          <span style={{ color: 'var(--gold)', marginLeft: '2px' }}>.</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            style={{ color: 'var(--muted)', fontSize: '0.9rem', background: 'none', border: 'none', padding: '0.25rem', transition: 'color 0.2s', lineHeight: 1 }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span style={{ display: 'block', width: '22px', height: '1px', background: open ? 'var(--gold)' : 'var(--muted)', transition: 'all 0.2s', transform: open ? 'rotate(45deg) translate(1.5px, 1.5px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--muted)', opacity: open ? 0 : 1, transition: 'all 0.2s' }} />
          <span style={{ display: 'block', width: '22px', height: '1px', background: open ? 'var(--gold)' : 'var(--muted)', transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translate(1.5px, -1.5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}
          className="md:hidden flex flex-col px-6 py-4 gap-5"
        >
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
