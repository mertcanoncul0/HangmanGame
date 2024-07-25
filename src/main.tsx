import { render } from "preact"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./router.tsx"
import { Analytics } from "@vercel/analytics/react"

render(
  <>
    <RouterProvider router={router} />
    <Analytics />
  </>,
  document.getElementById("app")!
)
