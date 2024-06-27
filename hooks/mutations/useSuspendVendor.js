import { suspendVendor } from "@/services/api/vendors";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useSuspendVendor() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: suspendVendor,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["get-vendors-details"] });
      toast.success("Vendor account suspended successfully");
    },
    onError: (error) => {
      if (error.response?.data.message) {
        toast.error(`${error.response?.data.message}`);
      }
    },
  });
}
