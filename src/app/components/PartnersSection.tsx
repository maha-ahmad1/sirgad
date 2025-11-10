"use client"

import { useState } from "react"
import SuccessStories from "./success-stories"
import Card from "./Card"
import Image from "next/image"
import PartnerForm from "./PartnerForm"
import Footer from "./Footer"

const partners = [
  { name: "Partner 1", logo: "/partners/partners1.png", position: 0 },
  { name: "Partner 2", logo: "/partners/partners2.png", position: 1 },
  { name: "Partner 3", logo: "/partners/partners3.png", position: 2 },
  { name: "Partner 5", logo: "/partners/partners5.png", position: 4 },
  { name: "Partner 6", logo: "/partners/partners6.png", position: 5 },
]

export default function PartnersSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const radii = [90, 150, 210, 270]

  return (
    <section className="relative">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to top, rgba(255,255,255,0) 60%, white 100%),
            linear-gradient(to top, rgba(254,183,27,0.1), transparent 60%),
            linear-gradient(to left, rgba(254,89,89,0.1), transparent 60%),
            linear-gradient(to right, rgba(0,138,171,0.15), transparent 60%)
          `,
          backgroundBlendMode: "screen",
        }}
      />

      <section className="py-20 lg:py-32">
        <SuccessStories />
      </section>

      <section className="container mx-auto px-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("/world.png")`,
            backgroundSize: "100%",
            backgroundPosition: "center 450px",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="relative">
              <div className="absolute -left-2 top-28 -translate-y-1/2 pointer-events-none overflow-hidden">
                <h2
                  className="font-extrabold text-[8rem] lg:text-[10rem] text-transparent select-none whitespace-nowrap leading-none"
                  style={{
                    WebkitTextStroke: "1px #000000",
                    WebkitMaskImage: "linear-gradient(to top, transparent 20%, black 100%)",
                    maskImage: "linear-gradient(to top, transparent 30%, black 100%)",
                  }}
                >
                  Partners
                </h2>
              </div>

              <div className="relative z-10">
                <p
                  className="font-work-sans text-2xl md:text-4xl font-bold mb-20 tracking-wider
                  bg-gradient-to-r from-[rgba(0,138,171,1)] to-[rgba(203,178,100,1)]
                  bg-clip-text text-transparent uppercase"
                >
                  BACKED BY LEADING PARTNERS
                </p>

                <h2 className="w-[120%] font-work-sans text-3xl lg:text-4xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  We proudly collaborate with local and global organizations to empower{" "}
                  <span className="inline-block mt-6">
                    <span className="bg-[#008AAB] text-white px-4 py-2">the next generation of</span>
                  </span>{" "}
                  <span className="inline-block mt-10">
                    <span className="bg-[#008AAB] text-white px-4 py-2">innovators</span>
                  </span>
                </h2>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative w-full flex items-center justify-center">
              <svg className="absolute w-[100%] h-auto pointer-events-none" viewBox="0 0 600 500">
                <defs>
                  <linearGradient id="fadeGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.08" />
                  </linearGradient>
                  <linearGradient id="fadeGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.06" />
                  </linearGradient>
                  <linearGradient id="fadeGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="fadeGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.04" />
                  </linearGradient>

                  <radialGradient id="bgInner" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#C7E0EA" stopOpacity="0" />
                    <stop offset="100%" stopColor="#D6EBF5" stopOpacity="1" />
                  </radialGradient>

                  <radialGradient id="bgMiddle" cx="50%" cy="50%" r="50%">
                    <stop offset="30%" stopColor="#E0EFF8" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#E8F4FA" stopOpacity="0" />
                  </radialGradient>

                  <radialGradient id="bgOuter" cx="50%" cy="50%" r="50%">
                    <stop offset="60%" stopColor="#EEF8FC" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#F5FAFE" stopOpacity="0" />
                  </radialGradient>

                  <radialGradient id="bgOutermost" cx="50%" cy="50%" r="50%">
                    <stop offset="70%" stopColor="#F5FAFE" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#FAFCFD" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <circle cx="300" cy="250" r={90} fill="url(#bgInner)" />
                <circle cx="300" cy="250" r={150} fill="url(#bgMiddle)" />
                <circle cx="300" cy="250" r={210} fill="url(#bgOuter)" />
                <circle cx="300" cy="250" r={270} fill="url(#bgOutermost)" />

                {/* Arc paths */}
                {radii.map((r, idx) => (
                  <path
                    key={idx}
                    d={`M 300 250 m -${r},0 a ${r},${r} 0 1,1 ${r * 2},0`}
                    fill="none"
                    stroke={`url(#fadeGradient${idx + 1})`}
                    strokeWidth="2"
                    strokeDasharray="8,6"
                    strokeLinecap="round"
                  />
                ))}
              </svg>

              <div className="absolute w-32 h-32 mt-6">
                <Image alt="partners" src="/partners/partners5.png" width={400} height={400} />
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
                    <div className="w-24 h-24 rounded-full p-[6px] shadow-xl transition-transform duration-500 flex items-center justify-center animated-gradient-rotate">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <img
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          className="w-14 h-14 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section>
        <Card />
        <PartnerForm />
        <Footer />
      </section>
    </section>
  )
}
