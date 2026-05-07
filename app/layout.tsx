import type { Metadata } from "next";

import { EB_Garamond } from "next/font/google";

import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "./components/Header";
import Footer from "./components/Footer";

const ebgaramond = EB_Garamond({
  weight: "500",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | KD49",
    default: "Kingdom 4049",
  },
  description:
    'Welcome to the "Rise of Kingdoms" Kingdom 4049 website, your main source for information, news, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ebgaramond.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col root">
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
