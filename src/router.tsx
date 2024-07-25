import { createBrowserRouter } from "react-router-dom"
import { App } from "./app"
import { LanguageProvider } from "./providers/language-provider"
import { HowToPlay } from "./pages/how-to-play"
import { PickCategory } from "./pages/pick-category"
import { Game, loader as gameLoader } from "./pages/game"
import ErrorPage from "./pages/error-page"

type Router = ReturnType<typeof createBrowserRouter>

export const router: Router = createBrowserRouter([
  {
    path: "/",
    element: <LanguageProvider Component={App} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/how-to-play",
    element: <LanguageProvider Component={HowToPlay} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pick-category",
    element: <LanguageProvider Component={PickCategory} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/category/:slug",
    element: <LanguageProvider Component={Game} />,
    loader: gameLoader,
    errorElement: <ErrorPage />,
  },
])
