import { getTransactions } from "@services/revenue.service";
import { useQuery } from "@tanstack/react-query";

export const useGetTransactions = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-transactions"],
    queryFn: getTransactions,
  });
  return {
    transactionData: data?.data,
    transactionIsLoading: isLoading,
    transactionIsError: isError,
  };
};
