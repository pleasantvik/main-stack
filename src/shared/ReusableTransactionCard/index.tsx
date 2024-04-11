import { formatDate } from "@utils/constant";
import { IReusableTransactionProps } from "./interface";
import callOut from "@assets/svg/call_made.svg";
import callIn from "@assets/svg/call_received.svg";
import CircularProgress from "shared/CircularProgress";


const ReusableTransactionCard = ({
  isMetaData,
  amount,
  date,
  depositorName,
  productName,
  withdrawalStatus,
  isLoading,
}: IReusableTransactionProps) => {
  return (
    <>
      {isLoading ? (
        <CircularProgress color='black'/>
      ) : (
        <>
          {isMetaData && (
            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="rounded-full bg-[#E3FCF2] h-[48px] w-[48px] p-4">
                  <img src={callIn} alt="arrow" />
                </div>
                <div className="grid gap-y-2">
                  <p className="text-[16px] leading-6 font-medium text-black">
                    {productName}
                  </p>
                  <p className="text-[14px] leading-4 font-medium text-gray">
                    {depositorName}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[16px] leading-[24px] font-[700] text-black">
                  USD<span>{amount?.toFixed(2)}</span>
                </p>
                <p className="text-[14px] laeding-[16px] font-[500] text-gray">
                  {formatDate(date)}
                </p>
              </div>
            </div>
          )}
          {!isMetaData && (
            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="rounded-full bg-[#F9E3E0] h-[48px] w-[48px] p-4">
                  <img src={callOut} alt="arrow" />
                </div>
                <div className="grid gap-y-2">
                  <p className="text-[16px] leading-6 font-medium text-black">
                    Cash Withdrawal
                  </p>
                  <p className="text-[14px] leading-4 font-medium text-gray">
                    {withdrawalStatus}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[16px] leading-[24px] font-[700] text-black">
                  USD<span>{amount?.toFixed(2)}</span>
                </p>
                <p className="text-[14px] laeding-[16px] font-[500] text-gray">
                  {formatDate(date)}
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ReusableTransactionCard;
