import { Card } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"

const leadership = [
  {
    name: "Mr. Francis Anyomi",
    role: "Chief Executive Officer",
    image: "/placeholder.svg?key=fjknc",
    bio: "20+ years in agribusiness and investment management.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Ps. Godwin Alada",
    role: "Chief Operations Officer",
    image: "/placeholder.svg?key=98mgp",
    bio: "Former agricultural consultant with expertise in farm management.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Mr. Frank David Addae",
    role: "Chief Technology Officer",
    image: "/placeholder.svg?key=cdrfm",
    bio: "Tech entrepreneur with background in fintech and agritech solutions.",
    linkedin: "#",
    twitter: "#",
  },
  // {
  //   name: "Grace Adjei",
  //   role: "VP, Investor Relations",
  //   image: "/placeholder.svg?key=2w5o7",
  //   bio: "Investment banker with experience in African capital markets.",
  //   linkedin: "#",
  //   twitter: "#",
  // },
]

const boardMembers = [
  { name: "Prof. Kwame Asante", role: "Board Chairman", affiliation: "Former Minister of Agriculture" },
  { name: "Mrs. Akua Boateng", role: "Board Member", affiliation: "CEO, Africa Finance Corp" },
  { name: "Dr. Samuel Osei", role: "Board Member", affiliation: "Agricultural Economist" },
  { name: "Chief Nana Agyeman", role: "Patron", affiliation: "Traditional Leader & Philanthropist" },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-semibold mb-4">
            Our Team
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Leadership <span className="text-gold-gradient">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Experienced professionals dedicated to transforming African agriculture.
          </p>
        </div>

        {/* Executive Team */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {leadership.map((member) => (
            <Card key={member.name} className="overflow-hidden group">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-foreground">{member.name}</h3>
                <div className="text-sm text-gold-dark font-medium mb-2">{member.role}</div>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Board Members */}
        <div className="text-center mb-12">
          <h3 className="font-serif text-2xl font-bold text-foreground">Board Members & Patrons</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {boardMembers.map((member) => (
            <Card key={member.name} className="p-6 text-center">
              <div className="w-16 h-16 bg-sage rounded-full mx-auto mb-4" />
              <h4 className="font-semibold text-foreground">{member.name}</h4>
              <div className="text-sm text-gold-dark font-medium">{member.role}</div>
              <div className="text-xs text-muted-foreground mt-1">{member.affiliation}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
