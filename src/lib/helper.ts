import { data, LanguageCode } from "../data"

export function getCategoryNameBySlug(
  slug: string,
  language: LanguageCode
): string {
  const categoryName = data[language].pickCategory.categories.find(
    (category) => category.slug === slug
  )?.name

  if (!categoryName) {
    throw new Error(`Category with slug ${slug} not found`)
  }

  return categoryName
}
