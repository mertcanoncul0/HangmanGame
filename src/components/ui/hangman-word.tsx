type HangmanWordProps = {
  selectedWord: string
  correctLetters: string[]
}

export function HangmanWord({
  selectedWord,
  correctLetters,
}: HangmanWordProps) {
  return (
    <div className="hangman-wrapper">
      {selectedWord.split(" ").map((word, index) => (
        <div className="hangman-word-wrapper">
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
