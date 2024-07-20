import { data, LanguageCode } from "../data"
import { categories, CategoriesKey } from "../data/categories"

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

export function getCategoriesKey(str: string): CategoriesKey {
  const turkishToEnglish: { [key: string]: string } = {
    ç: "c",
    Ç: "C",
    ğ: "g",
    Ğ: "G",
    ı: "i",
    I: "I",
    i: "i",
    İ: "I",
    ö: "o",
    Ö: "O",
    ş: "s",
    Ş: "S",
    ü: "u",
    Ü: "U",
  }

  let convertedStr = str.replace(
    /[çÇğĞıIiİöÖşŞüÜ]/g,
    (char) => turkishToEnglish[char]
  )

  let words = convertedStr.split("-")

  let camelCaseStr = words
    .map((word, index) => {
      return index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join("") as CategoriesKey

  return camelCaseStr
}

export function getRandomWordFromCategory(category: string): string {
  const arr = categories[getCategoriesKey(category)]
  const randomIndex = Math.floor(Math.random() * arr.length)

  const name = arr[randomIndex].name.toLowerCase() as string

  return name
}
