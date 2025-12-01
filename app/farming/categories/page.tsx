import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CategoriesHero } from "@/components/farming/categories-hero"
import { CategoriesTabs } from "@/components/farming/categories-tabs"
import { InvestmentCalculator } from "@/components/farming/investment-calculator"

export const metadata: Metadata = {
  title: "Farm Categories | GoFA White-Collar Farming",
  description:
    "Explore GoFA's farm investment categories: Aquaculture, Tuber Crops, Vegetables, and Cereal Crops. Calculate your potential returns.",
}

export default function CategoriesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CategoriesHero />
      <CategoriesTabs />
      <InvestmentCalculator />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  )
}
