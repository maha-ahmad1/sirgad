export function DotGrid() {
  return (
    <div
      className="absolute top-32 right-32 w-16 h-20 opacity-40"
      style={{
        backgroundImage: `radial-gradient(circle, currentColor 1.5px, transparent 1.5px)`,
        backgroundSize: "12px 12px",
      }}
      aria-hidden="true"
    />
  )
}
