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
  children,
  className = "",
  cardHeight,
  open,
  w,
  h,
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
        width={w}
        height={h}
        className="logo"
      />

      {children}
    </div>
  )
}
