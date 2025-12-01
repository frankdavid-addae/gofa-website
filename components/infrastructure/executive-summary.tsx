import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Target, Eye, Heart, Lightbulb, Users, DollarSign, Award, Building } from "lucide-react"

const sections = [
  {
    icon: Building,
    title: "Company Overview",
    content:
      "Center for Africa Investment Promotion (CAIP) Ltd., trading as Gold for Africa (GoFA), is a pioneering AgriTech company founded in 2019. Headquartered in Ghana with pan-African scope, GoFA bridges the gap between investors and profitable agricultural opportunities through innovative white-collar farming and agri-tourism services.",
  },
  {
    icon: Target,
    title: "Mission",
    content:
      "To democratize agricultural investment by providing accessible, profitable, and sustainable farming opportunities for Africans and the diaspora, while driving food security and economic development across the continent.",
  },
  {
    icon: Eye,
    title: "Vision",
    content:
      "To become Africa's leading agricultural investment platform, transforming how people engage with farming and creating generational wealth through sustainable agriculture.",
  },
  {
    icon: Heart,
    title: "Core Values",
    content:
      "Transparency, Sustainability, Innovation, Community Impact, and Excellence. Every decision we make is guided by our commitment to ethical business practices and measurable social impact.",
  },
]

const businessModel = [
  {
    icon: Users,
    title: "Target Market",
    items: [
      "African professionals (25-55 years)",
      "Diaspora investors",
      "Corporate partners",
      "Agricultural enthusiasts",
      "Institutional investors",
    ],
  },
  {
    icon: DollarSign,
    title: "Revenue Streams",
    items: [
      "Farm management fees (30% of profit)",
      "Agri-tourism services",
      "Infrastructure partnerships",
      "Processing & export margins",
      "Agricultural consulting",
    ],
  },
  {
    icon: Award,
    title: "Competitive Advantages",
    items: [
      "Proprietary farm management system",
      "Insurance-backed investments",
      "Established buyer networks",
      "Expert agronomist team",
      "Real-time monitoring technology",
    ],
  },
]

export function ExecutiveSummary() {
  return (
    <section id="summary" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-semibold mb-4">
            Executive Summary
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Investment <span className="text-gold-gradient">Overview</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A comprehensive look at GoFA's business model, market position, and growth potential.
          </p>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button className="bg-gold hover:bg-gold-dark text-forest font-semibold gap-2">
            <Download className="w-5 h-5" />
            Executive Summary (PDF)
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Download className="w-5 h-5" />
            Pitch Deck (PDF)
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Download className="w-5 h-5" />
            Financial Projections
          </Button>
        </div>

        {/* Company Overview Sections */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {sections.map((section) => (
            <Card key={section.title} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sage rounded-xl flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{section.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Business Model */}
        <div className="bg-cream rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">Business Model</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {businessModel.map((model) => (
              <div key={model.title}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center">
                    <model.icon className="w-5 h-5 text-gold-dark" />
                  </div>
                  <h4 className="font-semibold text-foreground">{model.title}</h4>
                </div>
                <ul className="space-y-2">
                  {model.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Lightbulb className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
