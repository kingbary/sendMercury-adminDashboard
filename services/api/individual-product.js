import { GET_INDIVIDUAL_PRODUCT } from "../endpoints";
import { instance } from "../instance";

export const getIndividualProduct = (productId) =>
  instance.get(GET_INDIVIDUAL_PRODUCT(productId));
