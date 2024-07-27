import { Link } from "react-router-dom"
import { data, LanguageCode } from "../data"
import { useLanguageStore } from "../store/language"
import { GameCard } from "./ui/game-card"
import { useCallback, useEffect, useState } from "preact/hooks"

type GameWinModalProps = {
  open: boolean
  resetAll: () => void
}

type DotLottieReactType = {
  play: () => void
  stop: () => void
}

export function GameWinModal({ open, resetAll }: GameWinModalProps) {
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
    <div className={`overlay game-modal win ${open ? "show" : ""}`}>
      <GameCard
        imagePath={data[language].modal.win.titleImgPath}
        alt={data[language].modal.win.alt}
        cardHeight={445}
        open={open}
        w={186}
        h={113}
      >
        <div className={open ? "ss congratulations" : ""}>
          <DotLottieReact
            src="/lottie/congratulations.json"
            dotLottieRefCallback={dotLottieRefCallback}
            loop={true}
            autoplay={false}
          />
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
