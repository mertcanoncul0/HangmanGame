import { Link } from "react-router-dom"

export function HeaderAndBackButton({
  backHref,
  title,
}: {
  backHref: string
  title: string
}) {
  return (
    <header>
      <Link to={backHref} className='back-button'>
        <img src='/images/icon-back.svg' alt='Back button' />
      </Link>
      <h1>{title}</h1>
    </header>
  )
}
