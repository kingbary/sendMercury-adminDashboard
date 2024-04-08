import React from "react";
import Orders from "@/components/orders";
import DashboardLayout from "@/components/DashboardLayout";

export default function page() {
  return (
    <DashboardLayout>
      <Orders />
    </DashboardLayout>
  );
}
