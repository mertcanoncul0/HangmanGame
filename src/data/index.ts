export type LanguageCode = "en" | "tr"

export type LanguageData = {
  home: {
    title: string
    button: string
  }
  howToPlay: {
    cards: {
      title: string
      code: string
      body: string
    }[]
    titleImgPath: string
    title: string
  }
  pickCategory: {
    categories: {
      name: string
      slug: string
    }[]
    titleImgPath: string
    title: string
  }
  modal: {
    paused: {
      titleImgPath: string
      alt: string
      menus: {
        name: string
        to: string
      }[]
    }
    win: {
      titleImgPath: string
      alt: string
      menus: {
        name: string
        to: string
      }[]
    }
    lose: {
      titleImgPath: string
      alt: string
      menus: {
        name: string
        to: string
      }[]
    }
  }
  keyboard: {
    keys: string[]
  }
}

export const data: { [key in LanguageCode]: LanguageData } = {
  en: {
    home: {
      title: "Which language do you want to play in?",
      button: "How to Play",
    },
    howToPlay: {
      cards: [
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
      titleImgPath: "/images/how-to-play.svg",
      title: "How to Play",
    },
    pickCategory: {
      categories: [
        {
          name: "MOVIES",
          slug: "movies",
        },
        {
          name: "TV SHOWS",
          slug: "tv-shows",
        },
        {
          name: "COUNTRIES",
          slug: "countries",
        },
        {
          name: "CAPITAL CITIES",
          slug: "capital-cities",
        },
        {
          name: "ANIMALS",
          slug: "animals",
        },
        {
          name: "SPORTS",
          slug: "sports",
        },
      ],
      titleImgPath: "/images/pick-a-category.svg",
      title: "Pick a Category",
    },
    modal: {
      paused: {
        titleImgPath: "/images/paused.svg",
        alt: "Game Paused",
        menus: [
          {
            name: "Continue",
            to: "#",
          },
          {
            name: "new category",
            to: "/pick-category",
          },
          {
            name: "quit game",
            to: "/",
          },
        ],
      },
      win: {
        titleImgPath: "/images/you-win.svg",
        alt: "You Win",
        menus: [
          {
            name: "play again!",
            to: "again",
          },
          {
            name: "new category",
            to: "/pick-category",
          },
          {
            name: "quit game",
            to: "/",
          },
        ],
      },
      lose: {
        titleImgPath: "/images/you-lose.svg",
        alt: "You Lose",
        menus: [
          {
            name: "play again!",
            to: "again",
          },
          {
            name: "new category",
            to: "/pick-category",
          },
          {
            name: "quit game",
            to: "/",
          },
        ],
      },
    },
    keyboard: {
      keys: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ],
    },
  },
  tr: {
    home: {
      title: "Hangi dilde oynamak istersiniz?",
      button: "Nasıl Oynanır",
    },
    howToPlay: {
      cards: [
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
      titleImgPath: "/images/nasil-oynanir.svg",
      title: "Nasıl Oynanır",
    },
    pickCategory: {
      categories: [
        {
          name: "FİLMLER",
          slug: "movies",
        },
        {
          name: "TV ŞOVLARI",
          slug: "tv-shows",
        },
        {
          name: "ÜLKELER",
          slug: "countries",
        },
        {
          name: "BAŞKENTLER",
          slug: "capital-cities",
        },
        {
          name: "HAYVANLAR",
          slug: "animals",
        },
        {
          name: "SPORLAR",
          slug: "sports",
        },
      ],
      titleImgPath: "/images/bir-kategori-secin.svg",
      title: "Bir Kategori Seçin",
    },
    modal: {
      paused: {
        titleImgPath: "/images/duraklat.svg",
        alt: "Duraklat",
        menus: [
          {
            name: "devam et",
            to: "#",
          },
          {
            name: "yeni̇ kategori̇",
            to: "/pick-category",
          },
          {
            name: "oyundan çık",
            to: "/",
          },
        ],
      },
      win: {
        titleImgPath: "/images/kazandin.svg",
        alt: "Kazandın",
        menus: [
          {
            name: "devam et",
            to: "#",
          },
          {
            name: "yeni̇ kategori̇",
            to: "/pick-category",
          },
          {
            name: "oyundan çık",
            to: "/",
          },
        ],
      },
      lose: {
        titleImgPath: "/images/kaybettin.svg",
        alt: "Kaybettin",
        menus: [
          {
            name: "devam et",
            to: "#",
          },
          {
            name: "yeni̇ kategori̇",
            to: "/pick-category",
          },
          {
            name: "oyundan çık",
            to: "/",
          },
        ],
      },
    },
    keyboard: {
      keys: [
        "a",
        "b",
        "c",
        "ç",
        "d",
        "e",
        "f",
        "g",
        "ğ",
        "h",
        "ı",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "ö",
        "p",
        "r",
        "s",
        "ş",
        "t",
        "u",
        "ü",
        "v",
        "y",
        "z",
      ],
    },
  },
}
