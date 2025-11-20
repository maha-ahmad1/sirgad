"use client";

import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export const SecoundNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false); 

  const t = useTranslations("navbar");
  const locale = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  const navItems = [
    { href: "#home", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#services", label: t("services") },
    { href: "#solutions", label: t("works") },
    { href: "#testimonials", label: t("testimonials") },
  ];
  const logoSrc = isDark ? "/logo-light.png" : "/logo-dark.png";

  return (
    <div className="relative ">
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] menu-button hidden "
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Header */}
      <header
        className={`fixed dark:bg-[#2D2D304D]/30 z-50 w-full transition-all duration-300 px-4 sm:px-6 lg:px-18 flex items-center justify-center bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50 border-b border-border/40 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg  top-0 left-0 right-0 py-6"
            : "bg-transparent py-6 top-10 left-0 right-0"
        }`}
      >
        <div className="max-w-[1920px] mx-auto w-full">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 hidden md:block">
             <Link href="#partner-form">

              <Button
                variant="default"
                size="sm"
                className="cursor-pointer gap-2 bg-[#00AEEF] hover:bg-[#0096d1] rounded-4xl lg:py-5 font-work-sans text-sm font-normal text-white"
              >
                <Phone className="h-4 w-4" />
                {t("contactUs")}
              </Button>
              </Link>
            </div>

            <div className="flex-1 flex justify-center">
              <Image
                src={logoSrc}
                alt="Logo"
                width={160}
                height={60}
                className="w-32 sm:w-40 md:w-48 h-auto transition-opacity duration-300"
              />
            </div>

            {/* Desktop Navigation - Right */}
            <nav className="absolute right-0 nav-links  items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-medium text-sm lg:text-lg hover:text-[#222222] transition-colors font-work-sans text-[#222222A8] dark:text-gray-200 dark:hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button - Right */}
            <div className="absolute right-0  items-center gap-2 menu-button hidden">
              <button
                onClick={toggleMenu}
                className="cursor-pointer p-2  px-6 sm:px-0 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors  dark:text-white"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white dark:bg-gray-900 shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out menu-button hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col w-full p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
            <Image
              src={logoSrc}
              alt="Logo"
              width={120}
              height={45}
              className="w-28 h-auto transition-opacity duration-300"
            />
            <button
              onClick={toggleMenu}
              className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white "
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-4 px-4 text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-cyan-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Bottom Section */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
            {/* Theme Toggle */}
            {/* <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-sm font-medium">Theme</span>
              <ThemeToggle />
            </div> */}

            {/* Language Selector */}
            {/* <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-sm font-medium">Language</span>
              <button className="cursor-pointer flex items-center gap-2 text-sm hover:text-cyan-500 transition-colors">
                <span>🌐</span>
                <span>English</span>
              </button>
            </div> */}

            {/* Contact Button */}
            <Button
              variant="default"
              size="lg"
              className="cursor-pointer w-full gap-2 bg-cyan-500 hover:bg-cyan-600 rounded-xl py-4 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="h-4 w-4" />
              {t("contactUs")}
            </Button>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div
        className={`h-20 sm:h-24 lg:h-28 ${isScrolled ? "mt-0" : "mt-8"}`}
      ></div>
    </div>
  );
};
