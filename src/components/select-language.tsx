import { useLanguageStore } from "../store/language"

export function SelectLanguage() {
  const setLanguage = useLanguageStore((state) => state.setLanguage)

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang)
  }

  return (
    <main className='select-language-wrapper'>
      <h1>Hangi dilde oynamak istersiniz?</h1>
      <button onClick={() => handleLanguageChange("tr")}>Türkçe</button>
      <button onClick={() => handleLanguageChange("en")}>İngilizce</button>
    </main>
  )
}
