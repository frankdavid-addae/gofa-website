import { SettingsHeader } from "@/components/dashboard/settings/header"
import { ProfileSection } from "@/components/dashboard/settings/profile"
import { SecuritySection } from "@/components/dashboard/settings/security"
import { NotificationSettings } from "@/components/dashboard/settings/notifications"
import { PaymentMethods } from "@/components/dashboard/settings/payment-methods"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <SettingsHeader />
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ProfileSection />
          <SecuritySection />
          <PaymentMethods />
        </div>
        <div>
          <NotificationSettings />
        </div>
      </div>
    </div>
  )
}
