import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { DashboardPreview } from "@/components/farming/dashboard-preview"

export const metadata: Metadata = {
  title: "Farmer Dashboard | GoFA White-Collar Farming",
  description:
    "Access your GoFA farmer dashboard. Track investments, monitor farm progress, manage wallet, and schedule farm visits.",
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <DashboardPreview />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  )
}
