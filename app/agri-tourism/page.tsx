import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AgriTourismHero } from "@/components/agri-tourism/hero"
import { CottageBooking } from "@/components/agri-tourism/cottage-booking"
import { ThingsToDo } from "@/components/agri-tourism/things-to-do"
import { TourismPackages } from "@/components/agri-tourism/packages"

export const metadata: Metadata = {
  title: "Agri-Tourism | GoFA Farm Cottages & Experiences",
  description:
    "Experience farm life at GoFA. Book farm cottages, enjoy apiary tours, night fishing, chef's table experiences, and more. Perfect for families, couples, and corporate retreats.",
}

export default function AgriTourismPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AgriTourismHero />
      <CottageBooking />
      <ThingsToDo />
      <TourismPackages />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  )
}
