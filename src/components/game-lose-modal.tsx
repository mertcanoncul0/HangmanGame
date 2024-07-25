import { Link } from "react-router-dom"
import { data, LanguageCode } from "../data"
import { useLanguageStore } from "../store/language"
import { GameCard } from "./ui/game-card"
import { useEffect, useState, useCallback } from "preact/hooks"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

type GameLoseModalProps = {
  open: boolean
  resetAll: () => void
  word: string
}

type DotLottieReactType = {
  play: () => void
  stop: () => void
}

export function GameLoseModal({ open, resetAll, word }: GameLoseModalProps) {
  const language = useLanguageStore((state) => state.language) as LanguageCode
  const [dotLottie, setDotLottie] = useState<DotLottieReactType | null>(null) // DotLottieReact referansını tutacak state
  const [playLottie, setPlayLottie] = useState(false) // Lottie animasyonunu kontrol eden state

  useEffect(() => {
    if (open) {
      setPlayLottie(true)
    } else {
      setPlayLottie(false)
    }
  }, [open])

  useEffect(() => {
    if (dotLottie && playLottie) {
      dotLottie.play()
    } else if (dotLottie && !playLottie) {
      dotLottie.stop()
    }
  }, [playLottie, dotLottie])

  const dotLottieRefCallback = useCallback((node: DotLottieReactType) => {
    if (node !== null) {
      setDotLottie(node)
    }
  }, [])

  return (
    <div className={`overlay game-modal lose ${open ? "show" : ""}`}>
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

        <div className={open ? "ss" : ""}>
          <DotLottieReact
            src="/lottie/lose.json"
            dotLottieRefCallback={dotLottieRefCallback}
            loop={true}
            autoplay={false}
          />
        </div>

        <ul className="modal-menu-list">
          <li className="modal-menu-item" onClick={resetAll}>
            <Link className="modal-menu-link heading-sm" to="">
              {language === "en" ? "Play again" : "Tekrar oyna"}
            </Link>
          </li>
          <li className="modal-menu-item" onClick={resetAll}>
            <Link className="modal-menu-link heading-sm" to="/pick-category">
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
