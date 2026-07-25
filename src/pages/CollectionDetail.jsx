import React, { useState, useEffect } from 'react'
import { getMoviePoster } from '../tmdb'
import './CollectionDetail.css'

const collections = {
  barbie: {
    name: 'Barbie Collection',
    color: '#e91e8c',
    heroTitle: 'Barbie',
    heroSubtitle: 'The complete animated Barbie movie collection',
    movies: [
      { title: 'Barbie in the Nutcracker', year: 2001, size: 700 },
      { title: 'Barbie as Rapunzel', year: 2002, size: 700 },
      { title: 'Barbie of Swan Lake', year: 2003, size: 700 },
      { title: 'Barbie as the Princess and the Pauper', year: 2004, size: 700 },
      { title: 'Barbie: Fairytopia', year: 2005, size: 700 },
      { title: 'Barbie and the Magic of Pegasus', year: 2005, size: 700 },
      { title: 'Barbie Fairytopia: Mermaidia', year: 2006, size: 700 },
      { title: 'The Barbie Diaries', year: 2006, size: 700 },
      { title: 'Barbie in the 12 Dancing Princesses', year: 2006, size: 700 },
      { title: 'Barbie Fairytopia: Magic of the Rainbow', year: 2007, size: 700 },
      { title: 'Barbie as the Island Princess', year: 2007, size: 700 },
      { title: 'Barbie: Mariposa', year: 2008, size: 700 },
      { title: 'Barbie & the Diamond Castle', year: 2008, size: 700 },
      { title: 'Barbie in A Christmas Carol', year: 2008, size: 700 },
      { title: 'Barbie Presents: Thumbelina', year: 2009, size: 700 },
      { title: 'Barbie and the Three Musketeers', year: 2009, size: 700 },
      { title: 'Barbie in a Mermaid Tale', year: 2010, size: 700 },
      { title: 'Barbie: A Fashion Fairytale', year: 2010, size: 700 },
      { title: 'Barbie: A Fairy Secret', year: 2011, size: 700 },
      { title: 'Barbie: Princess Charm School', year: 2011, size: 700 },
      { title: 'Barbie: A Perfect Christmas', year: 2011, size: 700 },
      { title: 'Barbie in a Mermaid Tale 2', year: 2012, size: 700 },
      { title: 'Barbie: The Princess & the Popstar', year: 2012, size: 700 },
      { title: 'Barbie in the Pink Shoes', year: 2013, size: 700 },
      { title: 'Barbie: Mariposa & the Fairy Princess', year: 2013, size: 700 },
      { title: 'Barbie & Her Sisters in a Pony Tale', year: 2013, size: 700 },
      { title: 'Barbie: The Pearl Princess', year: 2014, size: 700 },
      { title: 'Barbie and the Secret Door', year: 2014, size: 700 },
      { title: 'Barbie in Princess Power', year: 2015, size: 700 },
      { title: "Barbie in Rock 'N Royals", year: 2015, size: 700 },
      { title: 'Barbie & Her Sisters in the Great Puppy Adventure', year: 2015, size: 700 },
      { title: 'Barbie: Spy Squad', year: 2016, size: 700 },
      { title: 'Barbie: Star Light Adventure', year: 2016, size: 700 },
      { title: 'Barbie & Her Sisters in a Puppy Chase', year: 2016, size: 700 },
      { title: 'Barbie: Video Game Hero', year: 2017, size: 700 },
      { title: 'Barbie: Dolphin Magic', year: 2017, size: 700 },
      { title: 'Barbie Princess Adventure', year: 2020, size: 700 },
      { title: 'Barbie & Chelsea: The Lost Birthday', year: 2021, size: 700 },
      { title: 'Barbie: Big City, Big Dreams', year: 2021, size: 700 },
      { title: 'Barbie: Mermaid Power', year: 2022, size: 700 },
      { title: 'Barbie: Epic Road Trip', year: 2022, size: 700 },
      { title: 'Barbie: Skipper and the Big Babysitting Adventure', year: 2023, size: 700 },
      { title: 'Barbie & Stacie to the Rescue', year: 2024, size: 700 },
      { title: 'Barbie and Teresa: Recipe for Friendship', year: 2025, size: 700 },
    ],
  },
  onepiece: {
    name: 'One Piece Collection',
    color: '#ff6b35',
    heroTitle: 'One Piece',
    heroSubtitle: 'All One Piece movies in one legendary collection',
    movies: [
      { title: 'One Piece: The Movie', year: 2000, size: 700 },
      { title: 'One Piece: Clockwork Island Adventure', year: 2001, size: 700 },
      { title: "One Piece: Chopper's Kingdom on the Island of Strange Animals", year: 2002, size: 700 },
      { title: 'One Piece: Dead End Adventure', year: 2003, size: 700 },
      { title: 'One Piece: The Cursed Holy Sword', year: 2004, size: 700 },
      { title: 'One Piece: Baron Omatsuri and the Secret Island', year: 2005, size: 700 },
      { title: 'One Piece: Giant Mecha Soldier of Karakuri Castle', year: 2006, size: 700 },
      { title: 'One Piece: The Desert Princess and the Pirates: Adventures in Alabasta', year: 2007, size: 700 },
      { title: 'One Piece: Episode of Chopper Plus: Bloom in the Winter, Miracle Cherry Blossom', year: 2008, size: 700 },
      { title: 'One Piece Film: Strong World', year: 2009, size: 700 },
      { title: 'One Piece 3D: Straw Hat Chase', year: 2011, size: 700 },
      { title: 'One Piece Film: Z', year: 2012, size: 700 },
      { title: 'One Piece Film: Gold', year: 2016, size: 700 },
      { title: 'One Piece: Stampede', year: 2019, size: 700 },
      { title: 'One Piece Film: Red', year: 2022, size: 700 },
    ],
  },
  marvel: {
    name: 'Marvel Collection',
    color: '#e23636',
    heroTitle: 'Marvel',
    heroSubtitle: 'The complete Marvel animated universe',
    movies: [
      { title: 'Ultimate Avengers: The Movie', year: 2006, size: 700 },
      { title: 'Ultimate Avengers 2: Rise of the Panther', year: 2006, size: 700 },
      { title: 'The Invincible Iron Man', year: 2007, size: 700 },
      { title: 'Doctor Strange: The Sorcerer Supreme', year: 2007, size: 700 },
      { title: 'Next Avengers: Heroes of Tomorrow', year: 2008, size: 700 },
      { title: 'Hulk Vs.', year: 2009, size: 700 },
      { title: 'Planet Hulk', year: 2010, size: 700 },
      { title: 'Thor: Tales of Asgard', year: 2011, size: 700 },
      { title: 'Iron Man: Rise of Technovore', year: 2013, size: 700 },
      { title: 'Iron Man & Hulk: Heroes United', year: 2013, size: 700 },
      { title: 'Avengers Confidential: Black Widow & Punisher', year: 2014, size: 700 },
      { title: 'Iron Man & Captain America: Heroes United', year: 2014, size: 700 },
      { title: 'Marvel Super Hero Adventures: Frost Fight!', year: 2015, size: 700 },
      { title: 'Hulk: Where Monsters Dwell', year: 2016, size: 700 },
      { title: 'Marvel Rising: Secret Warriors', year: 2018, size: 700 },
      { title: 'Marvel Rising: Chasing Ghosts', year: 2019, size: 700 },
      { title: 'Marvel Rising: Heart of Iron', year: 2019, size: 700 },
      { title: 'Marvel Rising: Battle of the Bands', year: 2019, size: 700 },
      { title: 'Marvel Rising: Operation Shuri', year: 2019, size: 700 },
      { title: 'Marvel Rising: Playing with Fire', year: 2019, size: 700 },
      { title: 'Spider-Man: Into the Spider-Verse', year: 2018, size: 700 },
      { title: 'Spider-Man: Across the Spider-Verse', year: 2023, size: 700 },
    ],
  },
  dc: {
    name: 'DC Collection',
    color: '#0074e8',
    heroTitle: 'DC',
    heroSubtitle: 'The complete DC animated universe',
    movies: [
      { title: 'Batman: Mask of the Phantasm', year: 1993, size: 700 },
      { title: 'Batman & Mr. Freeze: SubZero', year: 1998, size: 700 },
      { title: 'Batman Beyond: Return of the Joker', year: 2000, size: 700 },
      { title: 'Batman: Mystery of the Batwoman', year: 2003, size: 700 },
      { title: 'Superman: Brainiac Attacks', year: 2006, size: 700 },
      { title: 'Justice League: The New Frontier', year: 2008, size: 700 },
      { title: 'Batman: Gotham Knight', year: 2008, size: 700 },
      { title: 'Wonder Woman', year: 2009, size: 700 },
      { title: 'Green Lantern: First Flight', year: 2009, size: 700 },
      { title: 'Superman/Batman: Public Enemies', year: 2009, size: 700 },
      { title: 'Justice League: Crisis on Two Earths', year: 2010, size: 700 },
      { title: 'Batman: Under the Red Hood', year: 2010, size: 700 },
      { title: 'Superman/Batman: Apocalypse', year: 2010, size: 700 },
      { title: 'All-Star Superman', year: 2011, size: 700 },
      { title: 'Green Lantern: Emerald Knights', year: 2011, size: 700 },
      { title: 'Batman: Year One', year: 2011, size: 700 },
      { title: 'Justice League: Doom', year: 2012, size: 700 },
      { title: 'Superman vs. The Elite', year: 2012, size: 700 },
      { title: 'Batman: The Dark Knight Returns – Part 1', year: 2012, size: 700 },
      { title: 'Batman: The Dark Knight Returns – Part 2', year: 2013, size: 700 },
      { title: 'Superman: Unbound', year: 2013, size: 700 },
      { title: 'Justice League: The Flashpoint Paradox', year: 2013, size: 700 },
      { title: 'Justice League: War', year: 2014, size: 700 },
      { title: 'Son of Batman', year: 2014, size: 700 },
      { title: 'Batman: Assault on Arkham', year: 2014, size: 700 },
      { title: 'Justice League: Throne of Atlantis', year: 2015, size: 700 },
      { title: 'Batman vs. Robin', year: 2015, size: 700 },
      { title: 'Justice League: Gods and Monsters', year: 2015, size: 700 },
      { title: 'Batman: Bad Blood', year: 2016, size: 700 },
      { title: 'Justice League vs. Teen Titans', year: 2016, size: 700 },
      { title: 'Batman: The Killing Joke', year: 2016, size: 700 },
      { title: 'Justice League Dark', year: 2017, size: 700 },
      { title: 'Teen Titans: The Judas Contract', year: 2017, size: 700 },
      { title: 'Batman and Harley Quinn', year: 2017, size: 700 },
      { title: 'Batman: Gotham by Gaslight', year: 2018, size: 700 },
      { title: 'Suicide Squad: Hell to Pay', year: 2018, size: 700 },
      { title: 'The Death of Superman', year: 2018, size: 700 },
      { title: 'Reign of the Supermen', year: 2019, size: 700 },
      { title: 'Justice League vs. the Fatal Five', year: 2019, size: 700 },
      { title: 'Batman: Hush', year: 2019, size: 700 },
      { title: 'Wonder Woman: Bloodlines', year: 2019, size: 700 },
      { title: 'Superman: Red Son', year: 2020, size: 700 },
      { title: 'Justice League Dark: Apokolips War', year: 2020, size: 700 },
      { title: 'Superman: Man of Tomorrow', year: 2020, size: 700 },
      { title: 'Batman: Death in the Family', year: 2020, size: 700 },
      { title: 'Justice Society: World War II', year: 2021, size: 700 },
      { title: 'Batman: The Long Halloween – Part One', year: 2021, size: 700 },
      { title: 'Batman: The Long Halloween – Part Two', year: 2021, size: 700 },
      { title: 'Injustice', year: 2021, size: 700 },
      { title: 'Catwoman: Hunted', year: 2022, size: 700 },
      { title: 'Green Lantern: Beware My Power', year: 2022, size: 700 },
      { title: 'Battle of the Super Sons', year: 2022, size: 700 },
      { title: 'Legion of Super-Heroes', year: 2023, size: 700 },
      { title: 'Batman: The Doom That Came to Gotham', year: 2023, size: 700 },
      { title: 'Justice League: Warworld', year: 2023, size: 700 },
      { title: 'Justice League: Crisis on Infinite Earths – Part One', year: 2024, size: 700 },
      { title: 'Justice League: Crisis on Infinite Earths – Part Two', year: 2024, size: 700 },
      { title: 'Justice League: Crisis on Infinite Earths – Part Three', year: 2024, size: 700 },
    ],
  },
  detectiveconan: {
    name: 'Detective Conan Collection',
    color: '#1a1a2e',
    heroTitle: 'Detective Conan',
    heroSubtitle: 'Every Detective Conan movie from the very beginning',
    movies: [
      { title: 'Detective Conan: The Time-Bombed Skyscraper', year: 1997, size: 700 },
      { title: 'Detective Conan: The Fourteenth Target', year: 1998, size: 700 },
      { title: 'Detective Conan: The Last Wizard of the Century', year: 1999, size: 700 },
      { title: 'Detective Conan: Captured in Her Eyes', year: 2000, size: 700 },
      { title: 'Detective Conan: Countdown to Heaven', year: 2001, size: 700 },
      { title: 'Detective Conan: The Phantom of Baker Street', year: 2002, size: 700 },
      { title: 'Detective Conan: Crossroad in the Ancient Capital', year: 2003, size: 700 },
      { title: 'Detective Conan: Magician of the Silver Sky', year: 2004, size: 700 },
      { title: "Detective Conan: Strategy Above the Depths", year: 2005, size: 700 },
      { title: "Detective Conan: The Private Eyes' Requiem", year: 2006, size: 700 },
      { title: 'Detective Conan: Jolly Roger in the Deep Azure', year: 2007, size: 700 },
      { title: 'Detective Conan: Full Score of Fear', year: 2008, size: 700 },
      { title: 'Detective Conan: The Raven Chaser', year: 2009, size: 700 },
      { title: 'Detective Conan: The Lost Ship in the Sky', year: 2010, size: 700 },
      { title: 'Detective Conan: Quarter of Silence', year: 2011, size: 700 },
      { title: 'Detective Conan: The Eleventh Striker', year: 2012, size: 700 },
      { title: 'Detective Conan: Private Eye in the Distant Sea', year: 2013, size: 700 },
      { title: 'Detective Conan: Dimensional Sniper', year: 2014, size: 700 },
      { title: 'Detective Conan: Sunflowers of Inferno', year: 2015, size: 700 },
      { title: 'Detective Conan: The Darkest Nightmare', year: 2016, size: 700 },
      { title: 'Detective Conan: Crimson Love Letter', year: 2017, size: 700 },
      { title: 'Detective Conan: Zero the Enforcer', year: 2018, size: 700 },
      { title: 'Detective Conan: The Fist of Blue Sapphire', year: 2019, size: 700 },
      { title: 'Detective Conan: The Scarlet Bullet', year: 2021, size: 700 },
      { title: 'Detective Conan: The Bride of Halloween', year: 2022, size: 700 },
      { title: 'Detective Conan: Black Iron Submarine', year: 2023, size: 700 },
      { title: 'Detective Conan: The Million-dollar Pentagram', year: 2024, size: 700 },
      { title: 'Detective Conan: One-eyed Flashback', year: 2025, size: 700 },
      { title: 'Detective Conan: Fallen Angel Of The Highway', year: 2026, size: 700 },
    ],
  },
}

const flashDrives = [
  { size: '2GB', maxMB: 1800, price: '₦1,500' },
  { size: '8GB', maxMB: 7500, price: '₦2,500' },
  { size: '16GB', maxMB: 15000, price: '₦3,500' },
  { size: '32GB', maxMB: 30000, price: '₦5,000' },
  { size: '64GB', maxMB: 62000, price: '₦8,000' },
]

function getRequiredDrive(totalMB) {
  return flashDrives.find(d => d.maxMB >= totalMB) || flashDrives[flashDrives.length - 1]
}

function HeroImage({ title, year, color }) {
  const [poster, setPoster] = useState(null)

  useEffect(() => {
    const TMDB_API_KEY = '98215a8e51a12f3bb2d627e496673e31'
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(title)}&year=${year}`)
      .then(r => r.json())
      .then(data => {
        if (data.results && data.results.length > 0 && data.results[0].backdrop_path) {
          setPoster(`https://image.tmdb.org/t/p/original${data.results[0].backdrop_path}`)
        }
      })
  }, [])

  return (
    <div className="cd-hero" style={{ background: color }}>
      {poster && <img src={poster} alt={title} className="cd-hero-img" />}
    </div>
  )
}

function CollectionDetail({ collectionKey, setPage }) {
  const collection = collections[collectionKey]
  const [selected, setSelected] = useState({})

  if (!collection) return null

  const toggleMovie = (index) => {
    setSelected(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const selectedMovies = collection.movies.filter((_, i) => selected[i])
  const totalMB = selectedMovies.reduce((sum, m) => sum + m.size, 0)
  const totalGB = (totalMB / 1000).toFixed(1)
  const requiredDrive = getRequiredDrive(totalMB)
  const selectedCount = selectedMovies.length

  return (
    <div className="collection-detail">
      <HeroImage
        title={collection.movies[0].title}
        year={collection.movies[0].year}
        color={collection.color}
      />

      <div className="cd-hero-overlay">
        <button className="cd-back-btn" onClick={() => setPage('home')}>← Back</button>
        <h1 className="cd-title" style={{ color: collection.color }}>{collection.heroTitle}</h1>
        <p className="cd-subtitle">{collection.heroSubtitle}</p>
        <p className="cd-count">{collection.movies.length} movies available</p>
      </div>

      <div className="cd-content">
        <div className="cd-instructions">
          <h2>Select your movies</h2>
          <p>Tick the movies you want on your flash drive. The size and drive requirement will update automatically.</p>
        </div>

        <div className="cd-list">
          {collection.movies.map((movie, index) => (
            <div
              key={index}
              className={`cd-item ${selected[index] ? 'selected' : ''}`}
              onClick={() => toggleMovie(index)}
            >
              <div className="cd-checkbox">
                {selected[index] && <span className="cd-check">✓</span>}
              </div>
              <div className="cd-item-info">
                <span className="cd-item-title">{movie.title}</span>
                <span className="cd-item-year">{movie.year}</span>
              </div>
              <span className="cd-item-size">~{movie.size}MB</span>
            </div>
          ))}
        </div>

        {selectedCount > 0 && (
          <div className="cd-summary">
            <h2 className="cd-summary-title">Your Selection</h2>
            <div className="cd-summary-row">
              <span>Movies selected</span>
              <strong>{selectedCount}</strong>
            </div>
            <div className="cd-summary-row">
              <span>Total size</span>
              <strong>{totalGB}GB</strong>
            </div>
            <div className="cd-summary-divider" />
            <div className="cd-summary-row">
              <span>Recommended flash drive</span>
              <strong style={{ color: collection.color }}>{requiredDrive.size}</strong>
            </div>
            <div className="cd-summary-row">
              <span>Flash drive cost</span>
              <strong>{requiredDrive.price}</strong>
            </div>
            <div className="cd-summary-note">
              Shipping fee will be calculated at checkout based on your location.
            </div>
            <button className="cd-order-btn" style={{ background: collection.color }}>
              Proceed to Order
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CollectionDetail