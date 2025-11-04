import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HexagonalPattern } from "./HexagonalPattern";
import { DotGrid } from "./dot-grid";
import { FirstNavbar } from "./FirstNavbar";
import { SecoundNavbar } from "./SecoundNavbar";
import { NetworkBackground } from "./network-background"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* <NetworkBackground /> */}
      <div className="absolute inset-0 -z-10">
        <NetworkBackground />
      </div>
      <HexagonalPattern />
      <DotGrid />
      <FirstNavbar />
      <SecoundNavbar />
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
            Your Trusted IT Partner
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We deliver tailored IT solutions by staying ahead with the latest
            tech, ensuring efficiency and value for your investments—because
            your success is our priority.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-3xl"
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-3xl border border-cyan-500"
            >
              Explore Solutions
            </Button>
          </div>
        </div>

        <div className="mt-16 w-full max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
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
