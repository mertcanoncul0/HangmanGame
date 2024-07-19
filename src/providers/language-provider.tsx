import { useLanguageStore } from "../store/language"
import { SelectLanguage } from "../components/select-language"

export function LanguageProvider({
  Component,
}: {
  Component: React.ComponentType
}) {
  const language = useLanguageStore((state) => state.language)

  if (!language) {
    return <SelectLanguage />
  }

  return <Component />
}
