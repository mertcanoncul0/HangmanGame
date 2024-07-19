export type LanguageCode = "en" | "tr"

export type LanguageData = {
  home: {
    title: string
    button: string
  }

  howToPlay: [
    {
      title: string
      code: string
      body: string
    },
    {
      title: string
      code: string
      body: string
    },
    {
      title: string
      code: string
      body: string
    }
  ]
}

export const data: { [key in LanguageCode]: LanguageData } = {
  en: {
    home: {
      title: "Which language do you want to play in?",
      button: "How to Play",
    },
    howToPlay: [
      {
        code: "01",
        title: "Choose a category",
        body: "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
      },
      {
        title: "Guess letters",
        code: "02",
        body: "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.",
      },
      {
        title: "Win or lose",
        code: "03",
        body: "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
      },
    ],
  },
  tr: {
    home: {
      title: "Hangi dilde oynamak istersiniz?",
      button: "Nasıl Oynanır",
    },
    howToPlay: [
      {
        code: "01",
        title: "Bir kategori seçin",
        body: "İlk olarak, hayvanlar veya filmler gibi bir kelime kategorisi seçin. Bilgisayar daha sonra bu konudan rastgele gizli bir kelime seçer ve kelimenin her harfi için size boşluklar gösterir.",
      },
      {
        code: "02",
        title: "Harfleri tahmin et",
        body: "Sırayla harfleri tahmin edin. Tahmininiz doğruysa bilgisayar ilgili boşlukları doldurur. Yanlışsa, sekiz yanlış tahminden sonra boşalan bir miktar sağlık kaybedersiniz.",
      },
      {
        code: "03",
        title: "Kazanmak ya da kaybetmek",
        body: "Sağlığınız tükenmeden önce kelimedeki tüm harfleri tahmin ederek kazanırsınız. Kelimeyi tahmin etmeden önce sağlık çubuğu boşalırsa kaybedersiniz.",
      },
    ],
  },
}
