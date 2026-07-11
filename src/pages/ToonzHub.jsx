import React, { useRef, useEffect } from 'react'
import './ToonzHub.css'

const studios = [
  {
    name: 'Pixar',
    movies: [
      { title: 'Toy Story', description: 'A cowboy doll is threatened by a new spaceman figure.' },
      { title: 'Finding Nemo', description: 'A clownfish searches the ocean for his missing son.' },
      { title: 'The Incredibles', description: 'A family of superheroes tries to live a normal life.' },
      { title: 'Up', description: 'An old man flies his house to South America by balloon.' },
      { title: 'Inside Out', description: "The emotions inside a girl's head come to life." },
      { title: 'Coco', description: 'A boy visits the land of the dead to find his great-great-grandfather.' },
    ],
  },
  {
    name: 'Disney',
    movies: [
      { title: 'The Lion King', description: "A young lion prince flees his kingdom after his father's murder." },
      { title: 'Aladdin', description: 'A street rat finds a magic lamp and falls for a princess.' },
      { title: 'Moana', description: 'A Polynesian girl sets sail to save her people.' },
      { title: 'Frozen', description: 'A princess sets off to find her sister whose icy powers trap their kingdom.' },
      { title: 'Mulan', description: "A young woman disguises herself as a man to take her father's place in the army." },
      { title: 'Encanto', description: 'A Colombian family discovers one child has no magical gift.' },
    ],
  },
  {
    name: 'Netflix',
    movies: [
      { title: 'Klaus', description: 'A postman and a toymaker form an unlikely friendship in the far north.' },
      { title: 'The Mitchells vs the Machines', description: 'A quirky family must save the world from a robot uprising.' },
      { title: 'Arcane', description: 'Two sisters fight on opposite sides of a war between two cities.' },
      { title: 'Over the Moon', description: 'A girl builds a rocket ship to visit the Moon goddess.' },
      { title: 'Wendell & Wild', description: 'Two demon brothers enlist a teenager to summon them to the land of the living.' },
      { title: 'Nimona', description: 'A knight and a shape-shifter team up to clear his name.' },
    ],
  },
  {
    name: 'Illumination',
    movies: [
      { title: 'Despicable Me', description: 'A supervillain adopts three girls as part of his evil plan.' },
      { title: 'Minions', description: 'The minions search for a new evil master to serve.' },
      { title: 'The Secret Life of Pets', description: 'Pets explore New York City while their owners are away.' },
      { title: 'Sing', description: 'A koala stages a singing competition to save his theatre.' },
      { title: 'The Bad Guys', description: 'A gang of animal criminals attempt to go straight.' },
      { title: 'Migration', description: 'A family of ducks embarks on an unexpected adventure.' },
    ],
  },
  {
    name: 'DreamWorks',
    movies: [
      { title: 'Shrek', description: 'An ogre goes on a quest to rescue a princess from a dragon.' },
      { title: 'Kung Fu Panda', description: 'A clumsy panda is chosen as a legendary warrior.' },
      { title: 'How to Train Your Dragon', description: 'A Viking boy befriends a dragon he was supposed to kill.' },
      { title: 'Madagascar', description: 'Zoo animals escape and find themselves stranded in Madagascar.' },
      { title: 'The Croods', description: 'A prehistoric family goes on a journey through a dangerous world.' },
      { title: 'Puss in Boots', description: 'The legendary outlaw cat goes on a journey before Shrek.' },
    ],
  },
]

function StudioRow({ studio }) {
  const viewportRef = useRef(null)
  const animationRef = useRef(null)
  const scrollPos = useRef(0)
  const isPaused = useRef(false)

  const repeated = [
    ...studio.movies,
    ...studio.movies,
    ...studio.movies,
    ...studio.movies,
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
    <div className="studio-section">
      <h2 className="studio-name">{studio.name}</h2>
      <div className="studio-viewport" ref={viewportRef}>
        <div className="studio-track">
          {repeated.map((movie, index) => (
            <div className="studio-card" key={index}>
              <div className="studio-card-image">
                <span className="card-placeholder-text">{movie.title}</span>
              </div>
              <div className="studio-card-info">
                <h3 className="studio-card-title">{movie.title}</h3>
                <p className="studio-card-desc">{movie.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ToonzHub() {
  return (
    <div className="toonzhub">
      <div className="toonzhub-header">
        <h1 className="toonzhub-title">ToonzHub</h1>
        <p className="toonzhub-subtitle">Browse movies and cartoons by studio — click any title to download.</p>
      </div>
      {studios.map((studio) => (
        <StudioRow key={studio.name} studio={studio} />
      ))}
    </div>
  )
}

export default ToonzHub