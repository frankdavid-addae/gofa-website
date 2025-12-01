import Link from "next/link"
import { Plus, Calendar, Download, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"

const actions = [
  { icon: Plus, label: "New Investment", href: "/farming/categories", variant: "default" as const },
  { icon: Calendar, label: "Schedule Visit", href: "/dashboard/visits", variant: "outline" as const },
  { icon: Download, label: "Download Reports", href: "/dashboard/documents", variant: "outline" as const },
  { icon: Wallet, label: "Withdraw Funds", href: "/dashboard/wallet", variant: "outline" as const },
]

export function DashboardQuickActions() {
  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((action) => (
        <Button
          key={action.label}
          variant={action.variant}
          size="sm"
          className={
            action.variant === "default" ? "bg-gold hover:bg-gold-dark text-forest gap-2" : "gap-2 bg-background"
          }
          asChild
        >
          <Link href={action.href}>
            <action.icon className="w-4 h-4" />
            {action.label}
          </Link>
        </Button>
      ))}
    </div>
  )
}
