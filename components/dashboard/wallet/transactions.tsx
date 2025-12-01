"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, ArrowUpRight, ArrowDownLeft, Fish, RefreshCw, Calendar } from "lucide-react"

const transactions = [
  {
    id: 1,
    type: "credit",
    category: "profit",
    title: "Harvest Profit",
    description: "Vegetable Greenhouse - G1",
    amount: "+GHS 1,240.00",
    date: "Nov 28, 2025",
    time: "2:30 PM",
    status: "completed",
    icon: ArrowDownLeft,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 2,
    type: "debit",
    category: "investment",
    title: "New Investment",
    description: "Cassava Plot - Field B2",
    amount: "-GHS 1,500.00",
    date: "Nov 25, 2025",
    time: "10:15 AM",
    status: "completed",
    icon: Fish,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 3,
    type: "debit",
    category: "withdrawal",
    title: "Withdrawal to MTN MoMo",
    description: "024 XXX 1234",
    amount: "-GHS 500.00",
    date: "Nov 20, 2025",
    time: "4:45 PM",
    status: "completed",
    icon: ArrowUpRight,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    id: 4,
    type: "credit",
    category: "salary",
    title: "Monthly Salary",
    description: "Auto-transfer from profits",
    amount: "+GHS 500.00",
    date: "Nov 1, 2025",
    time: "12:00 AM",
    status: "completed",
    icon: RefreshCw,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 5,
    type: "credit",
    category: "profit",
    title: "Harvest Profit",
    description: "Tilapia Farm - Pond A2",
    amount: "+GHS 2,175.00",
    date: "Oct 28, 2025",
    time: "3:00 PM",
    status: "completed",
    icon: ArrowDownLeft,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 6,
    type: "debit",
    category: "investment",
    title: "New Investment",
    description: "Tilapia Farm - Pond A3",
    amount: "-GHS 2,000.00",
    date: "May 15, 2025",
    time: "9:00 AM",
    status: "completed",
    icon: Fish,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
]

export function TransactionHistory() {
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")

  const filteredTransactions = transactions.filter((t) => {
    if (filter !== "all" && t.type !== filter) return false
    if (
      search &&
      !t.title.toLowerCase().includes(search.toLowerCase()) &&
      !t.description.toLowerCase().includes(search.toLowerCase())
    )
      return false
    return true
  })

  return (
    <Card className="p-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="font-serif text-xl font-bold text-foreground">Transaction History</h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search transactions..."
              className="pl-9 w-48 bg-muted/50 border-0"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Calendar className="w-4 h-4" />
            Filter
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-6" onValueChange={setFilter}>
        <TabsList className="bg-muted/50">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="credit">Income</TabsTrigger>
          <TabsTrigger value="debit">Expenses</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-3">
        {filteredTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-gold/30 transition-colors bg-background"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${transaction.iconBg}`}>
              <transaction.icon className={`w-5 h-5 ${transaction.iconColor}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-medium text-foreground">{transaction.title}</div>
                  <div className="text-sm text-muted-foreground">{transaction.description}</div>
                </div>
                <div className="text-right">
                  <div
                    className={`font-semibold ${transaction.type === "credit" ? "text-green-600" : "text-foreground"}`}
                  >
                    {transaction.amount}
                  </div>
                  <div className="text-xs text-muted-foreground">{transaction.date}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTransactions.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground">No transactions found</div>
        </div>
      )}

      {filteredTransactions.length > 0 && (
        <div className="mt-6 text-center">
          <Button variant="outline" className="bg-transparent">
            Load More
          </Button>
        </div>
      )}
    </Card>
  )
}
