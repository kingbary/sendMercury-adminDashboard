const { TOP_STORES } = require("../endpoints");
const { instance } = require("../instance");

export const getTopStores = () => instance.get(TOP_STORES);
