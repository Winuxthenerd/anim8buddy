import React from 'react'
import StudioPage from '../components/StudioPage'

const movies = [
  { title: 'Klaus', year: 2019, description: 'A postman and a toymaker form an unlikely friendship that gives birth to Santa Claus.' },
  { title: 'I Lost My Body', year: 2019, description: 'A severed hand escapes from a lab and sets off across Paris to find its owner.' },
  { title: 'The Willoughbys', year: 2020, description: 'Four old-fashioned children decide to send their selfish parents away on vacation.' },
  { title: 'Over the Moon', year: 2020, description: 'A girl builds a rocket ship to visit the Moon goddess and prove she exists.' },
  { title: 'A Shaun the Sheep Movie: Farmageddon', year: 2020, description: 'Shaun the Sheep befriends an alien visitor who needs help getting back home.' },
  { title: 'Wish Dragon', year: 2021, description: 'A college student finds a magic teapot containing a dragon that grants wishes.' },
  { title: 'Robin Robin', year: 2021, description: 'A robin raised by mice tries to fit in while discovering her true nature.' },
  { title: 'Back to the Outback', year: 2021, description: 'A group of dangerous animals escape a wildlife park to find a better life.' },
  { title: 'Vivo', year: 2021, description: 'A music-loving kinkajou travels to Miami to deliver a love song.' },
  { title: 'The Sea Beast', year: 2022, description: 'A legendary sea monster hunter takes an unexpected young stowaway on his voyage.' },
  { title: 'The Magician\'s Elephant', year: 2023, description: 'A young orphan follows a series of impossible clues to find his long-lost sister.' },
  { title: 'Nimona', year: 2023, description: 'A knight accused of a crime teams up with a shape-shifting girl to clear his name.' },
  { title: 'Leo', year: 2023, description: 'A 74-year-old lizard escapes from a classroom to experience life outside.' },
  { title: 'Orion and the Dark', year: 2024, description: 'A boy who is afraid of the dark befriends the actual embodiment of darkness.' },
  { title: 'Thelma the Unicorn', year: 2024, description: 'A pony becomes a famous unicorn but discovers fame is not all she dreamed of.' },
  { title: 'Ultraman: Rising', year: 2024, description: 'A baseball star must balance his career with secretly being the hero Ultraman.' },
  { title: 'Spellbound', year: 2024, description: 'A girl must break the spell that has divided her magical kingdom in two.' },
  { title: 'Wallace & Gromit: Vengeance Most Fowl', year: 2025, description: 'Wallace and Gromit face their most cunning enemy yet in a fiendish plot.' },
  { title: 'In Your Dreams', year: 2025, description: 'An animated adventure exploring the world of dreams and imagination.' },
  { title: 'Fixed', year: 2025, description: 'A dog scheduled to be neutered has one last wild day before his appointment.' },
  { title: 'Pookoo', year: 2026, description: 'An upcoming Netflix animated adventure.' },
]

function NetflixPage() {
  return <StudioPage name="Netflix" color="#e50914" movies={movies} />
}

export default NetflixPage