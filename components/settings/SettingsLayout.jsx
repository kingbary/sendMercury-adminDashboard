"use client";
import React, { useState } from "react";
import { useAdminData } from "@/app/provider/AdminDataProvider";
import Link from "next/link";
import DashboardLayout from "../DashboardLayout";
import { useParams, usePathname } from "next/navigation";

export default function SettingsLayout({ children }) {
  const { adminData } = useAdminData();
  const pathname = usePathname();
  function isActiveTab(path) {
    return pathname === path;
  }

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
