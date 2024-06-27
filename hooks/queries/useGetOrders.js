import { getOrders } from "@/services/api/orders";
import { useQuery } from "@tanstack/react-query";

export default function useGetOrders({pageParam, limit, status}) {
  return useQuery({
    queryKey: ["list-orders", { pageParam, limit, status }],
    queryFn: () => getOrders(pageParam, limit, status),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
