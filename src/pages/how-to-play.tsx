import { data, LanguageCode } from "../data"
import { useLanguageStore } from "../store/language"
import { HeaderButton } from "../components/ui/header-button"

export function HowToPlay() {
  const language = useLanguageStore((state) => state.language) as LanguageCode

  return (
    <>
      <header className="back-header">
        <HeaderButton as="link" to="/" aria-label="Back Button">
          <img
            src="/images/icon-back.svg"
            alt="Back button"
            width={17}
            height={16}
          />
        </HeaderButton>

        <img
          src={data[language].howToPlay.titleImgPath}
          alt={data[language].howToPlay.title}
          title={data[language].howToPlay.title}
          width={185}
          height={58}
        />
      </header>
      <main className="page-wrapper">
        {data[language].howToPlay.cards.map((item) => (
          <section className="how-to-play-card" key={item.code}>
            <span className="card-code heading-lg">{item.code}</span>

            <div>
              <h2>
                <span>{item.code}</span>
                {item.title}
              </h2>
              <p>{item.body}</p>
            </div>
          </section>
        ))}
      </main>
    </>
  )
}
