import { getOrdersMetric } from "@/services/api/orders";
import { useQuery } from "@tanstack/react-query";

export default function useGetOrderMetrics() {
  return useQuery({
    queryKey: ["get-order-metric"],
    queryFn: getOrdersMetric,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
