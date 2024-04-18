import { GET_PRODUCTS, VENDORS_METRIC } from "@/services/endpoints";

const { instance } = require("../instance");

export const listProducts = ({ status, type, pageParam, limit }) => {
  return instance.get(GET_PRODUCTS(status, type, pageParam, limit));
};

// export const getVendorMetric = () => instance.get(VENDORS_METRIC);
