import { GET_WITHDRAWAL } from "@/services/endpoints";
import { instance } from "@/services/instance";

export const listWithdrawal = ({ pageParam, limit }) => {
    return instance.get(GET_WITHDRAWAL(pageParam, limit));
  };