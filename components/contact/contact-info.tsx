import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "info@gofa.africa",
    link: "mailto:info@gofa.africa",
    description: "For general inquiries",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+233 000 000 000",
    link: "tel:+233000000000",
    description: "Mon-Fri, 8am-6pm GMT",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+233 000 000 000",
    link: "https://wa.me/233000000000",
    description: "Quick responses",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Accra, Ghana",
    link: "#map",
    description: "Visit by appointment",
  },
]

const departments = [
  { name: "Farming Investments", email: "invest@gofa.africa" },
  { name: "Agri-Tourism", email: "tourism@gofa.africa" },
  { name: "Investor Relations", email: "investors@gofa.africa" },
  { name: "Technical Support", email: "support@gofa.africa" },
  { name: "Press & Media", email: "press@gofa.africa" },
  { name: "Careers", email: "careers@gofa.africa" },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div>
        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Contact Information</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {contactMethods.map((method) => (
            <Card key={method.title} className="p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sage rounded-xl flex items-center justify-center flex-shrink-0">
                  <method.icon className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{method.title}</h3>
                  <a href={method.link} className="text-gold-dark hover:underline font-medium">
                    {method.value}
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">{method.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Business Hours */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center">
            <Clock className="w-5 h-5 text-gold-dark" />
          </div>
          <h3 className="font-semibold text-foreground">Business Hours</h3>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Monday - Friday</span>
            <span className="font-medium text-foreground">8:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Saturday</span>
            <span className="font-medium text-foreground">9:00 AM - 2:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Sunday</span>
            <span className="font-medium text-foreground">Closed</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">* All times are in Ghana Mean Time (GMT)</p>
      </Card>

      {/* Department Emails */}
      <Card className="p-6">
        <h3 className="font-semibold text-foreground mb-4">Department Contacts</h3>
        <div className="space-y-3">
          {departments.map((dept) => (
            <div key={dept.name} className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{dept.name}</span>
              <a href={`mailto:${dept.email}`} className="text-gold-dark hover:underline">
                {dept.email}
              </a>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
