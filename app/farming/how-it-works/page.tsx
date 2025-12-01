import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HowItWorksHero } from "@/components/farming/how-it-works-hero"
import { HowItWorksTimeline } from "@/components/farming/how-it-works-timeline"
import { HowItWorksFAQ } from "@/components/farming/how-it-works-faq"

export const metadata: Metadata = {
  title: "How It Works | GoFA White-Collar Farming",
  description:
    "Learn how GoFA's white-collar farming works. Register, invest, and earn harvest profits without any farming experience required.",
}

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HowItWorksHero />
      <HowItWorksTimeline />
      <HowItWorksFAQ />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  )
}
