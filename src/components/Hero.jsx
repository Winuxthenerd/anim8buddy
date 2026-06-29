import React, { useState, useEffect } from 'react'
import './Hero.css'

const slides = [
  'https://placehold.co/1200x600/ff6b35/ffffff?text=Slide+1',
  'https://placehold.co/1200x600/1a1a2e/ffffff?text=Slide+2',
  'https://placehold.co/1200x600/ff6b35/ffffff?text=Slide+3',
]

function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero">
      <div className="hero-slide">
        <img
          src={slides[current]}
          alt={`Slide ${current + 1}`}
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1>Welcome to Anim8buddy</h1>
          <p>Download your favourite animations, anytime, anywhere — even offline.</p>
          <button className="hero-btn">Browse Catalog</button>
        </div>
      </div>
      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero