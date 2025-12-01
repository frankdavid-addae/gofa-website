import { DashboardStats } from "@/components/dashboard/stats"
import { DashboardFarmCards } from "@/components/dashboard/farm-cards"
import { DashboardRecentActivity } from "@/components/dashboard/recent-activity"
import { DashboardQuickActions } from "@/components/dashboard/quick-actions"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Welcome back, John!</h1>
        <p className="text-muted-foreground mt-1">Here's what's happening with your farms today.</p>
      </div>

      {/* Stats Cards */}
      <DashboardStats />

      {/* Quick Actions */}
      <DashboardQuickActions />

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Farm Cards - Takes 2 columns */}
        <div className="lg:col-span-2">
          <DashboardFarmCards />
        </div>

        {/* Recent Activity - Takes 1 column */}
        <div>
          <DashboardRecentActivity />
        </div>
      </div>
    </div>
  )
}
