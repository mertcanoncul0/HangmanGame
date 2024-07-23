import { Link } from "react-router-dom"
import { data, LanguageCode } from "../data"
import { useLanguageStore } from "../store/language"
import { GameCard } from "./ui/game-card"
import { useUserStore } from "../store/user"

type GamePauseModalProps = {
  open: boolean
  onClick: () => void
}

export function GamePauseModal({ open, onClick }: GamePauseModalProps) {
  const language = useLanguageStore((state) => state.language) as LanguageCode
  const {
    setCorrectLetters,
    setIncorrectLetters,
    setGuessedLetters,
    setPlayable,
  } = useUserStore((state) => state)

  function resetAll() {
    setCorrectLetters([])
    setIncorrectLetters([])
    setGuessedLetters([])
    setPlayable(true)
  }
  return (
    <div className={`overlay game-modal pause ${open ? "show" : ""}`}>
      <GameCard
        imagePath={data[language].modal.paused.titleImgPath}
        alt={data[language].modal.paused.alt}
        cardHeight={445}
        open={open}
        w={186}
        h={113}
      >
        <ul className="modal-menu-list">
          <li className="modal-menu-item" onClick={onClick}>
            <Link className="modal-menu-link heading-sm" to="#">
              {language === "en" ? "Continue" : "Devam et"}
            </Link>
          </li>
          <li className="modal-menu-item" onClick={resetAll}>
            <Link className="modal-menu-link heading-sm" to="/pick-category">
              {language === "en" ? "New category" : "Yeni kategori"}
            </Link>
          </li>
          <li className="modal-menu-item" onClick={resetAll}>
            <Link className="modal-menu-link heading-sm quit" to="/">
              {language === "en" ? "Quit" : "Çıkış yap"}
            </Link>
          </li>
        </ul>
      </GameCard>
    </div>
  )
}
