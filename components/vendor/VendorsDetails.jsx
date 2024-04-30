import React from "react";
import Container from "../universal/Container";
import VendorDetailsCard from "./VendorDetailsCard";
import { PulseLoader } from "react-spinners";

export default function VendorsDetails({ vendors, isLoading }) {
  return (
    <Container>
      {vendors?.length > 0 ? (
        vendors?.map((vendor) => (
          <VendorDetailsCard
            key={vendor?.id}
            vendorName={vendor?.fullName}
            vendorEmail={vendor?.email}
            vendorPlan={vendor?.planName === null ? "No" : vendor?.planName }
            brandName={vendor?.shopName}
            products={vendor?.products}
            id={vendor?.id}
            avatar={vendor?.avatar}
          />
        ))
      ) : (
        <p>
          {isLoading ? (
            <div className="text-center">
              <PulseLoader color="#4d4d4d" />
            </div>
          ) : (
            "No Vendors available for the selected Plan and Status"
          )}
        </p>
      )}
    </Container>
  );
}
