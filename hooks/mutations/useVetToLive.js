import { vetProductToLive } from "@/services/api/products";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useVetToLive() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: vetProductToLive,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-individual-product"],
      });
      queryClient.invalidateQueries({
        queryKey: ["get-variant"],
      });
      toast.success("Product has been vetted to live!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
