import { data, LanguageCode } from "../data"
import { categories, CategoriesKey } from "../data/categories"

/**
 * Get the category name by its slug and language code.
 * @param slug - The slug of the category to find.
 * @param language - The language code to use for looking up the category name.
 * @returns The name of the category.
 * @throws Error if the category with the specified slug is not found.
 */
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

/**
 * Convert a string with Turkish characters to a camelCase string.
 * @param str - The string to convert.
 * @returns The camelCase version of the input string.
 */
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
        ? word.toLocaleLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase()
    })
    .join("") as CategoriesKey

  return camelCaseStr
}

const shuffledIndices: Map<string, number[]> = new Map()

/**
 * Get a random word from the specified category and language.
 * @param category - The category to fetch the word from.
 * @param language - The language code to use for fetching the word.
 * @returns A random word from the specified category.
 */
export function getRandomWordFromCategory(
  category: string,
  language: LanguageCode
): string {
  const arr = categories[language][getCategoriesKey(category)]

  let indices = shuffledIndices.get(category)

  if (!indices) {
    indices = Array.from(arr.keys())
    indices.sort(() => Math.random() - 0.5)
    shuffledIndices.set(category, indices)
  }

  const randomIndex = indices.pop() as number
  if (indices.length === 0) {
    shuffledIndices.delete(category)
  }

  const name = arr[randomIndex].name.toLocaleLowerCase(language) as string

  return name
}

/**
 * Filter the input word to remove duplicate letters and non-alphabetic characters.
 * @param word - The word to filter.
 * @returns The filtered word with only unique alphabetic characters.
 */
export function getFilteredWord(word: string): string {
  const cleanWord = word
    .toLocaleLowerCase()
    .replace(/[^a-zA-ZçğıöşüÇĞİÖŞÜ]/g, "")

  const letterCounts: { [key: string]: number } = {}

  for (const letter of cleanWord) {
    letterCounts[letter] = (letterCounts[letter] || 0) + 1
  }

  const result = cleanWord
    .split("")
    .filter((letter, index, self) => {
      return letterCounts[letter] === 1 || self.indexOf(letter) === index
    })
    .join("")

  return result
}

/**
 * Get the first letter of each word in a two-word phrase or just the first letter of a single-word phrase.
 * @param word - The word or phrase to extract letters from.
 * @returns An array with the first letter of each word if there are two words, otherwise just the first letter.
 */
export function getWordRandomKey(word: string): string[] {
  if (word.split(" ").length === 2) {
    if (word[0] === word.split(" ")[1][0]) return [word[0]]

    return [word[0], word.split(" ")[1][0]]
  }

  return [word[0]]
}
