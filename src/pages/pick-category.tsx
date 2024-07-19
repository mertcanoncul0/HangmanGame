import { Link } from "react-router-dom"

export function PickCategory() {
  return (
    <>
      <header className='back-header'>
        <Link to='/' className='back-button' aria-label='Back'>
          <img
            src='/images/icon-back.svg'
            alt='Back button'
            width={17}
            height={16}
          />
        </Link>

        <img
          src='/images/how-to-play.svg'
          alt='How To Play'
          title='How To Play'
          width={185}
          height={58}
        />
      </header>
      <main>
        <section>
          <h2>
            <span>01</span>
            Choose a category
          </h2>
          <p>
            First, choose a word category, like animals or movies. The computer
            then randomly selects a secret word from that topic and shows you
            blanks for each letter of the word.
          </p>
        </section>
        <section>
          <h2>
            <span>02</span>Guess letters
          </h2>
          <p>
            Take turns guessing letters. The computer fills in the relevant
            blank spaces if your guess is correct. If it’s wrong, you lose some
            health, which empties after eight incorrect guesses.
          </p>
        </section>
        <section>
          <h2>
            <span>03</span>
            Win or lose
          </h2>
          <p>
            You win by guessing all the letters in the word before your health
            runs out. If the health bar empties before you guess the word, you
            lose.
          </p>
        </section>
      </main>
    </>
  )
}
