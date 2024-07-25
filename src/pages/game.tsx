import { useLoaderData } from "react-router-dom"
import { GameHeader } from "../components/game-header"
import { LanguageCode } from "../data"
import { useLanguageStore } from "../store/language"
import {
  getCategoryNameBySlug,
  getFilteredWord,
  getRandomWordFromCategory,
  getWordRandomKey,
} from "../lib/helper"
import { HangmanWord } from "../components/ui/hangman-word"
import { useUserStore } from "../store/user"
import { useEffect, useState } from "preact/hooks"
import { GameWinModal } from "../components/game-win-modal"
import { GameLoseModal } from "../components/game-lose-modal"
import { GameKeyboard } from "../components/game-keyboard"

export function loader({ params }: { params: object }) {
  const { slug } = params as { slug: string }

  return {
    slug,
  }
}

export function Game() {
  const { slug } = useLoaderData() as { slug: string }
  const language = useLanguageStore((state) => state.language) as LanguageCode
  const {
    correctLetters,
    setCorrectLetters,
    guessedLetters,
    setGuessedLetters,
    incorrectLetters,
    setIncorrectLetters,
    playable,
    setPlayable,
  } = useUserStore((state) => state)
  const [selectedWord, setSelectedWord] = useState("")

  function resetAll() {
    setCorrectLetters([])
    setGuessedLetters([])
    setIncorrectLetters([])
    setPlayable(true)

    const word = getRandomWordFromCategory(slug, language)
    setSelectedWord(word)
    setCorrectLetters(getWordRandomKey(word))
  }

  useEffect(() => {
    const word = getRandomWordFromCategory(slug, language)

    setSelectedWord(word)
    setCorrectLetters(getWordRandomKey(word))
  }, [slug])

  if (!selectedWord) {
    return null
  }

  function checkCorrectLetters(key: string) {
    if (selectedWord.includes(key) && !correctLetters.includes(key)) {
      setCorrectLetters([...correctLetters, key])
    }
  }

  function checkIncorrectLetters(key: string) {
    if (!selectedWord.includes(key) && !incorrectLetters.includes(key)) {
      setIncorrectLetters([...incorrectLetters, key])
    }
  }

  function checkGuessLetters(key: string) {
    if (correctLetters.includes(key)) {
      setGuessedLetters([...guessedLetters, key])
    }
  }

  function handleClick(key: string) {
    if (playable) {
      checkCorrectLetters(key.toLocaleLowerCase(language))
      checkIncorrectLetters(key.toLocaleLowerCase(language))
      checkGuessLetters(key.toLocaleLowerCase(language))
    }
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (
        playable &&
        e.key.length === 1 &&
        /[a-zA-ZçğıöşüÇĞİÖŞÜ]/.test(e.key)
      ) {
        checkCorrectLetters(e.key.toLocaleLowerCase(language))
        checkIncorrectLetters(e.key.toLocaleLowerCase(language))
        checkGuessLetters(e.key.toLocaleLowerCase(language))
      }
    }

    if (correctLetters.length === getFilteredWord(selectedWord).length) {
      setPlayable(false)
    }

    if (incorrectLetters.length >= 7) {
      setPlayable(false)
    }

    addEventListener("keydown", handleKeyDown)

    return () => removeEventListener("keydown", handleKeyDown)
  }, [guessedLetters, correctLetters, incorrectLetters])

  return (
    <>
      <GameHeader categoryName={getCategoryNameBySlug(slug, language)} />
      <HangmanWord
        selectedWord={selectedWord}
        correctLetters={correctLetters}
      />

      <GameKeyboard
        correctLetters={correctLetters}
        incorrectLetters={incorrectLetters}
        onClick={handleClick}
      />

      <GameWinModal
        open={correctLetters.length === getFilteredWord(selectedWord).length}
        resetAll={resetAll}
      />

      <GameLoseModal
        open={incorrectLetters.length >= 7}
        resetAll={resetAll}
        word={selectedWord}
      />
    </>
  )
}
