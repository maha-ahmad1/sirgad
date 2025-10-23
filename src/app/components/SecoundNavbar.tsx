import React from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const SecoundNavbar = () => {
  return (
    <div className="">
      {" "}
      <header className="sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50 border-b border-border/40">
        <Button
          variant="default"
          size="sm"
          className="gap-2 bg-cyan-500 hover:bg-cyan-600 rounded-3xl py-4"
        >
          <Phone className="h-4 w-4" />
          Contact us
        </Button>

        <div className="flex items-center gap-8">
          <Image src={"/logo-dark.png"} alt="Logo" width={200} height={200} />{" "}
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#home"
            className="text-sm font-medium text-foreground hover:text-cyan-500 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors"
          >
            Services
          </a>
          <a
            href="#works"
            className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors"
          >
            Works
          </a>
          <a
            href="#testimonials"
            className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors"
          >
            Testimonials
          </a>
        </nav>
      </header>
    </div>
  );
};
