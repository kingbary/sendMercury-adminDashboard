import { updateStore } from "@/services/api/update-store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useUpdateStore() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateStore,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-stores"] });
      // toast.success("Store updated successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
