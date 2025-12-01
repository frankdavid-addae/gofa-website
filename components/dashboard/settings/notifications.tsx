"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const notificationSettings = [
  { id: "harvest", label: "Harvest Alerts", description: "When your farm is ready for harvest", default: true },
  { id: "profit", label: "Profit Notifications", description: "When profits are credited", default: true },
  { id: "updates", label: "Farm Updates", description: "Growth progress and health reports", default: true },
  { id: "visits", label: "Visit Reminders", description: "Upcoming farm visit reminders", default: true },
  { id: "marketing", label: "Marketing & Offers", description: "New investment opportunities", default: false },
  { id: "newsletter", label: "Newsletter", description: "Weekly farming tips & news", default: false },
]

export function NotificationSettings() {
  const [settings, setSettings] = useState(
    notificationSettings.reduce(
      (acc, setting) => ({
        ...acc,
        [setting.id]: setting.default,
      }),
      {} as Record<string, boolean>,
    ),
  )

  const toggleSetting = (id: string) => {
    setSettings((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <Card className="p-6">
      <h2 className="font-serif text-xl font-bold text-foreground mb-6">Notifications</h2>

      <div className="space-y-4">
        {notificationSettings.map((setting) => (
          <div key={setting.id} className="flex items-center justify-between">
            <div>
              <div className="font-medium text-foreground text-sm">{setting.label}</div>
              <div className="text-xs text-muted-foreground">{setting.description}</div>
            </div>
            <Switch checked={settings[setting.id]} onCheckedChange={() => toggleSetting(setting.id)} />
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <h3 className="font-medium text-foreground text-sm mb-3">Notification Channels</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Email</span>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">SMS</span>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Push Notifications</span>
            <Switch />
          </div>
        </div>
      </div>
    </Card>
  )
}
