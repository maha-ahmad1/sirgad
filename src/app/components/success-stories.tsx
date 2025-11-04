"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "OLIVIA",
    subtitle: "Application",
    image: "/imagehero1.png",
    category: "Web Development",
    description:
      "Fast, secure websites built for your business with modern frameworks and mobile-first design.",
    bgColor: "bg-[#7CB342]",
  },
  {
    id: 2,
    name: "GOVTALK",
    subtitle: "Application",
    image: "/imagehero2.png",
    category: "Web Development",
    description:
      "Fast, secure websites built for your business with modern frameworks and mobile-first design.",
    bgColor: "bg-[#26A69A]",
  },
  {
    id: 3,
    name: "CLINCO",
    subtitle: "Application",
    image: "/imagehero3.png",
    category: "Web Development",
    description:
      "Fast, secure websites built for your business with modern frameworks and mobile-first design.",
    bgColor: "bg-[#2196F3]",
  },
  {
    id: 4,
    name: "ECOMMERCE",
    subtitle: "Platform",
    image: "/imagehero1.png",
    category: "Web Development",
    description:
      "Fast, secure websites built for your business with modern frameworks and mobile-first design.",
    bgColor: "bg-[#FF9800]",
  },
];

export default function SuccessStories() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(projects.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentProjects = projects.slice(
    currentSlide * 3,
    currentSlide * 3 + 3
  );

  return (
    <section className="py-20 -mt-120 relative z-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Success <span className="text-[#00A8E8]">Stories</span> 🎉
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transformative solutions delivering measurable results
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col"
            >
              <div
                className={`${project.bgColor} px-6 py-8 text-white relative text-center`}
              >
                <h3 className="text-3xl font-bold italic">{project.name}</h3>
                <p className="text-xl italic opacity-90">{project.subtitle}</p>
              </div>

              <div
                className={`relative flex-grow ${project.bgColor} flex items-end`}
              >
                <div
                  className={`relative flex-grow ${project.bgColor} flex items-end px-4`}
                >
                  <div className="w-full h-55 relative overflow-hidden rounded-t-2xl">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.name} ${project.subtitle}`}
                      fill
                      className="object-cover object-bottom rounded-t-2xl"
                    />
                  </div>
                </div>

                {/* <div className="w-full h-48  relative ">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.name} ${project.subtitle}`}
                    fill
                    className="object-cover bject-bottom"
                  />
                </div> */}
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{project.category}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-end gap-2 pr-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="rounded-full w-10 h-10 border-2 border-[#CDA63D] hover:text-white  hover:bg-[#CDA63D]/90"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="rounded-full  w-10 h-10 bg-[#CDA63D] hover:bg-[#CDA63D]/90 hover:text-white border-0"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
