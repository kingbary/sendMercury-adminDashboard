import { listVendors } from "@/services/api/list-vendors";
import { useQuery } from "@tanstack/react-query";

export default function useListVendors({ plan, pageParam, status,limit }) {
  return useQuery({
    queryKey: ["list-vendors"],
    queryFn: () => listVendors({ plan, pageParam, status ,limit}),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
