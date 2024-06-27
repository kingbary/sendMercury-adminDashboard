import { updateNotificationsSettings } from "@/services/api/notifications-settings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useUpdateNotificationsSettings() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateNotificationsSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "get-notifications-settings" });
      toast.success("Notification settings has been updated successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
