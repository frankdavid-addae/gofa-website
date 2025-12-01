"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Download } from "lucide-react"

interface CalculationRow {
  id: string
  duration: 4 | 6 | 8 | 10 | 12
}

const SELLING_PRICE_MAP: Record<4 | 6 | 8 | 10 | 12, number> = {
  4: 15,
  6: 20,
  8: 30,
  10: 40,
  12: 50,
}

const COST_PER_FINGERLING = 3

export function FarmCalculator() {
  const [farmType, setFarmType] = useState("")
  const [category, setCategory] = useState("")
  const [investmentAmount, setInvestmentAmount] = useState(0)
  const [farmPeriod, setFarmPeriod] = useState<4 | 6 | 8 | 10 | 12>(4)
  const [rows, setRows] = useState<CalculationRow[]>([{ id: "1", duration: 4 }])

  useEffect(() => {
    setRows((prevRows) => prevRows.map((row) => ({ ...row, duration: farmPeriod })))
  }, [farmPeriod])

  const numberOfFish = investmentAmount > 0 ? Math.round((investmentAmount * 0.3) / COST_PER_FINGERLING) : 0

  const calculateRow = (row: CalculationRow) => {
    const sellingPrice = SELLING_PRICE_MAP[row.duration]
    const totalSalesRevenue = numberOfFish * sellingPrice
    const grossIncome = totalSalesRevenue - investmentAmount
    const grossProfit = grossIncome * 0.7
    const netIncome = grossProfit + investmentAmount

    return {
      sellingPrice,
      totalSalesRevenue,
      grossIncome,
      grossProfit,
      netIncome,
    }
  }

  const downloadAsExcel = () => {
    let csv = "Farm Investment Profit Calculator Results\n\n"
    csv += `Farm Type,${farmType}\n`
    csv += `Category,${category}\n`
    csv += `Investment Amount,${investmentAmount}\n`
    csv += `Cost per Fingerling,${COST_PER_FINGERLING}\n`
    csv += `Number of Fish,${numberOfFish}\n\n`

    csv += "Duration (months),Selling Price @ Maturity,Total Sales Revenue,Gross Income,Gross Profit (70%),Net Income\n"

    rows.forEach((row) => {
      const calc = calculateRow(row)
      csv += `${row.duration},${calc.sellingPrice},${calc.totalSalesRevenue},${calc.grossIncome},${calc.grossProfit},${calc.netIncome}\n`
    })

    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "farm-calculator-results.csv"
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const totalNetIncome = rows.reduce((sum, row) => sum + calculateRow(row).netIncome, 0)

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Investment Tools
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Farm Investment Profit Calculator
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Calculate your potential profits from fish farming investments. Enter your investment details and see
            real-time profit projections.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Input Section */}
          <Card className="p-6 sm:p-8 mb-8 border border-primary/20">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Investment Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Farm Type</label>
                <Input
                  placeholder="e.g., Aquaculture"
                  value={farmType}
                  onChange={(e) => setFarmType(e.target.value)}
                  className="border-primary/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                <Input
                  placeholder="e.g., Fish Farming"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border-primary/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Investment Amount (₵)</label>
                <Input
                  type="number"
                  placeholder="20000"
                  value={investmentAmount || ""}
                  onChange={(e) => setInvestmentAmount(Number.parseFloat(e.target.value) || 0)}
                  className="border-primary/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Farm Period</label>
                <select
                  value={farmPeriod}
                  onChange={(e) => setFarmPeriod(Number.parseInt(e.target.value) as 4 | 6 | 8 | 10 | 12)}
                  className="w-full border border-primary/20 rounded-md py-2 bg-background text-foreground text-sm px-3"
                >
                  <option value={4}>4 months</option>
                  <option value={6}>6 months</option>
                  <option value={8}>8 months</option>
                  <option value={10}>10 months</option>
                  <option value={12}>12 months</option>
                </select>
              </div>
            </div>

            {!investmentAmount && (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">ⓘ Please enter Investment Amount to see profit projections.</p>
              </div>
            )}
          </Card>

          {/* Results Section */}
          <Card className="p-6 sm:p-8 mb-8 border border-primary/20">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Profit Projections</h2>

            {rows.map((row) => {
              const calc = calculateRow(row)
              return (
                <div key={row.id}>
                  {/* Desktop Table View */}
                  <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-primary/20">
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Number of Fish</th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">
                            Selling Price @ Maturity (₵)
                          </th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Total Sales Revenue (₵)</th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Gross Income (₵)</th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Gross Profit 70% (₵)</th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Net Income (₵)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-primary/10 hover:bg-primary/5 transition-colors">
                          <td className="text-left py-3 px-4 font-medium text-foreground">
                            {numberOfFish.toLocaleString()}
                          </td>
                          <td className="text-left py-3 px-4 font-medium text-foreground">
                            ₵{calc.sellingPrice.toLocaleString()}
                          </td>
                          <td className="text-left py-3 px-4 font-medium text-foreground">
                            ₵{calc.totalSalesRevenue.toLocaleString()}
                          </td>
                          <td className="text-left py-3 px-4 font-medium text-foreground">
                            ₵{calc.grossIncome.toLocaleString()}
                          </td>
                          <td className="text-left py-3 px-4 font-medium text-primary">
                            ₵{calc.grossProfit.toLocaleString()}
                          </td>
                          <td className="text-left py-3 px-4 font-bold text-primary text-base">
                            ₵{calc.netIncome.toLocaleString()}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Card View */}
                  <div className="lg:hidden space-y-3">
                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                      <p className="text-xs text-muted-foreground mb-1">Number of Fish</p>
                      <p className="font-bold text-lg text-foreground">{numberOfFish.toLocaleString()}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                        <p className="text-xs text-muted-foreground mb-1">Selling Price @ Maturity</p>
                        <p className="font-bold text-lg text-foreground">₵{calc.sellingPrice.toLocaleString()}</p>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                        <p className="text-xs text-muted-foreground mb-1">Total Sales Revenue</p>
                        <p className="font-bold text-lg text-foreground">₵{calc.totalSalesRevenue.toLocaleString()}</p>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                        <p className="text-xs text-muted-foreground mb-1">Gross Income</p>
                        <p className="font-bold text-lg text-foreground">₵{calc.grossIncome.toLocaleString()}</p>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                        <p className="text-xs text-muted-foreground mb-1">Gross Profit (70%)</p>
                        <p className="font-bold text-lg text-primary">₵{calc.grossProfit.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Summary */}
            <div className="mt-8 pt-6 border-t border-primary/20">
              <div className="flex justify-end">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-2">Total Net Income</p>
                  <p className="font-serif text-3xl sm:text-4xl font-bold text-primary">
                    ₵{totalNetIncome.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Download Section */}
          <div className="flex justify-center">
            <Button
              onClick={downloadAsExcel}
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90 w-full sm:w-auto"
            >
              <Download className="w-5 h-5" />
              Download Results as CSV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
