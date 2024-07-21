import { useLanguageStore } from "../store/language"
import { SelectLanguage } from "../components/select-language"
import { useEffect } from "preact/hooks"
import { LanguageCode } from "../data"

type LanguageProviderProps = {
  Component: React.FC
}

export function LanguageProvider({ Component }: LanguageProviderProps) {
  const language = useLanguageStore((state) => state.language)

  useEffect(() => {
    if (location.pathname !== "/") {
      document.body.className = ""
      document.documentElement.lang = language as LanguageCode
    }
  }, [location.pathname])

  if (!language) {
    return <SelectLanguage />
  }

  return <Component />
}
