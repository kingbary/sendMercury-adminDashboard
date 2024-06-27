import { initializeAuthToken } from "@/services/initializeAuthToken";
import { useEffect } from "react";
export const useAuthToken = () => {
  useEffect(() => {
    initializeAuthToken();
  }, []);
};
