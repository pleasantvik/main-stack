import { GET_TRANSACTIONS, GET_USER, GET_WALLET } from "@config/apiUrl";
import { IGetTransactionResponse, IGetUserResponse, IGetWalletResponse } from "./interface/response/revenue";
import api from "@config/http-common";

export const getWallet = () => {
  return api.get<IGetWalletResponse>(GET_WALLET);
};


export const getTransactions = () => {
    return api.get<IGetTransactionResponse[]>(GET_TRANSACTIONS);
}

export const getUser = () => {
    return api.get<IGetUserResponse>(GET_USER);
}