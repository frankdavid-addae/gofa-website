import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Users, Calendar, Heart, Briefcase, GraduationCap, Sparkles } from "lucide-react"

const packages = [
  {
    icon: Heart,
    name: "Romantic Escape",
    type: "Couples Package",
    duration: "2 Nights",
    price: 350,
    features: [
      "Romantic Retreat Cottage",
      "Chef's Table Dinner",
      "Couples Spa Treatment",
      "Sunset Water Biking",
      "Breakfast in Bed",
      "Farm Photo Session",
    ],
    popular: false,
  },
  {
    icon: Users,
    name: "Family Fun",
    type: "Weekend Package",
    duration: "3 Nights",
    price: 650,
    features: [
      "Family Cottage",
      "Animal Feeding Experience",
      "Farm Cycling Tour",
      "Organic Cooking Class",
      "Night Fishing Trip",
      "All Meals Included",
    ],
    popular: true,
  },
  {
    icon: Briefcase,
    name: "Team Building",
    type: "Corporate Package",
    duration: "2 Days",
    price: 1200,
    features: [
      "Executive Lodge",
      "Conference Facilities",
      "Team Activities",
      "Farm-to-Table Catering",
      "Apiary & Farm Tours",
      "Presentation Equipment",
    ],
    popular: false,
  },
  {
    icon: GraduationCap,
    name: "Educational Tour",
    type: "Group Package",
    duration: "1 Day",
    price: 25,
    priceNote: "per person",
    features: [
      "Guided Farm Tour",
      "Agricultural Learning",
      "Animal Interaction",
      "Lunch Included",
      "Take-Home Materials",
      "Min. 10 Participants",
    ],
    popular: false,
  },
]

const specialOffers = [
  {
    icon: Sparkles,
    title: "Holiday Special",
    description: "20% off all packages during Easter, Christmas, and New Year periods.",
  },
  {
    icon: Calendar,
    title: "Weekday Discount",
    description: "15% off cottage bookings from Monday to Thursday.",
  },
  {
    icon: Users,
    title: "Group Bonus",
    description: "Book for 10+ guests and get 1 complimentary activity per person.",
  },
]

export function TourismPackages() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-semibold mb-4">
            Packages
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Curated <span className="text-gold-gradient">Experiences</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Choose from our specially designed packages for couples, families, corporates, and educational groups.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`relative overflow-hidden ${pkg.popular ? "border-gold shadow-lg" : "border-border"}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gold text-forest text-xs font-bold px-3 py-1">
                  MOST POPULAR
                </div>
              )}
              <div className="p-6">
                <div className="w-12 h-12 bg-sage rounded-xl flex items-center justify-center mb-4">
                  <pkg.icon className="w-6 h-6 text-forest" />
                </div>
                <div className="text-sm text-gold-dark font-semibold mb-1">{pkg.type}</div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-serif text-3xl font-bold text-foreground">${pkg.price}</span>
                  <span className="text-muted-foreground text-sm">{pkg.priceNote || `/ ${pkg.duration}`}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-gold flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${pkg.popular ? "bg-gold hover:bg-gold-dark text-forest" : ""}`}
                  variant={pkg.popular ? "default" : "outline"}
                >
                  Book Package
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Special Offers */}
        <div className="bg-sage/30 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">Special Offers</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {specialOffers.map((offer) => (
              <div key={offer.title} className="bg-background rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <offer.icon className="w-6 h-6 text-gold-dark" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{offer.title}</h4>
                <p className="text-sm text-muted-foreground">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
