"use client"
import {About} from "./components/about" ; 
import { Hero } from "./components/hero"
import { Services } from "./components/services"
import { NetworkBackground } from "./components/network-background"
// import { Testimonials } from "./components/testimonials"
// import { Partners } from "./components/partners"
import CoreSolutionsCarousel from "./components/CoreSolutions";
import SuccessStories from "./components/success-stories";
import TrustedPartnerships from "./components/trusted-partnerships";
import PartnersSection from "./components/PartnersSection";
import PartnerForm from "./components/PartnerForm"
import Card from "./components/Card"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* <NetworkBackground /> */}
      <Hero />
      <About />
      <Services />
      <CoreSolutionsCarousel />
      <TrustedPartnerships />
      {/* <Testimonials /> */}
      {/* <SuccessStories /> */}
      <PartnersSection />
      {/* <PartnerForm />  */}
      {/* <Card /> */}
    </main>
  )
}
