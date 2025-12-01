import { Card } from "@/components/ui/card"
import { Wallet, TrendingUp, Fish, Calendar, ArrowUpRight, ArrowDownRight } from "lucide-react"

const stats = [
  {
    label: "Wallet Balance",
    value: "GHS 4,250.00",
    change: "+12.5%",
    changeType: "positive",
    icon: Wallet,
    description: "Available for withdrawal",
  },
  {
    label: "Total Profit",
    value: "GHS 8,450.00",
    change: "+24.3%",
    changeType: "positive",
    icon: TrendingUp,
    description: "All-time earnings",
  },
  {
    label: "Active Farms",
    value: "4",
    change: "+1",
    changeType: "positive",
    icon: Fish,
    description: "Across 3 categories",
  },
  {
    label: "Next Harvest",
    value: "15 Days",
    change: "Tilapia - Pond A3",
    changeType: "neutral",
    icon: Calendar,
    description: "Estimated completion",
  },
]

export function DashboardStats() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-5 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="w-12 h-12 bg-sage rounded-xl flex items-center justify-center">
              <stat.icon className="w-6 h-6 text-forest" />
            </div>
            {stat.changeType !== "neutral" && (
              <div
                className={`flex items-center gap-1 text-sm font-medium ${
                  stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.changeType === "positive" ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {stat.change}
              </div>
            )}
          </div>
          <div className="mt-4">
            <div className="text-sm text-muted-foreground">{stat.label}</div>
            <div className="font-serif text-2xl font-bold text-foreground mt-1">{stat.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
          </div>
        </Card>
      ))}
    </div>
  )
}
