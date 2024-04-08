const { GET_REVIEWS } = require("../endpoints");
const { instance } = require("../instance");

export const listReviews = () => instance.get(GET_REVIEWS);
