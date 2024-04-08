const { FETCH_STORES } = require("../endpoints");
const { instance } = require("../instance");

export const getStores = () => instance.get(FETCH_STORES);

