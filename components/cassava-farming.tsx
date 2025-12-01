import Image from "next/image"
import { BarChart3, Zap, Globe, Recycle } from "lucide-react"

export function CassavaFarming() {
  const stats = [
    { label: "Hectares Cultivated", value: "2,500+" },
    { label: "Annual Production", value: "15,000 tons" },
    { label: "Processing Capacity", value: "50 tons/day" },
    { label: "Market Reach", value: "12 countries" },
  ]

  const capabilities = [
    {
      icon: BarChart3,
      title: "Large-Scale Production",
      description: "Extensive cassava plantations utilizing mechanized farming for efficient large-scale cultivation.",
    },
    {
      icon: Zap,
      title: "Modern Processing",
      description:
        "Advanced processing facilities converting cassava into flour, starch, and other value-added products.",
    },
    {
      icon: Globe,
      title: "Export Quality",
      description: "International standard products meeting global market requirements and certifications.",
    },
    {
      icon: Recycle,
      title: "Zero Waste",
      description: "Comprehensive utilization of cassava by-products for animal feed and organic fertilizer.",
    },
  ]

  return (
    <section id="cassava" className="py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            Cassava Excellence
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Industrial Cassava Cultivation & Processing
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            As one of the region's leading cassava producers, we combine traditional agricultural knowledge with modern
            farming techniques to deliver consistent, high-quality yields.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="font-serif text-3xl font-bold text-foreground mb-6">From Farm to Market</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
              Our cassava operations span the entire value chain, from selecting optimal planting materials to final
              product distribution. We cultivate high-yielding varieties suited to local conditions, ensuring maximum
              productivity and quality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Through precision agriculture techniques, soil management, and integrated pest control, we maintain
              healthy crops while minimizing environmental impact. Our processing facilities transform fresh cassava
              into various products including flour, starch, chips, and pellets for both human consumption and
              industrial applications.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <capability.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{capability.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/cassava-plantation-with-workers-harvesting-cassava.jpg" alt="Cassava farming operations" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
