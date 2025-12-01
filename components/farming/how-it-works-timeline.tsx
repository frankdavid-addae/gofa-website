import { UserPlus, ShieldCheck, Wallet, Sprout, LineChart, BadgeDollarSign } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "Register",
    subtitle: "Create Your Account",
    description:
      "Sign up on our platform with your email and basic information. Complete identity verification to unlock all investment features.",
    details: ["Quick 5-minute registration", "Secure KYC verification", "Access to investor dashboard"],
  },
  {
    icon: ShieldCheck,
    title: "Verify",
    subtitle: "Identity & Payment",
    description:
      "Verify your identity and link your preferred payment method. We support bank transfers, mobile money, and international payments.",
    details: ["Multiple payment options", "Bank & mobile money", "International transfers supported"],
  },
  {
    icon: Wallet,
    title: "Invest",
    subtitle: "Choose Your Farm",
    description:
      "Select your preferred farm type, investment amount, and farming cycle. Receive your official allocation certificate instantly.",
    details: ["Choose from 4 farm categories", "Flexible investment amounts", "Instant allocation certificate"],
  },
  {
    icon: Sprout,
    title: "We Grow",
    subtitle: "Expert Farm Management",
    description:
      "Our professional agronomists handle everything - land preparation, planting, monitoring, pest control, and harvesting.",
    details: ["Professional farm managers", "Real-time progress updates", "Insurance-protected crops"],
  },
  {
    icon: LineChart,
    title: "Track",
    subtitle: "Monitor Your Farm",
    description:
      "Watch your investment grow through your dashboard. Get updates, photos, and reports. Schedule farm visits anytime.",
    details: ["Live farm monitoring", "Regular progress reports", "Schedule farm visits"],
  },
  {
    icon: BadgeDollarSign,
    title: "Get Profit",
    subtitle: "Receive Your Returns",
    description:
      "After harvest and sales, receive 70% of profits directly to your wallet. Convert to salary, reinvest, or withdraw instantly.",
    details: ["70% profit share", "Multiple withdrawal options", "Reinvestment available"],
  },
]

export function HowItWorksTimeline() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Your Journey to <span className="text-gold-gradient">Harvest Profits</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Follow these simple steps to become a digital farmer and start earning from Africa's agricultural potential.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Timeline Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-gold to-border hidden md:block" />
              )}

              <div className="flex gap-6 md:gap-10 mb-12">
                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-lg z-10 relative">
                    <step.icon className="w-6 h-6 text-forest" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-forest text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-cream rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                    <div className="text-sm text-gold-dark font-semibold mb-1">{step.subtitle}</div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-foreground/80">
                          <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
