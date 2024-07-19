import { useLoaderData } from "react-router-dom"
import { GameHeader } from "../components/game-header"
import { LanguageCode } from "../data"
import { useLanguageStore } from "../store/language"
import { getCategoryNameBySlug } from "../lib/helper"

export function loader({ params }: { params: object }) {
  return params
}

export function Game() {
  const { slug } = useLoaderData() as { slug: string }
  const language = useLanguageStore((state) => state.language) as LanguageCode

  return (
    <>
      <GameHeader categoryName={getCategoryNameBySlug(slug, language)} />
    </>
  )
}
