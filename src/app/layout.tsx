import { Poppins } from "next/font/google";
import "./globals.css";
import { workSans } from "./lib/fonts";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "SIRGAD - IT Partner",
  description: "Modern IT Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${poppins.className} ${workSans.variable} max-w-[1920px] mx-auto w-full overflow-x-hidden text-base antialiased text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}