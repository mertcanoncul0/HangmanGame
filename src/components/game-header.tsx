import { useState } from "preact/hooks"
import { GamePauseModal } from "./game-pause-modal"
import { HeaderButton } from "./ui/header-button"

type GameHeaderProps = {
  categoryName: string
}

export function GameHeader({ categoryName }: GameHeaderProps) {
  const [open, setOpen] = useState(false)

  function handleMenuClick() {
    setOpen(!open)
  }

  return (
    <>
      <header className="game-header">
        <section className="game-header-left">
          <HeaderButton as="button" onClick={handleMenuClick}>
            <img
              src="/images/icon-menu.svg"
              alt="Menu Icon"
              width={16}
              height={13}
            />
          </HeaderButton>
          <h1>{categoryName}</h1>
        </section>
        <section className="game-header-right">
          <span style={{ color: "white" }}>healtbar</span>
          <img
            src="/images/icon-heart.svg"
            alt="Healt Icon"
            width={26}
            height={24}
          />
        </section>
      </header>

      <GamePauseModal open={open} onClick={handleMenuClick} />
    </>
  )
}
