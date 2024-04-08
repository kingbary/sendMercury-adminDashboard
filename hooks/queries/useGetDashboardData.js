import { GetProfile } from "@/services/api/get-profile";
import { useQuery } from "@tanstack/react-query";

export const useGetDashboardData = () => {
  return useQuery({
    queryKey: ["get-profile"],
    queryFn: GetProfile,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
};
