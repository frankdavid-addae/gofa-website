"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Camera, Check } from "lucide-react"

export function ProfileSection() {
  const [editing, setEditing] = useState(false)

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-xl font-bold text-foreground">Profile Information</h2>
        <Button
          variant={editing ? "default" : "outline"}
          size="sm"
          className={editing ? "bg-gold hover:bg-gold-dark text-forest" : "bg-transparent"}
          onClick={() => setEditing(!editing)}
        >
          {editing ? "Save Changes" : "Edit Profile"}
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="w-24 h-24 bg-forest rounded-2xl flex items-center justify-center">
              <span className="text-white text-3xl font-bold">JD</span>
            </div>
            {editing && (
              <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center shadow-lg hover:bg-gold-dark transition-colors">
                <Camera className="w-4 h-4 text-forest" />
              </button>
            )}
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">First Name</label>
              <Input defaultValue="John" disabled={!editing} className={!editing ? "bg-muted/50" : ""} />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Last Name</label>
              <Input defaultValue="Doe" disabled={!editing} className={!editing ? "bg-muted/50" : ""} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
            <Input
              type="email"
              defaultValue="john.doe@example.com"
              disabled={!editing}
              className={!editing ? "bg-muted/50" : ""}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
            <Input
              type="tel"
              defaultValue="+233 24 XXX XXXX"
              disabled={!editing}
              className={!editing ? "bg-muted/50" : ""}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Address</label>
            <Input defaultValue="Accra, Ghana" disabled={!editing} className={!editing ? "bg-muted/50" : ""} />
          </div>
        </div>
      </div>

      {/* KYC Status */}
      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <Check className="w-5 h-5 text-green-600" />
        </div>
        <div>
          <div className="font-medium text-green-800">KYC Verified</div>
          <div className="text-sm text-green-600">
            Your identity has been verified. You have full access to all features.
          </div>
        </div>
      </div>
    </Card>
  )
}
