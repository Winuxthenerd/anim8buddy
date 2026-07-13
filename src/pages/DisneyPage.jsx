import React from 'react'
import StudioPage from '../components/StudioPage'

const movies = [
  { title: 'Fantasia 2000', year: 2000, description: 'A sequel to the 1940 classic featuring new animated segments set to classical music.' },
  { title: "The Emperor's New Groove", year: 2000, description: 'A selfish emperor is transformed into a llama by his conniving advisor.' },
  { title: "Atlantis: The Lost Empire", year: 2001, description: 'A young linguist joins an expedition to find the legendary lost continent.' },
  { title: 'Lilo & Stitch', year: 2002, description: 'A lonely Hawaiian girl adopts an alien experiment and calls it a dog.' },
  { title: 'Treasure Planet', year: 2002, description: 'A futuristic retelling of Treasure Island set in outer space.' },
  { title: 'Brother Bear', year: 2003, description: 'A young hunter is magically transformed into a bear.' },
  { title: 'Home on the Range', year: 2004, description: 'Three cows set out to catch a cattle rustler and save their farm.' },
  { title: 'Chicken Little', year: 2005, description: 'A young chicken must save the Earth from an alien invasion.' },
  { title: 'Meet the Robinsons', year: 2007, description: 'A young inventor travels to the future and meets a quirky family.' },
  { title: 'Bolt', year: 2008, description: 'A TV dog star believes his superpowers are real and goes on an adventure.' },
  { title: 'The Princess and the Frog', year: 2009, description: 'A young woman in 1920s New Orleans is turned into a frog by a spell.' },
  { title: 'Tangled', year: 2010, description: 'A princess with magical hair escapes her tower with a charming thief.' },
  { title: 'Winnie the Pooh', year: 2011, description: 'Pooh and friends embark on a quest to find Eeyore a new tail.' },
  { title: 'Wreck-It Ralph', year: 2012, description: 'A video game villain wants to be a hero and sets off on an adventure.' },
  { title: 'Frozen', year: 2013, description: 'A fearless princess sets off on an epic journey to find her estranged sister.' },
  { title: 'Big Hero 6', year: 2014, description: 'A boy and his inflatable robot become unlikely superheroes.' },
  { title: 'Zootopia', year: 2016, description: 'In a city of animals, a bunny cop and a con fox uncover a conspiracy.' },
  { title: 'Moana', year: 2016, description: 'A Polynesian girl sets sail across the ocean to save her people.' },
  { title: 'Ralph Breaks the Internet', year: 2018, description: 'Ralph and Vanellope venture into the internet to find a replacement part.' },
  { title: 'Frozen II', year: 2019, description: 'Elsa sets off to discover the origin of her ice powers.' },
  { title: 'Raya and the Last Dragon', year: 2021, description: 'A lone warrior seeks the last dragon to restore her fractured land.' },
  { title: 'Encanto', year: 2021, description: 'A Colombian family blessed with magical gifts discovers one child has none.' },
  { title: 'Strange World', year: 2022, description: 'A family of explorers ventures into an uncharted and treacherous land.' },
  { title: 'Wish', year: 2023, description: 'A young girl makes a wish so powerful it summons a star to help her.' },
  { title: 'Moana 2', year: 2024, description: 'Moana embarks on a new voyage across the far seas of Oceania.' },
  { title: 'Zootopia 2', year: 2025, description: 'Judy and Nick return for a brand new adventure in the animal city.' },
]

function DisneyPage() {
  return <StudioPage name="Disney" color="#0057b8" movies={movies} />
}

export default DisneyPage