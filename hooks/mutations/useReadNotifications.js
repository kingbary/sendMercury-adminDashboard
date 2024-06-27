import { readNotifications } from "@/services/api/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useReadNotifications() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: readNotifications,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-notifications"] });
      toast.success("Notifications marked as read successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
