import React from 'react'
import './StudioPage.css'

function StudioPage({ name, color, movies }) {
  return (
    <div className="studio-page">
      <div className="studio-page-header" style={{ borderBottom: `4px solid ${color}` }}>
        <h1 className="studio-page-title" style={{ color: color }}>{name}</h1>
        <p className="studio-page-count">{movies.length} movies</p>
      </div>
      <div className="studio-page-grid">
        {movies.map((movie, index) => (
          <div className="sp-card" key={index}>
            <div className="sp-card-image" style={{ background: color }}>
              <span className="sp-placeholder">{movie.title}</span>
            </div>
            <div className="sp-card-info">
              <h3 className="sp-card-title">{movie.title}</h3>
              <p className="sp-card-year">{movie.year}</p>
              <p className="sp-card-desc">{movie.description}</p>
              <button className="sp-download-btn">Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StudioPage