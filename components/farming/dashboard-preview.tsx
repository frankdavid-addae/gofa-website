import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Wallet,
  TrendingUp,
  Calendar,
  FileText,
  MessageCircle,
  Users,
  Bell,
  Settings,
  ArrowRight,
  DollarSign,
  Fish,
  Eye,
  Download,
} from "lucide-react"

const dashboardFeatures = [
  {
    icon: Wallet,
    title: "Digital Wallet",
    description:
      "Track your balance, view transaction history, and manage withdrawals. Convert profits to salary or reinvest instantly.",
  },
  {
    icon: TrendingUp,
    title: "Profit Tracker",
    description:
      "Real-time earnings dashboard showing current cycle performance, historical returns, and projected profits.",
  },
  {
    icon: DollarSign,
    title: "Convert to Salary",
    description:
      "Set up automatic monthly payments from your farm profits directly to your bank account or mobile money.",
  },
  {
    icon: Calendar,
    title: "Farm Visit Scheduling",
    description: "Book visits to your farm anytime. Choose date, time, and receive confirmation with directions.",
  },
  {
    icon: FileText,
    title: "Document Repository",
    description: "Access allocation certificates, insurance documents, farm reports, and transaction receipts.",
  },
  {
    icon: MessageCircle,
    title: "Customer Support",
    description: "24/7 live chat with our support team. Get help with investments, withdrawals, or farm questions.",
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Connect with other digital farmers. Share experiences, get tips, and join investment groups.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Receive alerts for harvest updates, profit payouts, market changes, and farm visit reminders.",
  },
]

export function DashboardPreview() {
  return (
    <section className="pb-20">
      {/* Hero */}
      <div className="bg-forest pt-32 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 text-gold rounded-full text-sm font-semibold mb-6">
              Digital Farmer Dashboard
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Manage Your <span className="text-gold">Farm Empire</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 text-pretty">
              Your all-in-one platform to track investments, monitor farm progress, manage earnings, and connect with
              the farming community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-forest font-semibold rounded-full" asChild>
                <Link href="/farming/categories">
                  Create Account
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full bg-transparent"
              >
                Login to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="container mx-auto px-4 -mt-20">
        <Card className="max-w-5xl mx-auto overflow-hidden shadow-2xl border-0">
          {/* Mock Dashboard Header */}
          <div className="bg-forest p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <span className="font-serif font-bold text-forest text-sm">G</span>
              </div>
              <span className="text-white font-semibold">GoFA Dashboard</span>
            </div>
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-white/70" />
              <Settings className="w-5 h-5 text-white/70" />
              <div className="w-8 h-8 bg-white/20 rounded-full" />
            </div>
          </div>

          {/* Mock Dashboard Content */}
          <div className="p-6 bg-sage/20">
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-background rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <Wallet className="w-4 h-4" />
                  Wallet Balance
                </div>
                <div className="font-serif text-2xl font-bold text-foreground">$4,250.00</div>
              </div>
              <div className="bg-background rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <TrendingUp className="w-4 h-4" />
                  Total Profit
                </div>
                <div className="font-serif text-2xl font-bold text-gold-dark">$1,850.00</div>
              </div>
              <div className="bg-background rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <Fish className="w-4 h-4" />
                  Active Farms
                </div>
                <div className="font-serif text-2xl font-bold text-foreground">3</div>
              </div>
              <div className="bg-background rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  Next Harvest
                </div>
                <div className="font-serif text-2xl font-bold text-foreground">15 Days</div>
              </div>
            </div>

            {/* Farm Card Preview */}
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Fish className="w-5 h-5 text-gold" />
                    <span className="font-semibold text-foreground">Tilapia Farm - Pond A3</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Investment: $2,000 | Cycle: 8 months</div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Active</span>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Growth Progress</span>
                  <span className="font-medium text-foreground">75%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gold rounded-full" style={{ width: "75%" }} />
                </div>
              </div>

              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                  <Eye className="w-4 h-4" />
                  View Details
                </Button>
                <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                  <Calendar className="w-4 h-4" />
                  Schedule Visit
                </Button>
                <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                  <Download className="w-4 h-4" />
                  Download Report
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Dashboard <span className="text-gold-gradient">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Everything you need to manage your digital farming portfolio in one powerful platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {dashboardFeatures.map((feature) => (
            <Card
              key={feature.title}
              className="p-6 hover:shadow-lg transition-shadow border-border hover:border-gold/30"
            >
              <div className="w-12 h-12 bg-sage rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-forest" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
