import { readAllNotifications } from "@/services/api/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useReadAllNotifications() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: readAllNotifications,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-notifications"] });
      toast.success("Notifications marked as read successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
