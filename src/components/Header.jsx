import React, { useState } from 'react'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-logo">
        <span className="logo-icon">▶</span>
        <span className="logo-text">Anim8buddy</span>
      </div>

      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Browse</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Request</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Flash Drives</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Login</a>
      </nav>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`bar ${menuOpen ? 'open' : ''}`} />
        <span className={`bar ${menuOpen ? 'open' : ''}`} />
        <span className={`bar ${menuOpen ? 'open' : ''}`} />
      </button>
    </header>
  )
}

export default Header