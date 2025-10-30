"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Fast, secure websites built for your business with modern frameworks and mobile-first design.",
    image: "/image1.png",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Fast, secure websites built for your business with modern frameworks and mobile-first design.",
    image: "/image2.png",
  },
  {
    id: 3,
    title: "Custom Software",
    description:
      "Fast, secure websites built for your business with modern frameworks and mobile-first design.",
    image: "/image3.png",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and services to power your digital transformation.",
    image: "/image3.png",
  },
  {
    id: 5,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed to delight users and drive engagement.",
    image: "/image2.png",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies to grow your brand and reach your target audience.",
    image: "/image3.png",
  },
];

export default function CoreSolutionsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(services.length / 3);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentSlide((p) => (p - 1 + totalSlides) % totalSlides);
  const goToSlide = (i: number) => setCurrentSlide(i);

  const getVisibleServices = () => {
    const startIndex = currentSlide * 3;
    return services.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="grid lg:grid-cols-[40%_60%] min-h-[800px] overflow-visible">
      <div className="relative bg-gray-900 flex items-center justify-center p-8 lg:p-16 overflow-hidden z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/team.png')" }}
        />
        <div className="relative z-10 max-w-lg">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Core Solutions
          </h2>
          <p className="text-lg lg:text-3xl text-[#FFFFFFB2] w-3/5 font-bold leading-[1.4]">
            Comprehensive Digital Services to Your ambitions{" "}
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative bg-gradient-to-l from-[#005E9F] to-[#1ECCFF] flex flex-col items-center justify-center p-8 lg:p-16  overflow-visible">
        {/* Decorative Dots */}
        <div className="absolute top-20 right-0 grid grid-cols-3 gap-2">
          <Image src="/dots.png" alt="dot image" width={120} height={150} />
        </div>

        {/* Cards */}
        <div className="w-full max-w-5xl relative  ">
          <div className="grid md:grid-cols-3 gap-6 pb-20 pt-20 lg:-ml-60 relative z-20 ">
            {getVisibleServices().map((service, index) => (
              <Card
                key={service.id}
                className={`overflow-hidden shadow-lg hover:shadow-xl transition-shadow rounded-[18px] ${
                  index === 0 ? "" : ""
                }`}
              >
                <CardContent className="px-4 ">
                  <div className=" bg-gray-100 overflow-hidden rounded-[18px]">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-60"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="pt-6 h-40">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between gap-6 ">
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={` font-semibold transition-all ${
                      currentSlide === index
                        ? "text-white text-3xl"
                        : "text-white/60 hover:text-white/80 text-xl"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <div className="hidden md:block w-60 h-1 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-300"
                  style={{
                    width: `${((currentSlide + 1) / totalSlides) * 100}%`,
                  }}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="rounded-full border-2 border-white/40 text-white hover:bg-white/20 hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="rounded-full border-2 border-white/40 text-white hover:bg-white/20 hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
