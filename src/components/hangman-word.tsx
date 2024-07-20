import { useUserStore } from "../store/user"

type HangmanWordProps = {
  keyword: string
}

export function HangmanWord({ keyword }: HangmanWordProps) {
  const guessedLetters = useUserStore((state) => state.guessedLetters)

  return (
    <div className="hangman-word-wrapper">
      {keyword.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}
