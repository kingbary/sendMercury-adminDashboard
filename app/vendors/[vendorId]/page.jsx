"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Suspend from "@/components/vendor/Suspend";
import { Button } from "@/components/ui/button";
import ToggleAccordionBtn from "@/components/universal/ToggleAccordionBtn";
import { useParams } from "next/navigation";
import useGetVendorDetails from "@/hooks/queries/useGetVendorsDetails";
import { PulseLoader } from "react-spinners";
import ActivateVendor from "@/components/vendor/ActivateVendor";

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleToggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };
  const params = useParams();
  const userId = params.vendorId;

  const { data, isError, isFetching } = useGetVendorDetails(userId);
  const vendorData = data?.data?.data;
  const products = vendorData?.products;
  console.log(products);

  return (
    <DashboardLayout>
      <div className="sm:px-6">
        <Link
          href="/vendors"
          className="flex items-center gap-2 p-4 font-bold text-primaryBlue text-lg"
        >
          <div className="bg-[#E1E7FA] flex justify-center items-center w-6 h-6 rounded-full">
            <Image
              src="/assets/icons/arrow-left.png"
              height={20}
              width={20}
              alt=""
            />
          </div>
          Back
        </Link>
        <>
          {vendorData?.status ? (
            <>
              {vendorData?.status === "active" ? (
                <Suspend />
              ) : (
                <ActivateVendor />
              )}
            </>
          ) : null}
          {isFetching ? (
            <div className="flex justify-center">
              <PulseLoader color="#4d4d4d" size={10} />
            </div>
          ) : (
            <div className="relative bg-white lg:rounded-[20px] my-6 xl:mx- p-4 xl:p-4">
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="h-40 w-40 rounded-full overflow-hidden">
                    <Image
                      src={
                        vendorData?.avatar
                          ? vendorData?.avatar
                          : "/assets/images/dp-avatar.png"
                      }
                      width={170}
                      height={170}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-xl">
                      {vendorData?.fullName}
                    </p>
                    <p className="font-semibold text-sm mb-1 md:mb-4">
                      {vendorData?.shopName}
                    </p>
                    <Button variant="tertiary" className="md:hidden mb-6">
                      {vendorData?.plan} PLAN
                    </Button>
                    <p className="font-semibold">Contact Information</p>
                    <div className="flex flex-col md:flex-row gap-1 md:gap-8">
                      <p>{vendorData?.email}</p>
                      <p>{vendorData?.phone}</p>
                      <p>
                        {vendorData?.address}, {vendorData?.city},{" "}
                        {vendorData?.state}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                variant="tertiary"
                className="absolute top-4 right-4 hidden md:block"
              >
                {/* {vendorData?.plan.toUpperCase()} PLAN */}
              </Button>
            </div>
          )}
          <div className="bg-white lg:rounded-[20px] my-6 xl:mx- p-4 xl:p-4">
            <h3 className="text-2xl font-bold">Products</h3>
            {isFetching ? (
              <div className="flex justify-center">
                <PulseLoader color="#4d4d4d" size={10} />
              </div>
            ) : (
              <>
                {products?.length > 0 ? (
                  <>
                    {products.map((product) => {
                      return (
                        <div
                          key={product?.productName}
                          className="hidden lg:block"
                        >
                          <div className="border-b border-neutral-300 py-6 mt-4">
                            <div className="mb-6">
                              <div className="grid grid-cols-6 font-semibold mb-4 py-2">
                                <p>Name</p>
                                {/* <p>Price</p> */}
                                <p>Units Listed</p>
                                <p>Units Sold</p>
                                <p>Sales</p>
                                {/* <p>Revenue</p> */}
                                {/* <p>Stores</p> */}
                              </div>
                              <div className="grid grid-cols-6">
                                <p>{product?.productName}</p>
                                {/* <p>{"₦103,789.00"}</p> */}
                                <p>{product?.unitsListed}</p>
                                <p>{product?.unitsSold}</p>
                                <p>{product?.sales}</p>
                                {/* <p>{"₦234,789.00"}</p> */}
                                {/* <p>10</p> */}
                              </div>
                            </div>
                            {products?.reviews ? (
                              <>
                                {products.reviews.map((review) => {
                                  return (
                                    <div key={review.message}>
                                      <p className="font-semibold mb-4">
                                        Reviews
                                      </p>
                                      <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
                                        <div className="flex items-center gap-4 border-r border-black px-2">
                                          <div className="w-20">
                                            <Image
                                              src={
                                                "/assets/images/dp-avatar.png"
                                              }
                                              width={64}
                                              height={64}
                                              alt=""
                                            />
                                          </div>
                                          <div>
                                            <p>{review?.message}</p>
                                            <div className="flex gap-1">
                                              <Image
                                                src={
                                                  "/assets/icons/star-filled.svg"
                                                }
                                                width={16}
                                                height={16}
                                                alt=""
                                              />
                                              <Image
                                                src={
                                                  "/assets/icons/star-filled.svg"
                                                }
                                                width={16}
                                                height={16}
                                                alt=""
                                              />
                                              <Image
                                                src={
                                                  "/assets/icons/star-filled.svg"
                                                }
                                                width={16}
                                                height={16}
                                                alt=""
                                              />
                                              <Image
                                                src={
                                                  "/assets/icons/star-filled.svg"
                                                }
                                                width={16}
                                                height={16}
                                                alt=""
                                              />
                                              <Image
                                                src={
                                                  "/assets/icons/star-outline.svg"
                                                }
                                                width={20}
                                                height={20}
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </>
                            ) : (
                              <p>No review for this product</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <p>No product available</p>
                )}
              </>
            )}
          </div>
        </>
        {/* ) : (
          <p>Loading...</p>
        )} */}
      </div>
    </DashboardLayout>
  );
}
