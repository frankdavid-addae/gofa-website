import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownLeft, Calendar, FileText, CheckCircle } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "credit",
    title: "Profit Credited",
    description: "Vegetable harvest profit",
    amount: "+GHS 1,240.00",
    time: "2 hours ago",
    icon: ArrowDownLeft,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 2,
    type: "investment",
    title: "New Investment",
    description: "Cassava Plot - Field B2",
    amount: "-GHS 1,500.00",
    time: "3 days ago",
    icon: ArrowUpRight,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 3,
    type: "harvest",
    title: "Harvest Complete",
    description: "Tilapia Farm - Pond A2",
    amount: null,
    time: "1 week ago",
    icon: CheckCircle,
    iconBg: "bg-gold/20",
    iconColor: "text-gold-dark",
  },
  {
    id: 4,
    type: "visit",
    title: "Farm Visit",
    description: "Scheduled for Dec 20",
    amount: null,
    time: "1 week ago",
    icon: Calendar,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 5,
    type: "document",
    title: "Report Generated",
    description: "Q4 Investment Report",
    amount: null,
    time: "2 weeks ago",
    icon: FileText,
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
  },
]

export function DashboardRecentActivity() {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-serif text-xl font-bold text-foreground">Recent Activity</h2>
        <Button variant="ghost" size="sm" className="text-gold-dark" asChild>
          <Link href="/dashboard/wallet">View All</Link>
        </Button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${activity.iconBg}`}>
              <activity.icon className={`w-5 h-5 ${activity.iconColor}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-medium text-foreground">{activity.title}</div>
                  <div className="text-sm text-muted-foreground">{activity.description}</div>
                </div>
                {activity.amount && (
                  <div
                    className={`font-semibold text-sm whitespace-nowrap ${
                      activity.amount.startsWith("+") ? "text-green-600" : "text-foreground"
                    }`}
                  >
                    {activity.amount}
                  </div>
                )}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
