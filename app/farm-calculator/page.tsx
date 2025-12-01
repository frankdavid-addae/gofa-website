import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { FarmCalculator } from "@/components/farm-calculator"

export const metadata: Metadata = {
  title: "Farm Investment Profit Calculator | GoFA",
  description:
    "Calculate your potential profits from fish farming and agricultural investments with GoFA's interactive profit calculator. Real-time calculations with detailed revenue projections.",
  keywords:
    "farm calculator, profit calculator, fish farming calculator, investment calculator, agricultural ROI, farming profit",
  openGraph: {
    title: "Farm Investment Profit Calculator | GoFA",
    description:
      "Calculate your potential profits from fish farming and agricultural investments with GoFA's interactive profit calculator.",
    type: "website",
  },
}

export default function FarmCalculatorPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <FarmCalculator />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
