"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Building2, Plus, MoreHorizontal, Check } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const paymentMethods = [
  {
    id: 1,
    type: "momo",
    name: "MTN Mobile Money",
    details: "024 XXX 1234",
    isDefault: true,
    icon: Smartphone,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    id: 2,
    type: "bank",
    name: "Ghana Commercial Bank",
    details: "****1234",
    isDefault: false,
    icon: Building2,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
]

export function PaymentMethods() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-xl font-bold text-foreground">Payment Methods</h2>
        <Button size="sm" className="bg-gold hover:bg-gold-dark text-forest gap-2">
          <Plus className="w-4 h-4" />
          Add Method
        </Button>
      </div>

      <div className="space-y-3">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-gold/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${method.iconBg}`}>
                <method.icon className={`w-5 h-5 ${method.iconColor}`} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">{method.name}</span>
                  {method.isDefault && (
                    <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      Default
                    </span>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">{method.details}</div>
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center">
                  <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {!method.isDefault && <DropdownMenuItem>Set as Default</DropdownMenuItem>}
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem className="text-red-500">Remove</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </div>
    </Card>
  )
}
