import React from 'react'
import StudioPage from '../components/StudioPage'

const movies = [
  { title: 'Titan A.E.', year: 2000, description: 'After Earth is destroyed, a young man holds the key to saving humanity.' },
  { title: 'Ice Age', year: 2002, description: 'Three prehistoric animals team up to return a human baby to his tribe.' },
  { title: "Garfield: A Tale of Two Kitties", year: 2006, description: 'Garfield travels to England and is mistaken for a royal cat.' },
  { title: "Everyone's Hero", year: 2006, description: 'A young boy goes on a cross-country adventure to return Babe Ruth\'s stolen bat.' },
  { title: 'Robots', year: 2005, description: 'A young robot inventor travels to the big city and takes on an evil corporation.' },
  { title: 'Ice Age: The Meltdown', year: 2006, description: 'The herd faces a new danger when the ice valley floods.' },
  { title: "Dr. Seuss' Horton Hears a Who!", year: 2008, description: 'Horton the elephant discovers a tiny world living on a speck of dust.' },
  { title: 'The Simpsons Movie', year: 2007, description: 'Homer causes an ecological disaster that threatens Springfield and the world.' },
  { title: 'Ice Age: Dawn of the Dinosaurs', year: 2009, description: 'The herd discovers a lost world of dinosaurs underground.' },
  { title: 'Fantastic Mr Fox', year: 2009, description: 'A fox and his family face three mean farmers who want them gone.' },
  { title: 'Rio', year: 2011, description: 'A domesticated macaw from Minnesota travels to Rio de Janeiro to meet a female.' },
  { title: 'Ice Age: Continental Drift', year: 2012, description: 'Manny, Diego and Sid are separated from the herd and must find their way back.' },
  { title: 'Epic', year: 2013, description: 'A teenage girl finds herself transported into a forest kingdom under attack.' },
  { title: 'Rio 2', year: 2014, description: 'Blu and his family leave the city and head into the Amazon jungle.' },
  { title: 'The Peanuts Movie', year: 2015, description: 'Charlie Brown embarks on a heroic quest while Snoopy faces his nemesis.' },
  { title: 'The Book of Life', year: 2014, description: 'A young man journeys through magical worlds to fulfil his true destiny.' },
  { title: 'Ice Age: Collision Course', year: 2016, description: 'Scrat\'s antics send an asteroid toward Earth and the herd must stop it.' },
  { title: 'Ferdinand', year: 2017, description: 'A giant bull with a big heart refuses to fight and must find his way home.' },
  { title: 'Spies in Disguise', year: 2019, description: 'A spy is turned into a pigeon by a scientist and must save the world.' },
  { title: "Ron's Gone Wrong", year: 2021, description: 'A socially awkward boy gets a malfunctioning robot who becomes his best friend.' },
  { title: "The Bob's Burgers Movie", year: 2022, description: 'The Belcher family must save the restaurant and solve a mystery over summer.' },
  { title: 'The Day the Earth Blew Up: A Looney Tunes Movie', year: 2025, description: 'Porky Pig and Daffy Duck must save the world from an alien invasion.' },
]

function TwentiethPage() {
  return <StudioPage name="20th Century" color="#333333" movies={movies} />
}

export default TwentiethPage