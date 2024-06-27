import { INDIVIDUAL_PLAN } from "../endpoints";
import { instance } from "../instance";

export const planDetails = (planId) => {
  return instance.get(INDIVIDUAL_PLAN(planId));
};
