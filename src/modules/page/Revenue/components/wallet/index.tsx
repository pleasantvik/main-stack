import { useGetWallet } from "@hooks/revenue/useGetWallet"
import ReuseableWalletCard from "shared/ReusableWalletCard"



const Wallet = () => {
    const{walletData, walletIsLoading} = useGetWallet()
    
  return (
    <div className="grid gap-y-4">
      <ReuseableWalletCard
        title="Ledger Balance"
        amount={walletData?.ledger_balance}
        isLoading={walletIsLoading}
      />
      <ReuseableWalletCard
        title="Total Payout"
        amount={walletData?.total_payout}
        isLoading={walletIsLoading}
      />
      <ReuseableWalletCard
        title="Total Revenue"
        amount={walletData?.total_revenue}
        isLoading={walletIsLoading}
      />
      <ReuseableWalletCard
        title="Pending Payout"
        amount={walletData?.pending_payout}
        isLoading={walletIsLoading}
      />
    </div>
  );
}

export default Wallet