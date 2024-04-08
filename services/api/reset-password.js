import { RESET_PASSWORD } from "../endpoints";
import { instance } from "../instance";

export const resetPassword = (payload) => {
  const { resetId, ...rest } = payload;
  return instance.post(RESET_PASSWORD(resetId), { ...rest });
};
