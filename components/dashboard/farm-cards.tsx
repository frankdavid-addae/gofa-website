"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Fish, Leaf, Carrot, Eye, Calendar, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const farms = [
  {
    id: "farm-1",
    name: "Tilapia Farm - Pond A3",
    type: "Aquaculture",
    icon: Fish,
    investment: "GHS 2,000",
    status: "active",
    progress: 75,
    cycle: "8 months",
    startDate: "May 15, 2025",
    expectedHarvest: "Jan 15, 2026",
    currentValue: "GHS 2,850",
    projectedROI: "42.5%",
  },
  {
    id: "farm-2",
    name: "Cassava Plot - Field B2",
    type: "Tuber Crops",
    icon: Leaf,
    investment: "GHS 1,500",
    status: "active",
    progress: 45,
    cycle: "10 months",
    startDate: "Aug 1, 2025",
    expectedHarvest: "Jun 1, 2026",
    currentValue: "GHS 1,725",
    projectedROI: "38%",
  },
  {
    id: "farm-3",
    name: "Vegetable Greenhouse - G1",
    type: "Vegetables",
    icon: Carrot,
    investment: "GHS 800",
    status: "harvesting",
    progress: 95,
    cycle: "4 months",
    startDate: "Aug 15, 2025",
    expectedHarvest: "Dec 15, 2025",
    currentValue: "GHS 1,240",
    projectedROI: "55%",
  },
]

const statusColors = {
  active: "bg-green-100 text-green-700",
  harvesting: "bg-gold/20 text-gold-dark",
  completed: "bg-blue-100 text-blue-700",
  pending: "bg-gray-100 text-gray-700",
}

export function DashboardFarmCards() {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-serif text-xl font-bold text-foreground">My Active Farms</h2>
        <Button variant="ghost" size="sm" className="text-gold-dark" asChild>
          <Link href="/dashboard/farms">View All</Link>
        </Button>
      </div>

      <div className="space-y-4">
        {farms.map((farm) => (
          <div
            key={farm.id}
            className="p-4 rounded-xl border border-border hover:border-gold/30 transition-colors bg-background"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sage rounded-xl flex items-center justify-center">
                  <farm.icon className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{farm.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {farm.type} | {farm.cycle}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusColors[farm.status as keyof typeof statusColors]}`}
                >
                  {farm.status}
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center">
                      <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Schedule Visit</DropdownMenuItem>
                    <DropdownMenuItem>Download Report</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-muted-foreground">Growth Progress</span>
                <span className="font-medium text-foreground">{farm.progress}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gold rounded-full transition-all" style={{ width: `${farm.progress}%` }} />
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-3 border-t border-border">
              <div>
                <div className="text-xs text-muted-foreground">Investment</div>
                <div className="font-semibold text-foreground">{farm.investment}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Current Value</div>
                <div className="font-semibold text-gold-dark">{farm.currentValue}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Projected ROI</div>
                <div className="font-semibold text-green-600">{farm.projectedROI}</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm" className="flex-1 gap-1.5 bg-transparent" asChild>
                <Link href={`/dashboard/farms/${farm.id}`}>
                  <Eye className="w-4 h-4" />
                  View Details
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="flex-1 gap-1.5 bg-transparent" asChild>
                <Link href="/dashboard/visits">
                  <Calendar className="w-4 h-4" />
                  Schedule Visit
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
