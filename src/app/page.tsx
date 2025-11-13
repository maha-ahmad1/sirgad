"use client"
import {About} from "./components/about" ; 
import { Hero } from "./components/hero"
import { Services } from "./components/services"
import CoreSolutionsCarousel from "./components/CoreSolutions";
import TrustedPartnerships from "./components/trusted-partnerships";
import PartnersSection from "./components/PartnersSection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <About />
      <Services />
      <CoreSolutionsCarousel />
      <TrustedPartnerships />
      <PartnersSection />
    </main>
  )
}
