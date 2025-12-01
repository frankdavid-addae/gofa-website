import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HomeHero } from "@/components/home/hero"
import { HomeSteps } from "@/components/home/steps"
import { HomeFeatures } from "@/components/home/features"
import { HomeFarmCategories } from "@/components/home/farm-categories"
import { HomeTestimonials } from "@/components/home/testimonials"
import { HomeCTA } from "@/components/home/cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HomeHero />
      <HomeSteps />
      <HomeFeatures />
      <HomeFarmCategories />
      <HomeTestimonials />
      <HomeCTA />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  )
}
