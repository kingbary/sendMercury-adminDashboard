import { getStores } from "@/services/api/get-stores";
import { useQuery } from "@tanstack/react-query";

export default function useGetStores(pageParam, limit) {
  return useQuery({
    queryKey: ["get-stores"],
    queryFn: () => getStores(pageParam, limit),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
