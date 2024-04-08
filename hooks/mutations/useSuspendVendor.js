import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { suspendVendor } from "@/services/api/suspend-vendor";

export default function useSuspendVendor() {
  return useMutation({
    mutationFn: suspendVendor,
    onSuccess: async () => {
      toast.success(`${response?.data.message}`);
    },
    onError: (error) => {
      if (error.response?.data.message) {
        toast.error(`${error.response?.data.message}`);
      }
    },
  });
}
