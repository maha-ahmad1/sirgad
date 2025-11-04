"use client";

import { useState } from "react";
import SuccessStories from "./success-stories";
import Card from "./Card";
import Image from "next/image";



const partners = [
  { name: "Partner 1", logo: "/partners/partners1.png", position: 0 },
  { name: "Partner 2", logo: "/partners/partners2.png", position: 1 },
  { name: "Partner 3", logo: "/partners/partners3.png", position: 2 },
  { name: "Partner 4", logo: "/partners/partners4.png", position: 3 },
  { name: "Partner 5", logo: "/partners/partners5.png", position: 4 },
  { name: "Partner 6", logo: "/partners/partners6.png", position: 5 },
];

export default function PartnersSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 lg:py-32 ">
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

      <section>
        <SuccessStories />
      </section>

      <section className=" ">
        {" "}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("/world.png")`,
            backgroundSize: "100% ",
            backgroundPosition: "center 450px",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="relative">
              {/* Large "Partners" Background Text - positioned behind left text */}
              <div className="absolute -left-8 top-28 -translate-y-1/2 pointer-events-none overflow-hidden">
                <h2
                  className="text-[8rem] lg:text-[10rem]  text-transparent select-none whitespace-nowrap leading-none"
                  style={{
                    WebkitTextStroke: "1px rgba(0, 0, 0, 1)", 
                    WebkitMaskImage:
                      "linear-gradient(to top, transparent 20%, black 100%)",
                    maskImage:
                      "linear-gradient(to top, transparent 30%, black 100%)",
                  }}
                >
                  Partners
                </h2>
              </div>

              <div className="relative z-10">
                <p
                  className="text-2xl md:text-3xl font-extrabold mb-20 tracking-wider
          bg-gradient-to-r from-[rgba(0,138,171,1)] to-[rgba(203,178,100,1)]
          bg-clip-text text-transparent uppercase "
                >
                  BACKED BY LEADING PARTNERS
                </p>

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                  We proudly collaborate with local and global organizations to
                  empower{" "}
                  <span className="inline-block mt-6">
                    <span className="bg-cyan-500 text-white px-4 py-2 rounded-lg">
                      the next generation of
                    </span>
                  </span>{" "}
                  <span className="inline-block mt-8">
                    <span className="bg-cyan-500 text-white px-4 py-2 rounded-lg">
                      innovators
                    </span>
                  </span>
                </h2>
              </div>
            </div>

            {/* Right Column - Partner Logos Visualization */}
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* SVG Concentric Dashed Arcs */}
              <svg
                className="absolute inset-0  pointer-events-none"
                viewBox="0 0 600 500"
                style={{ transform: "translate(0, 0)" }}
              >
                <defs>
                  {/* Gradient for fading effect on each arc */}
                  <linearGradient
                    id="fadeGradient1"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop
                      offset="100%"
                      stopColor="#3b82f6"
                      stopOpacity="0.05"
                    />
                  </linearGradient>
                  <linearGradient
                    id="fadeGradient2"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
                    <stop
                      offset="100%"
                      stopColor="#06b6d4"
                      stopOpacity="0.04"
                    />
                  </linearGradient>
                  <linearGradient
                    id="fadeGradient3"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop
                      offset="100%"
                      stopColor="#3b82f6"
                      stopOpacity="0.03"
                    />
                  </linearGradient>
                  <linearGradient
                    id="fadeGradient4"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
                    <stop
                      offset="100%"
                      stopColor="#06b6d4"
                      stopOpacity="0.02"
                    />
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
              <div className="absolute w-32 h-32 mt-32">
                
                  {/* <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  /> */}
                    <Image alt="partners" src="/partners/partners5.png" width={400} height={400} />

              </div>

              {/* Orbiting Partner Logos */}
              {partners.map((partner, index) => {
                const angle =
                  (index / partners.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 220;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const isHovered = hoveredIndex === index;

                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-300 ease-out z-20"
                    style={{
                      transform: `translate(${x}px, ${y}px) scale(${
                        isHovered ? 1.1 : 1
                      })`,
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* 🌈 إطار دائري متدرج دوار */}
                    <div
                      className={`w-24 h-24 rounded-full p-[6px] shadow-xl transition-transform duration-500 flex items-center justify-center animated-gradient-rotate`}
                    >
                      {/* الدائرة الداخلية البيضاء */}
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <img
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          className="w-14 h-14 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Connecting Lines from Center to Logos */}
              {/* <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ transform: "translate(0, 0)" }}
              >
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                    <stop
                      offset="100%"
                      stopColor="#06b6d4"
                      stopOpacity="0.15"
                    />
                  </linearGradient>
                </defs>
                {partners.map((_, index) => {
                  const angle =
                    (index / partners.length) * 2 * Math.PI - Math.PI / 2;
                  const radius = 220;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

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
                  );
                })}
              </svg> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <Card />
      </section>
    </section>
  );
}
