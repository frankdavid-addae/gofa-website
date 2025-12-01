import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, TrendingUp } from "lucide-react"

export function InfrastructureHero() {
  return (
    <section className="relative pt-32 pb-20 bg-forest overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-gold rounded-full text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            Investment Opportunity
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Invest in Africa's <span className="text-gold">Agricultural Future</span>
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto text-pretty">
            Join us in building transformative agricultural infrastructure. Equity participation, dividend returns, and
            meaningful impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-forest font-semibold rounded-full" asChild>
              <Link href="#calculator">
                Calculate Returns
                <TrendingUp className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 rounded-full bg-transparent"
              asChild
            >
              <Link href="#summary">
                <Download className="mr-2 w-5 h-5" />
                Download Pitch Deck
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "$10M", label: "Target Raise" },
              { value: "15-25%", label: "Projected Dividend" },
              { value: "5 Years", label: "Investment Horizon" },
              { value: "Pan-African", label: "Market Scope" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-bold text-gold mb-1">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
