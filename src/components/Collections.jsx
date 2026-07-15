import React, { useRef } from 'react'
import './Collections.css'

const collections = [
  { id: 1, title: 'Marvel', description: 'Earth\'s mightiest animated heroes assembled in one collection.', image: 'https://placehold.co/400x400/e23636/ffffff?text=Marvel' },
  { id: 2, title: 'DC', description: 'The animated universe of Batman, Superman, Wonder Woman and more.', image: 'https://placehold.co/400x400/0074e8/ffffff?text=DC' },
  { id: 3, title: 'Barbie', description: 'Magical adventures with the most iconic doll in the world.', image: 'https://placehold.co/400x400/e91e8c/ffffff?text=Barbie' },
  { id: 4, title: 'Scooby-Doo', description: 'Mystery Inc. solves spooky cases in this classic cartoon series.', image: 'https://placehold.co/400x400/4caf50/ffffff?text=Scooby-Doo' },
  { id: 5, title: 'Detective Conan', description: 'A teenage detective shrunk to a child solves impossible mysteries.', image: 'https://placehold.co/400x400/1a1a2e/ffffff?text=Conan' },
  { id: 6, title: 'Dragon Ball', description: 'Goku and friends fight to protect Earth from powerful enemies.', image: 'https://placehold.co/400x400/ff9800/ffffff?text=Dragon+Ball' },
  { id: 7, title: 'Tom and Jerry', description: 'The ultimate cat and mouse rivalry in classic cartoon form.', image: 'https://placehold.co/400x400/e23636/ffffff?text=Tom+%26+Jerry' },
  { id: 8, title: 'One Piece', description: 'Luffy and his crew sail the Grand Line in search of the One Piece.', image: 'https://placehold.co/400x400/ff6b35/ffffff?text=One+Piece' },
  { id: 9, title: 'Lupin', description: 'The world\'s greatest thief goes on stylish heists across the globe.', image: 'https://placehold.co/400x400/1a1a2e/ffffff?text=Lupin' },
  { id: 10, title: 'Doraemon', description: 'A robotic cat from the future helps a young boy with magical gadgets.', image: 'https://placehold.co/400x400/0074e8/ffffff?text=Doraemon' },
  { id: 11, title: 'Pokémon', description: 'Ash and Pikachu travel the world to become Pokémon masters.', image: 'https://placehold.co/400x400/ffcc00/1a1a2e?text=Pokemon' },
]

function Collections() {
  const trackRef = useRef(null)

  return (
    <section className="collections">
      <div className="collections-header">
        <h2 className="collections-title">Toonz Collections</h2>
        <p className="collections-subtitle">Browse our curated bundles — download or order on a flash drive.</p>
      </div>
      <div className="collections-viewport">
        <div className="collections-track" ref={trackRef}>
          {collections.map((item) => (
            <div className="collection-card" key={item.id}>
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