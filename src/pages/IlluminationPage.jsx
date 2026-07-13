import React from 'react'
import StudioPage from '../components/StudioPage'

const movies = [
  { title: 'Despicable Me', year: 2010, description: 'A supervillain adopts three orphan girls as part of his evil plan but grows to love them.' },
  { title: 'Hop', year: 2011, description: 'The Easter Bunny\'s son would rather be a rock drummer than deliver eggs.' },
  { title: "Dr. Seuss' The Lorax", year: 2012, description: 'A boy searches for a real tree in a plastic world and uncovers a dark secret.' },
  { title: 'Despicable Me 2', year: 2013, description: 'Gru is recruited by a secret agency to help stop a powerful new supervillain.' },
  { title: 'Minions', year: 2015, description: 'The minions travel back in time to find the most despicable master to serve.' },
  { title: 'The Secret Life of Pets', year: 2016, description: 'Pets left at home during the day live secret lives of their own.' },
  { title: 'Sing', year: 2016, description: 'A koala stages a singing competition to save his beloved theatre.' },
  { title: 'Despicable Me 3', year: 2017, description: 'Gru meets his twin brother and faces a new villain obsessed with the 1980s.' },
  { title: "Dr. Seuss' The Grinch", year: 2018, description: 'The Grinch plots to steal Christmas from the joyful residents of Whoville.' },
  { title: 'The Secret Life of Pets 2', year: 2019, description: 'Max and his friends face new adventures while their owners are away.' },
  { title: 'Sing 2', year: 2021, description: 'Buster Moon and his cast put on an epic show in a glittering entertainment city.' },
  { title: 'Minions: The Rise of Gru', year: 2022, description: 'A young Gru and his Minions take on a supervillain group in the 1970s.' },
  { title: 'The Super Mario Bros. Movie', year: 2023, description: 'Mario and Luigi are transported to a magical world and must save Princess Peach.' },
  { title: 'Migration', year: 2023, description: 'A family of ducks convinces their overprotective father to take a trip to Jamaica.' },
  { title: 'Despicable Me 4', year: 2024, description: 'Gru faces a new threat while adapting to life with a new baby.' },
  { title: 'The Cat in the Hat', year: 2026, description: 'An upcoming Illumination adaptation of the beloved Dr. Seuss classic.' },
  { title: 'Minions 3', year: 2026, description: 'The beloved yellow minions return for another adventure.' },
]

function IlluminationPage() {
  return <StudioPage name="Illumination" color="#f5a623" movies={movies} />
}

export default IlluminationPage