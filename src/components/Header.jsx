import  { useState, useRef, useEffect } from 'react'
import { allMovies, allSeries } from '../data'
import './Header.css'

const allContent = [
  ...allMovies.map(m => ({ ...m, type: 'movie' })),
  ...allSeries,
]

function Header({ setPage }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const searchRef = useRef(null)

  const navigate = (page) => {
    setPage(page)
    setMenuOpen(false)
    setSearchOpen(false)
    setQuery('')
    setResults([])
  }

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([])
      return
    }
    const filtered = allContent.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8)
    setResults(filtered)
  }, [query])

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus()
    }
  }, [searchOpen])

  const handleResultClick = (item) => {
    navigate(item.page)
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

      <div className="header-right">
        <div className={`search-container ${searchOpen ? 'open' : ''}`}>
          {searchOpen && (
            <div className="search-wrapper">
              <input
                ref={searchRef}
                type="text"
                className="search-input"
                placeholder="Search movies and series..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {results.length > 0 && (
                <div className="search-results">
                  {results.map((item, index) => (
                    <div
                      key={index}
                      className="search-result-item"
                      onClick={() => handleResultClick(item)}
                    >
                      <div className="result-info">
                        <span className="result-title">{item.title}</span>
                        <span className="result-year">{item.year}</span>
                      </div>
                      <span className="result-tag">
                        {item.type === 'series' ? item.category : item.studio}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              {query.length >= 2 && results.length === 0 && (
                <div className="search-results">
                  <div className="search-no-results">No results found for "{query}"</div>
                </div>
              )}
            </div>
          )}
          <button
            className="search-btn"
            onClick={() => {
              setSearchOpen(!searchOpen)
              setQuery('')
              setResults([])
            }}
        >
            {searchOpen ? (
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
            )}
        </button>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`bar ${menuOpen ? 'open' : ''}`} />
          <span className={`bar ${menuOpen ? 'open' : ''}`} />
          <span className={`bar ${menuOpen ? 'open' : ''}`} />
        </button>
      </div>
    </header>
  )
}

export default Header