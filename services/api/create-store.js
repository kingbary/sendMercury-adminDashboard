import { CREATE_STORE } from "../endpoints";
import { instance } from "../instance";

export const createStore = (payload) => {
  return instance.post(CREATE_STORE, payload);
};
