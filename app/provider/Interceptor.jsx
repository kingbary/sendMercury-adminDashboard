"use client";

import NProgress from "nprogress";
import { toast } from "sonner";
import { CiCloudOff } from "react-icons/ci";
// import { useHandleNetworkErrorRefetch } from "@/hooks/useHandleNetworkErrorRefetch";
import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/dist/server/api-utils";
import { instance } from "@/services/instance";



const Interceptor = ({ children }) => {
  const { token, isLoggedIn, handleLogOut } = useAuth();
//   const { handleNetworkError } = useHandleNetworkErrorRefetch();

  instance.interceptors.request.use((config) => {
    NProgress.start();
    if (isLoggedIn)
      Object.assign(config.headers, {
        Authorization: `Bearer ${token}`,
      });

    return config;
  });

  instance.interceptors.response.use(
    (response) => {
      NProgress.done();
      return response;
    },
    (error) => {
      NProgress.done();
      if (
        error.code === "ERR_NETWORK" ||
        error?.response?.statusText === "Network Error"
      ) {
        toast("Looks like you are offline", {
          icon: <CiCloudOff size={23} className="-mt-4" />,
          description: "You will need to reconnect to server",
          position: "bottom-left",
          duration: Infinity,
        //   action: {
        //     label: "Reconnect",
        //     onClick: () => {
        //     //   handleNetworkError();
        //     },
        //   },
        });
        return error;
      }

      if (
        error?.response?.status === 401 &&
        error?.response?.statusText === "Unauthorized"
      ) {
        toast.error(error.response.data.message);
        handleLogOut();
        redirect('/login')
      }
      if (
        error?.response?.status === 401 &&
        error?.config &&
        !error?.config.__isRetryRequest
      ) {
        if (token) {
          toast.error(error.response.data.message);
          if (
            error?.response?.data?.message ===
              "Authentication failed. Please sign in." ||
            error?.response?.data?.message === "jwt expired"
          ) {
            handleLogOut();
            redirect('/login')

          }
        }
      }
      if (error.message.includes("ERR_CONNECTION_REFUSED")) {
        toast.error("Failed to connect to the server: Connection refused");
      }
      if (error.message.includes("ERR_CONNECTION_TIMED_OUT")) {
        toast.error("Failed to connect to the server: Connection refused");
      }
      // if (error?.response?.status === 500) {
      //   error.response.data.message = "Something went wrong, Please try again!";
      //   toast.error(error.response.data.message);
      // }
      if (error?.response?.status === 404) {
        error.response.data.message = "Something went wrong, Please try again!";
        toast.error(error.response.data.message);
      }
      return Promise.reject(error);
    }
  );

  return <>{children}</>;
};

export default Interceptor;
