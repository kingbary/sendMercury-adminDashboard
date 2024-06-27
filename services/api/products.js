import {
  GET_PRODUCTS,
  GET_PRODUCT_SKU,
  PRODUCT_METRIC,
  PRODUCT_STORES,
  VARIANTS,
  VET_TO_LIVE,
} from "@/services/endpoints";

const { instance } = require("../instance");

export const listProducts = (status, type, pageParam, limit) => {
  return instance.get(GET_PRODUCTS(status, type, pageParam, limit));
};
export const listProductMetric = () => instance.get(PRODUCT_METRIC);

export const productStores = (productId) =>
  instance.get(PRODUCT_STORES(productId));

export const getVariant = (variantId) => instance.get(VARIANTS(variantId));

export const updateVariantStore = (payload) => {
  const { variantId, ...rest } = payload;
  return instance.patch(VARIANTS(variantId), { ...rest });
};

export const vetProductToLive = (productId) => {
  return instance.patch(VET_TO_LIVE(productId));
};
