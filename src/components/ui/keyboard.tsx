import { data, LanguageCode } from "../../data"

type KeyboardProps = {
  language: LanguageCode
  onClick: (e: Event) => void
}

export function Keyboard({ language, onClick }: KeyboardProps) {
  return (
    <div className="keyboard-wrapper">
      {data[language].keyboard.keys.map((key) => (
        <button key={key} className="keyboard-button" onClick={onClick}>
          {key}
        </button>
      ))}
    </div>
  )
}
