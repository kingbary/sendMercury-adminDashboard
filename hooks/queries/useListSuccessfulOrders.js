import { listSuccessfulOrders } from "@/services/api/orders/list-orders";
import { useQuery } from "@tanstack/react-query";

export default function useListSuccessfulOrders() {
  return useQuery({
    queryKey: ["list-successful-orders"],
    queryFn: listSuccessfulOrders,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
