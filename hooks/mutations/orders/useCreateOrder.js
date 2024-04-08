import { createOrder } from "@/services/api/orders/create-order";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useCreateOrder() {
  return useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      // toast.success("successfully created an order");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response?.data.message);
    },
  });
}
