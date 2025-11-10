"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
export default function PartnerForm() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (

    <> <div className="w-full text-center mt-10 md:mt-20">
        <h2 className="font-work-sans text-4xl md:text-5xl font-bold font-work-sans">
          <span className="text-[#009DF0]">Partner</span> with Sirgad
        </h2>
      </div>
    <section className="relative w-full min-h-screen flex items-center justify-center  overflow-hidden">
       
      {/* ---------- Left Side ---------- */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 mt-10 h-[800px] rounded-r-[40px] overflow-hidden">
        <Image
          src="/forms.png"
          alt="Partner background"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#009DF0]/70"></div>

        <div className="relative z-10 flex flex-col justify-center items-center text-white h-full px-6 pt-60">
          {/* 🔹 صورة السهم */}
          <div className="mb-10">
            <Image
              src="/Vector.png" // ← غيّري المسار حسب اسم صورة السهم عندك
              alt="Arrow icon"
              width={70}
              height={70}
              className="object-contain"
            />
          </div>

          {/* 🔹 النص */}
          <div className="max-w-sm  ">
            <p className="font-work-sans  italic text-4xl font-bold  leading-relaxed">
              For Mentors, for investors, for institutions <br />
              Lets build a future powered by youth innovation
            </p>
          </div>
        </div>
      </div>

      {/* ---------- Form Card ---------- */}
      <div className=" relative z-10 flex flex-col md:flex-row bottom-10 right-20 items-center justify-between gap-12 max-w-6xl w-full px-6 md:px-12 mt-10 ">
        {/* Spacer for left background */}
        <div className="hidden md:block w-1/3"></div>

        {/* Form */}
        <div className=" h-[650px] flex-1 max-w-xl bg-[#FFFFFF80]/50 backdrop-blur-sm shadow-md rounded-4xl p-10">
          {/* <h2 className="text-2xl font-semibold text-center mb-6">
            <span className="text-[#009DF0]">Partner</span> with Sirgad
          </h2> */}

          <form className="space-y-4 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="mb-1 font-normal font-work-sans text-md text-[#222222]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  className="font-normal font-work-sans text-md p-3 border-[#00AEEF33]/20 rounded-[12px] border bg-white/40  focus:outline-none focus:ring-2 focus:ring-[#009DF0]/40"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="mb-1 font-normal font-work-sans text-md text-[#222222]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last name"
                  className="font-normal font-work-sans text-md p-3 border-[#00AEEF33]/20 rounded-[12px] border bg-white/40 focus:outline-none focus:ring-2 focus:ring-[#009DF0]/40"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-1 font-normal font-work-sans text-md text-[#222222]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full font-normal font-work-sans text-md p-3 border-[#00AEEF33]/20 rounded-[12px] border bg-white/40  focus:outline-none focus:ring-2 focus:ring-[#009DF0]/40"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="subject"
                className="mb-1 font-normal font-work-sans text-md text-[#222222]"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="font-normal font-work-sans text-md p-3 border-[#00AEEF33]/20 rounded-[12px] w-full  border bg-white/40 focus:outline-none focus:ring-2 focus:ring-[#009DF0]/40"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="mb-1 font-normal font-work-sans text-md text-[#222222]"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Phone Number"
                className="font-normal font-work-sans text-md p-3 border-[#00AEEF33]/20 rounded-[12px] w-full  border bg-white/40  focus:outline-none focus:ring-2 focus:ring-[#009DF0]/40"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="mb-1 font-normal font-work-sans text-md text-[#222222]"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message here..."
                className="font-normal font-work-sans text-md p-3 border-[#00AEEF33]/20 rounded-[12px] w-full  border bg-white/40  focus:outline-none focus:ring-2 focus:ring-[#009DF0]/40"
                rows={4}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#00AEEF] text-white py-3 rounded-xl font-semibold hover:bg-[#0088d3] transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Text */}
        {/* <div className="relative flex flex-col items-start md:items-end justify-center text-right z-10">
          <p className="text-lg font-semibold text-black leading-relaxed">
            Become a <span className="font-bold">Partner</span>,<br />
            Contact <span className="text-orange-500 font-bold">our</span>{" "}
            <span className="text-[#009DF0] font-bold">team 📩</span>
          </p>
        </div> */}
      </div>
      <div className="relative w-1/3 max-w-[400px] md:max-w-[600px] lg:max-w-[800px] h-auto md:h-[600px] lg:h-[800px] ml-[-60px] md:ml-[-100px]">
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
