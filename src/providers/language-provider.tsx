import { useLanguageStore } from "../store/language"
import { SelectLanguage } from "../components/select-language"
import { LanguageCode } from "../data"

type LanguageProviderProps = {
  Component: React.FC
}

export function LanguageProvider({ Component }: LanguageProviderProps) {
  const language = useLanguageStore((state) => state.language)

  if (!language) {
    return <SelectLanguage />
  }

  document.documentElement.lang = language as LanguageCode

  return <Component />
}
