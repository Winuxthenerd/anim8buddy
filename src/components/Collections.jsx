import React, { useRef } from 'react'
import './Collections.css'

const collections = [
  {
    id: 1,
    title: 'Studio Ghibli',
    description: 'Timeless masterpieces from the legendary Japanese animation studio.',
    image: 'https://placehold.co/400x400/1a1a2e/ffffff?text=Ghibli',
  },
  {
    id: 2,
    title: 'Best Shonen',
    description: 'The greatest action-packed anime series of all time.',
    image: 'https://placehold.co/400x400/ff6b35/ffffff?text=Shonen',
  },
  {
    id: 3,
    title: 'Disney Classics',
    description: 'Beloved animated films that defined generations of childhoods.',
    image: 'https://placehold.co/400x400/1a1a2e/ffffff?text=Disney',
  },
  {
    id: 4,
    title: 'Cartoon Network',
    description: 'Iconic cartoons that ruled Saturday morning television.',
    image: 'https://placehold.co/400x400/ff6b35/ffffff?text=CN',
  },
  {
    id: 5,
    title: 'Nickelodeon Hits',
    description: 'Classic Nickelodeon shows that every 90s and 2000s kid remembers.',
    image: 'https://placehold.co/400x400/1a1a2e/ffffff?text=Nick',
  },
  {
    id: 6,
    title: 'Top Anime Films',
    description: 'The highest rated anime movies ever made, all in one place.',
    image: 'https://placehold.co/400x400/ff6b35/ffffff?text=Films',
  },
  {
    id: 7,
    title: 'Naija Favourites',
    description: 'The cartoons and anime that Nigerians grew up watching and loving.',
    image: 'https://placehold.co/400x400/1a1a2e/ffffff?text=Naija',
  },
  {
    id: 8,
    title: 'New Releases',
    description: 'The latest and freshest animations added to the Anim8buddy catalog.',
    image: 'https://placehold.co/400x400/ff6b35/ffffff?text=New',
  },
]

function Collections() {
  const trackRef = useRef(null)

  return (
    <section className="collections">
      <div className="collections-header">
        <h2 className="collections-title">Movie Collections</h2>
        <p className="collections-subtitle">Browse our curated bundles — download or order on a flash drive.</p>
      </div>

      <div className="collections-viewport">
        <div className="collections-track" ref={trackRef}>
          {[...collections, ...collections].map((item, index) => (
            <div className="collection-card" key={index}>
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-overlay">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collections