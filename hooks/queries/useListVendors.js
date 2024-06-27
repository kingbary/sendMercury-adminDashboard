import { listVendors } from "@/services/api/vendors";
import { useQuery } from "@tanstack/react-query";

export default function useListVendors({ plan, pageParam, status, limit }) {
  return useQuery({
    queryKey: ["list-vendors", { plan, pageParam, status, limit }],
    queryFn: () => listVendors({ plan, pageParam, status, limit }),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
