"use client";
import React from "react";
import Link from "next/link";
import DashboardLayout from "../DashboardLayout";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export default function SettingsLayout({ children }) {
  const pathname = usePathname();
  function isActiveTab(path) {
    return pathname === path;
  }
  const handleLogout = () => {
    signOut({ callbackUrl: "/auth/login" });
  };

  return (
    <DashboardLayout>
      <div className="lg:ml-6 pr-8 mb-4 w-full md:w-3/4">
        <ul className="flex w-full justify-between">
          <li>
            <Link
              className={`text-midGray py-1 px-8 ${
                isActiveTab("/settings/profile")
                  ? "text-primaryBlue font-bold border-b-2 border-primaryBlue"
                  : ""
              } `}
              href={"/settings/profile"}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              className={`text-midGray py-1 px-8 ${
                isActiveTab("/settings/plans") ||
                pathname.startsWith("/settings/plans")
                  ? "text-primaryBlue font-bold border-b-2 border-primaryBlue"
                  : ""
              } `}
              href={"/settings/plans"}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              className={`text-midGray py-1 px-8 ${
                isActiveTab("/settings/stores") ||
                pathname.startsWith("/settings/stores")
                  ? "text-primaryBlue font-bold border-b-2 border-primaryBlue"
                  : ""
              } `}
              href={"/settings/stores"}
            >
              Stores
            </Link>
          </li>
          <li>
            <Link
              className={`text-midGray py-1 px-8 ${
                isActiveTab("/settings/notifications")
                  ? "text-primaryBlue font-bold border-b-2 border-primaryBlue"
                  : ""
              } `}
              href={"/settings/notifications"}
            >
              Notifications
            </Link>
          </li>
          <li>
            <Link
              className={`text-midGray py-1 px-8 ${
                isActiveTab("/settings/logout")
                  ? "text-primaryBlue font-bold border-b-2 border-primaryBlue"
                  : ""
              } `}
              href={"#"}
              onClick={handleLogout}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
      {children}
      {/* {activeTab === "profile" ? (
        <Profile adminData={adminData} />
      ) : activeTab === "notifications" ? (
        <Notifications />
      ) : activeTab === "stores" ? (
        <Stores />
      ) : (
        ""
      )} */}
    </DashboardLayout>
  );
}
