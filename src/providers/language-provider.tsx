import { useLanguageStore } from "../store/language"
import { SelectLanguage } from "../components/select-language"

type LanguageProviderProps = {
  Component: React.FC
}

export function LanguageProvider({ Component }: LanguageProviderProps) {
  const language = useLanguageStore((state) => state.language)

  if (!language) {
    return <SelectLanguage />
  }

  return <Component />
}
