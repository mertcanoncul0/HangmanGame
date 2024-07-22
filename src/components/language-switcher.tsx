import { useLanguageStore } from "../store/language"
import { LanguageCode } from "../data"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageStore((state) => state)

  function changeLanguage(lang: LanguageCode) {
    setLanguage(lang)
  }

  return (
    <button
      className="language-switcher"
      onClick={() => changeLanguage(language === "en" ? "tr" : "en")}
    >
      <img
        src={`images/${language}.svg`}
        alt={`${language} icon`}
        width={24}
        height={24}
      />
      {language === "tr"
        ? "Oyun dilini değiştirmek için tıkla"
        : "Click to change Game Language"}
    </button>
  )
}
