"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Eye, EyeOff, TrendingUp, ArrowUpRight, ArrowDownLeft } from "lucide-react"

export function WalletBalance() {
  const [showBalance, setShowBalance] = useState(true)

  return (
    <Card className="overflow-hidden">
      <div className="bg-forest p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-white/70 text-sm">Available Balance</span>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="text-white/70 hover:text-white transition-colors"
          >
            {showBalance ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        <div className="font-serif text-4xl font-bold text-white mb-2">
          {showBalance ? "GHS 4,250.00" : "GHS ****.**"}
        </div>
        <div className="flex items-center gap-2 text-green-400 text-sm">
          <TrendingUp className="w-4 h-4" />
          <span>+12.5% this month</span>
        </div>
      </div>

      <div className="p-4 grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-muted/50 rounded-xl">
          <div className="flex items-center justify-center gap-1 text-green-600 mb-1">
            <ArrowDownLeft className="w-4 h-4" />
            <span className="text-xs">Total In</span>
          </div>
          <div className="font-semibold">{showBalance ? "GHS 12,700.00" : "GHS ****.**"}</div>
        </div>
        <div className="text-center p-3 bg-muted/50 rounded-xl">
          <div className="flex items-center justify-center gap-1 text-red-600 mb-1">
            <ArrowUpRight className="w-4 h-4" />
            <span className="text-xs">Total Out</span>
          </div>
          <div className="font-semibold">{showBalance ? "GHS 8,450.00" : "GHS ****.**"}</div>
        </div>
      </div>
    </Card>
  )
}
