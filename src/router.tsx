import { createBrowserRouter } from "react-router-dom"
import { App } from "./app"
import { LanguageProvider } from "./providers/language-provider"
import { HowToPlay } from "./pages/how-to-play"
import { PickCategory } from "./pages/pick-category"
import { Game, loader as gameLoader } from "./pages/game"

type Router = ReturnType<typeof createBrowserRouter>

export const router: Router = createBrowserRouter([
  {
    path: "/",
    element: <LanguageProvider Component={App} />,
  },
  {
    path: "/how-to-play",
    element: <LanguageProvider Component={HowToPlay} />,
  },
  {
    path: "/pick-category",
    element: <LanguageProvider Component={PickCategory} />,
  },
  {
    path: "/category/:slug",
    element: <LanguageProvider Component={Game} />,
    loader: gameLoader,
  },
])
