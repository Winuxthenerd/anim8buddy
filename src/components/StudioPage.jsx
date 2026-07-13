import React from 'react'
import MovieCard from './MovieCard'
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
          <MovieCard
            key={index}
            title={movie.title}
            year={movie.year}
            description={movie.description}
            color={color}
          />
        ))}
      </div>
    </div>
  )
}

export default StudioPage