import { Work_Sans } from "next/font/google";

export const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans", 
    style: ["normal", "italic"],
});
