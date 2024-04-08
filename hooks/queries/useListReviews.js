import { listReviews } from "@/services/api/list-reviews";
import { useQuery } from "@tanstack/react-query";

export default function useListReviews() {
  return useQuery({
    queryKey: ["list-reviews"],
    queryFn: listReviews,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
