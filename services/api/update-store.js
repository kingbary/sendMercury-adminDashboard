import { UPDATE_STORE } from "../endpoints";
import { instance } from "../instance";

export const updateStore = (payload) => {
  const { storeId, ...rest } = payload;
  return instance.patch(UPDATE_STORE(storeId), { ...rest });
};
