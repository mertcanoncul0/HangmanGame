import { create } from "zustand"

type UserState = {
  playable: boolean
  setPlayable: (playable: boolean) => void

  guessedLetters: string[]
  setGuessedLetters: (letters: string[]) => void

  correctLetters: string[]
  setCorrectLetters: (correctLetters: string[]) => void

  wrongLetters: string[]
  setWrongLetters: (wrongLetters: string[]) => void
}

export const useUserStore = create<UserState>((set) => ({
  playable: true,
  setPlayable: (playable) => set({ playable }),

  guessedLetters: [],
  setGuessedLetters: (letters) => set({ guessedLetters: letters }),

  correctLetters: [],
  setCorrectLetters: (correctLetters) => set({ correctLetters }),

  wrongLetters: [],
  setWrongLetters: (wrongLetters) => set({ wrongLetters }),
}))
