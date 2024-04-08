import { listSuspendedBasicVendors } from "@/services/api/orders/list-vendors";
import { useQuery } from "@tanstack/react-query";

export default function useListSuspendBasicVendors() {
  return useQuery({
    queryKey: ["list-suspended-basic-vendors"],
    queryFn: listSuspendedBasicVendors,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
