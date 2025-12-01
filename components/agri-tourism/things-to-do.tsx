import { Flower2, Fish, ChefHat, Waves, Bike, Heart, Salad, Camera } from "lucide-react"

const activities = [
  {
    icon: Flower2,
    title: "Apiary Tour",
    description: "Learn about beekeeping and honey production. Taste fresh honey varieties and take some home.",
    duration: "2 hours",
    price: "$25/person",
    image: "/placeholder.svg?key=prcwf",
  },
  {
    icon: Fish,
    title: "Night Fishing",
    description: "Experience the thrill of fishing under the stars. All equipment provided, keep your catch!",
    duration: "4 hours",
    price: "$40/person",
    image: "/placeholder.svg?key=tz59a",
  },
  {
    icon: ChefHat,
    title: "Chef's Table Experience",
    description: "Farm-to-table dining with our executive chef. Fresh ingredients, unforgettable flavors.",
    duration: "3 hours",
    price: "$75/person",
    image: "/placeholder.svg?key=qgf10",
  },
  {
    icon: Waves,
    title: "Water Biking",
    description: "Pedal across our scenic lake on water bikes. Fun for all ages and fitness levels.",
    duration: "1 hour",
    price: "$20/person",
    image: "/placeholder.svg?key=6v3ex",
  },
  {
    icon: Bike,
    title: "Farm Cycling",
    description: "Explore the entire farm on bicycle. Scenic routes through orchards, ponds, and fields.",
    duration: "2 hours",
    price: "$15/person",
    image: "/placeholder.svg?key=b2hox",
  },
  {
    icon: Heart,
    title: "Animal Feeding",
    description: "Perfect for kids! Feed goats, rabbits, and poultry. Educational and fun for the whole family.",
    duration: "1 hour",
    price: "$10/person",
    image: "/placeholder.svg?key=1qhm5",
  },
  {
    icon: Salad,
    title: "Organic Cooking Class",
    description: "Learn to cook traditional Ghanaian dishes using fresh farm ingredients. Take home recipes!",
    duration: "3 hours",
    price: "$50/person",
    image: "/placeholder.svg?key=v4m5t",
  },
  {
    icon: Camera,
    title: "Farm Photo Tour",
    description: "Golden hour photography session with a guide. Perfect for content creators and nature lovers.",
    duration: "2 hours",
    price: "$30/person",
    image: "/placeholder.svg?key=39bbs",
  },
]

export function ThingsToDo() {
  return (
    <section id="activities" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-semibold mb-4">
            Activities
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Things to <span className="text-gold-gradient">Do</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            From relaxing tours to adventurous activities, there's something for everyone at GoFA farms.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center mb-2">
                    <activity.icon className="w-5 h-5 text-forest" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-forest">
                  {activity.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{activity.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{activity.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Duration: {activity.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
