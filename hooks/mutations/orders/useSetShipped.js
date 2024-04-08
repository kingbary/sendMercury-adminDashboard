import { setShippedOrder } from "@/services/api/orders/set-orders";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useSetShipped() {
  return useMutation({
    mutationFn: setShippedOrder,
    onSuccess: () => {
      toast.success("Order status updated successfully!");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response?.data.message);
    },
  });
}
