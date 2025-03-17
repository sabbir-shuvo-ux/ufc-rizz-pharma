import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/sections/footer/Footer";

// local fonts
const neueMontreal = localFont({
  src: "./fonts/NeueMontreal-Regular.otf",
  variable: "--font-neue-montreal-regular",
  weight: "400",
});

const neueMontrealMedium = localFont({
  src: "./fonts/NeueMontreal-Medium.otf",
  variable: "--font-neue-montreal-medium",
  weight: "500",
});
const neueMontrealBold = localFont({
  src: "./fonts/NeueMontreal-Bold.otf",
  variable: "--font-neue-montreal-bold",
  weight: "700",
});
const impact = localFont({
  src: "./fonts/impact.ttf",
  variable: "--font-impact",
  weight: "400",
});

// metadata
export const metadata: Metadata = {
  title: "UFC RIZZ PHARMA - Prescription treatments for yourhealth goals",
  description: "UFC RIZZ PHARMA - Prescription treatments for yourhealth goals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueMontreal.variable} ${neueMontrealMedium.variable} ${neueMontrealBold.variable} ${impact.variable} antialiased`}
      >
        {/* navbar */}
        <Navbar />

        {/* main */}
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
