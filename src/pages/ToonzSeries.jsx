import React, { useRef, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import './ToonzSeries.css'

const categories = [
  {
    name: 'Netflix Series',
    page: 'netflix-series',
    color: '#e50914',
    series: [
      { title: 'Arcane', year: 2021 },
      { title: 'Blue Eye Samurai', year: 2023 },
      { title: 'Castlevania', year: 2017 },
      { title: 'The Witcher: Nightmare of the Wolf', year: 2021 },
      { title: 'Cyberpunk Edgerunners', year: 2022 },
    ],
  },
  {
    name: 'Korean Series',
    page: 'korean-series',
    color: '#6c5ce7',
    series: [
      { title: 'Solo Leveling', year: 2024 },
      { title: 'The God of High School', year: 2020 },
      { title: 'Tower of God', year: 2020 },
      { title: 'Noblesse', year: 2020 },
      { title: 'Seasons of Blossom', year: 2022 },
    ],
  },
  {
    name: 'Japanese Series',
    page: 'japanese-series',
    color: '#ff6b35',
    series: [
      { title: 'Attack on Titan', year: 2013 },
      { title: 'Demon Slayer', year: 2019 },
      { title: 'Jujutsu Kaisen', year: 2020 },
      { title: 'One Piece', year: 1999 },
      { title: 'Naruto', year: 2002 },
    ],
  },
]

function SeriesRow({ category, setPage }) {
  const viewportRef = useRef(null)
  const animationRef = useRef(null)
  const scrollPos = useRef(0)
  const isPaused = useRef(false)

  const repeated = [
    ...category.series,
    ...category.series,
    ...category.series,
    ...category.series,
  ]

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const step = () => {
      if (!isPaused.current) {
        scrollPos.current += 0.6
        if (scrollPos.current >= viewport.scrollWidth / 2) {
          scrollPos.current = 0
          viewport.scrollLeft = 0
        }
        viewport.scrollLeft = scrollPos.current
      }
      animationRef.current = requestAnimationFrame(step)
    }

    animationRef.current = requestAnimationFrame(step)

    const pause = () => { isPaused.current = true }
    const resume = () => { isPaused.current = false }

    viewport.addEventListener('mouseenter', pause)
    viewport.addEventListener('mouseleave', resume)

    return () => {
      cancelAnimationFrame(animationRef.current)
      viewport.removeEventListener('mouseenter', pause)
      viewport.removeEventListener('mouseleave', resume)
    }
  }, [])

  return (
    <div className="series-section">
      <div className="series-section-header">
        <h2 className="series-name">{category.name}</h2>
        <button className="view-all-btn" onClick={() => setPage(category.page)}>
          View All →
        </button>
      </div>
      <div className="series-viewport" ref={viewportRef}>
        <div className="series-track">
          {repeated.map((item, index) => (
            <div className="series-card" key={index}>
              <MovieCard
                title={item.title}
                year={item.year}
                color={category.color}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ToonzSeries({ setPage }) {
  return (
    <div className="toonzseries">
      <div className="toonzseries-header">
        <h1 className="toonzseries-title">ToonzSeries</h1>
        <p className="toonzseries-subtitle">Browse series by category — click View All to see the full catalog.</p>
      </div>
      {categories.map((category) => (
        <SeriesRow key={category.name} category={category} setPage={setPage} />
      ))}
    </div>
  )
}

export default ToonzSeries