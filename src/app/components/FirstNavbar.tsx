// import React from "react";
// import { ThemeToggle } from "./theme-toggle";

// export const FirstNavbar = () => {
//   return (
//     <>
//       <div className="w-full bg-gradient-to-r from-[#00AEEF] to-[#BFA36E] px-6 lg:px-18  py-2 flex items-center justify-between text-white text-sm ">
//         <div className="flex items-center gap-2">
//           <ThemeToggle />
//         </div>
//         <p className="hidden md:block text-center flex-1">
//           Specialized in bringing your ideas to life – request your service
//           today
//         </p>
//         <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
//           <span className="text-lg">🌐</span>
//           <span>English</span>
//         </button>
//       </div>
//     </>
//   );
// };
import React from "react";
import { ThemeToggle } from "./theme-toggle";

export const FirstNavbar = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#00AEEF] to-[#BFA36E] px-6 sm:px-6 lg:px-18 py-2  flex items-center justify-between text-white text-sm">
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
        <p className="hidden md:block text-center flex-1 mx-4 font-work-sans  text-sm lg:text-base">
          Specialized in bringing your ideas to life – request your service
          today
        </p>
        <button className="flex items-center gap-1 hover:opacity-80 transition-opacity font-work-sans font-medium ">
          <span className="text-sm lg:text-base">🌐</span>
          <span className="text-sm lg:text-base">English</span>
        </button>
      </div>
    </>
  );
};
