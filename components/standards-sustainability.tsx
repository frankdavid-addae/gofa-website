import { CheckCircle2, Leaf, Globe, Award } from "lucide-react"

export function StandardsSustainability() {
  const commitments = [
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Sustainable practices designed to minimize environmental impact and preserve natural resources.",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Operations aligned with international benchmarks for sustainability and environmental management.",
    },
    {
      icon: Award,
      title: "Food Safety & Traceability",
      description: "Rigorous quality control and traceability systems ensuring safe, high-quality products.",
    },
  ]

  return (
    <section id="standards" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Our Commitment
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Standards & Sustainability
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            GoFA is dedicated to responsible farming. Our practices are designed to meet international benchmarks for
            sustainability, animal welfare, and environmental management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <commitment.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{commitment.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{commitment.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-12">
          <h3 className="font-serif text-3xl font-bold text-foreground mb-8">Our Alignment with Best Practices</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Optimal breeding and fry rearing techniques",
              "Fingerling distribution for maximum productivity",
              "Continuous improvement of farming operations",
              "Responsible resource management",
              "Community engagement and development",
              "Transparent reporting and accountability",
            ].map((practice, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{practice}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
