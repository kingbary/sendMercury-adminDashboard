import {
  GET_NOTIFICATIONS_SETTINGS,
  UPDATE_NOTIFICATIONS_SETTINGS,
} from "../endpoints";
import { instance } from "../instance";

export const updateNotificationsSettings = (payload) => {
  return instance.patch(UPDATE_NOTIFICATIONS_SETTINGS, payload);
};

export const getnotificationSettings = () =>
  instance.get(GET_NOTIFICATIONS_SETTINGS);
