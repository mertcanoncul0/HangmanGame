import { Link } from "react-router-dom"
import { data, LanguageCode } from "./data"
import { useLanguageStore } from "./store/language"

export function App() {
  const language = useLanguageStore((state) => state.language) as LanguageCode

  return (
    <main>
      <div className='home-play-card'>
        <img
          src='/images/logo.svg'
          alt='Hangman Logo'
          className='logo'
          width={263}
          height={130}
        />

        <Link to='/pick-category' className='play-button'>
          <img
            src='/images/icon-play.svg'
            alt='Play Button'
            width={52}
            height={40}
          />
        </Link>
        <Link to='/how-to-play' className='how-to-button'>
          {data[language].home.button}
        </Link>
      </div>
    </main>
  )
}
