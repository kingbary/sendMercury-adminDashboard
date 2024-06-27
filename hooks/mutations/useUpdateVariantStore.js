import { updateVariantStore } from "@/services/api/products";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useUpdateVariantStore() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateVariantStore,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-product-variant"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
