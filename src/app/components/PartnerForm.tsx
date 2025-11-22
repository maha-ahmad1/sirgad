"use client";

import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function PartnerForm() {
  const t = useTranslations("PartnerForm");
  const locale = useLocale();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          toast.success(t("successMessage") || "تم إرسال الرسالة بنجاح!", {
            description: "سنقوم بالرد عليك في أقرب وقت ممكن",
            duration: 5000,
          });
          formRef.current?.reset();
          setLoading(false);
        },
        (error) => {
          toast.error(t("errorMessage") || "حدث خطأ أثناء الإرسال", {
            description: "يرجى المحاولة مرة أخرى",
            duration: 5000,
          });
          setLoading(false);
        }
      );
  };

  return (
    <>
      <div
        className="w-full text-center mt-10 md:mt-30 relative z-20"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <h2 className="font-work-sans text-4xl md:text-5xl font-bold dark:text-white ">
          <span className="text-[#009DF0]">{t("title_part1")}</span>{" "}
          {t("title_part2")}
        </h2>
      </div>

      <section
        className="relative w-full  flex items-center justify-center overflow-hidden"
        dir="ltr"
        id="partner-form"
      >
        {/* ---------- Left Side ---------- */}
        <div className="absolute left-0 top-0 bottom-0 w-1/3 mt-10 min-h-[650px] h-auto rounded-r-[40px] overflow-hidden">
          <Image
            src="/forms.png"
            alt="Partner background"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#009DF0]/70"></div>

          <div className="relative z-10 flex flex-col justify-center items-center text-white h-full px-6 pt-60">
            {/* Arrow Icon */}
            <div className="mb-10 hidden md:block">
              <Image
                src="/Vector.png"
                alt="Arrow icon"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>

            {/* Text */}
            <div className="max-w-sm hidden md:block ">
              <p className="font-work-sans italic md:text-2xl lg:text-4xl font-bold leading-relaxed">
                {t("left_text")}
              </p>
            </div>
          </div>
        </div>

        {/* ---------- Form Container ---------- */}
        <div className="relative z-10 flex flex-col md:flex-row bottom-10 md:right-20 items-center justify-between gap-8 max-w-6xl w-full px-6 md:px-12 mt-26">
          <div className="hidden md:block w-1/3"></div>

          <div className="min-h-[550px] flex-1 max-w-xl dark:bg-[#2D2D3080]/50 bg-[#FFFFFF80]/50 backdrop-blur-sm shadow-md rounded-4xl p-10">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={`space-y-4 ${
                locale === "ar" ? "text-right" : "text-left"
              }`}
            >
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                {/* 🔥 عكس الترتيب حسب اللغة */}
                {locale === "ar" ? (
                  <>
                    {/* Last Name أولاً في العربية */}
                    <div className="flex flex-col">
                      <label className="mb-1 font-normal font-work-sans text-md dark:text-white text-[#222222]">
                        {t("last_name")}
                      </label>
                      <input
                        required
                        name="last_name"
                        type="text"
                        placeholder={t("last_name_placeholder")}
                        className="font-normal dark:text-white dark:bg-[#3E3E4266]/40 font-work-sans text-md p-3 border-[#00AEEF33]/20 rounded-[12px] border bg-white/40 focus:outline-none focus:ring-2 focus:ring-[#009DF0]/40 text-right"
                      />
                    </div>

                    {/* First Name ثانياً في العربية */}
                    <div className="flex flex-col">
                      <label className="mb-1 font-normal font-work-sans text-md dark:text-white text-[#222222]">
                        {t("first_name")}
                      </label>
                      <input
                        required
                        name="first_name"
                        type="text"
                        placeholder={t("first_name_placeholder")}
                        className="font-normal dark:text-white dark:bg-[#3E3E4266]/40 font-work-sans text-md p-3 border-[#00AEEF33]/20 rounded-[12px] border bg-white/40 focus:outline-none focus:ring-2 focus:ring-[#009DF0]/40 text-right"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* First Name أولاً في الإنجليزية */}
                    <div className="flex flex-col">
                      <label className="mb-1 font-normal font-work-sans text-md dark:text-white text-[#222222]">
                        {t("first_name")}
                      </label>
                      <input
                        required
                        name="first_name"
                        type="text"
                        placeholder={t("first_name_placeholder")}
                        className="font-normal dark:text-white dark:bg-[#3E3E4266]/40 font-work-sans text-md p-3 border-[#00AEEF33]/20 rounded-[12px] border bg-white/40 focus:outline-none focus:ring-2 focus:ring-[#009DF0]/40 text-left"
                      />
                    </div>

                    {/* Last Name ثانياً في الإنجليزية */}
                    <div className="flex flex-col">
                      <label className="mb-1 font-normal font-work-sans text-md dark:text-white text-[#222222]">
                        {t("last_name")}
                      </label>
                      <input
                        required
                        name="last_name"
                        type="text"
                        placeholder={t("last_name_placeholder")}
                        className="font-normal dark:text-white dark:bg-[#3E3E4266]/40 font-work-sans text-md p-3 border-[#00AEEF33]/20 rounded-[12px] border bg-white/40 focus:outline-none focus:ring-2 focus:ring-[#009DF0]/40 text-left"
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="mb-1 font-normal font-work-sans text-md dark:text-white text-[#222222]">
                  {t("email")}
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder={t("email_placeholder")}
                  className={`w-full font-normal dark:text-white dark:bg-[#3E3E4266]/40 font-work-sans text-md p-3 border-[#00AEEF33]/20 rounded-[12px] border bg-white/40 focus:outline-none focus:ring-2 focus:ring-[#009DF0]/40 ${
                    locale === "ar" ? "text-right" : "text-left"
                  }`}
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <label className="mb-1 font-normal font-work-sans text-md dark:text-white text-[#222222]">
                  {t("subject")}
                </label>
                <input
                  required
                  name="subject"
                  type="text"
                  placeholder={t("subject_placeholder")}
                  className={`font-normal font-work-sans dark:text-white dark:bg-[#3E3E4266]/40 text-md p-3 border-[#00AEEF33]/20 rounded-[12px] w-full border bg-white/40 focus:outline-none focus:ring-2 focus:ring-[#009DF0]/40 ${
                    locale === "ar" ? "text-right" : "text-left"
                  }`}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="mb-1 font-normal font-work-sans text-md dark:text-white text-[#222222]">
                  {t("phone")}
                </label>
                <input
                  required
                  name="phone"
                  type="text"
                  placeholder={t("phone_placeholder")}
                  className={`font-normal font-work-sans dark:text-white dark:bg-[#3E3E4266]/40 text-md p-3 border-[#00AEEF33]/20 rounded-[12px] w-full border bg-white/40 focus:outline-none focus:ring-2 focus:ring-[#009DF0]/40 ${
                    locale === "ar" ? "text-right" : "text-left"
                  }`}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="mb-1 font-normal font-work-sans text-md dark:text-white text-[#222222]">
                  {t("message")}
                </label>
                <textarea
                  name="message"
                  placeholder={t("message_placeholder")}
                  className={`font-normal font-work-sans dark:text-white dark:bg-[#3E3E4266]/40 text-md p-3 border-[#00AEEF33]/20 rounded-[12px] w-full border bg-white/40 focus:outline-none focus:ring-2 focus:ring-[#009DF0]/40 ${
                    locale === "ar" ? "text-right" : "text-left"
                  }`}
                  rows={4}
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="cursor-pointer w-full bg-[#00AEEF] text-white py-3 rounded-xl font-semibold hover:bg-[#0088d3] transition disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? t("sending") || "جاري الإرسال..." : t("send_message")}
              </button>
            </form>
          </div>
        </div>

        {/* Circles Image */}
        <div className="relative w-1/3 max-w-[400px] md:max-w-[600px] lg:max-w-[800px] h-auto md:h-[600px] lg:h-[800px] ml-[-60px] md:ml-[-100px] hidden lg:block">
          <Image
            src="/Circles.png"
            alt="Right background"
            fill
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}