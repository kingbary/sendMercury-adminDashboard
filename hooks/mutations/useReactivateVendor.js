import { reactivateVendor } from "@/services/api/vendors";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useReactivateVendor() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: reactivateVendor,
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ["get-vendors-details"],
      });
      toast.success("Vendor account enabled successfully!");
    },
    onError: (error) => {
      if (error.response?.data.message) {
        toast.error(`${error.response?.data.message}`);
      }
    },
  });
}
