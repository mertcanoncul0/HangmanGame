import { useLoaderData } from "react-router-dom"
import { GameHeader } from "../components/game-header"
import { LanguageCode } from "../data"
import { useLanguageStore } from "../store/language"
import {
  getCategoryNameBySlug,
  getFilteredWord,
  getRandomWordFromCategory,
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
    slug: slug,
    selectedWord: getRandomWordFromCategory(slug, "tr"),
  }
}

export function Game() {
  const { slug } = useLoaderData() as {
    slug: string
    selectedWord: string
  }
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

  useEffect(() => {
    setSelectedWord(getRandomWordFromCategory(slug, language))
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
      checkCorrectLetters(key.toLowerCase())
      checkIncorrectLetters(key.toLowerCase())
      checkGuessLetters(key.toLowerCase())
    }
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (
        playable &&
        e.key.length === 1 &&
        /[a-zA-ZçğıöşüÇĞİÖŞÜ]/.test(e.key)
      ) {
        checkCorrectLetters(e.key.toLowerCase())
        checkIncorrectLetters(e.key.toLowerCase())
        checkGuessLetters(e.key.toLowerCase())
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
      />

      <GameLoseModal open={incorrectLetters.length >= 7} />
    </>
  )
}
