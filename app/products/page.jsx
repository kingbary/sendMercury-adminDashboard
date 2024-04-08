import DashboardLayout from "@/components/DashboardLayout";
import Products from "@/components/products";
import React from "react";

export default function page() {
  return (
    <DashboardLayout>
      <Products />
    </DashboardLayout>
  );
}
