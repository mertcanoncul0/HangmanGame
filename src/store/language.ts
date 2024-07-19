import { create } from "zustand"
import { persist } from "zustand/middleware"

type LanguageState = {
  language: string | null
  setLanguage: (language: string) => void
}

export const useLanguageStore = create(
  persist<LanguageState>(
    (set) => ({
      language: null,
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "language-storage",
    }
  )
)
