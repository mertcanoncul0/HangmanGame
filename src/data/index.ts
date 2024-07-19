export type LanguageCode = "en" | "tr"

export type LanguageData = {
  home: {
    title: string
    button: string
  }
}

export const data: { [key in LanguageCode]: LanguageData } = {
  en: {
    home: {
      title: "Which language do you want to play in?",
      button: "How to Play",
    },
  },
  tr: {
    home: {
      title: "Hangi dilde oynamak istersiniz?",
      button: "Nasıl Oynanır",
    },
  },
}
