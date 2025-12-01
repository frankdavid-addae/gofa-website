import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Fish, Leaf, Carrot, Wheat, ArrowRight } from "lucide-react"

const categories = [
  {
    icon: Fish,
    title: "Aquaculture",
    subtitle: "Fish Farming",
    investment: "$500 - $5,000",
    roi: "40-60%",
    cycle: "4-12 months",
    description: "Premium Tilapia & Catfish farming with guaranteed buyback.",
    image: "/modern-fish-pond-aquaculture-farm-africa.jpg",
  },
  {
    icon: Leaf,
    title: "Tuber Crops",
    subtitle: "Cassava & Yam",
    investment: "$300 - $3,000",
    roi: "35-50%",
    cycle: "8-12 months",
    description: "High-demand root crops with established market channels.",
    image: "/cassava-farm-harvest-africa.jpg",
  },
  {
    icon: Carrot,
    title: "Vegetables",
    subtitle: "Fresh Produce",
    investment: "$200 - $2,000",
    roi: "50-80%",
    cycle: "3-6 months",
    description: "Quick-cycle vegetable farming with premium market access.",
    image: "/organic-vegetable-farm-greenhouse-africa.jpg",
  },
  {
    icon: Wheat,
    title: "Cereal Crops",
    subtitle: "Maize & Rice",
    investment: "$250 - $2,500",
    roi: "30-45%",
    cycle: "4-8 months",
    description: "Staple crops with stable demand and reliable returns.",
    image: "/golden-wheat-field-harvest-africa.jpg",
  },
]

export function HomeFarmCategories() {
  return (
    <section className="py-20 md:py-28 bg-sage/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-semibold mb-4">
            Farm Categories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Choose Your <span className="text-gold-gradient">Investment Path</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Diversify your portfolio across multiple agricultural sectors. Each category offers unique returns and
            cycles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-gold/30"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-forest" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-white">{category.title}</div>
                      <div className="text-white/70 text-sm">{category.subtitle}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Investment</span>
                    <span className="font-semibold text-foreground">{category.investment}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">ROI</span>
                    <span className="font-semibold text-gold-dark">{category.roi}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Cycle</span>
                    <span className="font-semibold text-foreground">{category.cycle}</span>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full group/btn bg-transparent" asChild>
                  <Link href="/farming/categories">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gold hover:bg-gold-dark text-forest font-semibold rounded-full" asChild>
            <Link href="/farming/categories">
              View All Categories & Calculator
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
