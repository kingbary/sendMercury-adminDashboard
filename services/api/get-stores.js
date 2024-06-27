const { FETCH_STORES } = require("../endpoints");
const { instance } = require("../instance");

export const getStores = (pageParam, limit) => {
  return instance.get(FETCH_STORES(pageParam, limit));
};
