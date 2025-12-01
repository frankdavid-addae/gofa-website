import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function WalletHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Wallet</h1>
        <p className="text-muted-foreground mt-1">Manage your funds and view transaction history</p>
      </div>
      <Button variant="outline" size="sm" className="gap-2 bg-background">
        <Download className="w-4 h-4" />
        Export Statement
      </Button>
    </div>
  )
}
