import { HeaderAndBackButton } from "../components/back-button"

export function HowToPlay() {
  return (
    <>
      <HeaderAndBackButton backHref='/' title='How to play' />
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
