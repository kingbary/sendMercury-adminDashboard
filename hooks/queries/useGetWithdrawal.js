import { listWithdrawal } from "@/services/api/revenue/withdrawal";
import { useQuery } from "@tanstack/react-query";
import { useAuthToken } from "../useAuthToken";

export default function useListWithdrawal({ pageParam, limit, status }) {
  useAuthToken();
  return useQuery({
    queryKey: ["list-withdrawal"],
    queryFn: () => listWithdrawal({ pageParam, limit, status }),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
