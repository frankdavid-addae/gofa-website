"use client"

import { useState, useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { TrendingUp, Percent, DollarSign } from "lucide-react"

export function InvestmentCalculator() {
  const [investmentUSD, setInvestmentUSD] = useState(50000)

  const calculations = useMemo(() => {
    const totalRaise = 10000000 // $10M
    const equityPercentage = (investmentUSD / totalRaise) * 100
    const projectedDividendLow = investmentUSD * 0.15 // 15%
    const projectedDividendHigh = investmentUSD * 0.25 // 25%
    const fiveYearReturnLow = investmentUSD + projectedDividendLow * 5
    const fiveYearReturnHigh = investmentUSD + projectedDividendHigh * 5

    return {
      equityPercentage: equityPercentage.toFixed(4),
      projectedDividendLow,
      projectedDividendHigh,
      fiveYearReturnLow,
      fiveYearReturnHigh,
    }
  }, [investmentUSD])

  return (
    <section id="calculator" className="py-20 md:py-28 bg-sage/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-semibold mb-4">
            Investment Calculator
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Calculate Your <span className="text-gold-gradient">Equity & Returns</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Enter your investment amount to see your projected equity stake and dividend returns.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto p-8 md:p-12">
          {/* Investment Input */}
          <div className="mb-10">
            <label className="block text-sm font-semibold text-foreground mb-4">Investment Amount (USD)</label>
            <div className="flex items-center gap-4 mb-4">
              <DollarSign className="w-6 h-6 text-gold" />
              <Input
                type="number"
                value={investmentUSD}
                onChange={(e) => setInvestmentUSD(Number(e.target.value) || 0)}
                className="text-2xl font-bold border-gold/20"
                min={10000}
                step={10000}
              />
            </div>
            <Slider
              value={[investmentUSD]}
              onValueChange={(value) => setInvestmentUSD(value[0])}
              max={1000000}
              min={10000}
              step={10000}
              className="mt-4"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>$10,000</span>
              <span>$1,000,000</span>
            </div>
          </div>

          {/* Results */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-cream rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Percent className="w-6 h-6 text-gold-dark" />
              </div>
              <div className="text-sm text-muted-foreground mb-1">Equity Stake</div>
              <div className="font-serif text-3xl font-bold text-foreground">{calculations.equityPercentage}%</div>
              <div className="text-xs text-muted-foreground mt-1">of $10M raise</div>
            </div>

            <div className="bg-cream rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-6 h-6 text-gold-dark" />
              </div>
              <div className="text-sm text-muted-foreground mb-1">Annual Dividend</div>
              <div className="font-serif text-2xl font-bold text-foreground">
                ${calculations.projectedDividendLow.toLocaleString()} - $
                {calculations.projectedDividendHigh.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground mt-1">15-25% projected</div>
            </div>

            <div className="bg-cream rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-gold-dark" />
              </div>
              <div className="text-sm text-muted-foreground mb-1">5-Year Return</div>
              <div className="font-serif text-2xl font-bold text-gold-dark">
                ${calculations.fiveYearReturnLow.toLocaleString()} - ${calculations.fiveYearReturnHigh.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground mt-1">Principal + dividends</div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            * Projections based on current business model. Actual returns may vary. Minimum investment: $10,000 USD.
          </p>
        </Card>
      </div>
    </section>
  )
}
