const { GET_PENDING_ORDERS, GET_SUCCESSFUL_ORDERS } = require("../../endpoints");
const { instance } = require("../../instance");

export const listPendingOrders = () => instance.get(GET_PENDING_ORDERS);
export const listSuccessfulOrders = () => instance.get(GET_SUCCESSFUL_ORDERS);
