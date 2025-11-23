"use client";

import { useState } from "react";
import SuccessStories from "./success-stories";
import Card from "./Card";
import Image from "next/image";
import PartnerForm from "./PartnerForm";
import Footer from "./Footer";
import { useLocale, useTranslations } from "next-intl";
import { partners } from "../constants/partners";



export default function PartnersSection() {
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const t = useTranslations("partners");
  const radii = [70, 130, 190, 250];

  return (
    <section className="relative w-full  ">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 dark:hidden"
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

      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: `
      linear-gradient(to top, rgba(37,37,38,0) 60%, rgba(37,37,38,1) 100%),
      linear-gradient(to top, rgba(37,37,38,0.9), rgba(37,37,38,1) 60%),
      linear-gradient(to left, rgba(254,89,89,0.1), transparent 60%),
      linear-gradient(to right, rgba(0,138,171,0.15), transparent 60%)
    `,
          backgroundBlendMode: "normal",
        }}
      />

      {/* Success Stories Section */}
      <section className="py-12 sm:py-16 lg:py-24 w-full">
        <div className="max-w-[1920px] mx-auto w-full ">
          <div className="px-4 sm:px-6 lg:px-8">
            <SuccessStories />
          </div>
        </div>
      </section>

      {/* Main Partners Content */}
      <section className="w-full ">
        <div className="max-w-[1920px] mx-auto w-full container-1920 ">
          <div className="px-4 sm:px-6 lg:px-8">
            {/* World Map Background */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("/world.png")`,
                backgroundSize: "clamp(100%, 1200px, 100%)",
                backgroundPosition: "center clamp(300px, 40vw, 450px)",
                backgroundRepeat: "no-repeat",
              }}
            />

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Column */}
                <div className="relative">
                  <div
                    className={`absolute  top-24 sm:top-28 -translate-y-1/2 pointer-events-none overflow-hidden ${
                      isRTL ? "-right-2 sm:-right-4 " : "-left-2 sm:-left-4 "
                    }`}
                  >
                    <h2
                      className={`font-extrabold text-[4rem] sm:text-[6rem] lg:text-[8rem] xl:text-[10rem] text-transparent select-none whitespace-nowrap leading-none `}
                      style={{
                        WebkitTextStroke:
                          typeof window !== "undefined" &&
                          document.documentElement.classList.contains("dark")
                            ? "1px #FFFFFFB2"
                            : "1px #000000",
                        WebkitMaskImage:
                          "linear-gradient(to top, transparent 20%, black 100%)",
                        maskImage:
                          "linear-gradient(to top, transparent 30%, black 100%)",
                      }}
                    >
                      {t("partners")}
                    </h2>
                  </div>

                  <div className="relative z-10 mt-8 sm:mt-0">
                    <p className="font-work-sans text-2xl sm:text-3xl lg:text-responsive-4xl font-bold mb-12 sm:mb-16 lg:mb-20 tracking-wider uppercase">
                      <span className="bg-gradient-to-r from-[rgba(0,138,171,1)] to-[rgba(203,178,100,1)] bg-clip-text text-transparent">
                        {t("backedBy")}
                      </span>
                    </p>

                    <h2 className="w-full dark:text-white font-work-sans text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-responsive-6xl font-bold text-gray-900 leading-tight">
                      {t("title1")}
                    </h2>
                    <h2 className="font-work-sans text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-responsive-6xl font-bold">
                      <span className="inline-block mt-4 sm:mt-6">
                        <span className="bg-[#008AAB] text-white px-3 sm:px-4 py-1 sm:py-2 ">
                          {t("title2")}
                        </span>
                      </span>{" "}
                      <span className="inline-block mt-4 sm:mt-6 lg:mt-8">
                        <span className="bg-[#008AAB] text-white px-3 sm:px-4 py-1 sm:py-2 ">
                          {t("title3")}
                        </span>
                      </span>
                    </h2>
                  </div>
                </div>

                {/* Right Column */}
                <div className="relative w-full flex items-center justify-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
                  <svg
                    className="absolute w-full max-w-[500px] lg:max-w-[600px] h-auto pointer-events-none"
                    viewBox="0 0 600 500"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <linearGradient
                        id="fadeGradient1"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#0EA5E9"
                          stopOpacity="0.45"
                        />
                        <stop
                          offset="100%"
                          stopColor="#0EA5E9"
                          stopOpacity="0.08"
                        />
                      </linearGradient>
                      <linearGradient
                        id="fadeGradient2"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#06B6D4"
                          stopOpacity="0.4"
                        />
                        <stop
                          offset="100%"
                          stopColor="#06B6D4"
                          stopOpacity="0.06"
                        />
                      </linearGradient>
                      <linearGradient
                        id="fadeGradient3"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#0EA5E9"
                          stopOpacity="0.35"
                        />
                        <stop
                          offset="100%"
                          stopColor="#0EA5E9"
                          stopOpacity="0.05"
                        />
                      </linearGradient>
                      <linearGradient
                        id="fadeGradient4"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#06B6D4"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#06B6D4"
                          stopOpacity="0.04"
                        />
                      </linearGradient>

                      <radialGradient id="bgInner" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#C7E0EA" stopOpacity="0" />
                        <stop
                          offset="100%"
                          stopColor="#D6EBF5"
                          stopOpacity="1"
                        />
                      </radialGradient>

                      <radialGradient id="bgMiddle" cx="50%" cy="50%" r="50%">
                        <stop
                          offset="30%"
                          stopColor="#E0EFF8"
                          stopOpacity="0.5"
                        />
                        <stop
                          offset="100%"
                          stopColor="#E8F4FA"
                          stopOpacity="0"
                        />
                      </radialGradient>

                      <radialGradient id="bgOuter" cx="50%" cy="50%" r="50%">
                        <stop
                          offset="60%"
                          stopColor="#EEF8FC"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#F5FAFE"
                          stopOpacity="0"
                        />
                      </radialGradient>

                      <radialGradient
                        id="bgOutermost"
                        cx="50%"
                        cy="50%"
                        r="50%"
                      >
                        <stop
                          offset="70%"
                          stopColor="#F5FAFE"
                          stopOpacity="0.15"
                        />
                        <stop
                          offset="100%"
                          stopColor="#FAFCFD"
                          stopOpacity="0"
                        />
                      </radialGradient>
                    </defs>

                    <circle cx="300" cy="250" r={90} fill="url(#bgInner)" />
                    <circle cx="300" cy="250" r={150} fill="url(#bgMiddle)" />
                    <circle cx="300" cy="250" r={210} fill="url(#bgOuter)" />
                    <circle
                      cx="300"
                      cy="250"
                      r={270}
                      fill="url(#bgOutermost)"
                    />

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

                  {/* Center Logo */}
                  <div className="absolute w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mt-6">
                    <Image
                      alt="partners"
                      src="/partners/partners5.png"
                      width={400}
                      height={400}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {partners.map((partner, index) => {
                    const angle =
                      (index / partners.length) * 2 * Math.PI - Math.PI / 2;
                    const radius = getResponsiveRadius(); 
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
                      >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full p-[3px] sm:p-[4px] lg:p-[6px] shadow-xl transition-transform duration-500 flex items-center justify-center animated-gradient-rotate">
                          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                            <Image
                              src={partner.logo || "/placeholder.svg"}
                              alt={partner.name}
                              width={56}
                              height={56}
                              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Sections */}
      <section className="w-full">
        <div className="max-w-[1920px] mx-auto w-full">
          <div className="">
            <Card />
            <PartnerForm />
            <Footer />
          </div>
        </div>
      </section>
    </section>
  );
}

function getResponsiveRadius(): number {
  if (typeof window === "undefined") return 140;

  const width = window.innerWidth;
  
  if (width < 480) return 80;     
  if (width < 640) return 100;    
  if (width < 768) return 120;   
  if (width < 1024) return 140;   
  if (width < 1280) return 160;   
  return 180;                       
}

function clamp(min: number, mid: number, max: number): number {
  if (typeof window === "undefined") return mid;

  const width = window.innerWidth;
  if (width < 480) return min * 0.5;   
  if (width < 640) return min * 0.7;  
  if (width < 768) return min * 0.8;  
  if (width < 1024) return mid;        
  return max;                          
}