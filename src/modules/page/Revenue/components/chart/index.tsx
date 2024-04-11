import { useGetTransactions } from "@hooks/revenue/useGetTransactions";
import { useGetWallet } from "@hooks/revenue/useGetWallet";
import { IGetTransactionResponse } from "@services/interface/response/revenue";
import { formatDate } from "@utils/constant";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const Chart = () => {
  const { walletData } = useGetWallet();
  const { transactionData } = useGetTransactions();
  const transactionAmount = transactionData?.flatMap(
    (data: IGetTransactionResponse) => data.amount
  );
  const transactionDate = transactionData?.flatMap(
    (data: IGetTransactionResponse) => formatDate(data.date)
  );

  const transactionDateResult = transactionDate || [];
  const series: ApexAxisChartSeries | ApexNonAxisChartSeries = [
    {
      name: "Series 1",
      data: transactionAmount as number[],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    colors: ["#FF5403"],
    stroke: {
      width: 1,
      curve: "smooth",
    },
    xaxis: {
      categories: transactionDateResult,
      labels: {
        rotate: 0,
        offsetX: 4,
        formatter: (value) => {
          if (value === "Mar 03, 2022" || value === "Feb 20, 2022") {
            return value;
          }
          return "";
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
  };
  return (
    <div className=" col-span-2 ">
      <div className="flex gap-[64px] items-center">
        <div>
          <p>Available Balance</p>
          <p className="text-[36px] leading-[48px] font-bold text-black">
            USD <span>{walletData?.balance.toFixed(2)}</span>
          </p>
        </div>

        <button className="text-[16px] leading-[24px] font-[600] text-[#fff] bg-black  py-[14px] rounded-[100px] w-[167px]">
          Withdraw
        </button>
      </div>

      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={280}
      />
    </div>
  );
};

export default Chart;
