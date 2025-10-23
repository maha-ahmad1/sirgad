import Image from "next/image"
import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 via-teal-400 to-yellow-400 bg-clip-text text-transparent">
              Who are we?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Visionaries crafting digital futures since 2013</span>
              <br />
              <br />
              Visionaries crafting digital futures since 2013. We are a team of passionate technologists, designers, and
              strategists dedicated to transforming businesses through innovative IT solutions. Our expertise spans
              cloud infrastructure, cybersecurity, AI integration, and custom software development.
              <br />
              <br />
              With over a decade of experience, we've helped hundreds of companies navigate digital transformation,
              optimize their operations, and achieve measurable growth. Our approach combines cutting-edge technology
              with deep industry knowledge to deliver solutions that drive real business value.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6 ">
              <div className="">
                <div className="text-7xl font-bold relative mb-4">
                  <span
                    className="bg-gradient-to-r from-cyan-500 via-teal-400 to-yellow-400 bg-clip-text text-transparent"
                    style={{
                      WebkitTextStroke: "2px transparent",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      paintOrder: "stroke fill",
                      strokeWidth: "2px",
                      stroke: "url(#gradient)",
                    }}
                  >
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="50%" stopColor="#14b8a6" />
                          <stop offset="100%" stopColor="#facc15" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 200 80"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <text
                        x="25%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        fontSize="80"
                        fontWeight="bold"
                        fontFamily="system-ui, -apple-system, sans-serif"
                      >
                        +3000
                      </text>
                    </svg>
                    <span className="opacity-0 ">+3000</span>
                  </span>
                </div>
                <div className="text-lg text-[#222222] mt-2">Satisfied Clients</div>
              </div>
              <div className="">
                <div className="text-7xl font-bold relative mb-4">
                  <span
                    className="bg-gradient-to-r from-cyan-500 via-teal-400 to-yellow-400 bg-clip-text text-transparent"
                    style={{
                      WebkitTextStroke: "2px transparent",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      paintOrder: "stroke fill",
                      strokeWidth: "2px",
                      stroke: "url(#gradient2)",
                    }}
                  >
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="50%" stopColor="#14b8a6" />
                          <stop offset="100%" stopColor="#facc15" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 200 80"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <text
                        x="8%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        fontSize="80"
                        fontWeight="bold"
                        fontFamily="system-ui, -apple-system, sans-serif"
                      >
                        +20
                      </text>
                    </svg>
                    <span className="opacity-0">+20</span>
                  </span>
                </div>
                <div className="text-lg  mt-2 text-[#222222]">Years Innovating</div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image src="/team.png" alt="Our Team" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
