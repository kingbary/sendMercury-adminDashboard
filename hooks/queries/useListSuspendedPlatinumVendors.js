import { listPlatinumVendors } from "@/services/api/orders/list-vendors";
import { useQuery } from "@tanstack/react-query";

export default function useListSuspendedPlatinumVendors() {
  return useQuery({
    queryKey: ["list-suspended-platinum-vendors"],
    queryFn: listPlatinumVendors,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
