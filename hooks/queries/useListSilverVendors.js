import { listSilverVendors } from "@/services/api/orders/list-vendors";
import { useQuery } from "@tanstack/react-query";

export default function useSilverVendors() {
  return useQuery({
    queryKey: ["list-silver-vendors"],
    queryFn: listSilverVendors,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
