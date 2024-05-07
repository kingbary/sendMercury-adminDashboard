import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import StoreCard from "./StoreCard";
import AddNewStoreModal from "./AddNewStoreModal";

export default function Stores() {
  return (
    <>
      <div className="sm:px-6">
        <div>
          <p className="text-lg font-semibold">Store settings</p>
          <p className="text-sm">
            Manage new and existing stores to make available to vendors
          </p>
          <AddNewStoreModal />
        </div>

        {/* FORM PROCESSING  */}
        <div className="mt-6">
          <div className="grid grid-cols-4 gap-4 mt-2">
            <StoreCard
              imageSrc={"/assets/icons/shopify-icon.svg"}
              storeName={"Shopify"}
              buttonText={"Delete store"}
            />
            <StoreCard
              imageSrc={"/assets/icons/shopify-icon.svg"}
              storeName={"Shopify"}
              buttonText={"Delete store"}
            />
            <StoreCard
              imageSrc={"/assets/icons/shopify-icon.svg"}
              storeName={"Shopify"}
              buttonText={"Delete store"}
            />
            <StoreCard
              imageSrc={"/assets/icons/shopify-icon.svg"}
              storeName={"Shopify"}
              buttonText={"Delete store"}
            />
            <StoreCard
              imageSrc={"/assets/icons/shopify-icon.svg"}
              storeName={"Shopify"}
              buttonText={"Delete store"}
            />
            <StoreCard
              imageSrc={"/assets/icons/shopify-icon.svg"}
              storeName={"Shopify"}
              buttonText={"Delete store"}
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
            <div className="bg-white p-6 rounded-2xl">
              <div className="flex  items-center gap-2 font-bold p-4 mb-2">
                <Image
                  src={"/assets/icons/shopify-icon.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
                Shopify
              </div>
              <Button variant="outlineBlue" className="w-full">
                Remove store
              </Button>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <div className="flex  items-center gap-2 font-bold p-4 mb-2">
                <Image
                  src={"/assets/icons/shopify-icon.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
                Shopify
              </div>
              <Button variant="outlineBlue" className="w-full">
                Remove store
              </Button>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <div className="flex  items-center gap-2 font-bold p-4 mb-2">
                <Image
                  src={"/assets/icons/shopify-icon.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
                Shopify
              </div>
              <Button variant="outlineBlue" className="w-full">
                Remove store
              </Button>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <div className="flex  items-center gap-2 font-bold p-4 mb-2">
                <Image
                  src={"/assets/icons/shopify-icon.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
                Shopify
              </div>
              <Button variant="outlineBlue" className="w-full">
                Remove store
              </Button>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <div className="flex  items-center gap-2 font-bold p-4 mb-2">
                <Image
                  src={"/assets/icons/shopify-icon.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
                Shopify
              </div>
              <Button variant="outlineBlue" className="w-full">
                Remove store
              </Button>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <div className="flex  items-center gap-2 font-bold p-4 mb-2">
                <Image
                  src={"/assets/icons/shopify-icon.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
                Shopify
              </div>
              <Button variant="outlineBlue" className="w-full">
                Remove store
              </Button>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <div className="flex  items-center gap-2 font-bold p-4 mb-2">
                <Image
                  src={"/assets/icons/shopify-icon.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
                Shopify
              </div>
              <Button variant="outlineBlue" className="w-full">
                Remove store
              </Button>
            </div>
          </div>
        </div>
        <Button variant="default" className="mt-6">
          Save changes
        </Button>
      </div>
    </>
  );
}
