import { CheckCircle2 } from "lucide-react"

export function GoFAModel() {
  const steps = [
    {
      number: "01",
      title: "Invest",
      description:
        "An individual or entity buys the inputs to engage in a specific type of farming over an agreed period.",
    },
    {
      number: "02",
      title: "We Grow",
      description: "Lotar Farms manages everything—land, labor, maintenance, and operations.",
    },
    {
      number: "03",
      title: "You Profit",
      description: "Harvest is shared based on a transparent, pre-agreed structure.",
    },
  ]

  return (
    <section id="gofa-model" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            How It Works
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            The GoFA Model: White-Collar Farming
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            A simple three-step process that makes farming accessible, profitable, and stress-free for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card border border-border rounded-lg p-8 h-full">
                <div className="text-6xl font-serif font-bold text-primary/10 mb-4">{step.number}</div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{step.description}</p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Simple & Transparent</span>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
