import { Link } from "react-router-dom"

type ButtonProps = {
  as?: "button" | "link"
  to?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
} & (
  | { as: "link"; to: string; onClick?: never }
  | { as?: "button"; to?: never; onClick?: () => void }
)

export function HeaderButton({
  as = "button",
  to,
  onClick,
  children,
  className,
  ...props
}: ButtonProps) {
  if (as === "link") {
    return (
      <Link to={to!} className={`header-button ${className}`} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button
      className={`header-button ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
