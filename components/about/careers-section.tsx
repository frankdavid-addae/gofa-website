import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Clock, ArrowRight } from "lucide-react"

const openPositions = [
  {
    title: "Senior Agronomist",
    department: "Farm Operations",
    location: "Accra, Ghana",
    type: "Full-time",
  },
  {
    title: "Full Stack Developer",
    department: "Technology",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Investment Analyst",
    department: "Finance",
    location: "Accra, Ghana",
    type: "Full-time",
  },
  {
    title: "Customer Success Manager",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
  },
]

export function CareersSection() {
  return (
    <section id="careers" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-semibold mb-4">
              Careers
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Join Our <span className="text-gold-gradient">Growing Team</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Be part of Africa's agricultural revolution. We're always looking for passionate individuals who want to
              make a difference.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Competitive salaries and benefits",
                "Remote-friendly work environment",
                "Professional development opportunities",
                "Meaningful impact on African agriculture",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button className="bg-gold hover:bg-gold-dark text-forest font-semibold" asChild>
              <Link href="mailto:careers@gofa.africa">
                Send Your Resume
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground mb-4">Open Positions</h3>
            {openPositions.map((position) => (
              <Card key={position.title} className="p-5 hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-gold-dark transition-colors">
                      {position.title}
                    </h4>
                    <div className="text-sm text-muted-foreground">{position.department}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-gold-dark group-hover:translate-x-1 transition-all" />
                </div>
                <div className="flex gap-4 mt-3">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {position.location}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {position.type}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
