const { GET_VENDORS_DETAILS } = require("../endpoints");
const { instance } = require("../instance");

export const getVendorsdetails = (payload) =>
  instance.get(GET_VENDORS_DETAILS(payload));
