"use client";

import Image from "next/image";

export default function Card() {
  return (
    <section className=" container mx-auto px-4 relative z-10  w-full h-[600px] md:h-[500px] overflow-hidden mt-40">
      {/* الخلفية */}
      <Image
        src="/card1.jpg"
        alt="Partner background"
        fill
        priority
        className="object-cover rounded-4xl"
        quality={100}
        sizes="100vw"
        
      />
      <div className="absolute inset-0 bg-[#00000033]/20  z-10" />

      {/* الكارد */}
      <div className="absolute inset-0 flex justify-end items-center">
        <Image
          src="/card2.png"
          alt="Sirgad card"
          width={900}
          height={400}
          className="rounded-2xl p-14"
        />
      </div>
    </section>
  );
}
