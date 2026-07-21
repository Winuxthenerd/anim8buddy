import React, { useState, useEffect } from 'react'
import { getMoviePoster } from '../tmdb'
import './SeriesDetail.css'

function generateEpisodes(seasonNum, count) {
  return Array.from({ length: count }, (_, i) => ({
    episode: i + 1,
    title: `Episode ${i + 1}`,
    duration: `${Math.floor(Math.random() * 10) + 20} mins`,
  }))
}

const placeholderSeasons = (seasonCount) =>
  Array.from({ length: seasonCount }, (_, i) => ({
    season: i + 1,
    episodes: generateEpisodes(i + 1, Math.floor(Math.random() * 12) + 10),
  }))

function SeriesDetail({ series, setPage }) {
  const [poster, setPoster] = useState(null)
  const [openSeason, setOpenSeason] = useState(null)

  useEffect(() => {
    if (series) {
      getMoviePoster(series.title, series.year).then(setPoster)
    }
  }, [series])

  if (!series) return null

  const seasons = placeholderSeasons(series.seasons)

  return (
    <div className="series-detail">
      <div className="sd-hero">
        {poster && (
          <img src={poster} alt={series.title} className="sd-backdrop" />
        )}
        <div className="sd-hero-overlay">
          <button className="sd-back-btn" onClick={() => setPage(series.categoryPage)}>
            ← Back
          </button>
          <h1 className="sd-title">{series.title}</h1>
          <p className="sd-meta">{series.year} · {series.seasons} {series.seasons === 1 ? 'Season' : 'Seasons'}</p>
        </div>
      </div>

      <div className="sd-content">
        <h2 className="sd-seasons-title">Episodes</h2>
        {seasons.map((season) => (
          <div key={season.season} className="sd-season">
            <div
              className={`sd-season-header ${openSeason === season.season ? 'open' : ''}`}
              onClick={() => setOpenSeason(openSeason === season.season ? null : season.season)}
            >
              <span>Season {season.season}</span>
              <span className="sd-season-meta">
                {season.episodes.length} Episodes
                <span className="sd-chevron">{openSeason === season.season ? '▲' : '▼'}</span>
              </span>
            </div>
            {openSeason === season.season && (
              <div className="sd-episodes">
                {season.episodes.map((ep) => (
                  <div key={ep.episode} className="sd-episode">
                    <div className="sd-ep-info">
                      <span className="sd-ep-num">E{ep.episode}</span>
                      <span className="sd-ep-title">{ep.title}</span>
                      <span className="sd-ep-duration">{ep.duration}</span>
                    </div>
                    <button className="sd-ep-btn">Download</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SeriesDetail