"use client";
import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export const FirstNavbar = () => {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations('firstnavbar');

  const switchLanguage = async () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    
    window.location.href = `/${newLocale}`;
  };

  const isRTL = locale === 'ar';

  return (
    <div className={`w-full  relative bg-gradient-to-r from-[#00AEEF] to-[#BFA36E] px-6 sm:px-6 lg:px-18 py-2 flex items-center justify-between text-white text-sm ${isRTL ? 'font-tajawal' : ''}`}>
      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>

      <p className="hidden md:block text-center flex-1 mx-4 font-work-sans text-sm lg:text-base">
  {t('text-center')}
      </p>

      <button 
        onClick={switchLanguage}
        className="cursor-pointer flex items-center gap-1 hover:opacity-80 transition-opacity font-work-sans font-medium"
      >
        <span className="text-sm lg:text-base">🌐</span>
        <span className="text-sm lg:text-base">
          {locale === 'ar' ? 'English' : 'العربية'}
        </span>
      </button>
    </div>
  );
};
