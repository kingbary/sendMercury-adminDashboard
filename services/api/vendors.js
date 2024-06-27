import {
  LIST_VENDORS,
  VENDORS_METRIC,
  VENDOR_ACTION,
} from "@/services/endpoints";

const { instance } = require("../instance");

export const listVendors = ({ plan, pageParam, status, limit }) => {
  return instance.get(LIST_VENDORS(plan, pageParam, status, limit));
};

export const getVendorMetric = () => instance.get(VENDORS_METRIC);

export const suspendVendor = (payload) => {
  const { userId, ...rest } = payload;
  return instance.delete(VENDOR_ACTION(userId), { data: rest });
};

export const reactivateVendor = (userId) =>
  instance.patch(VENDOR_ACTION(userId));
