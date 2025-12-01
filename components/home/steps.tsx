import { UserPlus, Wallet, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Pick Your Crop",
    description: "Choose from fish farming, tubers, vegetables, or cereal crops based on your investment goals.",
  },
  {
    icon: Wallet,
    step: "02",
    title: "Fund Inputs",
    description: "Invest as little as $200. We handle land, labor, equipment, and expert farm management.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Get Profit",
    description: "Receive 70% of harvest profits directly to your wallet. Track everything in real-time.",
  },
]

export function HomeSteps() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Farm in <span className="text-gold-gradient">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            No farming experience needed. We handle the hard work while you earn from Africa's agricultural potential.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gold/50 to-transparent" />
              )}

              <div className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-gold/30 relative">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center font-serif font-bold text-forest text-lg shadow-lg">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-sage rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <step.icon className="w-8 h-8 text-forest" />
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
