import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowLeft,
  Fish,
  MapPin,
  Clock,
  Calendar,
  Download,
  Eye,
  TrendingUp,
  Droplets,
  Thermometer,
  Activity,
} from "lucide-react"

// Mock farm data - in real app this would come from API
const farmData = {
  id: "farm-1",
  name: "Tilapia Farm - Pond A3",
  type: "Aquaculture",
  icon: Fish,
  location: "Lotar Farms, Accra",
  coordinates: "5.6037° N, 0.1870° W",
  investment: "GHS 2,000",
  status: "active",
  progress: 75,
  cycle: "8 months",
  startDate: "May 15, 2025",
  expectedHarvest: "Jan 15, 2026",
  currentValue: "GHS 2,850",
  projectedROI: "42.5%",
  fishCount: 2000,
  survivalRate: "94%",
  avgWeight: "350g",
  feedConversion: "1.4",
  waterTemp: "28°C",
  phLevel: "7.2",
  oxygenLevel: "6.5 mg/L",
  lastFed: "2 hours ago",
  nextFeeding: "In 4 hours",
  image: "/tilapia-pond-aerial-view.jpg",
  updates: [
    {
      date: "Nov 28, 2025",
      title: "Growth Update",
      description: "Fish have reached 350g average weight. Growth is on track.",
    },
    {
      date: "Nov 20, 2025",
      title: "Water Quality Check",
      description: "All parameters within optimal range. pH adjusted slightly.",
    },
    {
      date: "Nov 15, 2025",
      title: "Feeding Schedule Updated",
      description: "Increased feed ration by 10% due to growth rate.",
    },
    {
      date: "Nov 1, 2025",
      title: "Monthly Inspection",
      description: "No health issues detected. Survival rate remains high at 94%.",
    },
  ],
}

export default function FarmDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="gap-2" asChild>
          <Link href="/dashboard/farms">
            <ArrowLeft className="w-4 h-4" />
            Back to Farms
          </Link>
        </Button>
      </div>

      {/* Hero Card */}
      <Card className="overflow-hidden">
        <div className="relative h-48 md:h-64">
          <img src={farmData.image || "/placeholder.svg"} alt={farmData.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center">
                    <Fish className="w-6 h-6 text-forest" />
                  </div>
                  <div>
                    <h1 className="font-serif text-2xl md:text-3xl font-bold text-white">{farmData.name}</h1>
                    <div className="flex items-center gap-3 text-white/70 text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {farmData.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {farmData.cycle}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="px-3 py-1.5 bg-green-500 text-white rounded-full text-sm font-medium capitalize">
                {farmData.status}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Growth Progress</span>
              <span className="font-semibold">{farmData.progress}% Complete</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gold rounded-full" style={{ width: `${farmData.progress}%` }} />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Started: {farmData.startDate}</span>
              <span>Expected Harvest: {farmData.expectedHarvest}</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3">
            <Button className="bg-gold hover:bg-gold-dark text-forest gap-2">
              <Calendar className="w-4 h-4" />
              Schedule Visit
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Download className="w-4 h-4" />
              Download Report
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Eye className="w-4 h-4" />
              View Certificate
            </Button>
          </div>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5">
          <div className="text-sm text-muted-foreground mb-1">Investment</div>
          <div className="font-serif text-2xl font-bold">{farmData.investment}</div>
        </Card>
        <Card className="p-5">
          <div className="text-sm text-muted-foreground mb-1">Current Value</div>
          <div className="font-serif text-2xl font-bold text-gold-dark">{farmData.currentValue}</div>
        </Card>
        <Card className="p-5">
          <div className="text-sm text-muted-foreground mb-1">Projected ROI</div>
          <div className="font-serif text-2xl font-bold text-green-600">{farmData.projectedROI}</div>
        </Card>
        <Card className="p-5">
          <div className="text-sm text-muted-foreground mb-1">Fish Count</div>
          <div className="font-serif text-2xl font-bold">{farmData.fishCount.toLocaleString()}</div>
        </Card>
      </div>

      {/* Details Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Farm Metrics */}
        <Card className="p-6">
          <h2 className="font-serif text-xl font-bold text-foreground mb-4">Farm Metrics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Survival Rate</div>
                <div className="font-semibold">{farmData.survivalRate}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Avg. Weight</div>
                <div className="font-semibold">{farmData.avgWeight}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Thermometer className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Water Temp</div>
                <div className="font-semibold">{farmData.waterTemp}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                <Droplets className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Oxygen Level</div>
                <div className="font-semibold">{farmData.oxygenLevel}</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Recent Updates */}
        <Card className="p-6">
          <h2 className="font-serif text-xl font-bold text-foreground mb-4">Recent Updates</h2>
          <div className="space-y-4">
            {farmData.updates.map((update, index) => (
              <div key={index} className="flex gap-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">{update.title}</div>
                  <div className="text-sm text-muted-foreground">{update.description}</div>
                  <div className="text-xs text-muted-foreground mt-1">{update.date}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
