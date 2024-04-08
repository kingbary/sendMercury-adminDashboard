"use client";
import { useEffect } from "react";
import SideBarProvider from "./sidebar-provider/SideBarProvider";
import { redirect } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardLayout({ children }) {
  // const { isLoggedIn, token } = useAuth();
  // useEffect(() => {
  //   const sessionToken = localStorage.getItem("token");
  //   if (!sessionToken) {
  //     redirect("/auth/login");
  //   }
  // }, []);
  return (
    <div className="font-nunito relative">
      <SideBarProvider />
      <main className="bg-[#FAFAFA] min-h-screen lg:ml-[15%] mt-[76px] pb-6 pt-6">
        {children}
      </main>
    </div>
  );
}
