import { Card } from "@/components/ui/card"
import { Fish, Leaf, Carrot, Wheat } from "lucide-react"

const categoryStats = [
  { icon: Fish, label: "Aquaculture", count: 2, value: "GHS 4,500", color: "text-blue-600", bg: "bg-blue-100" },
  { icon: Leaf, label: "Tuber Crops", count: 1, value: "GHS 1,500", color: "text-green-600", bg: "bg-green-100" },
  { icon: Carrot, label: "Vegetables", count: 1, value: "GHS 800", color: "text-orange-600", bg: "bg-orange-100" },
  { icon: Wheat, label: "Cereals", count: 0, value: "GHS 0", color: "text-amber-600", bg: "bg-amber-100" },
]

export function FarmsStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {categoryStats.map((stat) => (
        <Card key={stat.label} className="p-4 flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.bg}`}>
            <stat.icon className={`w-5 h-5 ${stat.color}`} />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
            <div className="font-semibold text-foreground">{stat.count} farms</div>
            <div className="text-xs text-muted-foreground">{stat.value}</div>
          </div>
        </Card>
      ))}
    </div>
  )
}
