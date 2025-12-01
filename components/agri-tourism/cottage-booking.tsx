"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Calendar, Users, Wifi, Car, Coffee, Utensils, Wind, Check } from "lucide-react"

const cottages = [
  {
    id: "family",
    name: "Family Cottage",
    capacity: "4-6 guests",
    price: 150,
    image: "/placeholder.svg?key=1zf2k",
    amenities: ["2 Bedrooms", "Kitchen", "Living Area", "Private Garden", "BBQ Area"],
  },
  {
    id: "couples",
    name: "Romantic Retreat",
    capacity: "2 guests",
    price: 100,
    image: "/placeholder.svg?key=urcjk",
    amenities: ["1 Bedroom", "Jacuzzi", "Balcony", "Breakfast Included", "Sunset View"],
  },
  {
    id: "corporate",
    name: "Executive Lodge",
    capacity: "8-12 guests",
    price: 300,
    image: "/placeholder.svg?key=bwkne",
    amenities: ["4 Bedrooms", "Conference Room", "Full Kitchen", "Pool Access", "Catering Available"],
  },
]

const amenitiesIcons = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Car, label: "Free Parking" },
  { icon: Coffee, label: "Breakfast" },
  { icon: Utensils, label: "Kitchen" },
  { icon: Wind, label: "Air Conditioning" },
]

export function CottageBooking() {
  const [selectedCottage, setSelectedCottage] = useState("family")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState(2)

  const cottage = cottages.find((c) => c.id === selectedCottage)!

  return (
    <section id="booking" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-semibold mb-4">
            Accommodation
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Book Your <span className="text-gold-gradient">Farm Cottage</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Choose from our selection of comfortable cottages. Each offers a unique farm stay experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Cottage Selection */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid sm:grid-cols-3 gap-4">
              {cottages.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCottage(c.id)}
                  className={`relative rounded-xl overflow-hidden cursor-pointer transition-all ${
                    selectedCottage === c.id ? "ring-2 ring-gold shadow-lg" : "hover:shadow-md"
                  }`}
                >
                  <img src={c.image || "/placeholder.svg"} alt={c.name} className="w-full h-32 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="font-semibold text-white text-sm">{c.name}</div>
                    <div className="text-white/70 text-xs">{c.capacity}</div>
                  </div>
                  {selectedCottage === c.id && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-forest" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Selected Cottage Details */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={cottage.image || "/placeholder.svg"}
                  alt={cottage.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-gold text-forest px-4 py-2 rounded-full font-bold">
                  ${cottage.price}/night
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">{cottage.name}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                      <Users className="w-4 h-4" />
                      {cottage.capacity}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cottage.amenities.map((amenity) => (
                    <span key={amenity} className="px-3 py-1 bg-sage text-forest-light rounded-full text-sm">
                      {amenity}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 pt-4 border-t border-border">
                  {amenitiesIcons.map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-1 text-muted-foreground">
                      <item.icon className="w-5 h-5" />
                      <span className="text-xs">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Booking Form */}
          <div>
            <Card className="p-6 sticky top-24">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gold" />
                Book Your Stay
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Check-in Date</label>
                  <Input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="border-gold/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Check-out Date</label>
                  <Input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="border-gold/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Number of Guests</label>
                  <Input
                    type="number"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    min={1}
                    max={12}
                    className="border-gold/20"
                  />
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Cottage</span>
                    <span className="font-medium">{cottage.name}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Rate</span>
                    <span className="font-medium">${cottage.price}/night</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-gold-dark">Contact for quote</span>
                  </div>
                </div>

                <Button className="w-full bg-gold hover:bg-gold-dark text-forest font-semibold">Request Booking</Button>

                <p className="text-xs text-muted-foreground text-center">
                  Payment via Flutterwave / Paystack. Confirmation within 24 hours.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
