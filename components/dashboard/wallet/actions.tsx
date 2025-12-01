"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUpRight, Plus, RefreshCw, Smartphone, Building2, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function WalletActions() {
  const [withdrawOpen, setWithdrawOpen] = useState(false)
  const [withdrawMethod, setWithdrawMethod] = useState<"momo" | "bank" | null>(null)

  return (
    <Card className="p-5">
      <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
      <div className="space-y-3">
        {/* Withdraw */}
        <Dialog open={withdrawOpen} onOpenChange={setWithdrawOpen}>
          <DialogTrigger asChild>
            <Button className="w-full justify-start gap-3 bg-gold hover:bg-gold-dark text-forest">
              <ArrowUpRight className="w-5 h-5" />
              Withdraw Funds
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Withdraw Funds</DialogTitle>
              <DialogDescription>Choose your preferred withdrawal method</DialogDescription>
            </DialogHeader>

            {!withdrawMethod ? (
              <div className="space-y-3 pt-4">
                <button
                  onClick={() => setWithdrawMethod("momo")}
                  className="w-full flex items-center gap-4 p-4 border border-border rounded-xl hover:border-gold hover:bg-gold/5 transition-all text-left"
                >
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Mobile Money</div>
                    <div className="text-sm text-muted-foreground">MTN, Vodafone, AirtelTigo</div>
                  </div>
                </button>
                <button
                  onClick={() => setWithdrawMethod("bank")}
                  className="w-full flex items-center gap-4 p-4 border border-border rounded-xl hover:border-gold hover:bg-gold/5 transition-all text-left"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Bank Transfer</div>
                    <div className="text-sm text-muted-foreground">Direct to bank account</div>
                  </div>
                </button>
              </div>
            ) : (
              <div className="space-y-4 pt-4">
                <button
                  onClick={() => setWithdrawMethod(null)}
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  Change method
                </button>

                <div>
                  <label className="block text-sm font-medium mb-2">Amount (GHS)</label>
                  <Input type="number" placeholder="Enter amount" className="text-lg" />
                  <p className="text-xs text-muted-foreground mt-1">Available: GHS 4,250.00</p>
                </div>

                {withdrawMethod === "momo" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mobile Network</label>
                      <select className="w-full h-10 px-3 border border-border rounded-md bg-background">
                        <option>MTN Mobile Money</option>
                        <option>Vodafone Cash</option>
                        <option>AirtelTigo Money</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input type="tel" placeholder="024 XXX XXXX" />
                    </div>
                  </>
                )}

                {withdrawMethod === "bank" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-2">Bank</label>
                      <select className="w-full h-10 px-3 border border-border rounded-md bg-background">
                        <option>Select bank</option>
                        <option>Ghana Commercial Bank</option>
                        <option>Ecobank Ghana</option>
                        <option>Stanbic Bank</option>
                        <option>Absa Bank Ghana</option>
                        <option>Fidelity Bank</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Account Number</label>
                      <Input type="text" placeholder="Enter account number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Account Name</label>
                      <Input type="text" placeholder="Account holder name" />
                    </div>
                  </>
                )}

                <Button className="w-full bg-gold hover:bg-gold-dark text-forest">Confirm Withdrawal</Button>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Add Funds */}
        <Button variant="outline" className="w-full justify-start gap-3 bg-transparent">
          <Plus className="w-5 h-5" />
          Add Funds / Invest
        </Button>

        {/* Convert to Salary */}
        <Button variant="outline" className="w-full justify-start gap-3 bg-transparent">
          <RefreshCw className="w-5 h-5" />
          Convert to Salary
        </Button>
      </div>

      {/* Salary Setup Card */}
      <div className="mt-4 p-4 bg-sage/30 rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Monthly Salary</span>
          <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Active</span>
        </div>
        <div className="font-semibold text-foreground">GHS 500.00/month</div>
        <div className="text-xs text-muted-foreground mt-1">Next payout: Dec 1, 2025</div>
      </div>
    </Card>
  )
}
