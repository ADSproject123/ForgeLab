import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ForgeLab — Digital Solutions That Drive Growth",
  description:
    "ForgeLab is an elite engineering studio delivering AI systems, LLM agents, full-stack applications, mobile apps, and robotics software for teams that demand excellence.",
  keywords: [
    "AI engineering",
    "digital solutions",
    "machine learning",
    "LLM fine-tuning",
    "full stack development",
    "mobile apps",
    "robotics",
    "ForgeLab",
  ],
  authors: [{ name: "ForgeLab", url: "https://forgelab.cam" }],
  openGraph: {
    title: "ForgeLab — Digital Solutions That Drive Growth",
    description:
      "Elite engineering studio delivering AI systems, intelligent applications, and high-performance software.",
    url: "https://forgelab.cam",
    siteName: "ForgeLab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ForgeLab — Digital Solutions That Drive Growth",
    description: "Elite engineering studio delivering AI systems and intelligent applications.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
