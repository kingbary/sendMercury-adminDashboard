import { CREATE_ORDER } from "../../endpoints";
import { instance } from "../../instance";

export const createOrder = (payload) => {
  instance.post(CREATE_ORDER, payload);
};
