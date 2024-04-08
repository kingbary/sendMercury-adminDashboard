import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuth } from "../useAuth";
import { Login } from "@/services/api/login";

export default function useLogin() {
  const { setisLoggedIn, setToken, setAdminDetails } = useAuth();
  const router = useRouter();

  return useMutation({
    mutationFn: Login,
    onSuccess: async (result) => {
      setisLoggedIn();
      localStorage.setItem("token", result.data.data.token);
      setToken(result.data.data.token);
      setAdminDetails(result.data.data.admin);

      router.push("/");
    },
    onError: (error) => {
      if (error.response?.data.message) {
        toast.error(`${error.response?.data.message}`);
      }
    },
  });
}
