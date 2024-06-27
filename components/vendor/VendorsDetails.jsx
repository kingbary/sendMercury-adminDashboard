import React from "react";
import Container from "../universal/Container";
import VendorDetailsCard from "./VendorDetailsCard";
import { Skeleton } from "../ui/skeleton";

export default function VendorsDetails({ vendors, isLoading }) {
  return (
    <Container>
      {vendors?.length > 0 ? (
        vendors?.map((vendor) => (
          <VendorDetailsCard
            key={vendor?.id}
            vendorName={vendor?.fullName}
            vendorEmail={vendor?.email}
            vendorPlan={vendor?.planName === null ? "No" : vendor?.planName}
            brandName={vendor?.shopName}
            products={vendor?.products}
            id={vendor?.id}
            avatar={vendor?.avatar}
          />
        ))
      ) : (
        <p>
          {isLoading ? (
            <>
              <div className="flex gap-6 items-center border-b border-neutral-300 p-4">
                <Skeleton className="w-10 md:w-[170px] h-10 md:h-[170px] rounded-full mb-2" />
                <div>
                  <Skeleton className="w-24 h-4 md:h-5 mb-2" />
                  <Skeleton className="w-40 h-4 md:h-4 mb-2 md:mb-6" />
                  <Skeleton className="w-32 h-4 mb-2" />
                  <Skeleton className="w-48 h-4 mb-2" />
                </div>
              </div>
              <div className="flex gap-6 items-center border-b border-neutral-300 p-4">
                <Skeleton className="w-[170px] h-[170px] rounded-full mb-2" />
                <div>
                  <Skeleton className="w-24 h-5 mb-2" />
                  <Skeleton className="w-40 h-4 mb-6" />
                  <Skeleton className="w-32 h-4 mb-2" />
                  <Skeleton className="w-48 h-4 mb-2" />
                </div>
              </div>
            </>
          ) : (
            "No Vendors available for the selected Plan and Status"
          )}
        </p>
      )}
    </Container>
  );
}
