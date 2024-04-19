import { GET_PRODUCTS, PRODUCT_METRIC } from "@/services/endpoints";

const { instance } = require("../instance");

export const listProducts = ({ status, type, pageParam, limit }) => {
  return instance.get(GET_PRODUCTS(status, type, pageParam, limit));
};
export const listProductMetric = () => instance.get(PRODUCT_METRIC);
