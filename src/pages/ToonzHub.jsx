import React, { useRef, useEffect } from 'react'
import './ToonzHub.css'
import MovieCard from '../components/MovieCard'

const studios = [
  {
    name: 'Disney',
    page: 'disney',
    color: '#0057b8',
    movies: [
      { title: 'Frozen', year: 2013 },
      { title: 'Moana', year: 2016 },
      { title: 'Encanto', year: 2021 },
      { title: 'Zootopia', year: 2016 },
      { title: 'Big Hero 6', year: 2014 },
    ],
  },
  {
    name: 'Pixar',
    page: 'pixar',
    color: '#00a8e0',
    movies: [
      { title: 'Toy Story', year: 1995 },
      { title: 'Finding Nemo', year: 2003 },
      { title: 'The Incredibles', year: 2004 },
      { title: 'Up', year: 2009 },
      { title: 'Coco', year: 2017 },
    ],
  },
  {
    name: 'DreamWorks',
    page: 'dreamworks',
    color: '#00857d',
    movies: [
      { title: 'Shrek', year: 2001 },
      { title: 'Kung Fu Panda', year: 2008 },
      { title: 'How to Train Your Dragon', year: 2010 },
      { title: 'Madagascar', year: 2005 },
      { title: 'The Bad Guys', year: 2022 },
    ],
  },
  {
    name: 'Netflix',
    page: 'netflix',
    color: '#e50914',
    movies: [
      { title: 'Klaus', year: 2019 },
      { title: 'The Sea Beast', year: 2022 },
      { title: 'Nimona', year: 2023 },
      { title: 'Leo', year: 2023 },
      { title: 'The Wild Robot', year: 2024 },
    ],
  },
  {
    name: 'Illumination',
    page: 'illumination',
    color: '#f5a623',
    movies: [
      { title: 'Despicable Me', year: 2010 },
      { title: 'Minions', year: 2015 },
      { title: 'Sing', year: 2016 },
      { title: 'The Grinch', year: 2018 },
      { title: 'The Super Mario Bros. Movie', year: 2023 },
    ],
  },
  {
    name: '20th Century',
    page: 'twentieth',
    color: '#333333',
    movies: [
      { title: 'Ice Age', year: 2002 },
      { title: 'Rio', year: 2011 },
      { title: 'The Peanuts Movie', year: 2015 },
      { title: 'Ferdinand', year: 2017 },
      { title: "Ron's Gone Wrong", year: 2021 },
    ],
  },
]

function StudioRow({ studio, setPage }) {
  const viewportRef = useRef(null)
  const animationRef = useRef(null)
  const scrollPos = useRef(0)
  const isPaused = useRef(false)

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

  const repeated = [...studio.movies, ...studio.movies, ...studio.movies, ...studio.movies]

  return (
    <div className="studio-section">
      <div className="studio-section-header">
        <h2 className="studio-name">{studio.name}</h2>
        <button className="view-all-btn" onClick={() => setPage(studio.page)}>
          View All →
        </button>
      </div>
      <div className="studio-viewport" ref={viewportRef}>
        <div className="studio-track">
          {repeated.map((movie, index) => (
            <div className="studio-card" key={index}>
              <MovieCard
                title={movie.title}
                year={movie.year}
                color={studio.color}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ToonzHub({ setPage }) {
  return (
    <div className="toonzhub">
      <div className="toonzhub-header">
        <h1 className="toonzhub-title">ToonzHub</h1>
        <p className="toonzhub-subtitle">Browse movies by studio — click View All to see the full catalog.</p>
      </div>
      {studios.map((studio) => (
        <StudioRow key={studio.name} studio={studio} setPage={setPage} />
      ))}
    </div>
  )
}

export default ToonzHub