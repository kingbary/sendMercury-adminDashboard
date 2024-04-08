import { listPendingOrders } from "@/services/api/orders/list-orders";
import { useQuery } from "@tanstack/react-query";

export default function useListPendingOrders() {
  return useQuery({
    queryKey: ["list-orders"],
    queryFn: listPendingOrders,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
