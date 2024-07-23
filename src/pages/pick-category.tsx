import { Link } from "react-router-dom"
import { data, LanguageCode } from "../data"
import { useLanguageStore } from "../store/language"
import { HeaderButton } from "../components/ui/header-button"

export function PickCategory() {
  const language = useLanguageStore((state) => state.language) as LanguageCode

  return (
    <>
      <header className="back-header category">
        <HeaderButton as="link" to="/" aria-label="Back Button">
          <img
            src="/images/icon-back.svg"
            alt="Back button"
            width={17}
            height={16}
          />
        </HeaderButton>

        <img
          src={data[language].pickCategory.titleImgPath}
          alt={data[language].pickCategory.title}
          title={data[language].pickCategory.title}
          width={245}
          height={58}
        />
      </header>
      <main>
        <section className="pick-category-wrapper">
          <ul className="pick-category-list">
            {data[language].pickCategory.categories.map((category) => (
              <li key={category.slug} className="pick-category-item">
                <Link
                  to={`/category/${category.slug}`}
                  className="pick-category-link"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
