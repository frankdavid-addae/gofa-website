"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Smartphone, Key, History } from "lucide-react"

export function SecuritySection() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true)

  return (
    <Card className="p-6">
      <h2 className="font-serif text-xl font-bold text-foreground mb-6">Security</h2>

      <div className="space-y-6">
        {/* Password Change */}
        <div className="pb-6 border-b border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
              <Key className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <div className="font-medium text-foreground">Password</div>
              <div className="text-sm text-muted-foreground">Last changed 30 days ago</div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="bg-transparent">
            Change Password
          </Button>
        </div>

        {/* Two-Factor Auth */}
        <div className="pb-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <div className="font-medium text-foreground">Two-Factor Authentication</div>
                <div className="text-sm text-muted-foreground">Add an extra layer of security</div>
              </div>
            </div>
            <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
          </div>
        </div>

        {/* Login History */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
              <History className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <div className="font-medium text-foreground">Login History</div>
              <div className="text-sm text-muted-foreground">View your recent login activity</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm p-3 bg-muted/50 rounded-lg">
              <div>
                <div className="font-medium">Chrome on Windows</div>
                <div className="text-muted-foreground">Accra, Ghana</div>
              </div>
              <div className="text-right text-muted-foreground">
                <div>Today, 2:30 PM</div>
                <div className="text-green-600 text-xs">Current</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm p-3 bg-muted/50 rounded-lg">
              <div>
                <div className="font-medium">Safari on iPhone</div>
                <div className="text-muted-foreground">Accra, Ghana</div>
              </div>
              <div className="text-right text-muted-foreground">
                <div>Yesterday, 9:15 AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
