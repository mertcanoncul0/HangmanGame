import { useState } from "preact/hooks"
import { GamePauseModal } from "./game-pause-modal"
import { useUserStore } from "../store/user"

type GameHeaderProps = {
  categoryName: string
}

export function GameHeader({ categoryName }: GameHeaderProps) {
  const [open, setOpen] = useState(false)
  const { incorrectLetters } = useUserStore((state) => state)

  function handleMenuClick() {
    setOpen(!open)
  }

  return (
    <>
      <header className="game-header">
        <section className="game-header-left">
          <button className="game-header-button" onClick={handleMenuClick}>
            <img
              src="/images/icon-menu.svg"
              alt="Menu Icon"
              width={16}
              height={13}
            />
          </button>
          <h1>{categoryName}</h1>
        </section>
        <section className="game-header-right">
          <div className="health-bar">
            <span
              style={{ width: `${100 * (1 - incorrectLetters.length / 7)}%` }}
            ></span>
          </div>
          <img
            src="/images/icon-heart.svg"
            alt="Health Icon"
            className="health-icon"
            width={26}
            height={24}
          />
        </section>
      </header>

      <GamePauseModal open={open} onClick={handleMenuClick} />
    </>
  )
}
