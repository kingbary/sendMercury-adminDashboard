import { planDetails } from "@/services/api/individual-plan";
import { useQuery } from "@tanstack/react-query";

export default function useGetPlanDetails(planId) {
  return useQuery({
    queryKey: ["plan-details", planId],
    queryFn: () => planDetails(planId),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
