import React, { useState, useEffect } from 'react'
import { getMoviePoster } from '../tmdb'
import './MovieCard.css'

function MovieCard({ title, year, description, color }) {
  const [poster, setPoster] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMoviePoster(title, year).then((url) => {
      setPoster(url)
      setLoading(false)
    })
  }, [title, year])

  return (
    <div className="movie-card">
      <div className="movie-card-image" style={{ background: color || '#1a1a2e' }}>
        {loading && <span className="mc-loading">Loading...</span>}
        {!loading && poster && (
          <img src={poster} alt={title} className="mc-poster" />
        )}
        {!loading && !poster && (
          <span className="mc-fallback">{title}</span>
        )}
      </div>
      <div className="movie-card-info">
        <h3 className="mc-title">{title}</h3>
        <p className="mc-year">{year}</p>
        {description && <p className="mc-desc">{description}</p>}
        <button className="mc-btn">Download</button>
      </div>
    </div>
  )
}

export default MovieCard