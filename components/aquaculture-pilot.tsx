import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Droplets, TrendingUp, Award, Leaf } from "lucide-react"

export function AquaculturePilot() {
  const features = [
    {
      icon: Droplets,
      title: "State-of-the-Art Facilities",
      description: "Modern tanks and ponds designed for optimal breeding, fry rearing, and fingerling distribution.",
    },
    {
      icon: TrendingUp,
      title: "High-Yield Production",
      description: "Replicable model for sustainable fish seed production with maximum productivity.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality control ensuring healthy fish populations and consistent output.",
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Environmentally responsible methods aligned with global sustainability standards.",
    },
  ]

  return (
    <section id="aquaculture-pilot" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Current Opportunity
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Aquaculture Pilot: Fish Farming at Scale
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Our current farming space available is a state-of-the-art aquaculture operation at the pilot phase. We are
              developing a replicable model for high-yield, sustainable fish seed production and farm management in
              enclaves across Africa.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              This pilot focuses on optimal breeding, fry rearing, and fingerling distribution to ensure maximum
              productivity and sustainability. Join the early boat and share your story in the new face of Africa's
              agricultural development.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="group">
              Create My Fish Farm
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/modern-fish-farming-aquaculture-tanks-with-tilapia.jpg"
                alt="Fish farming operations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
