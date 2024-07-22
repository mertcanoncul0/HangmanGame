import { useLanguageStore } from "../store/language"
import { GameCard } from "./ui/game-card"

export function SelectLanguage() {
  const setLanguage = useLanguageStore((state) => state.setLanguage)

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang)
  }

  return (
    <main>
      <GameCard
        imagePath="images/logo.svg"
        alt="Choose language"
        cardHeight={481}
        w={263}
        h={130}
        open={true}
      >
        <h1 class="language-title">Hangi dilde oynamak istersiniz?</h1>
        <div class="language-options">
          <button
            class="language-option-button"
            onClick={() => handleLanguageChange("tr")}
            title={"Türkçe"}
          >
            <img src="images/tr.svg" alt="Turkish Flag" class="flag-icon" />
          </button>
          <button
            class="language-option-button"
            onClick={() => handleLanguageChange("en")}
            title={"English"}
          >
            <img src="images/um.svg" alt="English Flag" class="flag-icon" />
          </button>
        </div>
      </GameCard>
    </main>
  )
}
