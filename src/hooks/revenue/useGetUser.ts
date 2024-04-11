import { getUser } from "@services/revenue.service";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
  });
  return {
    userData: data?.data,
    userIsLoaging: isLoading,
    userIsError: isError,
  };
};
