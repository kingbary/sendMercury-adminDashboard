"use client";
import React from "react";
import Vendors from "@/components/vendor";
import DashboardLayout from "@/components/DashboardLayout";

export default function page() {
  return (
    <DashboardLayout>
      <Vendors />
    </DashboardLayout>
  );
}
