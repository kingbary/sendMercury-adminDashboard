import { listPlatinumVendors } from "@/services/api/orders/list-vendors";
import { useQuery } from "@tanstack/react-query";

export default function useListPlatinumVendors() {
  return useQuery({
    queryKey: ["list-platinum-vendors"],
    queryFn: listPlatinumVendors,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
