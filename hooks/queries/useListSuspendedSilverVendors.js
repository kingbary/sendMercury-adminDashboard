import { listSuspendedSilverVendors } from "@/services/api/orders/list-vendors";
import { useQuery } from "@tanstack/react-query";

export default function useListSuspendedSilverVendors() {
  return useQuery({
    queryKey: ["list-suspended-silver-vendors"],
    queryFn: listSuspendedSilverVendors,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
