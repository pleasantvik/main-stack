export interface IReusableTransactionProps {
  isMetaData: boolean;
  productName?: string;
  depositorName?: string;
  withdrawalStatus?: string;
  date: string;
  amount: number | undefined;
  isLoading: boolean;
}
