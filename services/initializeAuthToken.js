import { getSession } from "next-auth/react";
import { setAuthToken } from "./instance";

export const initializeAuthToken = async () => {
  const session = await getSession();
  if (session?.user?.data?.token) {
    setAuthToken(session.user.data.token);
  } else {
    setAuthToken(null);
  }
};
