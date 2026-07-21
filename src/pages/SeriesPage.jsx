import React from 'react'
import MovieCard from '../components/MovieCard'
import './SeriesPage.css'

const allSeries = {
  'Netflix Series': [
    { title: 'Arcane', year: 2021, seasons: 2 },
    { title: 'Blue Eye Samurai', year: 2023, seasons: 1 },
    { title: 'Castlevania', year: 2017, seasons: 4 },
    { title: 'Cyberpunk Edgerunners', year: 2022, seasons: 1 },
    { title: 'The Witcher Nightmare of the Wolf', year: 2021, seasons: 1 },
    { title: 'Kipo and the Age of Wonderbeasts', year: 2020, seasons: 3 },
  ],
  'Korean Series': [
    { title: 'Solo Leveling', year: 2024, seasons: 1 },
    { title: 'The God of High School', year: 2020, seasons: 1 },
    { title: 'Tower of God', year: 2020, seasons: 1 },
    { title: 'Noblesse', year: 2020, seasons: 1 },
    { title: 'Lookism', year: 2022, seasons: 1 },
    { title: 'Hellbound', year: 2021, seasons: 2 },
  ],
  'Japanese Series': [
    { title: 'Attack on Titan', year: 2013, seasons: 4 },
    { title: 'Demon Slayer', year: 2019, seasons: 4 },
    { title: 'Jujutsu Kaisen', year: 2020, seasons: 2 },
    { title: 'One Piece', year: 1999, seasons: 20 },
    { title: 'Naruto', year: 2002, seasons: 5 },
    { title: 'Bleach', year: 2004, seasons: 4 },
    { title: 'My Hero Academia', year: 2016, seasons: 7 },
    { title: 'Fullmetal Alchemist Brotherhood', year: 2009, seasons: 1 },
    { title: 'Death Note', year: 2006, seasons: 1 },
    { title: 'Dragon Ball Z', year: 1989, seasons: 9 },
  ],
}

function SeriesPage({ category, navigateToSeries, setPage }) {
  const series = allSeries[category] || []

  return (
    <div className="series-page">
      <div className="series-page-header">
        <h1 className="series-page-title">{category}</h1>
        <p className="series-page-count">{series.length} series</p>
        <br></br>
        <button className="series-back-btn" onClick={() => setPage('toonzseries')}>
          ← Back
        </button>
      </div>
      <div className="series-page-grid">
        {series.map((item, index) => (
          <div key={index} onClick={() => navigateToSeries({ ...item, categoryPage: category === 'Netflix Series' ? 'netflix-series' : category === 'Korean Series' ? 'korean-series' : 'japanese-series' })} className="series-page-card">
            <MovieCard
              title={item.title}
              year={item.year}
              color="#1a1a2e"
              hideButton={true}
            />
            <div className="series-seasons-badge">{item.seasons} {item.seasons === 1 ? 'Season' : 'Seasons'}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SeriesPage