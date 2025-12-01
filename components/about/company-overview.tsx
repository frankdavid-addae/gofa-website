import { Card } from "@/components/ui/card"
import { Target, Eye, Calendar, MapPin, Building, Globe } from "lucide-react"

const values = [
  {
    icon: "01",
    title: "Transparency",
    description: "Open communication and clear reporting on all investments and operations.",
  },
  {
    icon: "02",
    title: "Sustainability",
    description: "Environmentally responsible farming practices that preserve Africa's resources.",
  },
  { icon: "03", title: "Innovation", description: "Leveraging technology to transform traditional agriculture." },
  {
    icon: "04",
    title: "Community Impact",
    description: "Creating jobs and economic opportunities in rural communities.",
  },
  { icon: "05", title: "Excellence", description: "Delivering exceptional service and returns to all stakeholders." },
]

const companyDetails = [
  { icon: Building, label: "Legal Name", value: "Center for Africa Investment Promotion (CAIP) Ltd." },
  { icon: Globe, label: "Trading Name", value: "Gold for Africa (GoFA)" },
  { icon: Calendar, label: "Founded", value: "2019" },
  { icon: MapPin, label: "Headquarters", value: "Accra, Ghana" },
  { icon: Target, label: "Scope", value: "Pan-African" },
]

export function CompanyOverview() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-semibold mb-4">
              Company Overview
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Cultivating <span className="text-gold-gradient">Africa's Future</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-pretty">
              Center for Africa Investment Promotion (CAIP) Ltd., trading as Gold for Africa (GoFA), is a pioneering
              AgriTech company transforming how Africans and the diaspora engage with agriculture.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Founded in 2019, we recognized that many professionals wanted to invest in African agriculture but lacked
              the time, expertise, or infrastructure to do so. GoFA bridges this gap by offering white-collar farming -
              you invest, we manage the farm, and you share in the harvest profits.
            </p>

            {/* Company Details */}
            <div className="grid sm:grid-cols-2 gap-4">
              {companyDetails.map((detail) => (
                <div key={detail.label} className="flex items-center gap-3 p-3 bg-cream rounded-lg">
                  <detail.icon className="w-5 h-5 text-gold" />
                  <div>
                    <div className="text-xs text-muted-foreground">{detail.label}</div>
                    <div className="font-medium text-foreground text-sm">{detail.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img src="/placeholder.svg?key=rg56c" alt="GoFA team in action" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gold text-forest rounded-2xl p-6 shadow-xl">
              <div className="font-serif text-4xl font-bold">5+</div>
              <div className="text-sm">Years of Impact</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="p-8 bg-forest text-white">
            <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-white/80 leading-relaxed">
              To democratize agricultural investment by providing accessible, profitable, and sustainable farming
              opportunities for Africans and the diaspora, while driving food security and economic development across
              the continent.
            </p>
          </Card>

          <Card className="p-8 bg-gold text-forest">
            <div className="w-14 h-14 bg-forest/20 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-forest" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-forest/80 leading-relaxed">
              To become Africa's leading agricultural investment platform, transforming how people engage with farming
              and creating generational wealth through sustainable agriculture.
            </p>
          </Card>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-semibold mb-4">
            Core Values
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
            What We <span className="text-gold-gradient">Stand For</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value) => (
            <Card key={value.title} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gold text-forest rounded-full flex items-center justify-center mx-auto mb-4 font-serif font-bold">
                {value.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
