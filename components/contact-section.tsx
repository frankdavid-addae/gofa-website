import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact-section" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-balance">Ready to Farm or Invest in Infrastructure?</h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
              Contact our front desk to learn more about creating your farm or becoming an infrastructure partner in
              Africa's agricultural future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:gofaeasy@gmail.com"
                className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                gofaeasy@gmail.com
              </a>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+233532810318" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                +233 532 810 318
              </a>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-primary-foreground/90">Africa</p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="secondary" className="group">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
