"use client"

import { useState, useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Download, Fish, Leaf, Carrot, Wheat } from "lucide-react"

const farmTypes = [
  { id: "aquaculture", name: "Aquaculture", icon: Fish },
  { id: "tubers", name: "Tuber Crops", icon: Leaf },
  { id: "vegetables", name: "Vegetables", icon: Carrot },
  { id: "cereals", name: "Cereal Crops", icon: Wheat },
]

const cycleOptions = [
  { months: 4, label: "4 months", priceMultiplier: 15 },
  { months: 6, label: "6 months", priceMultiplier: 20 },
  { months: 8, label: "8 months", priceMultiplier: 30 },
  { months: 10, label: "10 months", priceMultiplier: 40 },
  { months: 12, label: "12 months", priceMultiplier: 50 },
]

const COST_PER_FINGERLING = 3

export function InvestmentCalculator() {
  const [farmType, setFarmType] = useState("aquaculture")
  const [investmentAmount, setInvestmentAmount] = useState(1000)
  const [farmPeriod, setFarmPeriod] = useState(6)

  const calculations = useMemo(() => {
    const selectedCycle = cycleOptions.find((c) => c.months === farmPeriod)!
    const sellingPrice = selectedCycle.priceMultiplier
    const numberOfFish = Math.round((investmentAmount * 0.3) / COST_PER_FINGERLING)
    const totalSalesRevenue = numberOfFish * sellingPrice
    const grossIncome = totalSalesRevenue - investmentAmount
    const grossProfit = grossIncome * 0.7
    const netIncome = grossProfit + investmentAmount

    return {
      numberOfFish,
      sellingPrice,
      totalSalesRevenue,
      grossIncome,
      grossProfit,
      netIncome,
    }
  }, [investmentAmount, farmPeriod])

  const downloadResults = () => {
    const farmTypeName = farmTypes.find((f) => f.id === farmType)?.name
    let csv = "GoFA Investment Calculator Results\n\n"
    csv += `Farm Type,${farmTypeName}\n`
    csv += `Investment Amount,$${investmentAmount}\n`
    csv += `Farm Period,${farmPeriod} months\n`
    csv += `Number of Fish,${calculations.numberOfFish}\n`
    csv += `Selling Price @ Maturity,$${calculations.sellingPrice}\n`
    csv += `Total Sales Revenue,$${calculations.totalSalesRevenue}\n`
    csv += `Gross Income,$${calculations.grossIncome}\n`
    csv += `Gross Profit (70%),$${calculations.grossProfit}\n`
    csv += `Net Income,$${calculations.netIncome}\n`

    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "gofa-investment-results.csv"
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <section id="calculator" className="py-20 md:py-28 bg-sage/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-semibold mb-4">
            Investment Tools
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Calculate Your <span className="text-gold-gradient">Returns</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Use our interactive calculator to project your potential profits based on investment amount and farming
            cycle.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8 border-gold/20">
            {/* Farm Type Selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-foreground mb-3">Select Farm Type</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {farmTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setFarmType(type.id)}
                    className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      farmType === type.id
                        ? "border-gold bg-gold/10 text-gold-dark"
                        : "border-border hover:border-gold/50"
                    }`}
                  >
                    <type.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{type.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Investment & Period */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Investment Amount ($)</label>
                <Input
                  type="number"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(Number(e.target.value) || 0)}
                  className="text-lg border-gold/20"
                  min={100}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Farm Period</label>
                <select
                  value={farmPeriod}
                  onChange={(e) => setFarmPeriod(Number(e.target.value))}
                  className="w-full h-10 px-3 rounded-md border border-gold/20 bg-background text-foreground"
                >
                  {cycleOptions.map((option) => (
                    <option key={option.months} value={option.months}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results */}
            <div className="bg-cream rounded-2xl p-6 md:p-8">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">Projected Returns</h3>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Number of Fish</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Selling Price</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Total Revenue</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Gross Income</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Gross Profit (70%)</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Net Income</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 font-medium">{calculations.numberOfFish.toLocaleString()}</td>
                      <td className="py-3 px-4 font-medium">${calculations.sellingPrice}</td>
                      <td className="py-3 px-4 font-medium">${calculations.totalSalesRevenue.toLocaleString()}</td>
                      <td className="py-3 px-4 font-medium">${calculations.grossIncome.toLocaleString()}</td>
                      <td className="py-3 px-4 font-medium text-gold-dark">
                        ${calculations.grossProfit.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 font-bold text-forest text-lg">
                        ${calculations.netIncome.toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-3 mb-6">
                <div className="bg-background rounded-xl p-4">
                  <div className="text-xs text-muted-foreground mb-1">Number of Fish</div>
                  <div className="font-bold text-lg">{calculations.numberOfFish.toLocaleString()}</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-background rounded-xl p-4">
                    <div className="text-xs text-muted-foreground mb-1">Selling Price</div>
                    <div className="font-bold">${calculations.sellingPrice}</div>
                  </div>
                  <div className="bg-background rounded-xl p-4">
                    <div className="text-xs text-muted-foreground mb-1">Total Revenue</div>
                    <div className="font-bold">${calculations.totalSalesRevenue.toLocaleString()}</div>
                  </div>
                  <div className="bg-background rounded-xl p-4">
                    <div className="text-xs text-muted-foreground mb-1">Gross Income</div>
                    <div className="font-bold">${calculations.grossIncome.toLocaleString()}</div>
                  </div>
                  <div className="bg-background rounded-xl p-4">
                    <div className="text-xs text-muted-foreground mb-1">Gross Profit (70%)</div>
                    <div className="font-bold text-gold-dark">${calculations.grossProfit.toLocaleString()}</div>
                  </div>
                </div>
              </div>

              {/* Net Income Highlight */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-border">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Your Projected Net Income</div>
                  <div className="font-serif text-4xl font-bold text-forest">
                    ${calculations.netIncome.toLocaleString()}
                  </div>
                </div>
                <Button
                  onClick={downloadResults}
                  className="bg-gold hover:bg-gold-dark text-forest font-semibold gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Results
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
