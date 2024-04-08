import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://send-mercury-backend-staging.up.railway.app/api/v1',
  timeout: 35000,
});
