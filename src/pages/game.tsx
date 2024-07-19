import { useLoaderData } from "react-router-dom"

export function loader({ params }: { params: object }) {
  return params
}

export function Game() {
  const { slug } = useLoaderData() as { slug: string }

  console.log(slug)

  return (
    <div>
      <h1>Game Page</h1>
    </div>
  )
}
