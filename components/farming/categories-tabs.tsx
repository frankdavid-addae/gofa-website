"use client"

import { useState } from "react"
import { Fish, Leaf, Carrot, Wheat, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  {
    id: "aquaculture",
    icon: Fish,
    name: "Aquaculture",
    subtitle: "Fish Farming",
    investment: { min: 500, max: 5000 },
    roi: "40-60%",
    cycle: "4-12 months",
    species: ["Tilapia", "Catfish"],
    description:
      "Premium fish farming with guaranteed buyback. Our state-of-the-art ponds and expert aquaculturists ensure optimal growth and maximum returns.",
    features: [
      "Guaranteed buyback at market price",
      "Modern pond infrastructure",
      "Disease-resistant fingerlings",
      "Real-time water quality monitoring",
      "Professional feeding schedules",
      "Insurance coverage included",
    ],
    image: "/placeholder.svg?key=gvkns",
  },
  {
    id: "tubers",
    icon: Leaf,
    name: "Tuber Crops",
    subtitle: "Cassava & Yam",
    investment: { min: 300, max: 3000 },
    roi: "35-50%",
    cycle: "8-12 months",
    species: ["Cassava", "Yam", "Sweet Potato"],
    description:
      "High-demand root crops with established processing and export channels. Perfect for investors seeking stable, mid-term returns.",
    features: [
      "High-yield disease-resistant varieties",
      "Established buyer networks",
      "Processing facility access",
      "Export market connections",
      "Mechanized harvesting",
      "Storage facilities available",
    ],
    image: "/placeholder.svg?key=a2o2c",
  },
  {
    id: "vegetables",
    icon: Carrot,
    name: "Vegetables",
    subtitle: "Fresh Produce",
    investment: { min: 200, max: 2000 },
    roi: "50-80%",
    cycle: "3-6 months",
    species: ["Tomatoes", "Peppers", "Onions", "Lettuce"],
    description:
      "Quick-cycle vegetable farming with premium market access. Ideal for investors wanting faster returns and multiple cycles per year.",
    features: [
      "Greenhouse & open-field options",
      "Multiple cycles per year",
      "Premium market access",
      "Drip irrigation systems",
      "Organic options available",
      "Direct-to-retail channels",
    ],
    image: "/placeholder.svg?key=0jt97",
  },
  {
    id: "cereals",
    icon: Wheat,
    name: "Cereal Crops",
    subtitle: "Maize & Rice",
    investment: { min: 250, max: 2500 },
    roi: "30-45%",
    cycle: "4-8 months",
    species: ["Maize", "Rice", "Sorghum"],
    description:
      "Staple crops with stable demand and reliable returns. These foundational agricultural investments offer consistent performance.",
    features: [
      "Large-scale mechanized farming",
      "Government support programs",
      "Stable market demand",
      "Storage & processing included",
      "Export opportunities",
      "Seed bank partnerships",
    ],
    image: "/placeholder.svg?key=e6xkz",
  },
]

export function CategoriesTabs() {
  const [activeTab, setActiveTab] = useState("aquaculture")
  const activeCategory = categories.find((c) => c.id === activeTab)!

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeTab === category.id
                  ? "bg-gold text-forest shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img
                src={activeCategory.image || "/placeholder.svg"}
                alt={activeCategory.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* ROI Badge */}
            <div className="absolute -bottom-6 -right-6 bg-forest text-white rounded-2xl p-6 shadow-xl">
              <div className="text-sm text-white/70 mb-1">Expected ROI</div>
              <div className="font-serif text-3xl font-bold text-gold">{activeCategory.roi}</div>
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center">
                <activeCategory.icon className="w-7 h-7 text-gold-dark" />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground">{activeCategory.name}</h2>
                <p className="text-muted-foreground">{activeCategory.subtitle}</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{activeCategory.description}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-cream rounded-xl p-4 text-center">
                <div className="text-sm text-muted-foreground mb-1">Investment</div>
                <div className="font-semibold text-foreground">
                  ${activeCategory.investment.min} - ${activeCategory.investment.max}
                </div>
              </div>
              <div className="bg-cream rounded-xl p-4 text-center">
                <div className="text-sm text-muted-foreground mb-1">ROI</div>
                <div className="font-semibold text-gold-dark">{activeCategory.roi}</div>
              </div>
              <div className="bg-cream rounded-xl p-4 text-center">
                <div className="text-sm text-muted-foreground mb-1">Cycle</div>
                <div className="font-semibold text-foreground">{activeCategory.cycle}</div>
              </div>
            </div>

            {/* Species */}
            <div className="mb-8">
              <div className="text-sm font-semibold text-foreground mb-3">Available Options:</div>
              <div className="flex flex-wrap gap-2">
                {activeCategory.species.map((species) => (
                  <span key={species} className="px-3 py-1 bg-sage rounded-full text-sm text-forest-light">
                    {species}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <div className="text-sm font-semibold text-foreground mb-3">Features & Benefits:</div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {activeCategory.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Button size="lg" className="bg-gold hover:bg-gold-dark text-forest font-semibold rounded-full">
              Invest in {activeCategory.name}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
