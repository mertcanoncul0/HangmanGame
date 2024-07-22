export type Language = "tr" | "en"

export type CategoriesKey =
  | "movies"
  | "tvShows"
  | "countries"
  | "capitalCities"
  | "animals"
  | "sports"

export type CategoryItem = {
  name: string
}

export type CategoriesData = {
  [lang in Language]: {
    [key in CategoriesKey]: CategoryItem[]
  }
}

export const categories: CategoriesData = {
  en: {
    movies: [
      {
        name: "The Godfather",
      },
      {
        name: "Titanic",
      },
      {
        name: "Inception",
      },
      {
        name: "Gladiator",
      },
      {
        name: "Casablanca",
      },
      {
        name: "Psycho",
      },
      {
        name: "Avatar",
      },
      {
        name: "Jaws",
      },
      {
        name: "Frozen",
      },
      {
        name: "The Matrix",
      },
      {
        name: "Goodfellas",
      },
      {
        name: "Braveheart",
      },
      {
        name: "Fight Club",
      },
      {
        name: "Pulp Fiction",
      },
      {
        name: "Forrest Gump",
      },
      {
        name: "Jurassic Park",
      },
      {
        name: "Blade Runner",
      },
      {
        name: "Star Wars",
      },
      {
        name: "Toy Story",
      },
      {
        name: "Alien",
      },
      {
        name: "Interstellar",
      },
    ],
    tvShows: [
      {
        name: "Breaking Bad",
      },
      {
        name: "Stranger Things",
      },
      {
        name: "Game of Thrones",
      },
      {
        name: "Black Mirror",
      },
      {
        name: "The Office",
      },
      {
        name: "Money Heist",
      },
      {
        name: "Narcos",
      },
      {
        name: "Fargo",
      },
      {
        name: "Better Call Saul",
      },
      {
        name: "Peaky Blinders",
      },
      {
        name: "True Detective",
      },
      {
        name: "The Crown",
      },
      {
        name: "Ozark",
      },
      {
        name: "The Mandalorian",
      },
      {
        name: "Mindhunter",
      },
      {
        name: "Hannibal",
      },
      {
        name: "Vikings",
      },
      {
        name: "The Expanse",
      },
      {
        name: "The Boys",
      },
      {
        name: "Westworld",
      },
    ],
    countries: [
      { name: "Turkey" },
      { name: "Germany" },
      { name: "France" },
      { name: "Italy" },
      { name: "Spain" },
      { name: "Canada" },
      { name: "United Kingdom" },
      { name: "Greece" },
      { name: "Netherlands" },
      { name: "Russia" },
      { name: "Poland" },
      { name: "Austria" },
      { name: "Belgium" },
      { name: "China" },
      { name: "Japan" },
      { name: "South Korea" },
      { name: "Brazil" },
      { name: "Argentina" },
      { name: "Mexico" },
      { name: "South Africa" },
      { name: "Australia" },
    ],
    capitalCities: [
      {
        name: "Ankara",
      },
      {
        name: "Washington DC",
      },
      {
        name: "Buenos Aires",
      },
      {
        name: "New Delhi",
      },
      {
        name: "Brasilia",
      },
      {
        name: "Athens",
      },
      {
        name: "Copenhagen",
      },
      {
        name: "Helsinki",
      },
      {
        name: "Kuala Lumpur",
      },
      {
        name: "Nairobi",
      },
      {
        name: "Oslo",
      },
      {
        name: "Warsaw",
      },
      {
        name: "Manila",
      },
      {
        name: "Seoul",
      },
      {
        name: "Stockholm",
      },
      {
        name: "Tokyo",
      },
      {
        name: "Vienna",
      },
      {
        name: "Amsterdam",
      },
      {
        name: "Prague",
      },
      {
        name: "Sofia",
      },
      {
        name: "Bern",
      },
    ],
    animals: [
      {
        name: "Cat",
      },
      {
        name: "Dog",
      },
      {
        name: "Fox",
      },
      {
        name: "Bear",
      },
      {
        name: "Lion",
      },
      {
        name: "Wolf",
      },
      {
        name: "Deer",
      },
      {
        name: "Seal",
      },
      {
        name: "Tiger",
      },
      {
        name: "Rabbit",
      },
      {
        name: "Horse",
      },
      {
        name: "Elephant",
      },
      {
        name: "Kangaroo",
      },
      {
        name: "Dolphin",
      },
      {
        name: "Penguin",
      },
      {
        name: "Giraffe",
      },
      {
        name: "Goat",
      },
      {
        name: "Panda",
      },
      {
        name: "Parrot",
      },
      {
        name: "Sheep",
      },
    ],
    sports: [
      {
        name: "Soccer",
      },
      {
        name: "Basketball",
      },
      {
        name: "Tennis",
      },
      {
        name: "Baseball",
      },
      {
        name: "Golf",
      },
      {
        name: "Swimming",
      },
      {
        name: "Boxing",
      },
      {
        name: "Cycling",
      },
      {
        name: "Volleyball",
      },
      {
        name: "Rugby",
      },
      {
        name: "Hockey",
      },
      {
        name: "Skiing",
      },
      {
        name: "Gymnastics",
      },
      {
        name: "Wrestling",
      },
      {
        name: "Table Tennis",
      },
      {
        name: "Judo",
      },
      {
        name: "Taekwondo",
      },
      {
        name: "Badminton",
      },
      {
        name: "Fencing",
      },
      {
        name: "Archery",
      },
    ],
  },
  tr: {
    movies: [
      { name: "Recep İvedik" },
      { name: "Düğün Dernek" },
      { name: "Ayla" },
      { name: "Müslüm" },
      { name: "Bergen" },
      { name: "Müslüm" },
      { name: "Aile Arasında" },
      { name: "Arif v 216" },
      { name: "Ailecek Şaşkınız" },
      { name: "GORA" },
      { name: "Mucize" },
      { name: "Eyvah Eyvah" },
      { name: "Vizontele" },
      { name: "Celal ile Ceren" },
      { name: "Issız Adam" },
      { name: "Evim Sensin" },
      { name: "Organize İşler" },
      { name: "Yahşi Batı" },
      { name: "Lohusa" },
      { name: "Yol Arkadaşım" },
      { name: "Deliha" },
      { name: "Beyaz Melek" },
      { name: "Kabadayı" },
      { name: "Baba Parası" },
    ],
    tvShows: [
      { name: "Arka Sokaklar" },
      { name: "Medcezir" },
      { name: "Çukur" },
      { name: "Kurtlar Vadisi" },
      { name: "Gülbeyaz" },
      { name: "Papatyam" },
      { name: "Zalim İstanbul" },
      { name: "Kızılcık Şerbeti" },
      { name: "Kalk Gidelim" },
      { name: "Alev Alev" },
      { name: "Kara Sevda" },
      { name: "Sefirin Kızı" },
      { name: "Savaşçı" },
      { name: "Masumlar Apartmanı" },
      { name: "Şahsiyet" },
      { name: "Menajerimi Ara" },
      { name: "Yasak Elma" },
      { name: "Ramo" },
      { name: "Kardeşlerim" },
    ],
    countries: [
      { name: "Türkiye" },
      { name: "Almanya" },
      { name: "Fransa" },
      { name: "İtalya" },
      { name: "İspanya" },
      { name: "Kanada" },
      { name: "Birleşik Krallık" },
      { name: "Yunanistan" },
      { name: "Hollanda" },
      { name: "Rusya" },
      { name: "Polonya" },
      { name: "Avusturya" },
      { name: "Belçika" },
      { name: "Çin" },
      { name: "Japonya" },
      { name: "Güney Kore" },
      { name: "Brezilya" },
      { name: "Arjantin" },
      { name: "Meksika" },
      { name: "Güney Afrika" },
      { name: "Avustralya" },
    ],
    capitalCities: [
      {
        name: "Ankara",
      },
      {
        name: "Yeni Delhi",
      },
      {
        name: "Brasilia",
      },
      {
        name: "Atina",
      },
      {
        name: "Copenhagen",
      },
      {
        name: "Helsinki",
      },
      {
        name: "Kuala Lumpur",
      },
      {
        name: "Nairobi",
      },
      {
        name: "Oslo",
      },
      {
        name: "Warsaw",
      },
      {
        name: "Stockholm",
      },
      {
        name: "Tokyo",
      },
      {
        name: "Vienna",
      },
      {
        name: "Amsterdam",
      },
      {
        name: "Sofia",
      },
      {
        name: "Bern",
      },
    ],
    animals: [
      { name: "Kedi" },
      { name: "Köpek" },
      { name: "Tilki" },
      { name: "Ayı" },
      { name: "Aslan" },
      { name: "Kurt" },
      { name: "Geyik" },
      { name: "Kaplan" },
      { name: "Tavşan" },
      { name: "At" },
      { name: "Fil" },
      { name: "Kanguru" },
      { name: "Yunus" },
      { name: "Penguen" },
      { name: "Zürafa" },
      { name: "Keçi" },
      { name: "Yılan" },
      { name: "Panda" },
      { name: "Papağan" },
      { name: "Koyun" },
      { name: "Tavşan" },
      { name: "Ördek" },
    ],
    sports: [
      {
        name: "Futbol",
      },
      {
        name: "Basketbol",
      },
      {
        name: "Tenis",
      },
      {
        name: "Beyzbol",
      },
      {
        name: "Golf",
      },
      {
        name: "Yüzme",
      },
      {
        name: "Boks",
      },
      {
        name: "Bisiklet",
      },
      {
        name: "Voleybol",
      },
      {
        name: "Ragbi",
      },
      {
        name: "Buz Hokeyi",
      },
      {
        name: "Kayak",
      },
      {
        name: "Jimnastik",
      },
      {
        name: "Güreş",
      },
      {
        name: "Masa Tenisi",
      },
      {
        name: "Judo",
      },
      {
        name: "Tekvando",
      },
      {
        name: "Badminton",
      },
      {
        name: "Kılıç Kalkan",
      },
      {
        name: "Okçuluk",
      },
    ],
  },
}
