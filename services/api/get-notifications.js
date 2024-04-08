const { GET_NOTIFICATIONS } = require("../endpoints");
const { instance } = require("../instance");

export const getNotifications = () => instance.get(GET_NOTIFICATIONS);
