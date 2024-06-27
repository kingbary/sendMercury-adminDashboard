import { getVendorMetric } from "@/services/api/vendors";
import { useQuery } from "@tanstack/react-query";

export default function useGetVendorsMetricData() {
  return useQuery({
    queryKey: ["get-vendor-metric"],
    queryFn: getVendorMetric,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
