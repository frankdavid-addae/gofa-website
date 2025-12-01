import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InfrastructureHero } from "@/components/infrastructure/hero"
import { ExecutiveSummary } from "@/components/infrastructure/executive-summary"
import { InvestmentCalculator } from "@/components/infrastructure/investment-calculator"
import { InvestorContact } from "@/components/infrastructure/investor-contact"

export const metadata: Metadata = {
  title: "Infrastructure Investment | GoFA - Partner in Africa's Agricultural Future",
  description:
    "Invest in GoFA's agricultural infrastructure. Access executive summaries, pitch decks, and equity calculators. Partner in Africa's agricultural transformation.",
}

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <InfrastructureHero />
      <ExecutiveSummary />
      <InvestmentCalculator />
      <InvestorContact />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  )
}
