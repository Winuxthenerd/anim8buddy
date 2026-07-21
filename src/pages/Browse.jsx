import React from 'react'
import Collections from '../components/Collections'
import MovieCard from '../components/MovieCard'
import './Browse.css'

const hubPreview = [
  { studio: 'Disney', page: 'disney', color: '#0057b8', movies: [
    { title: 'Frozen', year: 2013 },
    { title: 'Moana', year: 2016 },
    { title: 'Encanto', year: 2021 },
    { title: 'Zootopia', year: 2016 },
  ]},
  { studio: 'Pixar', page: 'pixar', color: '#00a8e0', movies: [
    { title: 'Toy Story', year: 1995 },
    { title: 'Coco', year: 2017 },
    { title: 'Up', year: 2009 },
    { title: 'Soul', year: 2020 },
  ]},
  { studio: 'DreamWorks', page: 'dreamworks', color: '#00857d', movies: [
    { title: 'Shrek', year: 2001 },
    { title: 'Kung Fu Panda', year: 2008 },
    { title: 'The Bad Guys', year: 2022 },
    { title: 'The Wild Robot', year: 2024 },
  ]},
]

const seriesPreview = [
  { category: 'Netflix Series', page: 'netflix-series', color: '#e50914', series: [
    { title: 'Arcane', year: 2021 },
    { title: 'Blue Eye Samurai', year: 2023 },
    { title: 'Castlevania', year: 2017 },
    { title: 'Cyberpunk Edgerunners', year: 2022 },
  ]},
  { category: 'Japanese Series', page: 'japanese-series', color: '#ff6b35', series: [
    { title: 'Attack on Titan', year: 2013 },
    { title: 'Demon Slayer', year: 2019 },
    { title: 'Jujutsu Kaisen', year: 2020 },
    { title: 'One Piece', year: 1999 },
  ]},
]

const topPicksPreview = [
  { title: 'The Angry Birds Movie', year: 2016 },
  { title: 'Corpse Bride', year: 2005 },
  { title: 'Kubo and the Two Strings', year: 2016 },
  { title: 'The Lego Movie', year: 2014 },
  { title: 'Rango', year: 2011 },
  { title: 'ParaNorman', year: 2012 },
  { title: 'The Polar Express', year: 2004 },
  { title: 'Spider-Man Into the Spider-Verse', year: 2018 },
]

function PreviewRow({ title, items, page, color, setPage, type }) {
  return (
    <div className="browse-section">
      <div className="browse-section-header">
        <h2 className="browse-section-title">{title}</h2>
        <button className="browse-view-all" onClick={() => setPage(page)}>
          View All →
        </button>
      </div>
      <div className="browse-row">
        {items.map((item, index) => (
          <div className="browse-card" key={index}>
            <MovieCard
              title={item.title}
              year={item.year}
              color={color}
              hideButton={type === 'series'}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function Browse({ setPage, navigateToSeries }) {
  return (
    <div className="browse">
      <div className="browse-header">
        <h1 className="browse-title">Browse</h1>
        <p className="browse-subtitle">Everything on Anim8buddy in one place.</p>
      </div>

      <div className="browse-section">
        <div className="browse-section-header">
          <h2 className="browse-section-title">Toonz Collections</h2>
        </div>
        <Collections />
      </div>

      <div className="browse-section">
        <div className="browse-section-header">
          <h2 className="browse-section-title">ToonzHub</h2>
          <button className="browse-view-all" onClick={() => setPage('toonzhub')}>
            View All →
          </button>
        </div>
        {hubPreview.map((studio) => (
          <div key={studio.studio} className="browse-subsection">
            <h3 className="browse-subsection-title">{studio.studio}</h3>
            <div className="browse-row">
              {studio.movies.map((movie, index) => (
                <div className="browse-card" key={index}>
                  <MovieCard
                    title={movie.title}
                    year={movie.year}
                    color={studio.color}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="browse-section">
        <div className="browse-section-header">
          <h2 className="browse-section-title">ToonzSeries</h2>
          <button className="browse-view-all" onClick={() => setPage('toonzseries')}>
            View All →
          </button>
        </div>
        {seriesPreview.map((cat) => (
          <div key={cat.category} className="browse-subsection">
            <h3 className="browse-subsection-title">{cat.category}</h3>
            <div className="browse-row">
              {cat.series.map((item, index) => (
                <div className="browse-card" key={index}>
                  <MovieCard
                    title={item.title}
                    year={item.year}
                    color={cat.color}
                    hideButton={true}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="browse-section">
        <div className="browse-section-header">
          <h2 className="browse-section-title">Top Picks</h2>
          <button className="browse-view-all" onClick={() => setPage('toppicks')}>
            View All →
          </button>
        </div>
        <div className="browse-row">
          {topPicksPreview.map((movie, index) => (
            <div className="browse-card" key={index}>
              <MovieCard
                title={movie.title}
                year={movie.year}
                color="#ff6b35"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Browse