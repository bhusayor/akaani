import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../styles/base.css";
import SmoothScroll from "@/components/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "akaani — Nigerian food, tracked properly.",
  description:
    "200+ Nigerian dishes, accurate macros, no guessing. akaani is the nutrition app built for how we actually eat.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
