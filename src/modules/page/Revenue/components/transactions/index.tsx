import { useGetTransactions } from "@hooks/revenue/useGetTransactions";
import { useState } from "react";
import download from '@assets/svg/download.svg'
import ReusableTransactionCard from "shared/ReusableTransactionCard";
import TransactionFilterDrawer from "./components/TransactionFilterDrawer";
import expandmore from '@assets/svg/expand_more.svg'

const Transaction = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
  const { transactionData, transactionIsLoading } = useGetTransactions();
  const transactionDate = transactionData?.map((data) => data.date);

  const calculateTotalDays = () => {
    let totalDays = 0;
    transactionDate?.map((date, index) => {
      if (index < transactionDate.length - 1) {
        const currentDate = new Date(date);
        const nextDate = new Date(transactionDate[index + 1]);
        const diffTime = Math.abs(nextDate.getTime() - currentDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        totalDays += diffDays;
      }
      return null;
    });
    return totalDays;
  };

  const totalDays = calculateTotalDays();

  return (
    <div className="px-[140px] pt-[82px]">
      <div className="flex justify-between">
        <div>
          <p className="text-[24px] leading-8 font-bold text-black">
            {transactionData?.length} Transactions
          </p>
          <p className="text-[14px] leading-4 font-medium text-gray">
            Your transactions for the last {totalDays} days
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className=" flex item-center px-[20px] py-[12px] rounded-[100px] bg-lightGray text-black text-[16px] leading-6 font-[600]"
            onClick={() => setOpenDrawer(true)}
          >
            Filter
            <img src={expandmore} alt="expand icon" className="pl-2 mt-[4px]" />
          </button>
          <button className=" flex items-center px-[20px] py-[12px] rounded-[100px] bg-lightGray text-black text-[16px] leading-6 font-[600]">
            Export list
            <img src={download} alt="expand icon" className="pl-2 mt-[2px]" />
          </button>
        </div>
      </div>
      <div className="pt-[43px] grid gap-y-6 pb-[164px]">
        {transactionData?.map((data) => {
          return (
            <>
              {data?.metadata ? (
                <ReusableTransactionCard
                  amount={data.amount}
                  date={data.date}
                  depositorName={data.metadata?.name}
                  productName={data.metadata?.product_name}
                  isMetaData
                  isLoading={transactionIsLoading}
                />
              ) : (
                <ReusableTransactionCard
                  amount={data.amount}
                  date={data.date}
                  isMetaData={false}
                  withdrawalStatus={data.status}
                  isLoading={transactionIsLoading}
                />
              )}
            </>
          );
        })}
      </div>

      {openDrawer && (
        <TransactionFilterDrawer onClose={() => setOpenDrawer(false)} />
      )}
    </div>
  );
};

export default Transaction;
