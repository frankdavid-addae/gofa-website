import { Sprout, Fish, Beef, Wheat } from "lucide-react"

export function BusinessOverview() {
  const businesses = [
    {
      icon: Fish,
      number: "01",
      title: "Fish Farming",
      description:
        "Sustainable aquaculture practices producing premium quality fish through innovative farming techniques.",
    },
    {
      icon: Beef,
      number: "02",
      title: "Animal Farming",
      description:
        "Ethical livestock management ensuring animal welfare while delivering high-quality meat and dairy products.",
    },
    {
      icon: Sprout,
      number: "03",
      title: "Cassava Cultivation",
      description:
        "Large-scale cassava production utilizing modern agricultural methods for maximum yield and quality.",
    },
    {
      icon: Wheat,
      number: "04",
      title: "Diverse Crops",
      description:
        "Cultivating a variety of crops including grains, vegetables, and specialty produce for diverse markets.",
    },
  ]

  return (
    <section id="overview" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Business Divisions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            We operate across multiple agricultural sectors, each committed to excellence, sustainability, and
            innovation in modern farming practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {businesses.map((business, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-6 right-6 text-6xl font-serif font-bold text-muted/10 group-hover:text-primary/10 transition-colors">
                {business.number}
              </div>
              <div className="relative">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <business.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{business.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{business.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
