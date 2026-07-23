import React, { useState } from 'react'
import './Header.css'

function Header({ setPage }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = (page) => {
    setPage(page)
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-logo" onClick={() => navigate('home')} style={{ cursor: 'pointer' }}>
        <span className="logo-icon">▶</span>
        <span className="logo-text">Anim8buddy</span>
      </div>

      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <a href="#" onClick={() => navigate('home')}>Home</a>
        <a href="#" onClick={() => navigate('toonzhub')}>ToonzHub</a>
        <a href="#" onClick={() => navigate('toonzseries')}>ToonzSeries</a>
        <a href="#" onClick={() => navigate('toppicks')}>Top Picks</a>
        <a href="#" onClick={() => navigate('shop')}>Shop</a>
        <a href="#" onClick={() => navigate('faqs')}>FAQs</a>
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