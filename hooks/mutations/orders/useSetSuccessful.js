import { setSuccessfulOrder } from "@/services/api/orders/set-orders";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useSetSuccessful() {
  return useMutation({
    mutationFn: setSuccessfulOrder,
    onSuccess: () => {
      toast.success("Order status updated successfully!");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response?.data.message);
    },
  });
}
