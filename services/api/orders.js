import { GET_ORDERS, ORDERS_METRICS } from "@/services/endpoints";
const { instance } = require("../instance");

export const getOrdersMetric = () => instance.get(ORDERS_METRICS);

export const getOrders = (pageParam, limit, status) => {
  return instance.get(GET_ORDERS(pageParam, limit, status));
};
