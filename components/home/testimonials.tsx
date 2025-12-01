import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Kwame Asante",
    role: "Software Engineer, USA",
    image: "/professional-african-american-man.png",
    content:
      "As a Ghanaian in the diaspora, GoFA lets me invest in my homeland without the stress of managing a farm. My fish farming investment returned 58% in just 8 months!",
    rating: 5,
  },
  {
    name: "Adaora Okonkwo",
    role: "Medical Doctor, Nigeria",
    image: "/professional-african-woman-doctor-portrait.jpg",
    content:
      "I love that I can visit my farm anytime. The transparency and real-time updates give me complete peace of mind. This is truly white-collar farming.",
    rating: 5,
  },
  {
    name: "Emmanuel Mensah",
    role: "Business Owner, UK",
    image: "/professional-african-man-business-portrait.jpg",
    content:
      "The 70% profit share is unmatched. I've diversified across fish and vegetables, and the returns have been consistently excellent. Highly recommend!",
    rating: 5,
  },
]

export function HomeTestimonials() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            What Our <span className="text-gold-gradient">Farmers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Join thousands of satisfied digital farmers earning from Africa's agricultural boom.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-cream rounded-2xl p-8 relative hover:shadow-lg transition-shadow">
              {/* Quote Icon */}
              <div className="absolute -top-4 right-8">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-forest" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed">{testimonial.content}</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
