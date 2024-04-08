import React from "react";
import useListBasicVendors from "@/hooks/queries/useListBasicVendors";
import useListSilverVendors from "@/hooks/queries/useListSilverVendors";
import useListPlatinumVendors from "@/hooks/queries/useListPlatinumVendors";
import useListSuspendedBasicVendors from "@/hooks/queries/useListSuspendedBasicVendors";
import useListSuspendedSilverVendors from "@/hooks/queries/useListSuspendedSilverVendors";
import useListSuspendedPlatinumVendors from "@/hooks/queries/useListSuspendedPlatinumVendors";
import Container from "../universal/Container";
import VendorDetailsCard from "./VendorDetailsCard";

export default function VendorsDetails({ plan, status }) {
  const { data: activeBasicData, isError: basicDataError } =
    useListBasicVendors();
  const { data: activeSilverData, isError: silverDataError } =
    useListSilverVendors();
  const { data: activePlatinumData, isError: platinumError } =
    useListPlatinumVendors();
  const { data: suspendedBasicData } = useListSuspendedBasicVendors();
  const { data: suspendedSilverData } = useListSuspendedSilverVendors();
  const { data: suspendedPlatinumData } = useListSuspendedPlatinumVendors();

  let filteredVendors = [];

  // Check if the status is "active" or "suspended"
  const activeData =
    status === "active"
      ? [activeBasicData, activeSilverData, activePlatinumData]
      : [];
  const suspendedData =
    status === "suspended"
      ? [suspendedBasicData, suspendedSilverData, suspendedPlatinumData]
      : [];

  // Merge active and suspended data based on the selected plan
  const data =
    plan === "basic"
      ? [activeBasicData, suspendedBasicData]
      : plan === "silver"
      ? [activeSilverData, suspendedSilverData]
      : plan === "platinum"
      ? [activePlatinumData, suspendedPlatinumData]
      : [];

  // Filter vendors based on the selected plan and status
  data.forEach((data) => {
    if (data && data.data) {
      const vendors = data.data.data.vendors.filter(
        (vendor) => vendor.planName === plan
      );
      filteredVendors = [...filteredVendors, ...vendors];
    }
  });

  return (
    <Container>
      {filteredVendors.length > 0 ? (
        filteredVendors.map((vendor) => (
          <VendorDetailsCard
            key={vendor.id}
            vendorName={vendor.fullName}
            vendorEmail={vendor.email}
            vendorPlan={vendor.planName}
            brandName={vendor.shopName}
            products={vendor.products}
            id={vendor.id}
          />
        ))
      ) : (
        <p>No Vendors available for the selected Plan and Status</p>
      )}
    </Container>
  );
}
