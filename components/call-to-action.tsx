import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone } from "lucide-react"

export function CallToAction() {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Partner With Us for Sustainable Agriculture
          </h2>
          <p className="text-lg text-primary-foreground/90 leading-relaxed mb-12 text-pretty">
            Whether you're looking to source quality agricultural products, explore partnership opportunities, or learn
            more about our sustainable farming practices, we'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" variant="secondary" className="group">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Download Brochure
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-primary-foreground/20">
            <a
              href="mailto:info@agroventures.com"
              className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>info@agroventures.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
