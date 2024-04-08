import { REVIEWS } from "../endpoints";
import { instance } from "../instance";

export const createReview = (payload) => {
  instance.post(REVIEWS, payload);
};
