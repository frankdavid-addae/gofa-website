import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "GoFA | Gold For Africa - White-Collar Digital Farming & Agri-Investment",
  description:
    "Own a farm. Earn harvest profit. Never pick up a hoe. GoFA offers white-collar digital farming, agri-tourism, and infrastructure investment opportunities for Africans and the diaspora.",
  keywords:
    "GoFA, Gold For Africa, white-collar farming, digital farming, agricultural investment, aquaculture, fish farming, agri-tourism, farm investment, Africa investment, diaspora investment, sustainable agriculture",
  authors: [{ name: "GoFA - Gold For Africa" }],
  openGraph: {
    title: "GoFA | Gold For Africa - White-Collar Digital Farming",
    description:
      "Own a farm. Earn harvest profit. Never pick up a hoe. Smart farming for Africa's professionals and the diaspora.",
    type: "website",
    locale: "en_US",
    siteName: "GoFA - Gold For Africa",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoFA | Gold For Africa - White-Collar Digital Farming",
    description: "Own a farm. Earn harvest profit. Never pick up a hoe. Smart farming for Africa's professionals.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#1a3a2a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
