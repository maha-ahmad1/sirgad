"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  date: string;
  image: string;
  rating: number;
}

export default function TrustedPartnerships() {
  const t = useTranslations("TrustedPartnerships");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const testimonials = Array.isArray(t.raw("testimonials"))
    ? (t.raw("testimonials") as Testimonial[])
    : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonials.length;

  const nextSlide = () => {
    if (isRTL) {
      if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
    } else {
      if (currentIndex < totalSlides - 1) setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (isRTL) {
      if (currentIndex < totalSlides - 1) setCurrentIndex((prev) => prev + 1);
    } else {
      if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
    }
  };

  const goToSlide = (index: number) => setCurrentIndex(index);

  return (
    <section className="pt-12 md:pt-20 lg:pt-60 relative bg-white dark:bg-[#252526] min-h-screen md:min-h-[800px] lg:min-h-[1000px]" id="testimonials">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/Group.png')" }}
      />

      <div className="container relative px-4 md:px-6 lg:px-20 flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-0 mx-auto max-w-8xl">
        <div
          className={`relative z-10 w-full lg:w-[60%] ${
            isRTL ? "lg:pl-20" : "lg:pr-20"
          } pb-8 md:pb-12 lg:pb-20 text-center ${
            isRTL ? "lg:text-right" : "lg:text-left"
          } `}
        >
          <h2 className="dark:text-white font-work-sans font-extrabold text-2xl md:text-3xl lg:text-5xl mb-3 md:mb-4">
            {isRTL ? (
              <>
                <span className="text-[#00A8E8] ">{t("title")}</span>{" "}
                <span className="dark:text-white text-[#030303] ">
                  {t("trusted")}
                </span>
              </>
            ) : (
              <>
                {t("trusted")}{" "}
                <span className="text-[#00A8E8]">{t("partner")}</span>
                <span className="dark:text-white text-[#030303]">ships</span>
              </>
            )}
          </h2>
          <p className="font-work-sans font-medium text-sm md:text-base text-gray-500 dark:text-[#FFFFFF99] leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="relative w-full lg:w-auto overflow-x-hidden overflow-y-visible">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: isRTL
                ? `translateX(${currentIndex * 50}%)`
                : `translateX(-${currentIndex * 50}%)`,
            }}
          >
            {testimonials.map((testimonial: Testimonial) => (
              <div
                key={testimonial.id}
                className="relative min-w-[80%] md:min-w-[65%] p-[2px] rounded-2xl mx-2 shadow-sm hover:shadow-md transition-all bg-gradient-to-b from-[rgba(0,174,239,1)] to-[rgba(0,104,169,1)]"
              >
                <div className="bg-[#D6F2FB] dark:bg-[#1A2B3C] rounded-2xl p-6 h-full relative border-2 border-transparent">
                  {/* <div
                    className={`absolute ${
                      isRTL ? "left-6" : "right-6"
                    } -top-6 w-12 h-12 rounded-full bg-[#00A8E8] flex items-center justify-center shadow-md z-20`}
                  >
                    <Quote className="w-6 h-6 text-white fill-white" />
                  </div> */}

                  <p
                    className={`font-work-sans font-medium text-xl md:text-base dark:text-[#FFFFFF] text-[#222222] mb-4 md:mb-6 leading-relaxed ${
                      isRTL ? "pl-10" : "pr-10"
                    }`}
                  >
                    {testimonial.text}
                  </p>

                  <div className="border-t border-dashed border-[#22222266] dark:border-[#FFFFFF]/70 my-3 md:my-4"></div>

                  <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="dark:text-[#FFFFFF]/70 font-work-sans font-normal md:text-lg text-gray-900 text-sm truncate">
                        {testimonial.name}
                      </h4>
                      <p className="dark:text-[#FFFFFF]/70 text-xs font-normal md:text-md text-[#222222CC] flex items-center gap-1">
                        📅 {testimonial.date}
                      </p>
                    </div>

                    <div className="flex gap-1 flex-shrink-0">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 md:w-5 h-4 md:h-5 fill-yellow-400 text-yellow-400"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-12 lg:mt-20 gap-6 md:gap-4">
            <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap md:flex-nowrap">
              <div className="flex items-center gap-2 md:gap-3">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`font-semibold transition-all ${
                      currentIndex === index
                        ? "dark:text-white text-gray-900 text-xl md:text-3xl"
                        : "text-gray-400 hover:text-gray-600 text-lg"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <div className="hidden md:block w-40 lg:w-60 h-1 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#CDA63D] transition-all duration-300"
                  style={{
                    width: `${((currentIndex + 1) / totalSlides) * 100}%`,
                  }}
                />
              </div>
            </div>
            <div
              className={`flex gap-2 justify-center md:justify-end relative z-20 mt-6 
    ${isRTL ? "flex-row-reverse" : ""}
  `}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                disabled={
                  isRTL ? currentIndex >= totalSlides - 1 : currentIndex <= 0
                }
                className="rounded-full w-10 h-10 border-1 border-[#CDA63D] hover:text-white dark:text-white text-[#52525299]/60 hover:bg-[#CDA63D]/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                disabled={
                  isRTL ? currentIndex <= 0 : currentIndex >= totalSlides - 1
                }
                className="rounded-full w-10 h-10 border-[#CDA63D] hover:bg-[#CDA63D]/90 text-[#52525299]/60 dark:text-white hover:text-white border-1 disabled:opacity-50 disabled:cursor-not-allowed"
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

// "use client";

// import { useState } from "react";
// import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// const testimonials = [
//   {
//     id: 1,
//     text: "أظهرت SIRGAD احترافيتها والتزامها بجميع المسؤوليات وفقاً لما هو متوقع.",
//     name: "شمس سمير حسن",
//     date: "٣ يناير ٢٠٢٥",
//     image: "/image1.png",
//     rating: 5,
//   },
//   {
//     id: 2,
//     text: "العمل مع SIRGAD غيّر عمليات أعمالنا. خبرتهم وتفانيهم تجاوزا توقعاتنا.",
//     name: "أحمد محمد",
//     date: "١٠ يناير ٢٠٢٥",
//     image: "/image2.png",
//     rating: 5,
//   },
//   {
//     id: 3,
//     text: "فريق SIRGAD قدم نتائج استثنائية. محترفون، في الوقت المحدد، ومهرة للغاية.",
//     name: "فاطمة علي",
//     date: "١٥ يناير ٢٠٢٥",
//     image: "/image3.png",
//     rating: 5,
//   },
//   {
//     id: 4,
//     text: "SIRGAD دائماً تتجاوز التوقعات. نهجهم المبتكر ساعدنا على التوسع بكفاءة.",
//     name: "عمر خالد",
//     date: "٢٠ يناير ٢٠٢٥",
//     image: "/image3.png",
//     rating: 5,
//   },
// ];

// export default function TrustedPartnerships() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalSlides = testimonials.length;
//   const isRTL = true; // يمكن جعلها ديناميكية حسب اللغة المختارة

//   const nextSlide = () => {
//     if (currentIndex < totalSlides - 1) setCurrentIndex((prev) => prev + 1);
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
//   };

//   const goToSlide = (index: number) => setCurrentIndex(index);

//   return (
//     <section
//       className="pt-12 md:pt-20 lg:pt-60 relative bg-white dark:bg-[#252526] min-h-screen md:min-h-[800px] lg:min-h-[1000px]"
//       dir={isRTL ? "rtl" : "ltr"}
//     >
//       <div
//         className="absolute inset-0 bg-cover bg-center z-0"
//         style={{ backgroundImage: "url('/Group.png')" }}
//       />

//       <div className="container relative px-4 md:px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-0 mx-auto max-w-8xl">
//         <div className="relative z-10 w-full lg:w-[60%] lg:pe-20 pb-8 md:pb-12 lg:pb-20 text-center lg:text-start">
//           <h2 className="dark:text-white font-work-sans font-extrabold text-2xl md:text-3xl lg:text-5xl mb-3 md:mb-4">
//             <span className="text-[#00A8E8]">شراكات</span>{" "}
//             <span className="dark:text-white text-[#030303]">موثوقة</span>
//           </h2>
//           <p className="font-work-sans font-medium text-sm md:text-base text-gray-500 dark:text-[#FFFFFF99] leading-relaxed">
//             استمع مباشرة من الشركات التي قمنا بتحويلها. أظهرت SIRGAD احترافيتها
//             والتزامها بجميع المسؤوليات وفقاً لما هو متوقع.
//           </p>
//         </div>

//         <div className="relative w-full lg:w-auto overflow-x-hidden overflow-y-visible">
//           <div
//             className="flex transition-transform duration-500 ease-out"
//             style={{
//               transform: isRTL
//                 ? `translateX(${currentIndex * 50}%)`
//                 : `translateX(-${currentIndex * 50}%)`,
//             }}
//           >
//             {testimonials.map((t) => (
//               <div
//                 key={t.id}
//                 className="relative min-w-[80%] md:min-w-[65%] p-[2px] rounded-2xl mx-2 shadow-sm hover:shadow-md transition-all bg-gradient-to-b from-[rgba(0,174,239,1)] to-[rgba(0,104,169,1)]"
//               >
//                 <div className="bg-[#D6F2FB] dark:bg-[#1A2B3C] rounded-2xl p-6 h-full relative border-2 border-transparent">
//                   <div className="absolute start-6 -top-6 w-12 h-12 rounded-full bg-[#00A8E8] flex items-center justify-center shadow-md z-20">
//                     <Quote className="w-6 h-6 text-white fill-white" />
//                   </div>

//                   <p className="font-work-sans font-medium text-xl md:text-base dark:text-[#FFFFFF] text-[#222222] mb-4 md:mb-6 leading-relaxed ps-10">
//                     {t.text}
//                   </p>

//                   <div className="border-t border-dashed border-[#22222266] dark:border-[#FFFFFF]/70 my-3 md:my-4"></div>

//                   <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
//                     <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
//                       <Image
//                         src={t.image || "/placeholder.svg"}
//                         alt={t.name}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>

//                     <div className="flex-1 min-w-0">
//                       <h4 className="dark:text-[#FFFFFF]/70 font-work-sans font-normal md:text-lg text-gray-900 text-sm truncate">
//                         {t.name}
//                       </h4>
//                       <p className="dark:text-[#FFFFFF]/70 text-xs font-normal md:text-md text-[#222222CC] flex items-center gap-1">
//                         📅 {t.date}
//                       </p>
//                     </div>

//                     <div className="flex gap-1 flex-shrink-0">
//                       {Array.from({ length: t.rating }).map((_, i) => (
//                         <Star
//                           key={i}
//                           className="w-4 md:w-5 h-4 md:h-5 fill-yellow-400 text-yellow-400"
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-12 lg:mt-20 gap-6 md:gap-4">
//             <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap md:flex-nowrap">
//               {/* Pagination Numbers */}
//               <div className="flex items-center gap-2 md:gap-3">
//                 {Array.from({ length: totalSlides }).map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToSlide(index)}
//                     className={`font-semibold transition-all ${
//                       currentIndex === index
//                         ? "dark:text-white text-gray-900 text-xl md:text-3xl"
//                         : "text-gray-400 hover:text-gray-600 text-lg"
//                     }`}
//                   >
//                     {index + 1}
//                   </button>
//                 ))}
//               </div>

//               {/* Progress Bar */}
//               <div className="hidden md:block w-40 lg:w-60 h-1 bg-gray-300 rounded-full overflow-hidden">
//                 <div
//                   className="h-full bg-[#CDA63D] transition-all duration-300"
//                   style={{
//                     width: `${((currentIndex + 1) / totalSlides) * 100}%`,
//                   }}
//                 />
//               </div>
//             </div>

//             <div className="flex gap-2 justify-center md:justify-end relative z-20 mt-6">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={isRTL ? nextSlide : prevSlide}
//                 disabled={isRTL ? currentIndex >= totalSlides - 1 : currentIndex <= 0}
//                 className="rounded-full w-10 h-10 border-1 border-[#CDA63D] hover:text-white dark:text-white text-[#52525299]/60 hover:bg-[#CDA63D]/90 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </Button>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={isRTL ? prevSlide : nextSlide}
//                 disabled={isRTL ? currentIndex <= 0 : currentIndex >= totalSlides - 1}
//                 className="rounded-full w-10 h-10 border-[#CDA63D] hover:bg-[#CDA63D]/90 text-[#52525299]/60 dark:text-white hover:text-white border-1 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
