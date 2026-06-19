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
  title: "ForgeLab — We Build Systems That Think",
  description:
    "ForgeLab is an elite engineering lab building AI systems, LLM agents, full-stack applications, mobile apps, and robotics software.",
  keywords: [
    "AI engineering",
    "machine learning",
    "LLM fine-tuning",
    "full stack development",
    "mobile apps",
    "robotics",
    "ForgeLab",
  ],
  authors: [{ name: "ForgeLab", url: "https://forgelab.cam" }],
  openGraph: {
    title: "ForgeLab — We Build Systems That Think",
    description:
      "Elite engineering lab building AI systems, intelligent applications, and high-performance software.",
    url: "https://forgelab.cam",
    siteName: "ForgeLab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ForgeLab — We Build Systems That Think",
    description: "Elite engineering lab building AI systems and intelligent applications.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full bg-[#020204] text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
