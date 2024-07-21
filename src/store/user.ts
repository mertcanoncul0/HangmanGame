import { create } from "zustand"

type UserState = {
  playable: boolean
  setPlayable: (playable: boolean) => void

  guessedLetters: string[]
  setGuessedLetters: (letters: string[]) => void

  correctLetters: string[]
  setCorrectLetters: (correctLetters: string[]) => void

  incorrectLetters: string[]
  setIncorrectLetters: (incorrectLetters: string[]) => void
}

export const useUserStore = create<UserState>((set) => ({
  playable: true,
  setPlayable: (playable) => set({ playable }),

  guessedLetters: [],
  setGuessedLetters: (letters) => set({ guessedLetters: letters }),

  correctLetters: [],
  setCorrectLetters: (correctLetters) => set({ correctLetters }),

  incorrectLetters: [],
  setIncorrectLetters: (incorrectLetters) => set({ incorrectLetters }),
}))
