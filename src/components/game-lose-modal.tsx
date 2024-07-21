import { Link } from "react-router-dom"
import { data, LanguageCode } from "../data"
import { useLanguageStore } from "../store/language"
import { useUserStore } from "../store/user"
import { GameCard } from "./ui/game-card"

type GameLoseModalProps = {
  open: boolean
}

export function GameLoseModal({ open }: GameLoseModalProps) {
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
    <div className={`overlay ${open ? "show" : ""}`}>
      <GameCard
        imagePath={data[language].modal.lose.titleImgPath}
        alt={data[language].modal.lose.alt}
        cardHeight={445}
        open={open}
        w={186}
        h={113}
      >
        <ul className="modal-menu-list">
          <li className="modal-menu-item">
            <Link
              className="modal-menu-link heading-sm"
              to=""
              onClick={() => {
                resetAll()
                location.reload
              }}
            >
              {language === "en" ? "Play again" : "Tekrar oyna"}
            </Link>
          </li>
          <li className="modal-menu-item">
            <Link
              className="modal-menu-link heading-sm"
              to="/pick-category"
              onClick={() => {
                resetAll()
              }}
            >
              {language === "en" ? "New category" : "Yeni kategori"}
            </Link>
          </li>
          <li className="modal-menu-item">
            <Link
              className="modal-menu-link heading-sm quit"
              to="/"
              onClick={() => {
                resetAll()
              }}
            >
              {language === "en" ? "Quit" : "Çıkış yap"}
            </Link>
          </li>
        </ul>
      </GameCard>
    </div>
  )
}
