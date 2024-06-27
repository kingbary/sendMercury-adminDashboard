import { getnotificationSettings } from "@/services/api/notifications-settings";
import { useQuery } from "@tanstack/react-query";

export const useGetNotificationsSettings = () => {
  return useQuery({
    queryKey: ["get-notifications-settings"],
    queryFn: getnotificationSettings,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
};
