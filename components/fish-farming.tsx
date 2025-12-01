import Image from "next/image"
import { Droplets, TrendingUp, Award, Leaf } from "lucide-react"

export function FishFarming() {
  const features = [
    {
      icon: Droplets,
      title: "Advanced Aquaculture",
      description:
        "State-of-the-art recirculating aquaculture systems (RAS) ensuring optimal water quality and fish health.",
    },
    {
      icon: TrendingUp,
      title: "High Yield Production",
      description:
        "Efficient farming techniques producing over 500 tons of premium fish annually with consistent quality.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality control and certification processes meeting international food safety standards.",
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description:
        "Environmentally responsible methods minimizing water usage and eliminating harmful chemical treatments.",
    },
  ]

  return (
    <section id="fish-farming" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Aquaculture Excellence
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Sustainable Fish Farming Operations
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Our fish farming division represents the pinnacle of modern aquaculture. We specialize in raising tilapia,
              catfish, and other species using cutting-edge technology and sustainable practices that prioritize both
              environmental stewardship and product quality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-pretty">
              Through careful monitoring of water parameters, optimal feeding regimens, and disease prevention
              protocols, we maintain healthy fish populations that grow efficiently while minimizing environmental
              impact. Our facilities are designed to maximize production while ensuring the welfare of our aquatic
              livestock.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
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
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/modern-fish-farming-aquaculture-tanks-with-tilapia.jpg" alt="Fish farming operations" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
