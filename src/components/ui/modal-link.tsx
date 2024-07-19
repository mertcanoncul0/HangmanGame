import { Link } from "react-router-dom"

type ModalLinkProps = {
  to: string
  name: string
  className?: string
  onClick?: () => void
}

export function ModalLink({
  to,
  name,
  className = "",
  onClick,
}: ModalLinkProps) {
  return (
    <Link
      to={to}
      className={`modal-menu-link heading-sm ${className}`}
      title={name}
      onClick={onClick}
    >
      {name}
    </Link>
  )
}
