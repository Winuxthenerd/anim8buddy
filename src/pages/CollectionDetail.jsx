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
      { title: 'Barbie in the Nutcracker', year: 2001, size: 175 },
      { title: 'Barbie as Rapunzel', year: 2002, size: 160 },
      { title: 'Barbie of Swan Lake', year: 2003, size: 180 },
      { title: 'Barbie as the Princess and the Pauper', year: 2004, size: 162 },
      { title: 'Barbie: Fairytopia', year: 2005, size: 104 },
      { title: 'Barbie and the Magic of Pegasus', year: 2005, size: 186 },
      { title: 'Barbie Fairytopia: Mermaidia', year: 2006, size: 154 },
      { title: 'Barbie in the 12 Dancing Princesses', year: 2006, size: 159 },
      { title: 'Barbie Fairytopia: Magic of the Rainbow', year: 2007, size: 110 },
      { title: 'Barbie as the Island Princess', year: 2007, size: 173 },
      { title: 'Barbie: Mariposa', year: 2008, size: 378 },
      { title: 'Barbie & the Diamond Castle', year: 2008, size: 144 },
      { title: 'Barbie in A Christmas Carol', year: 2008, size: 146 },
      { title: 'Barbie and the Three Musketeers', year: 2009, size: 240 },
      { title: 'Barbie in a Mermaid Tale', year: 2010, size: 137 },
      { title: 'Barbie: Princess Charm School', year: 2011, size: 367 },
      { title: 'Barbie: A Perfect Christmas', year: 2011, size: 143 },
      { title: 'Barbie in a Mermaid Tale 2', year: 2012, size: 132 },
      { title: 'Barbie: The Princess & the Popstar', year: 2012, size: 196 },
      { title: 'Barbie in the Pink Shoes', year: 2013, size: 196 },
      { title: 'Barbie: Mariposa & her Butterfly Fairy Friends', year: 2013, size: 368 },
      { title: 'Barbie & Her Sisters in a Pony Tale', year: 2013, size: 193 },
      { title: 'Barbie: The Pearl Princess', year: 2014, size: 180 },
      { title: 'Barbie and the Secret Door', year: 2014, size: 208 },
      { title: 'Barbie in Princess Power', year: 2015, size: 209 },
      { title: "Barbie in Rock 'N Royals", year: 2015, size: 219 },
      { title: 'Barbie & Her Sisters in the Great Puppy Adventure', year: 2015, size: 154 },
      { title: 'Barbie: Spy Squad', year: 2016, size: 256 },
      { title: 'Barbie: Star Light Adventure', year: 2016, size: 160 },
      { title: 'Barbie & Her Sisters in a Puppy Chase', year: 2016, size: 260 },
      { title: 'Barbie: Video Game Hero', year: 2017, size: 247 },
      { title: 'Barbie: Dolphin Magic', year: 2017, size: 165 },
      { title: 'Barbie Princess Adventure', year: 2020, size: 192 },
      { title: 'Barbie & Chelsea: The Lost Birthday', year: 2021, size: 161 },
      { title: 'Barbie: Big City, Big Dreams', year: 2021, size: 176 },
      { title: 'Barbie: Mermaid Power', year: 2022, size: 217 },
      { title: 'Barbie: Epic Road Trip', year: 2022, size: 242 },
      { title: 'Barbie: Skipper and the Big Babysitting Adventure', year: 2023, size: 192 },
      { title: 'Barbie and Teresa: Recipe for Friendship', year: 2025, size: 251 },
      { title: 'My First Barbie: Happy Dream Day', year: 2023, size: 250}
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
      { title: 'Ultimate Avengers: The Movie', year: 2006, size: 143 },
      { title: 'Ultimate Avengers 2: Rise of the Panther', year: 2006, size: 337 },
      { title: 'The Invincible Iron Man', year: 2007, size: 203 },
      { title: 'Next Avengers: Heroes of Tomorrow', year: 2008, size: 367 },
      { title: 'Hulk Vs.', year: 2009, size: 132 },
      { title: 'Planet Hulk', year: 2010, size: 179 },
      { title: 'Thor: Tales of Asgard', year: 2011, size: 140 },
      { title: 'Iron Man: Rise of Technovore', year: 2013, size: 247 },
      { title: 'Iron Man & Hulk: Heroes United', year: 2013, size: 150 },
      { title: 'Avengers Confidential: Black Widow & Punisher', year: 2014, size: 173 },
      { title: 'Iron Man & Captain America: Heroes United', year: 2014, size: 289 },
      { title: 'Marvel Super Hero Adventures: Frost Fight!', year: 2015, size: 347 },
      { title: 'Hulk: Where Monsters Dwell', year: 2016, size: 219 },
      { title: 'Spider-Man: Into the Spider-Verse', year: 2018, size: 270 },
      { title: 'Spider-Man: Across the Spider-Verse', year: 2023, size: 389 },
    ],
  },
  dc: {
  name: 'DC Collection',
  color: '#0074e8',
  heroTitle: 'DC',
  heroSubtitle: 'The complete DC animated universe',
  movies: [
    { title: 'Batman: Mask of the Phantasm', year: 1993, size: 346 },
    { title: 'Batman & Mr. Freeze: SubZero', year: 1998, size: 300 },
    { title: 'Batman Beyond: Return of the Joker', year: 2000, size: 348 },
    { title: 'Batman: Mystery of the Batwoman', year: 2003, size: 340 },
    { title: 'Superman: Brainiac Attacks', year: 2006, size: 348 },
    { title: 'Justice League: The New Frontier', year: 2008, size: 345 },
    { title: 'Batman: Gotham Knight', year: 2008, size: 208 },
    { title: 'Wonder Woman', year: 2009, size: 344 },
    { title: 'Green Lantern: First Flight', year: 2009, size: 338 },
    { title: 'Justice League: Crisis on Two Earths', year: 2010, size: 213 },
    { title: 'Batman: Under the Red Hood', year: 2010, size: 214 },
    { title: 'Superman/Batman: Apocalypse', year: 2010, size: 136 },
    { title: 'All-Star Superman', year: 2011, size: 214 },
    { title: 'Green Lantern: Emerald Knights', year: 2011, size: 233 },
    { title: 'Batman: Year One', year: 2011, size: 294 },
    { title: 'Justice League: Doom', year: 2012, size: 211 },
    { title: 'Superman vs. The Elite', year: 2012, size: 209 },
    { title: 'Batman: The Dark Knight Returns – Part 1', year: 2012, size: 348 },
    { title: 'Batman: The Dark Knight Returns – Part 2', year: 2013, size: 209 },
    { title: 'Superman: Unbound', year: 2013, size: 211 },
    { title: 'Justice League: The Flashpoint Paradox', year: 2013, size: 231 },
    { title: 'Justice League: War', year: 2014, size: 225 },
    { title: 'Son of Batman', year: 2014, size: 206 },
    { title: 'Batman: Assault on Arkham', year: 2014, size: 216 },
    { title: 'Justice League: Throne of Atlantis', year: 2015, size: 197 },
    { title: 'Batman vs. Robin', year: 2015, size: 222 },
    { title: 'Justice League: Gods and Monsters', year: 2015, size: 212 },
    { title: 'Batman: Bad Blood', year: 2016, size: 204 },
    { title: 'Justice League vs. Teen Titans', year: 2016, size: 220 },
    { title: 'Batman: The Killing Joke', year: 2016, size: 212 },
    { title: 'Justice League Dark', year: 2017, size: 214 },
    { title: 'Teen Titans: The Judas Contract', year: 2017, size: 238 },
    { title: 'Batman and Harley Quinn', year: 2017, size: 209 },
    { title: 'Batman: Gotham by Gaslight', year: 2018, size: 226 },
    { title: 'Suicide Squad: Hell to Pay', year: 2018, size: 225 },
    { title: 'The Death of Superman', year: 2018, size: 222 },
    { title: 'Constantine: City of Demons', year: 2018, size: 161 },
    { title: 'The Death and Return of Superman', year: 2018, size: 286 },
    { title: 'Reign of the Supermen', year: 2019, size: 243 },
    { title: 'Justice League vs. the Fatal Five', year: 2019, size: 214 },
    { title: 'Batman: Hush', year: 2019, size: 151 },
    { title: 'Wonder Woman: Bloodlines', year: 2019, size: 127 },
    { title: 'Superman: Red Son', year: 2020, size: 139 },
    { title: 'Justice League Dark: Apokolips War', year: 2020, size: 190 },
    { title: 'Superman: Man of Tomorrow', year: 2020, size: 238 },
    { title: 'Batman: Death in the Family', year: 2020, size: 217 },
    { title: 'Deathstroke: Knights and Dragons', year: 2020, size: 237 },
    { title: 'Justice Society: World War II', year: 2021, size: 291 },
    { title: 'Batman: The Long Halloween – Part One', year: 2021, size: 153 },
    { title: 'Batman: The Long Halloween – Part Two', year: 2021, size: 243 },
    { title: 'Injustice', year: 2021, size: 172 },
    { title: 'Batman Soul of the Dragon', year: 2021, size: 263 },
    { title: 'Catwoman: Hunted', year: 2022, size: 342 },
    { title: 'Green Lantern: Beware My Power', year: 2022, size: 245 },
    { title: 'Batman and Superman: Battle of the Super Sons', year: 2022, size: 230 },
    { title: 'Legion of Super-Heroes', year: 2023, size: 208 },
    { title: 'Batman: The Doom That Came to Gotham', year: 2023, size: 254 },
    { title: 'Justice League: Warworld', year: 2023, size: 191 },
    { title: 'Justice League: Crisis on Infinite Earths – Part One', year: 2024, size: 241 },
    { title: 'Justice League: Crisis on Infinite Earths – Part Two', year: 2024, size: 211 },
    { title: 'Justice League: Crisis on Infinite Earths – Part Three', year: 2024, size: 248 },
  ],
},
  detectiveconan: {
    name: 'Detective Conan Collection',
    color: '#1a1a2e',
    heroTitle: 'Detective Conan',
    heroSubtitle: 'Every Detective Conan movie from the very beginning',
    movies: [
      { title: 'Detective Conan: The Time-Bombed Skyscraper', year: 1997, size: 366 },
      { title: 'Detective Conan: The Fourteenth Target', year: 1998, size: 380 },
      { title: 'Detective Conan: The Last Wizard of the Century', year: 1999, size: 341 },
      { title: 'Detective Conan: Captured in Her Eyes', year: 2000, size: 360 },
      { title: 'Detective Conan: Countdown to Heaven', year: 2001, size: 356 },
      { title: 'Detective Conan: The Phantom of Baker Street', year: 2002, size: 316 },
      { title: 'Detective Conan: Crossroad in the Ancient Capital', year: 2003, size: 503 },
      { title: 'Detective Conan: Magician of the Silver Sky', year: 2004, size: 410 },
      { title: "Detective Conan: Strategy Above the Depths", year: 2005, size: 440 },
      { title: "Detective Conan: The Private Eyes' Requiem", year: 2006, size: 560 },
      { title: 'Detective Conan: Jolly Roger in the Deep Azure', year: 2007, size: 459 },
      { title: 'Detective Conan: Full Score of Fear', year: 2008, size: 437 },
      { title: 'Detective Conan: The Raven Chaser', year: 2009, size: 432 },
      { title: 'Detective Conan: The Lost Ship in the Sky', year: 2010, size: 457 },
      { title: 'Detective Conan: Quarter of Silence', year: 2011, size: 543 },
      { title: 'Detective Conan: The Eleventh Striker', year: 2012, size: 510 },
      { title: 'Detective Conan: Private Eye in the Distant Sea', year: 2013, size: 428 },
      { title: 'Detective Conan: Dimensional Sniper', year: 2014, size: 440 },
      { title: 'Detective Conan: Sunflowers of Inferno', year: 2015, size: 500 },
      { title: 'Detective Conan: The Darkest Nightmare', year: 2016, size: 502 },
      { title: 'Detective Conan: Crimson Love Letter', year: 2017, size: 520 },
      { title: 'Detective Conan: Zero the Enforcer', year: 2018, size: 467 },
      { title: 'Detective Conan: The Fist of Blue Sapphire', year: 2019, size: 544 },
      { title: 'Detective Conan: The Scarlet Bullet', year: 2021, size: 259 },
      { title: 'Detective Conan: The Bride of Halloween', year: 2022, size: 231 },
      { title: 'Detective Conan: Black Iron Submarine', year: 2023, size: 226 },
      { title: 'Detective Conan: The Million-dollar Pentagram', year: 2024, size: 240 },
      { title: 'Detective Conan: One-eyed Flashback', year: 2025, size: 212 },
    ],
  },
  scoobydoo: {
    name: 'Scooby-Doo Collection',
    color: '#4caf50',
    heroTitle: 'Scooby-Doo',
    heroSubtitle: 'The complete Scooby-Doo animated universe',
    movies: [
      { title: 'Scobby Goes Hollywood' , year: 1979 , size: 194 },
      { title: 'Scooby-Doo Meets the Boo Brothers' , year: 1987 , size: 304 },
      { title: 'Scooby-Doo and the Ghoul School' , year: 1988 , size: 429 },
      { title: 'Scooby-Doo! and the Reluctant Werewolf' , year: 1988 , size: 276 },
      { title: 'Scooby-Doo! in Arabian Nights' , year: 1994 , size: 228 },
      { title: 'Scooby-Doo! on Zombie Island' , year: 1998 , size: 652 },
      { title: "Scooby-Doo! and the Witch's Ghost" , year: 1999 , size: 311 },
      { title: 'Scooby-Doo and the Alien Invaders' , year: 2000 , size: 233 },
      { title: 'Scooby-Doo and the Cyber Chase' , year: 2001 , size: 206 },
      { title: 'Scooby-Doo! and the Legend of the Vampire' , year: 2003 , size: 337 },
      { title: 'Scooby-Doo! and the Monster of Mexico' , year: 2003 , size: 211 },
      { title: 'Scooby-Doo! and the Loch Ness Monster' , year: 2004 , size: 282 },
      { title: 'Aloha, Scooby-Doo!' , year: 2005 , size: 343 },
      { title: "Scooby-Doo! in Where’s My Mummy?" , year: 2005 , size: 147 },
      { title: 'Scooby-Doo! Pirates Ahoy!' , year: 2006 , size: 300 },
      { title: 'Chill Out, Scooby-Doo!' , year: 2007 , size: 339 },
      { title: 'Scooby-Doo! and the Goblin King' , year: 2008 , size: 346 },
      { title: 'Scooby-Doo! and the Samurai Sword' , year: 2009 , size: 347 },
      { title: 'Scooby-Doo! Abracadabra-Doo' , year: 2010 , size: 288 },
      { title: 'Scooby-Doo! Camp Scare' , year: 2010 , size: 203 },
      { title: 'Scooby-Doo! Legend of the Phantosaur' , year: 2011 , size: 350 },
      { title: 'Scooby-Doo! Music of the Vampire' , year: 2012 , size: 302 },
      { title: 'Big Top Scooby-Doo!' , year: 2012 , size: 378 },
      { title: 'Scooby-Doo! Mask of the Blue Falcon' , year: 2013 , size: 265 },
      { title: 'Scooby-Doo! Stage Fright' , year: 2013 , size: 143 },
      { title: 'Scooby-Doo! WrestleMania Mystery' , year: 2014 , size: 184 },
      { title: 'Scooby-Doo! Frankencreepy' , year: 2014 , size: 136 }, 
      { title: 'Scooby-Doo! and KISS: Rock and Roll Mystery' , year: 2015 , size: 290 },
      { title: 'Lego Scooby-Doo! Haunted Hollywood' , year: 2016 , size: 183 },
      { title: 'Scooby-Doo! and WWE: Curse of the Speed Demon' , year: 2016 , size: 197 },
      { title: "Scooby-Doo! Shaggy's Showdown" , year: 2017 , size: 175 },
      { title: 'Scooby-Doo! & Batman: The Brave and the Bold' , year: 2018 , size: 355 },
      { title: 'Scooby-Doo! and the Gourmet Ghost' , year: 2018 , size: 227 }, 
      { title: 'Scooby-Doo! and the Curse of the 13th Ghost' , year: 2019 , size: 150 },
      { title: 'Scooby-Doo! Return to Zombie Island' , year: 2019 , size: 230 }, 
      { title: 'Happy Halloween, Scooby-Doo!' , year: 2020 , size: 169 }, 
      { title: 'Scoob!' , year: 2020 , size: 375 }, 
      { title: 'Straight Outta Nowhere: Scooby-Doo! Meets Courage the Cowardly Dog' , year: 2021 , size: 179 }, 
      { title: 'Trick or Treat Scooby-Doo!' , year: 2022 , size: 222 }, 
      { title: 'Scooby-Doo! and Kryto, Too!' , year: 2023 , size: 220 }, 
    ]
  },
  tomandjerry: {
    name: 'Tom and Jerry Collection',
    color: '#ff9800',
    heroTitle: 'Tom and Jerry',
    heroSubtitle: 'The complete Tom and Jerry animated universe',
    movies: [
      { title: 'Tom and Jerry: The Movie', year: 1993, size: 240 },
      { title: 'Tom and Jerry: The Magic Ring', year: 2002, size: 135.5 },
      { title: 'Tom and Jerry: Blast Off to Mars', year: 2005, size: 204.0 },
      { title: 'Tom and Jerry: The Fast and the Furry', year: 2005, size: 149.6 },
      { title: 'Tom and Jerry: Shiver Me Whiskers', year: 2006, size: 120.3 },
      { title: 'Tom and Jerry: A Nutcracker Tale', year: 2007, size: 124.6 },
      { title: 'Tom and Jerry Meet Sherlock Holmes', year: 2010, size: 108.1 },
      { title: 'Tom and Jerry & The Wizard of Oz', year: 2011, size: 126.3 },
      { title: 'Tom and Jerry: Robin Hood and His Merry Mouse', year: 2012, size: 154.0 },
      { title: "Tom and Jerry's Giant Adventure", year: 2013, size: 152.6 },
      { title: 'Tom and Jerry: The Lost Dragon', year: 2014, size: 97.2 },
      { title: 'Tom and Jerry: Spy Quest', year: 2015, size: 123.1 },
      { title: 'Tom and Jerry: Back to Oz', year: 2016, size: 172.3 },
      { title: 'Tom and Jerry: Willy Wonka and the Chocolate Factory', year: 2017, size: 170.7 },
      { title: 'Tom and Jerry: Cowboy Up!', year: 2022, size: 126.5 },
      { title: "Tom and Jerry: Snowman's Land", year: 2022, size: 157.7 },
      { title: 'Tom and Jerry: Forbidden Compass', year: 2025, size: 209.1 },
    ]
  },
  lupin:{
    name: 'Lupin Collection',
    color: '#1a1a2e',
    heroTitle: 'Lupin',
    heroSubtitle: 'The complete Lupin animated universe',
    movies: [
      { title: 'Lupin III: The Mystery of Mamo', year: 1978, size: 700 },
      { title: 'Lupin III: The Castle of Cagliostro', year: 1979, size: 700 },
      { title: 'Lupin III: Legend of the Gold of Babylon', year: 1985, size: 700 },
      { title: 'Lupin III: Farewell to Nostradamus', year: 1995, size: 700 },
      { title: 'Lupin III: Dead or Alive', year: 1996, size: 700 },
      { title: 'Lupin III vs Detective Conan: The Movie', year: 2013, size: 700 },
      { title: 'Lupin III: The First', year: 2019, size: 700 },
      { title: 'Lupin III: The Movie - The Immortal Bloodline ', year: 2025, size: 700 },
    ]
  },
  ghostintheshell: {
  name: 'Ghost in the Shell Collection',
  color: '#2c3e50',
  heroTitle: 'Ghost in the Shell',
  heroSubtitle: 'The complete Ghost in the Shell animated film collection',
  movies: [
    { title: 'Ghost in the Shell', year: 1995, size: 101 },
    { title: 'Ghost in the Shell 2: Innocence', year: 2004, size: 426 },
    { title: 'Ghost in the Shell: Stand Alone Complex – Solid State Society', year: 2006, size: 300 },
    { title: 'Ghost in the Shell 2.0', year: 2008, size: 294 },
    { title: 'Ghost in the Shell: The New Movie', year: 2015, size: 458 },
    { title: 'Ghost in the Shell: Arise - Border 1: Ghost Pain', year: 2013, size: 157 },
    { title: 'Ghost in the Shell: Arise - Border 2: Ghost Whispers', year: 2013, size: 278 },
    { title: 'Ghost in the Shell: Arise - Border 3: Ghost Tears', year: 2014, size: 211 },
    { title: 'Ghost in the Shell: SAC_2045 - Sustainable War', year: 2022, size: 350 },
  ],
},
animemix1: {
  name: 'Anime Mix I',
  color: '#6c5ce7',
  heroTitle: 'Anime Mix I',
  heroSubtitle: 'A curated mix of the finest anime films ever made',
  movies: [
    { title: 'Castle in the Sky', year: 1986, size: 259 },
    { title: 'Ninja Scroll', year: 1993, size: 352 },
    { title: 'Spirited Away', year: 2003, size: 301},
    { title: 'Tokyo Godfathers', year: 2003, size: 310 },
    { title: 'Howl\'s Moving Castle', year: 2004, size: 300 },
    { title: 'The Girl Who Leapt Through Time', year: 2006, size: 161 },
    { title: 'Vampire Hunter D: Bloodlust', year: 2001, size: 301 },
    { title: 'Your Name', year: 2017, size: 220.10 },
    { title: 'I Want to Eat Your Pancreas', year: 2018, size: 211 },
    { title: 'Weathering With You', year: 2020, size: 379 },
    { title: 'Jujutsu Kaisen 0: The Movie', year: 2020, size: 265 },
    { title: 'Road to Ninja: Naruto the Movie', year: 2014, size: 217 },
    { title: 'Blue Lock: Episode Nagi', year: 2024, size: 171 },
    { title: 'Attack on Titan The Movie: The Last Attack', year: 2023, size: 260 },
    { title: 'Jujutsu Kaisen: Hidden Inventory/Premature Death', year: 2025, size: 216 },
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
              <span className="cd-item-size">{movie.size}mb</span>
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