import { SET_SHIPPED_ORDER, SET_SUCCESSFUL_ORDER } from "../../endpoints";
import { instance } from "../../instance";

export const setSuccessfulOrder = (payload) => {
    const { orderId, ...rest } = payload;
    return instance.patch(SET_SUCCESSFUL_ORDER(orderId), { ...rest });
  };

export const setShippedOrder = (payload) => {
    const { orderId, ...rest } = payload;
    return instance.patch(SET_SHIPPED_ORDER(orderId), { ...rest });
  };
