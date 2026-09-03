import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// 0110110101100101011001010111000001111010011011110111001001110000
export const metadata: Metadata = {
  title: {
    default: "Meep | Software Developer",
    template: "%s | Meep",
  },
  description:
    "Personal portfolio of Meep, a software developer building modern, interactive web applications with TypeScript, React, and Next.js.",
  keywords: [
    "Meep",
    "software developer",
    "web developer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  openGraph: {
    title: "Meep | Software Developer",
    description:
      "Software developer building modern, interactive web applications.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}<Script
          src="https://cloud.umami.is/script.js"
          data-website-id="871e3b3b-8ac4-445b-bcb8-fa1ea8180799"
          strategy="afterInteractive"
        /></body>
    </html>
  );
}
