import React from 'react'
import StudioPage from '../components/StudioPage'

const movies = [
  { title: 'Toy Story', year: 1995, description: 'A cowboy doll is threatened when a new spaceman toy arrives in the bedroom.' },
  { title: "A Bug's Life", year: 1998, description: 'A misfit ant recruits a troupe of circus bugs to help fight off grasshoppers.' },
  { title: 'Toy Story 2', year: 1999, description: 'Woody is stolen by a toy collector and Buzz leads the toys on a rescue mission.' },
  { title: 'Monsters, Inc.', year: 2001, description: 'Monsters who scare children for power discover a little girl is not scary at all.' },
  { title: 'Finding Nemo', year: 2003, description: 'An overprotective clownfish searches the entire ocean for his missing son.' },
  { title: 'The Incredibles', year: 2004, description: 'A family of superheroes living in secret is forced back into action.' },
  { title: 'Cars', year: 2006, description: 'A hotshot race car gets stranded in a small town and learns what matters most.' },
  { title: 'Ratatouille', year: 2007, description: 'A rat with a passion for cooking teams up with a young chef in Paris.' },
  { title: 'WALL·E', year: 2008, description: 'A waste-collecting robot falls in love and helps save humanity from extinction.' },
  { title: 'Up', year: 2009, description: 'An elderly widower flies his house to South America using thousands of balloons.' },
  { title: 'Toy Story 3', year: 2010, description: 'The toys end up at a daycare centre as Andy prepares to leave for college.' },
  { title: 'Cars 2', year: 2011, description: 'Lightning McQueen and Mater head to Japan for the World Grand Prix.' },
  { title: 'Brave', year: 2012, description: 'A Scottish princess must break a spell she accidentally placed on her mother.' },
  { title: 'Monsters University', year: 2013, description: 'Young Mike and Sulley meet at university where they start as rivals.' },
  { title: 'Inside Out', year: 2015, description: 'The emotions inside a young girl\'s head struggle when her family moves cities.' },
  { title: 'The Good Dinosaur', year: 2015, description: 'In a world where dinosaurs never went extinct, one befriends a human boy.' },
  { title: 'Finding Dory', year: 2016, description: 'Dory searches for her long-lost parents with help from Nemo and Marlin.' },
  { title: 'Cars 3', year: 2017, description: 'Lightning McQueen faces a new generation of faster racers threatening his career.' },
  { title: 'Coco', year: 2017, description: 'A young boy travels to the Land of the Dead to find his great-great-grandfather.' },
  { title: 'Incredibles 2', year: 2018, description: 'Helen is called on to lead a campaign to bring superheroes back to the public.' },
  { title: 'Toy Story 4', year: 2019, description: 'Woody embarks on a road trip with old and new friends including a spork.' },
  { title: 'Onward', year: 2020, description: 'Two elf brothers embark on a magical quest to spend one day with their late father.' },
  { title: 'Soul', year: 2020, description: 'A musician falls into the Great Before and discovers the meaning of life.' },
  { title: 'Luca', year: 2021, description: 'A sea monster boy spends a summer on the Italian Riviera with a new friend.' },
  { title: 'Turning Red', year: 2022, description: 'A thirteen-year-old girl transforms into a giant red panda when she gets excited.' },
  { title: 'Lightyear', year: 2022, description: 'The origin story of the real Buzz Lightyear who inspired the toy.' },
  { title: 'Elemental', year: 2023, description: 'In a city where fire, water, land and air residents coexist, two meet unexpectedly.' },
  { title: 'Inside Out 2', year: 2024, description: 'New emotions arrive in Riley\'s mind as she navigates the challenges of adolescence.' },
  { title: 'Elio', year: 2025, description: 'A boy is beamed up to an alien community and must represent all of humanity.' },
  { title: 'Hoppers', year: 2026, description: 'An upcoming Pixar adventure.' },
  { title: 'Toy Story 5', year: 2026, description: 'The beloved toys return for another adventure.' },
]

function PixarPage() {
  return <StudioPage name="Pixar" color="#00a8e0" movies={movies} />
}

export default PixarPage