const { OVERVIEW } = require("../endpoints");
const { instance } = require("../instance");

export const getOverview = () => instance.get(OVERVIEW);
