import React, { useState } from "react";
import { cancelledData, pendingData, successfulData } from "@/data/orderData";
import { Button } from "../ui/button";
import ToggleAccordionBtn from "../universal/ToggleAccordionBtn";

export default function WithdrawalTable({ activeTab }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleToggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="hidden md:block">
      <div className="flex justify-between font-semibold mb-6">
        <p>SHOP NAME</p>
        <p className="whitespace-nowrap">VENDOR NAME</p>
        <p>AMOUNT</p>
        <p>BALANCE</p>
        <p>DATE</p>
        <p>TIME</p>
        <p>STATUS</p>
      </div>
      {/* {activeTab === "basic" && ( */}
      <>
        {/* {successfulData.map((data, index) => { */}
        {/* return ( */}
        <div
          // key={data?.id}
          className="mb-6 py-2 border-b border-neutral-300 w-full"
        >
          <div className="grid grid-cols-7 text-sm xl:text-base w-full">
            <p>Thrift Wears</p>
            <p>Brian Eze</p>
            <p>NGN 20,200</p>
            <p>NGN 220,203</p>
            <p>12/10/2024</p>
            <p>18:00</p>
            <div className="flex items-center gap-1">
              <p className="text-right text-[#F79E1B]">Initiated </p>
              <ToggleAccordionBtn
                activeIndex={activeIndex}
                setActiveIndex={handleToggleAccordion}
                // index={index}
              />
            </div>
          </div>
          <div className="">
            <div>
              <p className="font-semibold">SKU number:</p>
              <p className="text-gray-500">
                {"No 7 Akin George Street Lagos, Nigeria"}
              </p>
            </div>
            <div className="grid grid-cols-4 w-full mt-6">
              <div>
                <p className="font-semibold">Courier Service</p>
                <p className="text-gray-500">{"GIG Logistics"}</p>
              </div>
              <div>
                <p className="font-semibold">Tracking ID</p>
                <p className="text-gray-500">{"#234748929284"}</p>
              </div>
              <div>
                <p className="font-semibold">Contact Number</p>
                <p className="text-gray-500">{"+234-809-765-6474"}</p>
              </div>
              <div>
                <p className="font-semibold">Receipt</p>
                <p className="text-primaryBlue">View Receipt</p>
              </div>
            </div>
          </div>
        </div>
        {/* ); */}
        {/* })} */}
      </>
      {/* )} */}
      {activeTab === "silver" && (
        <>
          {pendingData.map((data, index) => {
            return (
              <div
                key={data?.id}
                className="mb-6 py-2 border-b border-neutral-300 w-full"
              >
                <div className="grid grid-cols-6 text-sm xl:text-base w-full">
                  <p>{data?.vendor}</p>
                  <p>{data?.product}</p>
                  <p>{data?.store}</p>
                  <p>{data?.unit}</p>
                  <p>{data?.price}</p>
                  <div className="flex items-center gap-1">
                    <p className="text-right">{data?.orderTime}</p>
                    <ToggleAccordionBtn
                      activeIndex={activeIndex}
                      setActiveIndex={handleToggleAccordion}
                      index={index}
                    />
                  </div>
                </div>

                <Button
                  className={`mt-4 ${isConfirmed ? "hidden" : "block"}`}
                  variant="secondary"
                  onClick={handleSetToConfirmed}
                >
                  Set to processed
                </Button>
                <Button
                  className={`mt-4 ${isConfirmed ? "block" : "hidden"}`}
                  variant={`${isDelivered ? "default" : "caution"}`}
                  onClick={handleSetToDelivered}
                >
                  {isDelivered ? "Set to delivered" : "Confirm delivery"}
                </Button>
                <div
                  className={`mt-6 ${
                    activeIndex === index ? "block" : "hidden"
                  }`}
                >
                  <div>
                    <p className="font-semibold">SKU number:</p>
                    <p className="text-gray-500">
                      {"No 7 Akin George Street Lagos, Nigeria"}
                    </p>
                  </div>
                  <div className="grid grid-cols-4 w-full mt-6">
                    <div>
                      <p className="font-semibold">Courier Service</p>
                      <p className="text-gray-500">{"GIG Logistics"}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Tracking ID</p>
                      <p className="text-gray-500">{"#234748929284"}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Contact Number</p>
                      <p className="text-gray-500">{"+234-809-765-6474"}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Receipt</p>
                      <p className="text-primaryBlue">View Receipt</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
      {activeTab === "platinum" && (
        <>
          {cancelledData.map((data, index) => {
            return (
              <div
                key={data?.id}
                className="mb-6 py-2 border-b border-neutral-300 w-full"
              >
                <div className="grid grid-cols-6 text-sm xl:text-base w-full">
                  <p>{data?.vendor}</p>
                  <p>{data?.product}</p>
                  <p>{data?.store}</p>
                  <p>{data?.unit}</p>
                  <p>{data?.price}</p>
                  <div className="flex items-center gap-1">
                    <p className="text-right">{data?.orderTime}</p>
                    <ToggleAccordionBtn
                      activeIndex={activeIndex}
                      setActiveIndex={handleToggleAccordion}
                      index={index}
                    />
                  </div>
                </div>

                <Button
                  className={`mt-4 ${isConfirmed ? "hidden" : "block"}`}
                  variant="secondary"
                  onClick={handleSetToConfirmed}
                >
                  Set to processed
                </Button>
                <Button
                  className={`mt-4 ${isConfirmed ? "block" : "hidden"}`}
                  variant={`${isDelivered ? "default" : "caution"}`}
                  onClick={handleSetToDelivered}
                >
                  {isDelivered ? "Set to delivered" : "Confirm delivery"}
                </Button>
                <div
                  className={`mt-6 ${
                    activeIndex === index ? "block" : "hidden"
                  }`}
                >
                  <div>
                    <p className="font-semibold">SKU number:</p>
                    <p className="text-gray-500">
                      {"No 7 Akin George Street Lagos, Nigeria"}
                    </p>
                  </div>
                  <div className="grid grid-cols-4 w-full mt-6">
                    <div>
                      <p className="font-semibold">Courier Service</p>
                      <p className="text-gray-500">{"GIG Logistics"}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Tracking ID</p>
                      <p className="text-gray-500">{"#234748929284"}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Contact Number</p>
                      <p className="text-gray-500">{"+234-809-765-6474"}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Receipt</p>
                      <p className="text-primaryBlue">View Receipt</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
