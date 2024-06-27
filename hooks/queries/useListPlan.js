import { listPlans } from "@/services/api/list-plans";
import { useQuery } from "@tanstack/react-query";

export default function useListPlan() {
  return useQuery({
    queryKey: ["list-plans"],
    queryFn: listPlans,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
