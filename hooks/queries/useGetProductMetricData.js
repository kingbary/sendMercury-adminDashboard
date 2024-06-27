import { listProductMetric } from "@/services/api/products";
import { useQuery } from "@tanstack/react-query";

export default function useGetProductMetricData() {
  return useQuery({
    queryKey: ["get-product-metric"],
    queryFn: listProductMetric,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
