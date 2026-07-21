import React, { useEffect, useRef, useState } from 'react'
import './Collections.css'

const collections = [
  { id: 1, title: 'Marvel', description: 'Earth\'s mightiest animated heroes assembled.', searchTitle: 'Spider-Man Into the Spider-Verse', searchYear: 2018, color: '#e23636' },
  { id: 2, title: 'DC', description: 'Batman, Superman, Wonder Woman and more.', searchTitle: 'Batman The Dark Knight Returns', searchYear: 2012, color: '#0074e8' },
  { id: 3, title: 'Barbie', description: 'Magical adventures with the most iconic doll.', searchTitle: 'Barbie A Fashion Fairytale', searchYear: 2010, color: '#e91e8c' },
  { id: 4, title: 'Scooby-Doo', description: 'Mystery Inc. solves spooky cases.', searchTitle: 'Scoob', searchYear: 2020, color: '#4caf50' },
  { id: 5, title: 'Detective Conan', description: 'A teenage detective shrunk to a child.', searchTitle: 'Detective Conan', searchYear: 1996, color: '#1a1a2e' },
  { id: 6, title: 'Dragon Ball', description: 'Goku fights to protect Earth.', searchTitle: 'Dragon Ball Super Broly', searchYear: 2018, color: '#ff9800' },
  { id: 7, title: 'Tom and Jerry', description: 'The ultimate cat and mouse rivalry.', searchTitle: 'Tom and Jerry', searchYear: 2021, color: '#e23636' },
  { id: 8, title: 'One Piece', description: 'Luffy sails in search of the One Piece.', searchTitle: 'One Piece Film Red', searchYear: 2022, color: '#ff6b35' },
  { id: 9, title: 'Lupin', description: 'The world\'s greatest thief on stylish heists.', searchTitle: 'Lupin III The First', searchYear: 2019, color: '#1a1a2e' },
  { id: 10, title: 'Doraemon', description: 'A robotic cat from the future.', searchTitle: 'Stand by Me Doraemon', searchYear: 2014, color: '#0074e8' },
  { id: 11, title: 'Pokémon', description: 'Ash and Pikachu become Pokémon masters.', searchTitle: 'Pokemon Detective Pikachu', searchYear: 2019, color: '#ffcc00' },
]

const TMDB_API_KEY = '98215a8e51a12f3bb2d627e496673e31'
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500'

function CollectionCard({ item }) {
  const [poster, setPoster] = useState(null)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(item.searchTitle)}&year=${item.searchYear}`)
      .then(res => res.json())
      .then(data => {
        if (data.results && data.results.length > 0 && data.results[0].poster_path) {
          setPoster(`${TMDB_IMAGE_BASE}${data.results[0].poster_path}`)
        }
      })
      .catch(() => {})
  }, [item])

  return (
    <div className="collection-card">
      {poster
        ? <img src={poster} alt={item.title} className="card-image" />
        : <div className="card-image" style={{ background: item.color }} />
      }
      <div className="card-overlay">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-desc">{item.description}</p>
      </div>
    </div>
  )
}

function Collections() {
  const viewportRef = useRef(null)

  return (
    <section className="collections">
      <div className="collections-header">
        <h2 className="collections-title">Toonz Collections</h2>
        <p className="collections-subtitle">Browse our curated bundles — download or order on a flash drive.</p>
      </div>
      <div className="collections-viewport" ref={viewportRef}>
        <div className="collections-track">
          {collections.map((item) => (
            <CollectionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collections