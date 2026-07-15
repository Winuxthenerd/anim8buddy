import React from 'react'
import MovieCard from '../components/MovieCard'
import './TopPicks.css'

const picks = [
  { title: 'The Angry Birds Movie', year: 2016 },
  { title: 'The Angry Birds Movie 2', year: 2019 },
  { title: 'Early Man', year: 2018 },
  { title: 'Flow', year: 2024 },
  { title: 'Luck', year: 2022 },
  { title: 'Corpse Bride', year: 2005 },
  { title: 'ParaNorman', year: 2012 },
  { title: 'The Polar Express', year: 2004 },
  { title: 'Monster House', year: 2006 },
  { title: 'The Adventures of Tintin', year: 2011 },
  { title: 'Kubo and the Two Strings', year: 2016 },
  { title: 'The Lego Movie', year: 2014 },
  { title: 'The Lego Movie 2: The Second Part', year: 2019 },
  { title: 'Smallfoot', year: 2018 },
  { title: 'DC League of Super-Pets', year: 2022 },
  { title: 'Storks', year: 2016 },
  { title: 'Chicken Run', year: 2000 },
  { title: 'Rango', year: 2011 },
  { title: 'Barnyard', year: 2006 },
]

function TopPicks() {
  return (
    <div className="toppicks">
      <div className="toppicks-header">
        <h1 className="toppicks-title">Top Picks</h1>
        <p className="toppicks-subtitle">Our favourite animations handpicked just for you.</p>
      </div>
      <div className="toppicks-grid">
        {picks.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            year={movie.year}
            color="#ff6b35"
          />
        ))}
      </div>
    </div>
  )
}

export default TopPicks