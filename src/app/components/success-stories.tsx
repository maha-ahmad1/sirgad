"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    id: 1,
    name: "OLIVIA",
    subtitle: "Application",
    image: "/olivia-app-mockup.jpg",
    category: "Web Development",
    description: "Fast, secure websites built for your business with modern frameworks and mobile-first design.",
    bgColor: "bg-[#7CB342]",
  },
  {
    id: 2,
    name: "GOVTALK",
    subtitle: "Application",
    image: "/govtalk-app-mockup.jpg",
    category: "Web Development",
    description: "Fast, secure websites built for your business with modern frameworks and mobile-first design.",
    bgColor: "bg-[#26A69A]",
  },
  {
    id: 3,
    name: "CLINCO",
    subtitle: "Application",
    image: "/clinco-app-mockup.jpg",
    category: "Web Development",
    description: "Fast, secure websites built for your business with modern frameworks and mobile-first design.",
    bgColor: "bg-[#2196F3]",
  },
  {
    id: 4,
    name: "ECOMMERCE",
    subtitle: "Platform",
    image: "/ecommerce-mockup.jpg",
    category: "Web Development",
    description: "Fast, secure websites built for your business with modern frameworks and mobile-first design.",
    bgColor: "bg-[#FF9800]",
  },
]

export default function SuccessStories() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = Math.ceil(projects.length / 3)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const currentProjects = projects.slice(currentSlide * 3, currentSlide * 3 + 3)

  return (
    <section className="py-20 -mt-72 relative z-10 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Success <span className="text-[#00A8E8]">Stories</span> 🎉
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Transformative solutions delivering measurable results</p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Project Header */}
              <div className={`${project.bgColor} px-6 py-8 text-white relative`}>
                <h3 className="text-3xl font-bold italic">{project.name}</h3>
                <p className="text-xl italic opacity-90">{project.subtitle}</p>
              </div>

              {/* Project Image */}
              <div className="relative h-64 bg-gray-100">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.name} ${project.subtitle}`}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{project.category}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <Button variant="ghost" size="icon" onClick={prevSlide} className="rounded-full hover:bg-gray-100">
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex items-center gap-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`text-lg font-semibold transition-colors ${
                  index === currentSlide ? "text-[#00A8E8]" : "text-gray-400 hover:text-gray-600"
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
            className="rounded-full bg-[#FDB913] hover:bg-[#FDB913]/90 text-white"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
