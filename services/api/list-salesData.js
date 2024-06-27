import { SALES_DATA } from "@/services/endpoints";

const { instance } = require("../instance");

export const listSalesData = ({ time, year }) => {
  return instance.get(SALES_DATA(time, year));
};
