import { Link } from "react-router-dom"
import { LanguageCode } from "../data"
import { useLanguageStore } from "../store/language"

export default function ErrorPage() {
  const language = useLanguageStore((state) => state.language) as LanguageCode

  return (
    <div id="error-page">
      <div>
        <h1>Oops!</h1>
        <p>
          {language === "tr"
            ? "Üzgünüz, beklenmedik bir hata oluştu"
            : "Sorry, an unexpected error has occurred"}
          .
        </p>

        <button onClick={() => window.location.reload()}>
          {language === "tr" ? "Yenile" : "Reload"}
        </button>
        <Link to="/">
          {language === "tr" ? "Anasayfaya Dön" : "Back Homepage"}
        </Link>
      </div>
    </div>
  )
}
