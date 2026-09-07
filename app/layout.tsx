import "@/app/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { incognito } from "./assets/font/font";
import { gitlabmono } from "./assets/font/font";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const options = {
  title: "Muhammad Bilal Farid | Full-Stack & ML Engineer",
  description:
    "Muhammad Bilal Farid is a Full-Stack Developer and Machine Learning Engineer specializing in Python, FastAPI, React, and web automation.",
  url: "https://bilalfarid-1.github.io/Portfolio-website/",
  ogImage: "/pictures/chess.jfif",
};

export const metadata: Metadata = {
  title: options.title,
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "Muhammad Bilal Farid Portfolio",
    locale: "en-US",
    type: "website",
    description: options.description,
  },
  alternates: {
    canonical: options.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
