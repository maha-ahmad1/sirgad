"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { services } from "../constants/services";




export default function CoreSolutionsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const totalSlides = Math.ceil(services.length / 3);
  const locale = useLocale();
  const isRTL = locale === "ar";
  const t = useTranslations("coreSolutions");

  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (i: number) => setCurrentSlide(i);

  const getVisibleServices = () => {
    const startIndex = currentSlide * 3;
    return services.slice(startIndex, startIndex + 3);
  };

  // Drag and Scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply for faster scrolling
    
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <section className="grid lg:grid-cols-[40%_60%] min-h-[800px] overflow-visible" id="solutions">
      <div className="relative bg-gray-900 flex items-center justify-center p-8 lg:p-16 overflow-hidden z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/team.png')" }}
        />
        <div className="relative z-10 max-w-lg">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-lg lg:text-3xl text-[#FFFFFFB2] w-3/5 font-bold leading-[1.4]">
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative bg-gradient-to-l from-[#005E9F] to-[#1ECCFF] flex flex-col items-center justify-center p-8 lg:p-16 overflow-visible">
        {/* Decorative Dots */}
        <div className="absolute top-20 right-0 grid grid-cols-3 gap-2">
          <Image src="/dots.png" alt="dot image" width={120} height={150} />
        </div>

        {/* Cards Container with Drag Support */}
        <div className="w-full max-w-5xl relative">
          <div
            ref={carouselRef}
            className={`grid md:grid-cols-3 gap-6 pb-20 pt-20 ${
              isRTL ? "lg:-mr-60" : "lg:-ml-60"
            } relative z-20 select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ userSelect: 'none' }}
          >
            {getVisibleServices().map((service, index) => (
              <Card
                key={service.id}
                className={`overflow-hidden shadow-lg hover:shadow-xl transition-shadow rounded-[18px] ${
                  index === 0 ? "" : ""
                } ${isDragging ? 'transition-none' : 'transition-transform duration-300'}`}
              >
                <CardContent className="px-4">
                  <div className="bg-gray-100 overflow-hidden rounded-[18px]">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={t(service.title)}
                      className="w-full h-60 object-cover"
                      width={1000}
                      height={1000}
                      draggable={false}
                    />
                  </div>
                  <div className="pt-6 h-40">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {t(service.title)}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {t(service.description)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`font-semibold transition-all ${
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
                onClick={isRTL ? nextSlide : prevSlide}
                className="rounded-full border-2 border-white/40 text-white hover:bg-white/20 hover:text-white"
                aria-label={isRTL ? "Next slide" : "Previous slide"}
              >
                {isRTL ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={isRTL ? prevSlide : nextSlide}
                className="rounded-full border-2 border-white/40 text-white hover:bg-white/20 hover:text-white"
                aria-label={isRTL ? "Previous slide" : "Next slide"}
              >
                {isRTL ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}