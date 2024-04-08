import DashboardLayout from "@/components/DashboardLayout";
import Withdrawal from "@/components/revenue/Withdrawal";
import React from "react";

export default function page() {
  return (
    <DashboardLayout>
      <Withdrawal />
    </DashboardLayout>
  );
}
