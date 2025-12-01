import Image from "next/image"
import { Heart, Shield, Truck, Users } from "lucide-react"

export function AnimalFarming() {
  const highlights = [
    {
      icon: Heart,
      title: "Animal Welfare First",
      description: "Spacious, clean facilities with veterinary care ensuring the health and comfort of all livestock.",
    },
    {
      icon: Shield,
      title: "Disease Prevention",
      description: "Comprehensive vaccination programs and biosecurity measures protecting herd health.",
    },
    {
      icon: Truck,
      title: "Supply Chain Excellence",
      description: "Efficient distribution network delivering fresh products to markets within 24 hours.",
    },
    {
      icon: Users,
      title: "Expert Management",
      description: "Experienced animal husbandry professionals ensuring best practices in livestock care.",
    },
  ]

  return (
    <section id="animal-farming" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/healthy-cattle-grazing-in-green-pasture-farm.jpg" alt="Animal farming operations" fill className="object-cover" />
            </div>
          </div>

          <div>
            <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
              Ethical Livestock Management
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Premium Animal Farming & Husbandry
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Our animal farming operations encompass cattle, poultry, and small livestock, all raised with the highest
              standards of care and ethical treatment. We believe that healthy, well-cared-for animals produce superior
              quality meat, dairy, and eggs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-pretty">
              From pasture-raised cattle to free-range poultry, our livestock enjoy natural living conditions with
              access to quality feed, clean water, and veterinary care. We implement rotational grazing systems that
              benefit both animal health and land sustainability, while our modern facilities ensure optimal conditions
              year-round.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
