export interface IMetaData {
  name: string;
  type: string;
  email: string;
  quantity: number;
  country: string;
  product_name: string;
}

export interface IGetTransactionResponse {
  amount: number;
  metadata: IMetaData;
  payment_reference: string;
  status: string;
  type: string;
  date: string;
}

export interface IGetUserResponse {
  first_name: string;
  last_name: string;
  email: string;
}

export interface IGetWalletResponse {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}
