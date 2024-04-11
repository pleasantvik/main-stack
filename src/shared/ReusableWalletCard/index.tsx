
import CircularProgress from "shared/CircularProgress";
import { IReuseableWalletCardProps } from "./interface";
import info from '@assets/svg/info.svg'

const ReuseableWalletCard = ({ title, amount , isLoading}: IReuseableWalletCardProps) => {
  return (
    <>
      {isLoading ? (
        <CircularProgress color='black' />
      ) : (
        <div className="flex justify-between max-w-[271px]">
          <div className="grid gap-y-[8px]">
            <p className="text-[14px] leading-[16px] font-[500] text-gray">
              {title}
            </p>
            <p className="text-[28px] leading-[38px] font-bold text-black">
              USD <span>{amount?.toFixed(2)}</span>
            </p>
          </div>

          <img src={info} alt="info icon" className="w-[20px] h-[20px]" />
        </div>
      )}
    </>
  );
};

export default ReuseableWalletCard;
