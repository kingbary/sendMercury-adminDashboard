import { LIST_VENDORS, VENDORS_METRIC } from "@/services/endpoints";

const { instance } = require("../instance");

export const listVendors = ({ plan, pageParam, status, limit }) => {
  return instance.get(LIST_VENDORS(plan, pageParam, status, limit));
};

export const getVendorMetric = () => instance.get(VENDORS_METRIC);
