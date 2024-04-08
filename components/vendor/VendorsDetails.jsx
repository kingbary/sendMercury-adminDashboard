import React from "react";
import Container from "../universal/Container";
import VendorDetailsCard from "./VendorDetailsCard";
import useListBasicVendors from "@/hooks/queries/useListBasicVendors";
import useListSilverVendors from "@/hooks/queries/useListSilverVendors";
import useListPlatinumVendors from "@/hooks/queries/useListPlatinumVendors";
import useListSuspendedBasicVendors from "@/hooks/queries/useListSuspendedBasicVendors";
import useListSuspendedSilverVendors from "@/hooks/queries/useListSuspendedSilverVendors";
import useListSuspendedPlatinumVendors from "@/hooks/queries/useListSuspendedPlatinumVendors";

export default function VendorsDetails({ plan, status }) {
  // Use the appropriate hook based on the selected status
  const activeVendorsHook =
    status === "active"
      ? plan === "basic"
        ? useListBasicVendors()
        : plan === "silver"
        ? useListSilverVendors()
        : useListPlatinumVendors()
      : null;

  const suspendedVendorsHook =
    status === "suspended"
      ? plan === "basic"
        ? useListSuspendedBasicVendors()
        : plan === "silver"
        ? useListSuspendedSilverVendors()
        : useListSuspendedPlatinumVendors()
      : null;

  // Destructure data and isError from the hooks
  const {
    data: activeData,
    isError: activeError,
    isFetching: activeFetching,
  } = activeVendorsHook || {};

  const {
    data: suspendedData,
    isError: suspendedError,
    isFetching: suspendedFetching,
  } = suspendedVendorsHook || {};

  // Combine active and suspended vendors based on status
  const vendors =
    status === "active"
      ? activeData?.data?.data?.vendors
      : suspendedData?.data?.data?.vendors;

  return (
    <Container>
      {vendors ? (
        vendors.map((vendor) => (
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
        <p>
          {activeFetching || suspendedFetching
            ? "Loading..."
            : "No Vendors available for the selected Plan and Status"}
        </p>
      )}
    </Container>
  );
}
