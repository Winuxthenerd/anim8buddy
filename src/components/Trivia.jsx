import React, { useState, useEffect } from 'react'
import './Trivia.css'

const questions = [
  {
    question: "What does the word 'anime' literally mean in Japanese?",
    options: ["Cartoon", "Animation", "Drawing", "Story"],
    answer: 1,
  },
  {
    question: "Which Studio Ghibli film won an Academy Award?",
    options: ["Totoro", "Howl's Moving Castle", "Spirited Away", "Nausicaä"],
    answer: 2,
  },
  {
    question: "How many Academy Awards has Tom and Jerry won?",
    options: ["3", "5", "7", "9"],
    answer: 2,
  },
  {
    question: "In what year did One Piece first air?",
    options: ["1995", "1997", "1999", "2001"],
    answer: 2,
  },
  {
    question: "What country produced the first ever cartoon in 1908?",
    options: ["USA", "Japan", "UK", "France"],
    answer: 3,
  },
  {
    question: "How many years did Naruto and Naruto Shippuden run combined?",
    options: ["10 years", "12 years", "15 years", "20 years"],
    answer: 2,
  },
  {
    question: "Which anime is known for having over 1,000 episodes?",
    options: ["Bleach", "One Piece", "Naruto", "Dragon Ball Z"],
    answer: 1,
  },
  {
    question: "What does 'manga' refer to?",
    options: ["Anime movies", "Japanese comic books", "Animated series", "Voice acting"],
    answer: 1,
  },
  {
    question: "Which of these is a Studio Ghibli film?",
    options: ["Akira", "Ghost in the Shell", "Princess Mononoke", "Evangelion"],
    answer: 2,
  },
  {
    question: "Dragon Ball was originally based on which classic story?",
    options: ["Cinderella", "Journey to the West", "Arabian Nights", "The Odyssey"],
    answer: 1,
  },
  {
    question: "What is the name of the main character in Naruto?",
    options: ["Sasuke Uchiha", "Kakashi Hatake", "Naruto Uzumaki", "Rock Lee"],
    answer: 2,
  },
  {
    question: "Which cartoon network show features a boy genius with a secret lab?",
    options: ["Johnny Bravo", "Courage the Cowardly Dog", "Dexter's Laboratory", "The Powerpuff Girls"],
    answer: 2,
  },
  {
    question: "What is the highest-grossing anime film of all time?",
    options: ["Your Name", "Spirited Away", "Demon Slayer: Mugen Train", "Dragon Ball Super: Broly"],
    answer: 2,
  },
  {
    question: "Which anime features ninja with chakra powers?",
    options: ["Bleach", "Naruto", "One Piece", "Fairy Tail"],
    answer: 1,
  },
  {
    question: "What animal is Pikachu in Pokémon?",
    options: ["A rabbit", "A cat", "An electric mouse", "A squirrel"],
    answer: 2,
  },
  {
    question: "Which show features a sponge who lives under the sea?",
    options: ["Fairly OddParents", "SpongeBob SquarePants", "Rugrats", "Hey Arnold"],
    answer: 1,
  },
  {
    question: "What is the name of the pirate crew in One Piece?",
    options: ["Heart Pirates", "Blackbeard Pirates", "Straw Hat Pirates", "Whitebeard Pirates"],
    answer: 2,
  },
  {
    question: "Which anime is set in a world where humans live inside giant walls?",
    options: ["Tokyo Ghoul", "Attack on Titan", "Fullmetal Alchemist", "Death Note"],
    answer: 1,
  },
  {
    question: "What is the name of the main character in Death Note?",
    options: ["L Lawliet", "Light Yagami", "Near", "Mello"],
    answer: 1,
  },
  {
    question: "Which classic cartoon features a cat constantly chasing a mouse?",
    options: ["Looney Tunes", "Tom and Jerry", "Oggy and the Cockroaches", "Itchy and Scratchy"],
    answer: 1,
  },
  {
    question: "What power does Luffy have in One Piece?",
    options: ["Control fire", "Stretch his body like rubber", "Turn invisible", "Control lightning"],
    answer: 1,
  },
  {
    question: "Which anime features a boy who inherits a powerful quirk called 'One For All'?",
    options: ["Black Clover", "Fairy Tail", "My Hero Academia", "Soul Eater"],
    answer: 2,
  },
  {
    question: "What is the name of the kingdom in the cartoon 'Adventure Time'?",
    options: ["Ooo", "Aaa", "Bbb", "Candy Kingdom"],
    answer: 0,
  },
  {
    question: "Which anime studio produced 'Demon Slayer'?",
    options: ["Madhouse", "Bones", "ufotable", "Toei Animation"],
    answer: 2,
  },
  {
    question: "What year did Dragon Ball Z first air?",
    options: ["1984", "1986", "1989", "1992"],
    answer: 2,
  },
  {
    question: "Which cartoon features twin sisters Dipper and Mabel?",
    options: ["Steven Universe", "Gravity Falls", "Star vs. the Forces of Evil", "The Owl House"],
    answer: 1,
  },
  {
    question: "What is the special notebook called in Death Note?",
    options: ["Soul Book", "Death Note", "Kill Diary", "Dark Journal"],
    answer: 1,
  },
  {
    question: "Which Pokémon is known as the 'Flame Pokémon' and is Ash's first fire type?",
    options: ["Cyndaquil", "Torchic", "Charmander", "Chimchar"],
    answer: 2,
  },
  {
    question: "What is the name of the village Naruto grows up in?",
    options: ["Village Hidden in the Mist", "Village Hidden in the Sand", "Village Hidden in the Leaves", "Village Hidden in the Clouds"],
    answer: 2,
  },
  {
    question: "Which cartoon is about a boy who can talk to animals?",
    options: ["The Wild Thornberrys", "Rugrats", "As Told by Ginger", "Rocket Power"],
    answer: 0,
  },
]

function getTodayQuestion() {
  const dayOfYear = Math.floor(
    (new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000
  )
  return questions[dayOfYear % questions.length]
}

function Trivia() {
  const [selected, setSelected] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const question = getTodayQuestion()

  const handleSelect = (index) => {
    if (!submitted) setSelected(index)
  }

  const handleSubmit = () => {
    if (selected !== null) setSubmitted(true)
  }

  const isCorrect = selected === question.answer

  return (
    <section className="trivia">
      <div className="trivia-inner">
        <div className="trivia-label">🎯 Daily Anime Quiz</div>
        <h2 className="trivia-question">{question.question}</h2>

        <div className="trivia-options">
          {question.options.map((option, index) => {
            let optionClass = 'trivia-option'
            if (submitted) {
              if (index === question.answer) optionClass += ' correct'
              else if (index === selected) optionClass += ' wrong'
            } else if (index === selected) {
              optionClass += ' selected'
            }
            return (
              <button
                key={index}
                className={optionClass}
                onClick={() => handleSelect(index)}
              >
                <span className="option-letter">
                  {['A', 'B', 'C', 'D'][index]}
                </span>
                {option}
              </button>
            )
          })}
        </div>

        {!submitted ? (
          <button
            className="trivia-submit"
            onClick={handleSubmit}
            disabled={selected === null}
          >
            Submit Answer
          </button>
        ) : (
          <div className={`trivia-result ${isCorrect ? 'result-correct' : 'result-wrong'}`}>
            {isCorrect
              ? '🎉 Congratulations! That is correct!'
              : `❌ Not quite! The correct answer was: ${question.options[question.answer]}`}
          </div>
        )}

        <p className="trivia-footer">A new question drops every day. Come back tomorrow!</p>
      </div>
    </section>
  )
}

export default Trivia