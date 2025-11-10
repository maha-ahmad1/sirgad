"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
];

export default function TrustedPartnerships() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonials.length;

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (index: number) => setCurrentIndex(index);

  return (
    <section className=" pt-12 md:pt-20 lg:pt-60 relative bg-white min-h-screen md:min-h-[800px] lg:min-h-[1000px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Group.png')" }}
      />

      <div className="container relative px-4 md:px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-0 mx-auto max-w-8xl ">
        <div className="relative z-10 w-full lg:w-[60%] lg:pr-20 pb-8 md:pb-12 lg:pb-20 text-center lg:text-left">
          <h2 className="font-work-sans font-extrabold text-2xl md:text-3xl lg:text-5xl   mb-3 md:mb-4">
            Trusted <span className="text-[#00A8E8]">Partner</span>
            <span className="text-[#030303]">ships</span>
          </h2>
          <p className=" font-work-sans font-medium text-sm md:text-base text-gray-500 leading-relaxed">
            Hear directly from the businesses we have transformed. SIRGAD has
            demonstrated their professionalism and fulfilled all obligations
            according to foreseen.
          </p>
        </div>

        <div className="relative w-full lg:w-auto overflow-hidden">
          {/* Cards Wrapper */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 50}%)`,
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="relative min-w-[80%] md:min-w-[65%] p-[2px] rounded-2xl mx-2 shadow-sm hover:shadow-md transition-all bg-gradient-to-b from-[rgba(0,174,239,1)] to-[rgba(0,104,169,1)]"
              >
                <div className="bg-[#D6F2FB] rounded-2xl p-6  h-full relative border-2 border-transparent">
                  {/* أيقونة الاقتباس */}
                  <div className="absolute top-0 right-6 translate-y-[-50%] w-12 h-12 rounded-full bg-[#00A8E8] flex items-center justify-center shadow-md z-10">
                    <Quote className="w-6 h-6 text-white fill-white" />
                  </div>

                  <p className="font-work-sans font-medium  text-xl md:text-base text-[#222222] mb-4 md:mb-6 leading-relaxed pr-10">
                    {t.text}
                  </p>

                  <div className="border-t border-dashed border-[#22222266] my-3 md:my-4"></div>

                  <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <Image
                        src={t.image || "/placeholder.svg"}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-work-sans font-normal md:text-lg text-gray-900 text-sm truncate">
                        {t.name}
                      </h4>
                      <p className="text-xs font-normal md:text-md text-[#222222CC] flex items-center gap-1">
                        📅 {t.date}
                      </p>
                    </div>

                    <div className="flex gap-1 flex-shrink-0">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 md:w-5 h-4 md:h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-12 lg:mt-20 gap-6 md:gap-4">
            <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap md:flex-nowrap">
              {/* Pagination Numbers */}
              <div className="flex items-center gap-2 md:gap-3">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`font-semibold transition-all ${
                      currentIndex === index
                        ? "text-gray-900 text-xl md:text-3xl"
                        : "text-gray-400 hover:text-gray-600 text-lg"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="hidden md:block w-40 lg:w-60 h-1 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#CDA63D] transition-all duration-300"
                  style={{
                    width: `${((currentIndex + 1) / totalSlides) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="rounded-full w-10 h-10 border-1 border-[#CDA63D] hover:text-white text-[#52525299]/60 hover:bg-[#CDA63D]/90"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="rounded-full w-10 h-10 border-[#CDA63D] hover:bg-[#CDA63D]/90 text-[#52525299]/60 hover:text-white border-1"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
