import { createReview } from "@/services/api/create-review";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useCreateReview() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["list-reviews"] });
      // toast.success("Successfully created a review!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
