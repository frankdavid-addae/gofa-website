import { Shield, Eye, Award, Users } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "70% Guaranteed Profit Share",
    description: "Industry-leading returns. You keep 70% of all harvest profits with transparent accounting.",
  },
  {
    icon: Users,
    title: "Zero Farming Experience Required",
    description: "Our expert agronomists and farm managers handle everything from planting to harvest.",
  },
  {
    icon: Eye,
    title: "Visit Your Farm Anytime",
    description: "Schedule farm visits, get real-time updates, and watch your investment grow via live feeds.",
  },
  {
    icon: Shield,
    title: "Insurance Protected Investment",
    description: "All farms are insured against natural disasters, pests, and market fluctuations.",
  },
]

export function HomeFeatures() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="/happy-african-farmer-with-tablet-technology-modern.jpg"
                alt="Modern African farmer with technology"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl p-6 shadow-xl border border-border max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 text-gold-dark" />
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-foreground">70%</div>
                  <div className="text-sm text-muted-foreground">Profit Share</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-semibold mb-4">
              Why GoFA
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Investing Made <span className="text-gold-gradient">Simple & Secure</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 text-pretty">
              We've removed all barriers to profitable farming. Whether you're in Africa or the diaspora, own productive
              farmland and earn consistent returns.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-sage rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
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
