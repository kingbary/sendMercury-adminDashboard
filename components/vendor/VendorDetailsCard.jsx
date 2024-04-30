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
  avatar,
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
            <div className="hidden sm:block w-[170px] h-[170px] rounded-full overflow-hidden">
              <Image src={avatar} width={170} height={170} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <div className="sm:hidden w-10 h-10 rounded-full overflow-hidden">
                      <Image src={avatar} width={170} height={170} alt="" />
                    </div>
                    <div>
                      <div className="md:mb-4">
                        <p className="font-semibold">{vendorName}</p>
                        <p>{vendorEmail}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#E0EFFF] h-fit w-fit rounded-md mt-3 px-2 py-2 text-xs font-medium md:hidden">
                    {vendorPlan} Plan
                  </div>
                  <div>
                    <p>
                      <span className="font-semibold">Brand Name: </span>
                      {brandName}
                    </p>
                    <p>
                      <span className="font-semibold">Products: </span>
                      {products}
                    </p>
                    {/* <p>
                      <span className="font-semibold">Stores: </span>
                      {stores}
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#E0EFFF] h-fit rounded-md mt-3 px-2 py-2 text-xs font-medium hidden md:block">
          {vendorPlan} Plan
        </div>
      </div>
      <div className="flex justify-center md:justify-end mb-2">
        <Button
          variant="default"
          className="w-full md:w-fit mt-4"
          disabled={products === "No products"}
          onClick={handleViewDetails}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}
