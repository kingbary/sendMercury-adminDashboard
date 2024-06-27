import { MEDIA_UPLOAD } from "../endpoints";
import { instance } from "../instance";

export const mediaUpload = (file) => {
  const formData = new FormData();
  formData.append("media", file);
  return instance.post(MEDIA_UPLOAD, formData).then((response) => response.data.data.path);
};
