import Image from "next/image"
import { Leaf, Sun, Droplet, Sparkles } from "lucide-react"

export function OtherCrops() {
  const crops = [
    {
      name: "Maize & Grains",
      description: "High-yield corn and grain production for food and feed markets.",
      image: "/golden-maize-corn-field-ready-for-harvest.jpg",
    },
    {
      name: "Vegetables",
      description: "Fresh produce including tomatoes, peppers, and leafy greens.",
      image: "/colorful-vegetable-garden-with-tomatoes-and-pepper.jpg",
    },
    {
      name: "Root Crops",
      description: "Yams, sweet potatoes, and other nutritious tuber varieties.",
      image: "/freshly-harvested-sweet-potatoes-and-yams.jpg",
    },
  ]

  const practices = [
    {
      icon: Leaf,
      title: "Organic Methods",
      description: "Natural pest control and organic fertilizers for healthier crops.",
    },
    {
      icon: Sun,
      title: "Climate Smart",
      description: "Drought-resistant varieties and adaptive farming techniques.",
    },
    {
      icon: Droplet,
      title: "Water Efficiency",
      description: "Drip irrigation and water conservation systems.",
    },
    {
      icon: Sparkles,
      title: "Crop Rotation",
      description: "Strategic rotation maintaining soil health and fertility.",
    },
  ]

  return (
    <section id="crops" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Diverse Agriculture
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Cultivating a Variety of Premium Crops
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Beyond our core operations, we cultivate a diverse range of crops to meet market demands and promote
            agricultural biodiversity across our farmlands.
          </p>
        </div>

        {/* Crop Showcase */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {crops.map((crop, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={crop.image || "/placeholder.svg"}
                  alt={crop.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{crop.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{crop.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Farming Practices */}
        <div className="bg-muted/30 rounded-2xl p-8 sm:p-12">
          <h3 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
            Sustainable Farming Practices
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {practices.map((practice, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <practice.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{practice.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 sm:p-12">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-6">Innovation in Crop Production</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                Our crop diversification strategy ensures year-round production and reduces risk while maximizing land
                utilization. We employ precision agriculture technologies including soil sensors, weather monitoring,
                and data analytics to optimize planting schedules and resource allocation.
              </p>
              <p className="text-pretty">
                Each crop variety is carefully selected based on local climate conditions, market demand, and
                nutritional value. We maintain seed banks of heritage varieties while also testing improved cultivars
                that offer better yields, disease resistance, and nutritional profiles.
              </p>
              <p className="text-pretty">
                Through partnerships with agricultural research institutions, we continuously improve our farming
                methods and introduce innovative practices that enhance productivity while maintaining environmental
                sustainability. Our commitment to quality extends from seed selection through harvest and post-harvest
                handling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
