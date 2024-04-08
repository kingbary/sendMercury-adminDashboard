import { listBasicVendors } from "@/services/api/orders/list-vendors";
import { useQuery } from "@tanstack/react-query";

export default function useListBasicVendors() {
  return useQuery({
    queryKey: ["list-basic-vendors"],
    queryFn: listBasicVendors,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
