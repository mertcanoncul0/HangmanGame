type GameCardProps = {
  imagePath: string
  alt: string
  w: number
  h: number
  children: React.ReactNode
  className?: string
  cardHeight: number
  open: boolean
}

export function GameCard({
  imagePath,
  alt,
  w,
  h,
  children,
  className = "",
  cardHeight,
  open,
}: GameCardProps) {
  return (
    <div
      className={`game-card ${open ? "show" : ""} ${className}`}
      style={{ height: cardHeight }}
    >
      <img
        src={imagePath}
        alt={alt}
        title={alt}
        className="logo"
        width={w}
        height={h}
      />

      {children}
    </div>
  )
}
