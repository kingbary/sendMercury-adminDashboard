import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { forgotPassword } from "../../services/api/forgot-password";
import { useRouter } from "next/navigation";

export default function useForgotPassword() {
  const router = useRouter();
  return useMutation({
    mutationFn: forgotPassword,
    onSuccess: (result) => {
      router.push("/forgot-password/check-email");
    },
    onError: (error) => {
      if (error.response?.data.message) {
        toast.error(`${error.response?.data.message}`);
      }
    },
  });
}
