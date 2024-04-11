import { getWallet } from "@services/revenue.service";
import { useQuery } from "@tanstack/react-query";

export const useGetWallet = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-wallet"],
    queryFn: getWallet,
  });
  return {
    walletData: data?.data,
    walletIsLoading: isLoading,
    walletIsError: isError,
  };
};
