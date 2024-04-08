import { getStores } from "@/services/api/get-stores";
import { useQuery } from "@tanstack/react-query";

export default function useGetStores() {
  return useQuery({
    queryKey: ["get-stores"],
    queryFn: getStores,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
