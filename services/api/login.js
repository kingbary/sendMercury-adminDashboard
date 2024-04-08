import { LOGIN } from "../endpoints";
import { instance } from "../instance";

export const Login = (payload) => {
  return instance.post(LOGIN, payload);
};
