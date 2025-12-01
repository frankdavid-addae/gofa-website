import { FarmsHeader } from "@/components/dashboard/farms/header"
import { FarmsGrid } from "@/components/dashboard/farms/grid"
import { FarmsStats } from "@/components/dashboard/farms/stats"

export default function FarmsPage() {
  return (
    <div className="space-y-6">
      <FarmsHeader />
      <FarmsStats />
      <FarmsGrid />
    </div>
  )
}
