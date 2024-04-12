import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function VendorDetailsCard({
  id,
  vendorName,
  vendorEmail,
  vendorPlan,
  brandName,
  products,
  stores,
}) {
  const router = useRouter();
  const handleViewDetails = () => {
    router.push(`/vendors/${id}`);
  };
  return (
    <div className="border-b border-neutral-300 p-4 md:p-4">
      <div className="flex flex-col md:flex-row justify-between">
        <div key={id} className="flex gap-6 items-center">
          <div className="flex gap-4 items-center">
            <div className="hidden sm:block w-[170px]">
              <Image
                src={"/assets/images/dp-avatar.png"}
                width={170}
                height={170}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <div className="sm:hidden w-[40px]">
                      <Image
                        src={"/assets/images/dp-avatar.png"}
                        width={170}
                        height={170}
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="md:mb-4">
                        <p className="font-semibold">{vendorName}</p>
                        <p>{vendorEmail}</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="tertiary"
                    className="px-2 py-2 text-xs font-medium mb-6 w-1/3 md:hidden"
                  >
                    {vendorPlan} Plan
                  </Button>
                  <div>
                    <p>
                      <span className="font-semibold">Brand Name: </span>
                      {brandName}
                    </p>
                    <p>
                      <span className="font-semibold">Products: </span>
                      {products}
                    </p>
                    <p>
                      <span className="font-semibold">Stores: </span>
                      {stores}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          variant="tertiary"
          className="px-2 py-2 text-xs font-medium hidden md:block"
        >
          {vendorPlan} Plan
        </Button>
      </div>
      <div className="flex justify-center md:justify-end mb-2">
        <Button
          variant="default"
          disabled={products === "No products"}
          onClick={handleViewDetails}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}
