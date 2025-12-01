import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HowItWorksHero() {
  return (
    <section className="relative pt-32 pb-20 bg-forest overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/10 text-gold rounded-full text-sm font-semibold mb-6">
            White-Collar Farming
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            How <span className="text-gold">GoFA</span> Works
          </h1>
          <p className="text-xl text-white/80 mb-10 text-pretty">
            From registration to profit withdrawal, we've simplified farming investment into a seamless digital
            experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-forest font-semibold rounded-full" asChild>
              <Link href="/farming/categories">
                Start Investing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
