import { getNotifications } from "@/services/api/notifications";
import { useQuery } from "@tanstack/react-query";

export default function useGetNotifications() {
  return useQuery({
    queryKey: ["get-notifications"],
    queryFn: getNotifications,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
