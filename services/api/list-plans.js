import { LIST_PLAN } from "@/services/endpoints";

const { instance } = require("../instance");

export const listPlans = () => instance.get(LIST_PLAN);
