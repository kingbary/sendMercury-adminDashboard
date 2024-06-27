import { useAuthToken } from "@/hooks/useAuthToken";
import { setOrderStatus } from "@/services/api/orders/set-orders";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useSetOrderStatus() {
  useAuthToken();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: setOrderStatus,
    onSuccess: (response) => {
      toast.success(response?.data.message);
      queryClient.invalidateQueries({ queryKey: ["list-orders"] });
    },
    onError: (error) => {
      toast.error(error.response?.data.message);
    },
  });
}
