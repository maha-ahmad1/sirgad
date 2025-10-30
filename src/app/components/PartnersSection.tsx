"use client"

import { useState } from "react"

const partners = [
  { name: "Partner 1", logo: "/partner-logo-1.jpg", position: 0 },
  { name: "Partner 2", logo: "/partner-logo-2.jpg", position: 1 },
  { name: "Partner 3", logo: "/partner-logo-3.jpg", position: 2 },
  { name: "Partner 4", logo: "/partner-logo-4.jpg", position: 3 },
  { name: "Partner 5", logo: "/partner-logo-5.jpg", position: 4 },
  { name: "Partner 6", logo: "/partner-logo-6.jpg", position: 5 },
]

export default function PartnersSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />

      {/* World Map Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cpath d='M200 100 L250 120 L280 100 L300 130 L320 110 L350 140 L380 120 L400 150 M500 200 L550 180 L580 210 L620 190 L650 220 L680 200 L720 230 M100 300 L150 280 L180 310 L220 290 L250 320 L280 300 M700 350 L750 330 L780 360 L820 340 L850 370 L880 350' stroke='%23000' strokeWidth='1' fill='none' opacity='0.3'/%3E%3Ccircle cx='200' cy='100' r='3' fill='%23000' opacity='0.3'/%3E%3Ccircle cx='500' cy='200' r='3' fill='%23000' opacity='0.3'/%3E%3Ccircle cx='700' cy='350' r='3' fill='%23000' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="relative">
            {/* Large "Partners" Background Text - positioned behind left text */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 pointer-events-none overflow-hidden">
              <h2 className="text-[8rem] lg:text-[12rem] font-bold text-gray-200/20 select-none whitespace-nowrap leading-none">
                Partners
              </h2>
            </div>

            {/* Text Content */}
            <div className="relative z-10">
              {/* Subtitle */}
              <p className="text-sm font-semibold tracking-wider mb-6">
                <span className="bg-gradient-to-r from-cyan-600 to-blue-400 bg-clip-text text-transparent">
                  BACKED BY LEADING
                </span>{" "}
                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  PARTNERS
                </span>
              </p>

              {/* Main Heading */}
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                We proudly collaborate with local and global organizations to empower{" "}
                <span className="inline-block mt-2">
                  <span className="bg-cyan-500 text-white px-4 py-2 rounded-lg">the next generation of</span>
                </span>{" "}
                <span className="inline-block mt-2">
                  <span className="bg-cyan-500 text-white px-4 py-2 rounded-lg">innovators</span>
                </span>
              </h2>
            </div>
          </div>

          {/* Right Column - Partner Logos Visualization */}
          <div className="relative w-full h-[500px] flex items-center justify-center">
            {/* SVG Concentric Dashed Arcs */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 600 500"
              style={{ transform: "translate(0, 0)" }}
            >
              <defs>
                {/* Gradient for fading effect on each arc */}
                <linearGradient id="fadeGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient id="fadeGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.04" />
                </linearGradient>
                <linearGradient id="fadeGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.03" />
                </linearGradient>
                <linearGradient id="fadeGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {/* Arc 1 - Innermost (radius ~100) */}
              <path
                d="M 300 250 m -100, 0 a 100,100 0 1,1 200,0"
                fill="none"
                stroke="url(#fadeGradient1)"
                strokeWidth="2"
                strokeDasharray="8,6"
                strokeLinecap="round"
              />

              {/* Arc 2 - Second layer (radius ~150) */}
              <path
                d="M 300 250 m -150, 0 a 150,150 0 1,1 300,0"
                fill="none"
                stroke="url(#fadeGradient2)"
                strokeWidth="2"
                strokeDasharray="8,6"
                strokeLinecap="round"
              />

              {/* Arc 3 - Third layer (radius ~200) */}
              <path
                d="M 300 250 m -200, 0 a 200,200 0 1,1 400,0"
                fill="none"
                stroke="url(#fadeGradient3)"
                strokeWidth="2"
                strokeDasharray="8,6"
                strokeLinecap="round"
              />

              {/* Arc 4 - Outermost (radius ~250) */}
              <path
                d="M 300 250 m -250, 0 a 250,250 0 1,1 500,0"
                fill="none"
                stroke="url(#fadeGradient4)"
                strokeWidth="2"
                strokeDasharray="8,6"
                strokeLinecap="round"
              />
            </svg>

            {/* Central Circle */}
            <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center shadow-lg z-10">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>

            {/* Orbiting Partner Logos */}
            {partners.map((partner, index) => {
              const angle = (index / partners.length) * 2 * Math.PI - Math.PI / 2
              const radius = 220
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              const isHovered = hoveredIndex === index

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-300 ease-out z-20"
                  style={{
                    transform: `translate(${x}px, ${y}px) scale(${isHovered ? 1.1 : 1})`,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center border-4 transition-all duration-300 ${
                      isHovered ? "border-cyan-500" : "border-gray-200"
                    }`}
                  >
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                </div>
              )
            })}

            {/* Connecting Lines from Center to Logos */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ transform: "translate(0, 0)" }}
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              {partners.map((_, index) => {
                const angle = (index / partners.length) * 2 * Math.PI - Math.PI / 2
                const radius = 220
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                return (
                  <line
                    key={index}
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${x}px)`}
                    y2={`calc(50% + ${y}px)`}
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                )
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
