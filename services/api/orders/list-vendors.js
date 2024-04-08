import {
  BASIC_VENDORS,
  BASIC_VENDORS_SUSPENDED,
  PLATINUM_VENDORS,
  PLATINUM_VENDORS_SUSPENDED,
  SILVER_VENDORS,
  SILVER_VENDORS_SUSPENDED,
} from "@/services/endpoints";

const { instance } = require("../../instance");

export const listPlatinumVendors = () => instance.get(PLATINUM_VENDORS);
export const listSuspendedPlatinumVendors = () =>
  instance.get(PLATINUM_VENDORS_SUSPENDED);
export const listSilverVendors = () => instance.get(SILVER_VENDORS);
export const listSuspendedSilverVendors = () =>
  instance.get(SILVER_VENDORS_SUSPENDED);
export const listBasicVendors = () => instance.get(BASIC_VENDORS);
export const listSuspendedBasicVendors = () =>
  instance.get(BASIC_VENDORS_SUSPENDED);
