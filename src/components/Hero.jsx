import React, { useState, useEffect } from 'react'
import './Hero.css'

const TMDB_API_KEY = '98215a8e51a12f3bb2d627e496673e31'
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/original'

const heroMovies = [
  { title: 'Spider-Man Into the Spider-Verse', year: 2018 },
  { title: 'The Lion King', year: 2019 },
  { title: 'Demon Slayer Mugen Train', year: 2020 },
  { title: 'Encanto', year: 2021 },
  { title: 'The Bad Guys', year: 2022 },
  { title: 'Puss in Boots The Last Wish', year: 2022 },
  { title: 'The Wild Robot', year: 2024 },
  { title: 'Kung Fu Panda 4', year: 2024 },
]

function Hero({setPage}) {
  const [slides, setSlides] = useState([])
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const fetchPosters = async () => {
      const results = await Promise.all(
        heroMovies.map(async (movie) => {
          try {
            const res = await fetch(
              `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movie.title)}&year=${movie.year}`
            )
            const data = await res.json()
            if (data.results && data.results.length > 0) {
              const backdrop = data.results[0].backdrop_path
              const poster = data.results[0].poster_path
              return backdrop
                ? `${TMDB_IMAGE_BASE}${backdrop}`
                : poster
                ? `${TMDB_IMAGE_BASE}${poster}`
                : null
            }
            return null
          } catch {
            return null
          }
        })
      )
      setSlides(results.filter(Boolean))
    }

    fetchPosters()
  }, [])

  useEffect(() => {
    if (slides.length === 0) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides])

  return (
    <section className="hero">
      <div className="hero-slide">
        {slides.length > 0 ? (
          <img
            src={slides[current]}
            alt={`Slide ${current + 1}`}
            className="hero-image"
          />
        ) : (
          <div className="hero-placeholder" />
        )}
        <div className="hero-overlay">
          <h1>Your Anime & Cartoon Hub</h1>
          <p>Download your favourite animations, anytime, anywhere — even offline.</p>
          <button className="hero-btn" onClick={() => setPage('shop')}>Anim8Buddy Shop</button>
        </div>
      </div>
    </section>
  )
}

export default Hero