"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Shams Samir Hassan",
    date: "25 Jul 2025",
    rating: 5,
    text: "SIRGAD has demonstrated their professionalism and fulfilled all obligations according to between.",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 2,
    name: "Ahmed Ali",
    date: "18 Jun 2025",
    rating: 5,
    text: "Outstanding service and exceptional quality. The team exceeded our expectations in every way.",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 3,
    name: "Sara Mohammed",
    date: "10 May 2025",
    rating: 5,
    text: "Professional team with great attention to detail. Highly recommend their services.",
    avatar: "/placeholder.svg?height=50&width=50",
  },
]

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-background via-background to-muted">
      <div className="absolute top-8 right-8 opacity-20">
        <div className="grid grid-cols-6 gap-3">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary" />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#00AEEF] to-[#FEB71B] bg-clip-text text-transparent">Trusted</span>{" "}
          <span className="bg-gradient-to-r from-[#00AEEF] to-[#FEB71B] bg-clip-text text-transparent">
            Partnerships
          </span>
        </h2>

        <div className="relative mt-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card border border-border rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                    <p className="text-lg text-muted-foreground mb-6 italic">{testimonial.text}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <span key={i} className="text-yellow-500 text-xl">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="text-primary hover:bg-primary/10 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`font-medium transition-all ${
                    index === currentSlide
                      ? "text-2xl text-primary"
                      : "text-lg text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="text-primary hover:bg-primary/10 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
