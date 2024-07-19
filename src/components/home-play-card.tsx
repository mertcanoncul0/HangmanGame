import { Link } from "react-router-dom"
import { data, LanguageCode } from "../data"
import { GameCard } from "./ui/game-card"
import { useLanguageStore } from "../store/language"

export function HomePlayCard() {
  const language = useLanguageStore((state) => state.language) as LanguageCode

  return (
    <GameCard
      imagePath={"/images/logo.svg"}
      alt="Logo"
      cardHeight={481}
      w={263}
      h={130}
      open={true}
    >
      <Link to="/pick-category" className="play-button" title="Play Game">
        <img
          src="/images/icon-play.svg"
          alt="Play Game Button"
          width={52}
          height={40}
        />
      </Link>

      <Link
        to="/how-to-play"
        className="how-to-button"
        title="How To Play Button"
      >
        {data[language].home.button}
      </Link>
    </GameCard>
  )
}
