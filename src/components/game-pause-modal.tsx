import { data, LanguageCode } from "../data"
import { useLanguageStore } from "../store/language"
import { GameCard } from "./ui/game-card"
import { ModalLink } from "./ui/modal-link"

type GamePauseModalProps = {
  open: boolean
  onClick: () => void
}

export function GamePauseModal({ open, onClick }: GamePauseModalProps) {
  const language = useLanguageStore((state) => state.language) as LanguageCode

  return (
    <div className={`overlay ${open ? "show" : ""}`}>
      <GameCard
        imagePath={data[language].modal.paused.titleImgPath}
        alt={data[language].modal.paused.alt}
        cardHeight={445}
        open={open}
        w={186}
        h={113}
      >
        <ul className="modal-menu-list">
          {data[language].modal.paused.menus.map((menu, index) => (
            <li key={index} className="model-menu-item">
              <ModalLink
                onClick={index === 0 ? onClick : undefined}
                to={menu.to}
                name={menu.name}
                className={index === 2 ? "quit" : ""}
              />
            </li>
          ))}
        </ul>
      </GameCard>
    </div>
  )
}
