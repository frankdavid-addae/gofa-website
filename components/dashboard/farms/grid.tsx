"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Fish, Leaf, Carrot, Eye, Calendar, Download, MoreHorizontal, MapPin, Clock } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const farms = [
  {
    id: "farm-1",
    name: "Tilapia Farm - Pond A3",
    type: "aquaculture",
    typeLabel: "Aquaculture",
    icon: Fish,
    location: "Lotar Farms, Accra",
    investment: "GHS 2,000",
    status: "active",
    progress: 75,
    cycle: "8 months",
    startDate: "May 15, 2025",
    expectedHarvest: "Jan 15, 2026",
    currentValue: "GHS 2,850",
    projectedROI: "42.5%",
    fishCount: 2000,
    image: "/tilapia-pond-aerial-view.jpg",
  },
  {
    id: "farm-2",
    name: "Catfish Farm - Pond B1",
    type: "aquaculture",
    typeLabel: "Aquaculture",
    icon: Fish,
    location: "Lotar Farms, Accra",
    investment: "GHS 2,500",
    status: "active",
    progress: 35,
    cycle: "10 months",
    startDate: "Sep 1, 2025",
    expectedHarvest: "Jul 1, 2026",
    currentValue: "GHS 2,750",
    projectedROI: "45%",
    fishCount: 2500,
    image: "/catfish-farm-pond.jpg",
  },
  {
    id: "farm-3",
    name: "Cassava Plot - Field B2",
    type: "tubers",
    typeLabel: "Tuber Crops",
    icon: Leaf,
    location: "Lotar Farms, Volta Region",
    investment: "GHS 1,500",
    status: "active",
    progress: 45,
    cycle: "10 months",
    startDate: "Aug 1, 2025",
    expectedHarvest: "Jun 1, 2026",
    currentValue: "GHS 1,725",
    projectedROI: "38%",
    acreage: "2 acres",
    image: "/cassava-field-africa.jpg",
  },
  {
    id: "farm-4",
    name: "Vegetable Greenhouse - G1",
    type: "vegetables",
    typeLabel: "Vegetables",
    icon: Carrot,
    location: "Lotar Farms, Accra",
    investment: "GHS 800",
    status: "harvesting",
    progress: 95,
    cycle: "4 months",
    startDate: "Aug 15, 2025",
    expectedHarvest: "Dec 15, 2025",
    currentValue: "GHS 1,240",
    projectedROI: "55%",
    crops: "Tomatoes, Peppers",
    image: "/greenhouse-vegetables-africa.jpg",
  },
  {
    id: "farm-5",
    name: "Tilapia Farm - Pond A1",
    type: "aquaculture",
    typeLabel: "Aquaculture",
    icon: Fish,
    location: "Lotar Farms, Accra",
    investment: "GHS 1,500",
    status: "completed",
    progress: 100,
    cycle: "6 months",
    startDate: "Jan 1, 2025",
    expectedHarvest: "Jul 1, 2025",
    currentValue: "GHS 2,175",
    projectedROI: "45%",
    fishCount: 1500,
    image: "/tilapia-harvest-complete.jpg",
  },
]

const statusColors = {
  active: "bg-green-100 text-green-700",
  harvesting: "bg-gold/20 text-gold-dark",
  completed: "bg-blue-100 text-blue-700",
  pending: "bg-gray-100 text-gray-700",
}

export function FarmsGrid() {
  const [filter, setFilter] = useState("all")

  const filteredFarms = filter === "all" ? farms : farms.filter((farm) => farm.status === filter)

  return (
    <div>
      {/* Tabs */}
      <Tabs defaultValue="all" className="mb-6" onValueChange={setFilter}>
        <TabsList className="bg-muted/50">
          <TabsTrigger value="all">All Farms ({farms.length})</TabsTrigger>
          <TabsTrigger value="active">Active ({farms.filter((f) => f.status === "active").length})</TabsTrigger>
          <TabsTrigger value="harvesting">
            Harvesting ({farms.filter((f) => f.status === "harvesting").length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completed ({farms.filter((f) => f.status === "completed").length})
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredFarms.map((farm) => (
          <Card key={farm.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            {/* Image */}
            <div className="relative h-40 bg-sage">
              <img
                src={farm.image || "/placeholder.svg?height=160&width=320&query=" + encodeURIComponent(farm.name)}
                alt={farm.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-3 right-3">
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusColors[farm.status as keyof typeof statusColors]}`}
                >
                  {farm.status}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
                    <farm.icon className="w-4 h-4 text-forest" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{farm.name}</div>
                    <div className="text-white/70 text-xs">{farm.typeLabel}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Location & Cycle */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {farm.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {farm.cycle}
                </div>
              </div>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{farm.progress}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gold rounded-full" style={{ width: `${farm.progress}%` }} />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 text-center mb-4">
                <div className="bg-muted/50 rounded-lg p-2">
                  <div className="text-xs text-muted-foreground">Invested</div>
                  <div className="font-semibold text-sm">{farm.investment}</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-2">
                  <div className="text-xs text-muted-foreground">Value</div>
                  <div className="font-semibold text-sm text-gold-dark">{farm.currentValue}</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-2">
                  <div className="text-xs text-muted-foreground">ROI</div>
                  <div className="font-semibold text-sm text-green-600">{farm.projectedROI}</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 gap-1.5 bg-transparent" asChild>
                  <Link href={`/dashboard/farms/${farm.id}`}>
                    <Eye className="w-4 h-4" />
                    Details
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="gap-1.5 bg-transparent" asChild>
                  <Link href="/dashboard/visits">
                    <Calendar className="w-4 h-4" />
                  </Link>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Download className="w-4 h-4 mr-2" />
                      Download Report
                    </DropdownMenuItem>
                    <DropdownMenuItem>View Certificate</DropdownMenuItem>
                    <DropdownMenuItem>Contact Support</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
