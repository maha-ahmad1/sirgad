"use client";

import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function FooterSection() {
  const [showScroll, setShowScroll] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    setIsDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const logoSrc = isDark ? "/logo-light.png" : "/logo-dark.png";
  const cardSrc = isDark ? "/footer/Subtract-dark.png" : "/footer/Subtract.png";

  return (
    <section className="relative w-full">
      {/* خلفية الصورة */}
      <div className="container mx-auto px-4 md:px-0 relative w-full h-[250px] sm:h-[300px] md:h-[500px] overflow-hidden mt-20 md:mt-40">
        <div className="relative h-full w-full rounded-[30px] md:rounded-[50px] overflow-hidden">
          <Image
            src="/footer/footer.jpg"
            alt="footer background"
            fill
            quality={100}
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10" />

          <div className="hidden sm:block  absolute md:left-0 md:top-40 top-20 lg:left-10  -translate-y-1/2 z-20 px-20">
            <h2 className=" text-sm text-1024px text-white  md:text-2xl lg:text-4xl font-bold leading-relaxed ">
              Driving business growth <br /> with innovative digital solutions
            </h2>
          </div>
        </div>

        {/* فورم الديسكتوب */}
        <div className="hidden sm:block footer-1024px absolute sm:right-20 md:right-10 lg:right-60 h-auto sm:top-[10%] md:top-[20%]  z-20 w-[90%] sm:w-[220px] md:w-[300px] lg:w-[390px] rounded-xl bg-[#FFFFFFD1]/82 backdrop-blur-md shadow-md border border-white/50 p-5">
          <h3 className="text-center  font-work-sans text-xl font-semibold text-gray-800 mb-3">
            Newsletter
          </h3>
          <p className="font-work-sans font-normal text-sm sm:text-[13px] text-[#696A75] sm:pb-2 md:pb-4">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full  rounded-md border border-gray-300 sm:p-2 md:p-3 focus:outline-none mb-3 bg-white mt-2"
            />
            <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          <Button className="cursor-pointer w-full bg-[#EAB308] hover:bg-[#d6a107] text-white font-semibold text-md sm:p-4 md:p-6  z-20 mt-2">
            Send
          </Button>
        </div>
      </div>

      {/* فورم الموبايل */}
      <div className="block sm:hidden absolute left-1/2 -translate-x-1/2 top-20 z-30 w-[70%] rounded-xl bg-[#FFFFFFD1]/90 backdrop-blur-md shadow-xl border border-white/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <h3 className="text-center font-semibold text-gray-800 mb-3">
          Newsletter
        </h3>
        <p className="text-sm text-[#696A75] pb-2">
          Subscribe to our newsletter for the latest updates.
        </p>
        <div className="relative">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-md border border-gray-300  focus:outline-none mb-3 bg-white mt-2 p-2"
          />
          <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        <Button className="w-full bg-[#EAB308] hover:bg-[#d6a107] text-white font-semibold p-4 mt-2">
          Send
        </Button>
      </div>

      {/* المحتوى السفلي */}
      <div className="overflow-hidden container  mx-auto relative z-10 -mt-10 md:-mt-60 w-full min-h-[400px] md:h-[480px]  sm:p-4 md:p-8 lg:p-10 flex flex-col md:flex-row justify-between gap-10 md:gap-30">
        <Image src={cardSrc} alt="card background" fill className="absolute" />

        {/* العمود الأول */}
        <div className="flex-1 md:px-10 lg:px-20 pt-30 sm:pt-4 md:pt-20 relative z-10 text-center md:text-left ">
          <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
            <Image src={logoSrc} alt="logo" width={180} height={28} />
          </div>
          <p className=" font-work-sans dark:text-[#FFFFFF] text-[#222222] font-medium text-sm sm:text-base lg:text-xl mb-6 max-w-lg mx-auto md:mx-0">
            Innovative technology solutions for a digital world. Transforming
            businesses through cutting-edge technology and expert consulting.
          </p>
          <div className="flex justify-center md:justify-start gap-2 sm:gap-3">
            <div className="cursor-pointer  p-3 rounded-full bg-[#EAB308] hover:bg-[#EAB308]/90">
              <Facebook className="text-white w-4 h-4 fill-current" />
            </div>
            <div className="cursor-pointer  p-3 rounded-full bg-[#EAB308] hover:bg-[#EAB308]/90">
              <Instagram className="text-white w-4 h-4 " />
            </div>
            <div className="cursor-pointer  p-3 rounded-full bg-[#EAB308] hover:bg-[#EAB308]/90">
              <Linkedin className="text-white w-4 h-4 fill-current" />
            </div>
            <div className="cursor-pointer  p-3 rounded-full bg-[#EAB308] hover:bg-[#EAB308]/90">
              <Twitter className="text-white w-4 h-4 fill-current" />
            </div>
          </div>
        </div>

        {/* العمود الثاني */}
        <div className="flex-1 md:pt-20 relative z-10 text-left md:pl-0 pl-5 pb-30 md:pb-0 ">
          <h4 className="font-bold text-gray-800 font-work-sans  italic text-md sm:mt-4 sm:mb-4 md:mb-10 dark:text-[#FFFFFF]">
            Contact us
          </h4>

          <ul className="space-y-4 text-[#222222] dark:text-[#FFFFFF] text-sm font-normal lg:text-lg font-work-sans sm:text-sm md:text-sm md:pt-0  pt-4">
            <li className="flex flex-row justify-start gap-2 sm:gap-3">
              <div className="p-2 rounded-full bg-[#BFA36F] flex items-center justify-center">
                <MapPin className="text-white w-4 h-4 " />
              </div>
              <span>Imm2, Rue Dayet Aoua, Agdal, Rabat-Morocco</span>
            </li>

            <li className="flex flex-row justify-start gap-2 sm:gap-3">
              <div className="p-2 rounded-full bg-[#BFA36F] flex items-center justify-center">
                <Mail className="text-white w-4 h-4" />
              </div>
              <span>info@sirgad.com</span>
            </li>

            <li className="flex flex-row justify-start gap-2 sm:gap-3">
              <div className="p-2 rounded-full bg-[#BFA36F] flex items-center justify-center">
                <Phone className="text-white w-4 h-4" />
              </div>
              <span>+212 535 943 297</span>
            </li>
          </ul>
        </div>

        {showScroll && (
          <button
            onClick={scrollToTop}
            className="hidden sm:block right-1024px cursor-pointer absolute bottom-6 lg:right-6  right-0 sm:right-2 md:bg-[#00AEEF] md:hover:bg-[#00AEEF]/90 lg:py-9 lg:px-5 md:py-5 md:px-3 text-white p-3 md:p-4 rounded-full md:shadow-lg  items-center justify-center z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="w-6 h-6  text-[#00AEEF] md:text-white" />
          </button>
        )}
      </div>

      {/* الحقوق */}
      <div className="text-center z-10  pb-6 text-sm sm:text-xl text-[#222222] dark:text-[#FFFFFF] font-medium">
        {" "}
        <p className="-mt-10 "> © SIRGAD 2025. All rights reserved.</p>
      </div>
    </section>
  );
}

// "use client";

// import Image from "next/image";
// import {
//   Mail,
//   MapPin,
//   Phone,
//   Facebook,
//   Linkedin,
//   Instagram,
//   Twitter,
//   ArrowUp,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useState, useEffect } from "react";

// export default function FooterSection() {
//   const [showScroll, setShowScroll] = useState(false);
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScroll(window.scrollY > 300);
//     };
//     window.addEventListener("scroll", handleScroll);

//     setIsDark(document.documentElement.classList.contains("dark"));

//     const observer = new MutationObserver(() => {
//       setIsDark(document.documentElement.classList.contains("dark"));
//     });
//     observer.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ["class"],
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       observer.disconnect();
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // تحديد مسارات الصور حسب الثيم
//   const logoSrc = isDark ? "/logo-light.png" : "/logo-dark.png";
//   const cardSrc = isDark ? "/footer/Subtract-dark.png" : "/footer/Subtract.png";
//   // const footerBgSrc = isDark ? "/footer-dark.jpg" : "/footer.jpg";
//   // const footerBlurSrc = isDark ? "/footer-dark-blur.jpg" : "/footer-blur.jpg";

//   return (
//     <section className="relative w-full">
//       <div className="container mx-auto px-4 md:px-0 relative w-full h-[300px] md:h-[500px] overflow-hidden mt-40">
//         <div className="relative h-full w-full rounded-[50px] overflow-hidden">
//           <Image
//             src="/footer/footer.jpg"
//             alt="footer background"
//             fill
//             quality={100}
//             priority
//             sizes="100vw"
//             className="object-cover object-center"
//             placeholder="blur"
//             blurDataURL="footer/footer.jpg"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)] z-10" />

//           <div className="absolute md:left-0 md:top-40 top-20 lg:left-10  -translate-y-1/2 z-20 px-20">
//             <h2 className=" text-sm text-1024px text-white  md:text-2xl lg:text-4xl font-bold leading-relaxed ">
//               Driving business growth <br /> with innovative digital solutions
//             </h2>
//           </div>
//         </div>

//         <div className=" footer-1024px absolute sm:right-20 md:right-10 lg:right-60 h-auto sm:top-[10%] md:top-[20%]  z-20 w-[90%] sm:w-[220px] md:w-[300px] lg:w-[390px] rounded-xl bg-[#FFFFFFD1]/82 backdrop-blur-md shadow-md border border-white/50 p-5">
//           <h3 className="text-center font-semibold text-gray-800 mb-3">
//             Newsletter
//           </h3>
//           <p className="text-sm sm:text-[12px] text-[#696A75] sm:pb-2 md:pb-4">
//             Subscribe to our newsletter for the latest updates.
//           </p>
//           <div className="relative">
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full  rounded-md border border-gray-300 sm:p-2 md:p-3 focus:outline-none mb-3 bg-white mt-2"
//             />
//             <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//           </div>

//           <Button className="w-full bg-[#EAB308] hover:bg-[#d6a107] text-white font-semibold sm:p-4 md:p-6 mt-2">
//             Send
//           </Button>
//         </div>
//       </div>

//       <div className="container mx-auto relative z-10  -mt-40 md:-mt-60 w-full h-[400px] md:h-[480px] sm:p-4 md:p-8 lg:p-10 flex md:flex-row justify-between gap-30">
//         <Image src={cardSrc} alt="card background" fill className="absolute " />
//         <div className="flex-1 md:px-10 lg:px-20 pt-20 relative z-10">
//           <div className="flex items-center gap-2 mb-4">
//             <Image src={logoSrc} alt="logo" width={200} height={28} />
//           </div>
//           <p className="dark:text-[#FFFFFF] font-work-sans text-[#222222] font-medium lg:text-xl mb-6 max-w-lg pt-2 md:text-md text-sm">
//             Innovative technology solutions for a digital world. Transforming
//             businesses through cutting-edge technology and expert consulting.
//           </p>
//           <div className="flex gap-4 ">
//             <div className="cursor-pointer p-3 rounded-full bg-[#EAB308] hover:bg-[#EAB308]/90">
//               <Facebook className="text-white w-4 h-4" />
//             </div>
//             <div className="cursor-pointer p-3 rounded-full bg-[#EAB308] hover:bg-[#EAB308]/90">
//               <Instagram className="text-white w-4 h-4" />
//             </div>
//             <div className="cursor-pointer p-3 rounded-full bg-[#EAB308] hover:bg-[#EAB308]/90">
//               <Linkedin className="text-white w-4 h-4" />
//             </div>
//             <div className="cursor-pointer p-3 rounded-full bg-[#EAB308] hover:bg-[#EAB308]/90 ">
//               <Twitter className="text-white w-4 h-4 fill-current" />
//             </div>
//           </div>
//         </div>

//         {showScroll && (
//           <button
//             onClick={scrollToTop}
//             className=" right-1024px absolute cursor-pointer bottom-10 right-9 bg-[#00AEEF] hover:bg-[#00AEEF]/90 text-white lg:py-9 lg:px-5 md:py-5 md:px-3 rounded-full shadow-lg flex items-center justify-center z-50"
//             aria-label="Scroll to top"
//           >
//             <ArrowUp size={24} />
//           </button>
//         )}
//         <div className="flex-1 text-left  pt-22 relative z-10">
//           <h4 className="font-semibold text-gray-800 font-work-sans italic text-md sm:mt-4 sm:mb-2 md:mt-0 md:mb-10  dark:text-[#FFFFFF]">
//             Contact us
//           </h4>
//           <ul className="space-y-4 text-[#222222] dark:text-[#FFFFFF] sm:text-sm md:text-sm lg:text-lg font-work-sans">
//             <li className="flex items-center justify-center md:justify-start gap-3">
//               <div className="p-2 rounded-full bg-[#BFA36F] flex items-center justify-center">
//                 <MapPin className="text-white w-4 h-4" />
//               </div>
//               <span>Imm2, Rue Dayet Aoua, Agdal, Rabat-Morocco</span>
//             </li>

//             <li className="flex items-center justify-center md:justify-start gap-3">
//               <div className="p-2 rounded-full bg-[#BFA36F] flex items-center justify-center">
//                 <Mail className="text-white w-4 h-4" />
//               </div>
//               <span>info@sirgad.com</span>
//             </li>

//             <li className="flex items-center justify-center md:justify-start gap-3">
//               <div className="p-2 rounded-full bg-[#BFA36F] flex items-center justify-center">
//                 <Phone className="text-white w-4 h-4" />
//               </div>
//               <span>+212 535 943 297</span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* حقوق النشر */}
//       <div className="text-center z-10 pb-6 text-xl text-[#222222] dark:text-[#FFFFFF] font-medium">
//         <p className="-mt-10 "> © SIRGAD 2025. All rights reserved.</p>
//       </div>
//     </section>
//   );
// }
