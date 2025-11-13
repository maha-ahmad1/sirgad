import { Button } from "@/components/ui/button";
import Image from "next/image";
import { DotGrid } from "./dot-grid";
import { FirstNavbar } from "./FirstNavbar";
import { SecoundNavbar } from "./SecoundNavbar";
import { NetworkBackground } from "./network-background";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <NetworkBackground />
      </div>
      <DotGrid />
      <div className="absolute -top-10 left-0 -z-10 pointer-events-none  sm:hidden lg:block lg:w-[1000px] lg:h-[900px] ">
        <Image
          src="/Hexa.png"
          alt="Hexagon background"
          fill
          className="object-contain opacity-5"
          priority
        />
      </div>

      <FirstNavbar />
      <SecoundNavbar />

      <div className="flex-1 flex flex-col items-center  px-4 sm:px-6 py-0">
        <div className="max-w-5xl mx-auto text-center space-y-2 sm:space-y-2">
          <h2 className="font-work-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold text-balance leading-tight text-[#222222] dark:text-white">
            Your Trusted IT Partner
          </h2>
          <p className=" font-normal font-work-sans sm:text-lg md:text-lg text-[#22222299] dark:text-[#FFFFFF99] max-w-2xl sm:max-w-3xl mx-auto text-pretty px-4">
            We deliver tailored IT solutions by staying ahead with the latest
            tech, ensuring efficiency and value for your investments—because
            your success is our priority.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
            <Button
              size="lg"
              className="bg-[#00AEEF] hover:bg-[#0096d1] lg:py-6 cursor-pointer text-white  rounded-4xl text-sm sm:text-base px-6 sm:px-8 py-2"
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-3xl border-1 dark:bg-[#2D2D304D]/30 bg-background/50 border-[#00AEEF] lg:py-6 cursor-pointer text-sm sm:text-base px-6 sm:px-8 text-[#222222] dark:text-white"
            >
              Explore Solutions
            </Button>
          </div>
        </div>

        <div className="mt-10 w-full max-w-5xl mx-auto px-4 sm:px-0">
          <div className="bg-[#FFFFFF99]/70 dark:bg-gray-900 p-4 sm:p-5 rounded-4xl ">
            <div className="relative aspect-[16/8] max-h-[450px] sm:max-h-[600px] rounded-4xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image
                src="/hero.jpg"
                alt="Analytics Dashboard"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
