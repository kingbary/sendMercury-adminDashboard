import { getTopStores } from "@/services/api/revenue";
import { useQuery } from "@tanstack/react-query";
import { useAuthToken } from "../useAuthToken";

export default function useGetTopStores() {
  useAuthToken();
  return useQuery({
    queryKey: ["list-top-stores"],
    queryFn: getTopStores,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
}
