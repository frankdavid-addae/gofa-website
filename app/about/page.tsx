import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AboutHero } from "@/components/about/hero"
import { CompanyOverview } from "@/components/about/company-overview"
import { TeamSection } from "@/components/about/team-section"
import { CareersSection } from "@/components/about/careers-section"
import { PressKit } from "@/components/about/press-kit"

export const metadata: Metadata = {
  title: "About GoFA | Gold For Africa - Our Story & Team",
  description:
    "Learn about GoFA (Gold For Africa), a pioneering AgriTech company founded in 2019. Meet our team, explore careers, and access our press kit.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <CompanyOverview />
      <TeamSection />
      <CareersSection />
      <PressKit />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  )
}
