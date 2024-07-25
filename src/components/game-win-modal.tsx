import { Link } from "react-router-dom"
import { data, LanguageCode } from "../data"
import { useLanguageStore } from "../store/language"
import { GameCard } from "./ui/game-card"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

type GameWinModalProps = {
  open: boolean
  resetAll: () => void
}

export function GameWinModal({ open, resetAll }: GameWinModalProps) {
  const language = useLanguageStore((state) => state.language) as LanguageCode

  return (
    <div className={`overlay game-modal win ${open ? "show" : ""}`}>
      <GameCard
        imagePath={data[language].modal.win.titleImgPath}
        alt={data[language].modal.win.alt}
        cardHeight={445}
        open={open}
        w={186}
        h={113}
      >
        <div className={open ? "ss" : ""}>
          <DotLottieReact src="/lottie/tebrikler.json" loop autoplay />
        </div>

        <ul className="modal-menu-list">
          <li className="modal-menu-item">
            <button className="modal-menu-link heading-sm" onClick={resetAll}>
              {language === "en" ? "Play again" : "Tekrar oyna"}
            </button>
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
