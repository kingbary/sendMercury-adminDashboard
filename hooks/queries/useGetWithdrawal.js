import { listWithdrawal } from "@/services/api/orders/revenue/withdrawal";
import { useQuery } from "@tanstack/react-query";

export default function useListWithdrawal({ pageParam, limit }) {
  return useQuery({
    queryKey: ["list-withdrawal"],
    queryFn: () => listWithdrawal({ pageParam, limit }),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
