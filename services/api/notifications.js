const {
  GET_NOTIFICATIONS,
  READ_ALL_NOTIFICATIONS,
  READ_NOTIFICATIONS,
} = require("../endpoints");
const { instance } = require("../instance");

export const getNotifications = () => instance.get(GET_NOTIFICATIONS);

export const readNotifications = (notificationId) =>
  instance.patch(READ_NOTIFICATIONS(notificationId));

export const readAllNotifications = () =>
  instance.patch(READ_ALL_NOTIFICATIONS);
