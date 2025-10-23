"use client"

export function HexagonalPattern() {
  return (
    <div className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none z-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {/* Large hexagon 1 */}
        <polygon
          points="150,50 250,110 250,230 150,290 50,230 50,110"
          fill="none"
          stroke="white"
          strokeWidth="2"
          opacity="0.15"
        />

        {/* Large hexagon 2 - slightly rotated and offset */}
        <polygon
          points="280,80 380,140 380,260 280,320 180,260 180,140"
          fill="none"
          stroke="white"
          strokeWidth="2"
          opacity="0.12"
          transform="rotate(15 280 200)"
        />

        {/* Large hexagon 3 - overlapping */}
        <polygon
          points="100,200 200,260 200,380 100,440 0,380 0,260"
          fill="none"
          stroke="white"
          strokeWidth="2"
          opacity="0.1"
        />

        {/* Large hexagon 4 - top right area */}
        <polygon
          points="350,20 450,80 450,200 350,260 250,200 250,80"
          fill="none"
          stroke="white"
          strokeWidth="2"
          opacity="0.13"
          transform="rotate(-10 350 140)"
        />
      </svg>
    </div>
  )
}
