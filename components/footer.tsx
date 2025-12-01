import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const footerLinks = {
    farming: [
      { label: "How It Works", href: "/farming/how-it-works" },
      { label: "Farm Categories", href: "/farming/categories" },
      { label: "Investment Calculator", href: "/farming/categories#calculator" },
      { label: "Farmer Dashboard", href: "/farming/dashboard" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about#team" },
      { label: "Careers", href: "/about#careers" },
      { label: "Press Kit", href: "/about#press" },
    ],
    services: [
      { label: "Agri-Tourism", href: "/agri-tourism" },
      { label: "Infrastructure Investment", href: "/infrastructure" },
      { label: "Corporate Partnerships", href: "/infrastructure#partnerships" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Contact", href: "/contact" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-forest text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-white/70 mb-6">
              Subscribe to our newsletter for farming tips, investment opportunities, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-gold"
              />
              <Button className="bg-gold hover:bg-gold-dark text-forest font-semibold whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <span className="font-serif font-bold text-forest text-lg">G</span>
              </div>
              <div>
                <div className="text-xl font-serif font-bold text-white">GoFA</div>
                <div className="text-xs text-white/60">Gold For Africa</div>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Own a farm. Earn harvest profit. Never pick up a hoe. Smart farming for Africa's professionals and the
              diaspora.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-forest transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Farming</h4>
            <ul className="space-y-3">
              {footerLinks.farming.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@gofa.africa"
                  className="text-white/70 hover:text-gold text-sm transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  info@gofa.africa
                </a>
              </li>
              <li>
                <a
                  href="tel:+233000000000"
                  className="text-white/70 hover:text-gold text-sm transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +233 000 000 000
                </a>
              </li>
              <li>
                <span className="text-white/70 text-sm flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Accra, Ghana
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© {new Date().getFullYear()} GoFA - Gold For Africa (CAIP Ltd). All rights reserved.</p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
