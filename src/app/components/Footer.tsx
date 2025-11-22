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
import { useTranslations, useLocale } from "next-intl";
import emailjs from "@emailjs/browser";
import { toast } from "sonner"; 

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("footer");
  const locale = useLocale();
  const isRTL = locale === "ar";

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

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error(t("invalidEmail") || "البريد الإلكتروني غير صالح");
      return;
    }

    setIsLoading(true);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID!,
        { user_email: email },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.status === 200) {
        toast.success(t("subscriptionSuccess") || "تم الاشتراك بنجاح!");
        setEmail(""); // مسح الحقل بعد النجاح
      } else {
        toast.error(t("subscriptionError") || "حدث خطأ أثناء الاشتراك");
      }
    } catch (error) {
      console.error('Error sending newsletter email:', error);
      toast.error(t("subscriptionError") || "حدث خطأ أثناء الاشتراك");
    } finally {
      setIsLoading(false);
    }
  };

  const logoSrc = isDark ? "/logo-light.png" : "/logo-dark.png";
  const cardSrc = isDark ? "/footer/Subtract-dark.png" : "/footer/Subtract.png";

  return (
    <section className="relative w-full">
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

          <div
            className={`hidden sm:block absolute md:top-40 top-20 ${
              isRTL ? "lg:right-10" : "lg:left-10"
            } -translate-y-1/2 z-20 ${isRTL ? "px-20" : "px-20"}`}
          >
            <h2 className="text-sm text-1024px text-white md:text-2xl lg:text-4xl font-bold leading-relaxed">
              {t("heroFooter")}
              <br /> {t("hero")}
            </h2>
          </div>
        </div>

        {/* 🔥 فورم الديسكتوب - محدث مع EmailJS */}
        <div
          className={`hidden sm:block footer-1024px absolute ${
            isRTL
              ? "sm:left-20 md:left-10 lg:left-60"
              : "sm:right-20 md:right-10 lg:right-60"
          } h-auto sm:top-[10%] md:top-[20%] z-20 w-[90%] sm:w-[220px] md:w-[300px] lg:w-[390px] rounded-xl bg-[#FFFFFFD1]/82 backdrop-blur-md shadow-md border border-white/50 p-5`}
        >
          <form onSubmit={handleNewsletterSubmit}>
            <h3 className="text-center font-work-sans text-xl font-semibold text-gray-800 mb-3">
              {t("newsletter")}
            </h3>
            <p className="font-work-sans font-normal text-sm sm:text-[13px] text-[#696A75] sm:pb-2 md:pb-4">
              {t("newsletterDescription")}
            </p>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("emailPlaceholder")}
                className={`w-full rounded-md border border-gray-300 sm:p-2 md:p-3 focus:outline-none mb-3 bg-white mt-2 ${
                  isRTL ? "text-right pr-10" : "text-left pl-3"
                }`}
                dir={isRTL ? "rtl" : "ltr"}
                required
                disabled={isLoading}
              />
              <Mail
                className={`absolute ${
                  isRTL ? "left-3" : "right-3"
                } top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5`}
              />
            </div>

            <Button 
              type="submit"
              className="cursor-pointer w-full bg-[#EAB308] hover:bg-[#d6a107] text-white font-semibold text-md sm:p-4 md:p-6 z-20 mt-2"
              disabled={isLoading}
            >
              {isLoading ? t("sending") || "جاري الإرسال..." : t("send")}
            </Button>
          </form>
        </div>
      </div>

      {/* 🔥 فورم الموبايل - محدث مع EmailJS */}
      <div className="block sm:hidden absolute left-1/2 -translate-x-1/2 top-20 z-30 w-[70%] rounded-xl bg-[#FFFFFFD1]/90 backdrop-blur-md shadow-xl border border-white/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <form onSubmit={handleNewsletterSubmit}>
          <h3 className="text-center font-semibold text-gray-800 mb-3">
            {t("newsletter")}
          </h3>
          <p className="text-sm text-[#696A75] pb-2">
            {t("newsletterDescription")}
          </p>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("emailPlaceholder")}
              className={`w-full rounded-md border border-gray-300 focus:outline-none mb-3 bg-white mt-2 p-2 ${
                isRTL ? "text-right pr-10" : "text-left pl-3"
              }`}
              dir={isRTL ? "rtl" : "ltr"}
              required
              disabled={isLoading}
            />
            <Mail
              className={`absolute ${
                isRTL ? "left-3" : "right-3"
              } top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5`}
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-[#EAB308] hover:bg-[#d6a107] text-white font-semibold p-4 mt-2"
            disabled={isLoading}
          >
            {isLoading ? t("sending")  : t("send")}
          </Button>
        </form>
      </div>

      <div className="block sm:hidden absolute left-1/2 -translate-x-1/2 top-20 z-30 w-[70%] rounded-xl bg-[#FFFFFFD1]/90 backdrop-blur-md shadow-xl border border-white/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <h3 className="text-center font-semibold text-gray-800 mb-3">
          {t("newsletter")}
        </h3>
        <p className="text-sm text-[#696A75] pb-2">
          {t("newsletterDescription")}
        </p>
        <div className="relative">
          <input
            type="email"
            placeholder={t("emailPlaceholder")}
            className={`w-full rounded-md border border-gray-300 focus:outline-none mb-3 bg-white mt-2 p-2 ${
              isRTL ? "text-right pr-10" : "text-left pl-3"
            }`}
            dir={isRTL ? "rtl" : "ltr"}
          />
          <Mail
            className={`absolute ${
              isRTL ? "left-3" : "right-3"
            } top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5`}
          />
        </div>

        <Button className="w-full bg-[#EAB308] hover:bg-[#d6a107] text-white font-semibold p-4 mt-2">
          {t("send")}
        </Button>
      </div>

      <div className="container mx-auto relative z-10 -mt-10 md:-mt-60 w-full min-h-[400px] md:h-[480px] sm:p-4 md:p-8 lg:p-10 flex flex-col md:flex-row justify-between gap-10 md:gap-20">
        <Image
          src={cardSrc || "/placeholder.svg"}
          alt="card background"
          fill
          className="absolute"
        />

        <div
          className={`flex-1  md:px-10 lg:px-20 ${
            isRTL
              ? "md:pl-10 lg:pl-20 md:text-right"
              : "md:pr-10 lg:pr-20 md:text-left"
          } pt-30 sm:pt-4 md:pt-20 relative z-10 text-center md:text-start`}
        >
          <div
            className={`flex md:justify-start justify-center items-center gap-2 mb-4`}
          >
            <Image
              src={logoSrc || "/placeholder.svg"}
              alt="logo"
              width={180}
              height={28}
            />
          </div>
          <p className="font-work-sans dark:text-[#FFFFFF] text-[#222222] font-medium text-sm sm:text-base lg:text-xl mb-6 max-w-lg mx-auto md:mx-0">
            {t("description")}
          </p>
          {/* <div
            className={`flex md:justify-start  justify-center gap-2 sm:gap-3`}
          >
            <div className="cursor-pointer p-3 rounded-full bg-[#EAB308] hover:bg-[#EAB308]/90">
              <Facebook className="text-white w-4 h-4 fill-current" />
            </div>
            <div className="cursor-pointer p-3 rounded-full bg-[#EAB308] hover:bg-[#EAB308]/90">
              <Instagram className="text-white w-4 h-4" />
            </div>
            <div className="cursor-pointer p-3 rounded-full bg-[#EAB308] hover:bg-[#EAB308]/90">
              <Linkedin className="text-white w-4 h-4 fill-current" />
            </div>
            <div className="cursor-pointer p-3 rounded-full bg-[#EAB308] hover:bg-[#EAB308]/90">
              <Twitter className="text-white w-4 h-4 fill-current" />
            </div>
          </div> */}
        </div>

        <div
          className={`flex-1 md:pt-20 relative z-10    ${
            isRTL
              ? "text-right md:pr-0 pr-10 "
              : "text-left md:pl-0 pl-10 "
          } pb-30 md:pb-0 text-center md:text-start`}
        >
          <h4 className="font-bold text-gray-800 font-work-sans italic text-md sm:mt-4 sm:mb-4 md:mb-10 dark:text-[#FFFFFF]">
            {t("contactUs")}
          </h4>

          <ul className="space-y-4 text-[#222222] dark:text-[#FFFFFF] text-sm font-normal lg:text-lg font-work-sans sm:text-sm md:text-sm md:pt-0 pt-4">
            <li
              className={`flex items-center gap-2 sm:gap-3 ${
                isRTL
                  ? "flex-row-reverse justify-end"
                  : "flex-row justify-start"
              }`}
            >
              {isRTL ? (
                <>
                  <span className="text-right">{t("address")}</span>
                  <div className="p-2 rounded-full bg-[#BFA36F] flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white w-4 h-4" />
                  </div>
                </>
              ) : (
                <>
                  <div className="p-2 rounded-full bg-[#BFA36F] flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white w-4 h-4" />
                  </div>
                  <span className="text-left">{t("address")}</span>
                </>
              )}
            </li>

            {/* البريد الإلكتروني */}
            <li
              className={`flex items-center gap-2 sm:gap-3 ${
                isRTL
                  ? "flex-row-reverse justify-end"
                  : "flex-row justify-start"
              }`}
            >
              {isRTL ? (
                <>
                  <span className="text-right">{t("email")}</span>
                  <div className="p-2 rounded-full bg-[#BFA36F] flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white w-4 h-4" />
                  </div>
                </>
              ) : (
                <>
                  <div className="p-2 rounded-full bg-[#BFA36F] flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white w-4 h-4" />
                  </div>
                  <span className="text-left">{t("email")}</span>
                </>
              )}
            </li>

            {/* الهاتف */}
            <li
              className={`flex items-center gap-2 sm:gap-3 ${
                isRTL
                  ? "flex-row-reverse justify-end"
                  : "flex-row justify-start"
              }`}
            >
              {isRTL ? (
                <>
                  <span className="text-right">{t("phone")}</span>
                  <div className="p-2 rounded-full bg-[#BFA36F] flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white w-4 h-4" />
                  </div>
                </>
              ) : (
                <>
                  <div className="p-2 rounded-full bg-[#BFA36F] flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white w-4 h-4" />
                  </div>
                  <span className="text-left" dir="ltr">
                    {t("phone")}
                  </span>
                </>
              )}
            </li>
          </ul>
        </div>

        {showScroll && (
          <button
            onClick={scrollToTop}
            className={`hidden sm:block right-1024px cursor-pointer absolute bottom-6 ${
              isRTL
                ? "lg:left-6 left-0 sm:left-2"
                : "lg:right-6 right-0 sm:right-2"
            } md:bg-[#00AEEF] md:hover:bg-[#00AEEF]/90 lg:py-9 lg:px-5 md:py-5 md:px-3 text-white p-3 md:p-4 rounded-full md:shadow-lg items-center justify-center z-50`}
            aria-label="Scroll to top"
          >
            <ArrowUp
              size={18}
              className="w-6 h-6 text-[#00AEEF] md:text-white"
            />
          </button>
        )}
      </div>

      {/* الحقوق */}
      <div className="text-center z-10 pb-6 text-sm sm:text-xl text-[#222222] dark:text-[#FFFFFF] font-medium">
        <p className="-mt-10">{t("rights")}</p>
      </div>
    </section>
  );
}
