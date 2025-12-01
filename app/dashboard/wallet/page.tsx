import { WalletHeader } from "@/components/dashboard/wallet/header"
import { WalletBalance } from "@/components/dashboard/wallet/balance"
import { WalletActions } from "@/components/dashboard/wallet/actions"
import { TransactionHistory } from "@/components/dashboard/wallet/transactions"

export default function WalletPage() {
  return (
    <div className="space-y-6">
      <WalletHeader />
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <WalletBalance />
          <WalletActions />
        </div>
        <div className="lg:col-span-2">
          <TransactionHistory />
        </div>
      </div>
    </div>
  )
}
