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
        <a href="#" onClick={() => setMenuOpen(false)}>ToonzHub</a>
        <a href="#" onClick={() => setMenuOpen(false)}>ToonzSeries</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Top Picks</a>
        <a href="#" onClick={() => setMenuOpen(false)}>FAQs</a>
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