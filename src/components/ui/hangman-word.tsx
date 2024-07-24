type HangmanWordProps = {
  selectedWord: string
  correctLetters: string[]
}

export function HangmanWord({
  selectedWord,
  correctLetters,
}: HangmanWordProps) {
  const splitSelectedWord = selectedWord.split(" ")
  return (
    <div
      className={`hangman-wrapper ${
        splitSelectedWord.length === 1 ? "one-word" : ""
      }
        ${selectedWord.length > 10 ? "long-word" : ""}
      `}
    >
      {splitSelectedWord.map((word, index) => (
        <div className="hangman-word-wrapper" key={index}>
          {word.split("").map((letter) => (
            <span
              className={`hangman-letter ${
                correctLetters.includes(letter) ? "correct" : ""
              }`}
            >
              {correctLetters.includes(letter) ? letter : ""}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}
