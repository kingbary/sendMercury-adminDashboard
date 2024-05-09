import SettingsLayout from "@/components/settings/SettingsLayout";
import StoreCard from "@/components/settings/StoreCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function StoresSettings() {
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
        <div>
          <p className="text-2xl font-medium">{"Basic Plan"}</p>
          <p className="text-sm">{"USD20"} per month</p>
        </div>

        {/* FORM PROCESSING  */}
        <div className="grid grid-cols-3 gap-4 mt-5">
          <div className="flex flex-col">
            <label htmlFor="physicalProduct" className="mb-1">
              Number of physical products
            </label>
            <input
              type="text"
              placeholder="5"
              id="physicalProduct"
              className="border border-neutral-200 rounded-sm py-2 px-4 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="physicalProduct" className="mb-1">
              Number of digital products
            </label>
            <input
              type="text"
              placeholder="5"
              id="physicalProduct"
              className="border border-neutral-200 rounded-sm py-2 px-4 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="physicalProduct" className="mb-1">
              Price of plan{" "}
            </label>
            <input
              type="text"
              placeholder="5"
              id="physicalProduct"
              className="border border-neutral-200 rounded-sm py-2 px-4 outline-none"
            />
          </div>
        </div>
        <div className="mt-6">
          <div>
            <p className="text-lg font-medium">Stores available to this plan</p>
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
