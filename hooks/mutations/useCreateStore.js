import { createStore } from "@/services/api/create-store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useCreateStore() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createStore,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-stores"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
