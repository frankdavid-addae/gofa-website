"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { User, Mail, Building, DollarSign, MessageSquare, Phone, MapPin, Send } from "lucide-react"

export function InvestorContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    investmentRange: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="partnerships" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-semibold mb-4">
              Investor Relations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Connect With Our <span className="text-gold-gradient">Investment Team</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Interested in partnership or investment opportunities? Our VP of Investor Relations is ready to discuss
              how you can be part of Africa's agricultural transformation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sage rounded-xl flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">VP, Investor Relations</h3>
                  <p className="text-muted-foreground">Available for meetings and presentations</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sage rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:investors@gofa.africa" className="text-gold-dark hover:underline">
                    investors@gofa.africa
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sage rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <a href="tel:+233000000000" className="text-gold-dark hover:underline">
                    +233 000 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sage rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Headquarters</h3>
                  <p className="text-muted-foreground">Accra, Ghana</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">Request Information</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-10 border-gold/20"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 border-gold/20"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Company / Organization</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="pl-10 border-gold/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Investment Range</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <select
                    value={formData.investmentRange}
                    onChange={(e) => setFormData({ ...formData, investmentRange: e.target.value })}
                    className="w-full h-10 pl-10 pr-3 rounded-md border border-gold/20 bg-background text-foreground"
                    required
                  >
                    <option value="">Select range</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-500k">$100,000 - $500,000</option>
                    <option value="500k+">$500,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <textarea
                    placeholder="Tell us about your investment interests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[120px] pl-10 pr-3 py-3 rounded-md border border-gold/20 bg-background text-foreground resize-none"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-forest font-semibold gap-2">
                <Send className="w-5 h-5" />
                Submit Inquiry
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
