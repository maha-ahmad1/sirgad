"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    text: "SIRGAD has demonstrated their professionalism and fulfilled all obligations according to foreseen.",
    name: "Shams Samir Hassan",
    date: "03 Jan 2025",
    image: "/image1.png",
    rating: 5,
  },
  {
    id: 2,
    text: "Working with SIRGAD transformed our business operations. Their expertise and dedication exceeded our expectations.",
    name: "Ahmed Mohammed",
    date: "10 Jan 2025",
    image: "/image2.png",
    rating: 5,
  },
  {
    id: 3,
    text: "The team at SIRGAD delivered exceptional results. Professional, timely, and highly skilled in their craft.",
    name: "Fatima Ali",
    date: "15 Jan 2025",
    image: "/image3.png",
    rating: 5,
  },
  {
    id: 4,
    text: "SIRGAD consistently goes above and beyond. Their innovative approach helped us scale efficiently.",
    name: "Omar Khaled",
    date: "20 Jan 2025",
    image: "/image4.png",
    rating: 5,
  },
]

export default function TrustedPartnerships() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = testimonials.length

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) setCurrentIndex((prev) => prev + 1)
  }

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1)
  }

  const goToSlide = (index: number) => setCurrentIndex(index)

  return (
    <section className="pt-40 relative bg-white min-h-[800px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: "url('/Group.png')" }}
      />

      <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="relative z-10 max-w-md">
          <Quote className="w-10 h-10 text-[#00A8E8] mb-3" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted <span className="text-[#00A8E8]">Partnerships</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Hear directly from the businesses we’ve transformed. SIRGAD has demonstrated their professionalism and
            fulfilled all obligations according to foreseen.
          </p>
        </div>

        {/* Right Carousel */}
        <div className="relative overflow-hidden">
          {/* Cards Wrapper */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 55}%)`,
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="min-w-[80%] md:min-w-[55%] bg-white/95 border-2 border-[#00A8E8] rounded-2xl p-8 mx-4 shadow-sm hover:shadow-md transition-all relative"
              >
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#00A8E8] flex items-center justify-center">
                  <Quote className="w-5 h-5 text-white fill-white" />
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed pr-10">{t.text}</p>

                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500 flex items-center gap-1">📅 {t.date}</p>
                  </div>

                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls — same style as your previous code */}
          <div className="flex items-center justify-center gap-6 mt-10">
            {/* Pagination Numbers */}
            <div className="flex items-center gap-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`text-lg font-semibold transition-all ${
                    currentIndex === index ? "text-gray-900 text-2xl" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="hidden md:block w-32 h-0.5 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#FDB913] transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
              />
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="rounded-full border-2 border-gray-300 hover:bg-gray-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="rounded-full bg-[#FDB913] hover:bg-[#FDB913]/90 text-white border-0"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
