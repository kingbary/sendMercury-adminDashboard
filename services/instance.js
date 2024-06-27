import axios from "axios";
import { signOut } from "next-auth/react";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  timeout: 35000,
});

// Function to set the Authorization header
export const setAuthToken = (token) => {
  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
};

// Function to handle 412 and 401 status codes differently
const handleResponseErrors = (error) => {
  if (error.response) {
    if (error.response.status === 401) {
      signOut({ callbackUrl: "/auth/login" });
    } else if (error.response.status === 412) {
      // Handle 412 error specifically (e.g., show an error message or retry logic)
      console.error("Precondition Failed: ", error.response.data);
    }
  }
  return Promise.reject(error);
};

// Add the interceptor to the Axios instance
instance.interceptors.response.use(
  (response) => response, // Pass through successful responses
  handleResponseErrors // Handle error responses
);
