import { getOverview } from "@/services/api/get-overview";
import { useQuery } from "@tanstack/react-query";

export default function useGetOverview() {
  return useQuery({
    queryKey: ["get-overview"],
    queryFn: getOverview,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
