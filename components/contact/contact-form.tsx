"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { User, Mail, Phone, MessageSquare, Send, HelpCircle } from "lucide-react"

const inquiryTypes = [
  "Farming Investment",
  "Agri-Tourism Booking",
  "Infrastructure Partnership",
  "General Inquiry",
  "Technical Support",
  "Press & Media",
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <Card className="p-8">
      <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
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

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
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
            <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="tel"
                placeholder="+233 000 000 000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="pl-10 border-gold/20"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Inquiry Type *</label>
          <div className="relative">
            <HelpCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <select
              value={formData.inquiryType}
              onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
              className="w-full h-10 pl-10 pr-3 rounded-md border border-gold/20 bg-background text-foreground"
              required
            >
              <option value="">Select inquiry type</option>
              {inquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <textarea
              placeholder="How can we help you?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full min-h-[150px] pl-10 pr-3 py-3 rounded-md border border-gold/20 bg-background text-foreground resize-none"
              required
            />
          </div>
        </div>

        <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-forest font-semibold gap-2">
          <Send className="w-5 h-5" />
          Send Message
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          We typically respond within 24 hours during business days.
        </p>
      </form>
    </Card>
  )
}
