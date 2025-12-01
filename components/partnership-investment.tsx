import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react"

export function PartnershipInvestment() {
  const benefits = [
    {
      icon: Zap,
      title: "Prioritized Revenue Share",
      description: "Infrastructure partners receive a prioritized share of revenue from farming operations.",
    },
    {
      icon: Shield,
      title: "Equity Position",
      description: "Secure an equity position in the assets, creating a scalable, long-term income stream.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Expand across multiple farm enclaves across Africa with proven, replicable models.",
    },
  ]

  return (
    <section id="partnership-investment" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Partnership Opportunity
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Partnership & Investment
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
            We are inviting visionary partners to co-own the agricultural backbone of Africa. This is an exclusive
            opportunity to invest directly in the core infrastructure of our premium farm enclaves.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="font-serif text-3xl font-bold text-foreground mb-6">The Investment Opportunity</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Your capital will fund the development of our aquaculture enclaves, including land clearing, irrigation,
              modern tanks/ponds, processing units, storage facilities, and solar-powered technology integration.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-12">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-6">Benefits for Partners</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-muted-foreground">Prioritized share of revenue</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-muted-foreground">Equity position in assets</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-muted-foreground">Scalable, long-term income stream</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-muted-foreground">Expansion across multiple enclaves</span>
              </li>
            </ul>
            <Button size="lg" className="w-full group">
              Become an Infrastructure Partner
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="mt-20 pt-20 border-t border-primary/20">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-12 text-center">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-4">Calculate Your Potential Returns</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Use our interactive profit calculator to project your returns based on different investment scenarios and
              market conditions.
            </p>
            <Link href="/farm-calculator">
              <Button size="lg" className="gap-2">
                Open Profit Calculator
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
