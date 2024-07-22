import { Link } from "react-router-dom"
import { data, LanguageCode } from "../data"
import { useLanguageStore } from "../store/language"
import { GameCard } from "./ui/game-card"

type GameLoseModalProps = {
  open: boolean
  resetAll: () => void
  word: string
}

export function GameLoseModal({ open, resetAll, word }: GameLoseModalProps) {
  const language = useLanguageStore((state) => state.language) as LanguageCode

  return (
    <div className={`overlay game-modal ${open ? "show" : ""}`}>
      <GameCard
        imagePath={data[language].modal.lose.titleImgPath}
        alt={data[language].modal.lose.alt}
        cardHeight={445}
        open={open}
        w={186}
        h={113}
      >
        <h2 className="game-card-word">
          {language === "tr" ? "Kelime" : "Word"}: <span>"{word}"</span>
        </h2>
        <ul className="modal-menu-list">
          <li className="modal-menu-item">
            <Link
              className="modal-menu-link heading-sm"
              to=""
              onClick={resetAll}
            >
              {language === "en" ? "Play again" : "Tekrar oyna"}
            </Link>
          </li>
          <li className="modal-menu-item">
            <Link
              className="modal-menu-link heading-sm"
              to="/pick-category"
              onClick={resetAll}
            >
              {language === "en" ? "New category" : "Yeni kategori"}
            </Link>
          </li>
          <li className="modal-menu-item">
            <Link
              className="modal-menu-link heading-sm quit"
              to="/"
              onClick={resetAll}
            >
              {language === "en" ? "Quit" : "Çıkış yap"}
            </Link>
          </li>
        </ul>
      </GameCard>
    </div>
  )
}
