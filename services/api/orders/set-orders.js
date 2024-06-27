import { SET_ORDER_STATUS } from "../../endpoints";
import { instance } from "../../instance";

export const setOrderStatus = (payload) => {
  const { orderId, orderStatus } = payload;
  return instance.patch(SET_ORDER_STATUS(orderId, orderStatus));
};
