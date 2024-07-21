import { data, LanguageCode } from "../data"
import { useLanguageStore } from "../store/language"

type GameKeyboardProps = {
  correctLetters: string[]
  incorrectLetters: string[]
  onClick: (key: string) => void
}

export function GameKeyboard({
  correctLetters,
  incorrectLetters,
  onClick,
}: GameKeyboardProps) {
  const language = useLanguageStore((state) => state.language) as LanguageCode

  return (
    <div className="keyboard-wrapper">
      {data[language].keyboard.keys.map((key) => (
        <button
          key={key}
          className={`keyboard-key ${
            correctLetters.includes(key) ? "correct" : ""
          } ${incorrectLetters.includes(key) ? "incorrect" : ""}`}
          onClick={() => onClick(key)}
        >
          {key}
        </button>
      ))}
    </div>
  )
}
