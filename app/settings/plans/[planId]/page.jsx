"use client";
import SettingsLayout from "@/components/settings/SettingsLayout";
import StoreCard from "@/components/settings/StoreCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import useGetPlanDetails from "@/hooks/queries/useGetPlanDetails";
import { useAuthToken } from "@/hooks/useAuthToken";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function StoresSettings() {
  const param = useParams();
  const planId = param.planId;
  useAuthToken();
  const { data, isPending } = useGetPlanDetails(planId);
  // const {mutate, isPending} = useRemoveStore(storeId)
  const planData = data?.data?.plan;

  // const handleRemoveStore = (id) => {
  //   mutate({ storeId: id });
  // };

  return (
    <SettingsLayout>
      <div className="sm:px-6">
        <div>
          <Link
            href="/settings/plans"
            className="flex items-center gap-2 py-4 font-bold text-primaryBlue text-lg"
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
        </div>
        {planData ? (
          <div>
            <p className="text-2xl font-medium">{planData?.name}</p>
            <p className="text-sm">{planData?.price} per month</p>
          </div>
        ) : (
          <>
            <Skeleton className="w-[140px] h-7 rounded-sm mb-2" />
            <Skeleton className="w-20 h-4 rounded-sm" />
          </>
        )}

        {/* FORM PROCESSING  */}
        {planData ? (
          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="flex flex-col">
              <label htmlFor="physicalProduct" className="mb-1">
                Number of physical products
              </label>
              <div
                type="text"
                className="border border-neutral-200 rounded-sm py-2 px-4 outline-none"
              >
                {planData?.maxPhysicalProducts}
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="physicalProduct" className="mb-1">
                Number of digital products
              </label>
              <div className="border border-neutral-200 rounded-sm py-2 px-4 outline-none">
                {planData?.maxDigitalProducts}
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="physicalProduct" className="mb-1">
                Price of plan{" "}
              </label>
              <div className="border border-neutral-200 rounded-sm py-2 px-4 outline-none">
                {planData?.price}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4 mt-5">
            <div>
              <Skeleton className="h-5 w-1/2 rounded-sm mb-2" />
              <Skeleton className="h-[41px] w-full rounded-sm" />
            </div>
            <div>
              <Skeleton className="h-5 w-1/2 rounded-sm mb-2" />
              <Skeleton className="h-[41px] w-full rounded-sm" />
            </div>
            <div>
              <Skeleton className="h-5 w-1/2 rounded-sm mb-2" />
              <Skeleton className="h-[41px] w-full rounded-sm" />
            </div>
          </div>
        )}
        <div className="mt-6">
          <div>
            <p className="text-lg font-medium">Stores available to this plan</p>
            <p className="text-sm">
              Add or remove stores available to this plan
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-2">
            {planData?.stores ? (
              <>
                {planData?.stores.map((store) => {
                  return (
                    <StoreCard
                      key={store?._id}
                      imageSrc={store?.logo}
                      storeName={store?.name}
                      buttonText={"Remove store"}
                      loadingText={"Removing"}
                      isPending={isPending}
                      handleOnClick={() => {
                        handleRemoveStore(store?.id);
                      }}
                    />
                  );
                })}
              </>
            ) : (
              <>
                {isPending ? (
                  <>
                    <Skeleton className="w-[248px] h-[160px] rounded-2xl" />
                    <Skeleton className="w-[248px] h-[160px] rounded-2xl" />
                    <Skeleton className="w-[248px] h-[160px] rounded-2xl" />
                    <Skeleton className="w-[248px] h-[160px] rounded-2xl" />
                  </>
                ) : (
                  <p className="text-center mt-4">No Stores available</p>
                )}
              </>
            )}
          </div>
        </div>
        <div className="mt-6">
          <div>
            <p className="text-lg font-medium">
              Stores unavailable to this plan
            </p>
            <p className="text-sm">
              Add or remove stores available to this plan
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-2">
            <StoreCard
              imageSrc={"/assets/icons/shopify-icon.svg"}
              storeName={"Shopify"}
              buttonText={"Remove store"}
            />
            <StoreCard
              imageSrc={"/assets/icons/shopify-icon.svg"}
              storeName={"Shopify"}
              buttonText={"Remove store"}
            />
            <StoreCard
              imageSrc={"/assets/icons/shopify-icon.svg"}
              storeName={"Shopify"}
              buttonText={"Remove store"}
            />
            <StoreCard
              imageSrc={"/assets/icons/shopify-icon.svg"}
              storeName={"Shopify"}
              buttonText={"Remove store"}
            />
          </div>
        </div>
        <Button variant="default" className="mt-6">
          Save changes
        </Button>
      </div>
    </SettingsLayout>
  );
}
