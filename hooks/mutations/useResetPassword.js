import { resetPassword } from "@/services/api/reset-password";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function useResetPassword() {
  const router = useRouter();
  return useMutation({
    mutationFn: resetPassword,
    onSuccess: (result) => {
      router.push("/change-password/success");
    },
    onError: (error) => {
      console.log(error)
      if (error.response?.data.message) {
        toast.error(error.response?.data.message);
      }
    },
  });
}
