import { allTransactionStatus, allTransactionType } from "@utils/enums";
import { useForm } from "react-hook-form";
import Drawer from "shared/Drawer";
import FilterStartEndDate from "shared/Filter/FilterStartEndDate";
import ControlledSelect from "shared/Select/ControlledSelect";

const TransactionFilterDrawer = ({ onClose }: { onClose: () => void }) => {
  const { control } = useForm();
  return (
    <Drawer onClose={onClose} header="Filter">
      <div className="px-[18px] flex  flex-col justify-between h-[760px]">
        <div className="grid gap-y-4">
          <div className="flex w-full">
            <button className="cursor-pointer border-[1px] rounded-[100px] px-[18px] py-[10px] border-[#EFF1F6] text-[14px] leading-[16px] font-[600] text-black">
              Today
            </button>
            <button className=" cursor-pointer border-[1px] rounded-[100px] px-[18px] py-[10px] border-[#EFF1F6] text-[14px] leading-[16px] font-[600] text-black whitespace-nowrap">
              Last 7 days
            </button>
            <button className=" cursor-pointer border-[1px] rounded-[100px] px-[18px] py-[10px] border-[#EFF1F6] text-[14px] leading-[16px] font-[600] text-black whitespace-nowrap">
              This month
            </button>
            <button className=" cursor-pointer border-[1px] rounded-[100px] px-[10px] py-[10px] border-[#EFF1F6] text-[14px] leading-[16px] font-[600] text-black whitespace-nowrap">
              Last 3 months
            </button>
          </div>

          <FilterStartEndDate
            control={control}
            label="Date Range"
            name={{
              start: "start_date",
              end: "end_date",
            }}
            cellsClassName="rounded-[12px] border-[3px] "
          />
          <div className="pr-4 grid gap-y-4">
            <ControlledSelect
              options={allTransactionType}
              name="type"
              control={control}
              label="Transaction Type"
              placeholder="Select"
              multiple
            />
            <ControlledSelect
              options={allTransactionStatus}
              name="status"
              control={control}
              label="Transaction Status"
              placeholder="Select"
              multiple
            />
          </div>
        </div>

        <div className="w-full flex gap-2 pr-4">
          <button className=" w-full cursor-pointer text-[16px] leading-6 font-semibold text-[#131316] px-[24px] py-[12px] rounded-[100px] border-[1px] bg-[#EFF1F6] border-[#EFF1F6]">
            Clear
          </button>
          <button className=" w-full cursor-pointer text-[16px] leading-6 font-semibold text-[#fff] px-[24px] py-[12px] rounded-[100px] border-[1px] bg-[#131316]">
            Apply
          </button>
        </div>
      </div>
    </Drawer>
  );
};

export default TransactionFilterDrawer;
