import { mediaUpload } from "@/services/api/media-upload";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useMediaUpload() {
  return useMutation({
    mutationFn: mediaUpload,
    onSuccess: (data) => {
    //   toast.success("Image upload successfully!");
      return data;
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
