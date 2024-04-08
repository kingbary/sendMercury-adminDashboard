"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const adminDetails = {};

const initialState = {
  token: "",
  isLoggedIn: false,
  adminDetails,
};

export const useAuth = create()(
  persist(
    (set) => ({
      ...initialState,
      setToken: (token) => set(() => ({ token: token })),
      setisLoggedIn: () => set({ isLoggedIn: true }),
      setAdminDetails: (data) => set(() => ({ adminDetails: data })),
      handleLogOut: () => {
        set(initialState);
      },
    }),
    {
      name: "sendMercury-admin-credentials",
    }
  )
);
