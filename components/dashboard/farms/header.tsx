import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus, Filter, Download } from "lucide-react"

export function FarmsHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground">My Farms</h1>
        <p className="text-muted-foreground mt-1">Manage and monitor all your farm investments</p>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="gap-2 bg-background">
          <Filter className="w-4 h-4" />
          Filter
        </Button>
        <Button variant="outline" size="sm" className="gap-2 bg-background">
          <Download className="w-4 h-4" />
          Export
        </Button>
        <Button size="sm" className="bg-gold hover:bg-gold-dark text-forest gap-2" asChild>
          <Link href="/farming/categories">
            <Plus className="w-4 h-4" />
            New Farm
          </Link>
        </Button>
      </div>
    </div>
  )
}
