import { Link } from "react-router-dom"
import { data, LanguageCode } from "../data"
import { useLanguageStore } from "../store/language"

export function HowToPlay() {
  const language = useLanguageStore((state) => state.language) as LanguageCode

  return (
    <>
      <header className="back-header">
        <Link to="/" className="back-button" aria-label="Back">
          <img
            src="/images/icon-back.svg"
            alt="Back button"
            width={17}
            height={16}
          />
        </Link>

        <img src="/images/how-to-play.svg" alt="" />
      </header>
      <main className="page-wrapper">
        {data[language].howToPlay.map((item) => (
          <section className="how-to-play-card" key={item.code}>
            <h2>
              <span>{item.code}</span>
              {item.title}
            </h2>
            <p>{item.body}</p>
          </section>
        ))}
      </main>
    </>
  )
}
