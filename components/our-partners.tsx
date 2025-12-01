import { Building2, Leaf } from "lucide-react"

export function OurPartners() {
  const partners = [
    {
      icon: Building2,
      name: "CAIP Ltd.",
      role: "Parent Think-Tank",
      description:
        "Centre for Africa Investment Promotion - Pan-African economic research & development institute established in 2019.",
    },
    {
      icon: Leaf,
      name: "Lotar Farms",
      role: "Operational & Management Service Provider",
      description:
        "Manages all farming operations, land, labor, and maintenance to ensure optimal productivity and sustainability.",
    },
  ]

  return (
    <section id="our-partners" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Our Team
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">Our Partners</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            GoFA is powered by a strategic partnership of experienced organizations dedicated to agricultural
            excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <partner.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{partner.name}</h3>
              <p className="text-primary font-semibold mb-4">{partner.role}</p>
              <p className="text-muted-foreground leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
