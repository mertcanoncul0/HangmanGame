import { useLoaderData } from "react-router-dom"
import { GameHeader } from "../components/game-header"
import { LanguageCode } from "../data"
import { useLanguageStore } from "../store/language"
import { getCategoryNameBySlug, getRandomWordFromCategory } from "../lib/helper"
import { HangmanWord } from "../components/hangman-word"
import { Keyboard } from "../components/ui/keyboard"
import { useEffect } from "preact/hooks"
import { useUserStore } from "../store/user"

export function loader({ params }: { params: object }) {
  const { slug } = params as { slug: string }

  return {
    slug: slug,
    randomKeyword: getRandomWordFromCategory(slug),
  }
}

export function Game() {
  const data = useLoaderData() as { slug: string; randomKeyword: string }
  const language = useLanguageStore((state) => state.language) as LanguageCode
  const { guessedLetters, setGuessedLetters } = useUserStore((state) => state)

  function onClick(e: Event) {
    const target = e.target as HTMLButtonElement
    console.log(target.textContent)
  }

  function addGuessedLetter(letter: string) {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter])
    }
  }

  console.log(guessedLetters)

  useEffect(() => {
    function onKeyPress(e: KeyboardEvent) {
      const key = e.key

      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    window.addEventListener("keypress", onKeyPress)

    return () => {
      window.removeEventListener("keypress", onKeyPress)
    }
  }, [guessedLetters])

  return (
    <>
      <GameHeader categoryName={getCategoryNameBySlug(data.slug, language)} />
      <HangmanWord keyword={data.randomKeyword} />
      <Keyboard language={language} onClick={onClick} />
    </>
  )
}
