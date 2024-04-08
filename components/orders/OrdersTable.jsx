import React, { useState } from "react";
import { Button } from "../ui/button";
import ToggleAccordionBtn from "../universal/ToggleAccordionBtn";
import { formatDateTime } from "@/utils/formatDateTime";
import useListPendingOrders from "@/hooks/queries/useListPendingOrders";
import useListSuccessfulOrders from "@/hooks/queries/useListSuccessfulOrders";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import useSetSuccessful from "@/hooks/mutations/orders/useSetSuccessful";
import { data } from "autoprefixer";
import useSetShipped from "@/hooks/mutations/orders/useSetShipped";

export default function OrdersTable({ activeTab }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleToggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  const { data: pendingData, isError } = useListPendingOrders();
  const { data: successfulData, isError: isSuccessfulDataError } =
    useListSuccessfulOrders();
  const pendingOrderData = pendingData?.data.data.orders;
  // console.log(pendingData)
  const successfulOrderData = successfulData?.data.data.orders;
  console.log(successfulData);

  const { mutate } = useSetSuccessful();
  const { mutate: shippedMutate } = useSetShipped();

  const handleSetToProcessed = (orderId) => {
    data.orderId = orderId;
    mutate(data);
  };

  const handleSetToShipped = (orderId) => {
    data.orderId = orderId;
    shippedMutate(data);
  };

  return (
    <div className="hidden md:block">
      <div className="grid grid-cols-6 text-lg font-semibold mb-6">
        <p>Vendor</p>
        <p>Product</p>
        <p>Store</p>
        <p>Units</p>
        <p>Price</p>
        <p>Order Time</p>
      </div>
      {activeTab === "awaitingDelivery" && (
        <>
          {pendingOrderData ? (
            <>
              {pendingOrderData.map((order, index) => {
                return (
                  <div
                    key={order?.id}
                    className="mb-6 py-2 border-b border-neutral-300 w-full"
                  >
                    <div className="grid grid-cols-6 text-sm xl:text-base w-full">
                      <p>{order?.vendor}</p>
                      <p>{order?.product?.productName}</p>
                      <p>{order?.store}</p>
                      <p>{order?.quantity}</p>
                      <p>{order?.totalPrice}</p>
                      <div className="flex gap-1">
                        <p className="text-left whitespace-nowrap">
                          {formatDateTime(order?.orderTime)}
                        </p>
                        <ToggleAccordionBtn
                          activeIndex={activeIndex}
                          setActiveIndex={handleToggleAccordion}
                          index={index}
                        />
                      </div>
                    </div>
                    <Button
                      className="mt-4"
                      variant="secondary"
                      onClick={() => handleSetToProcessed(order?.id)}
                    >
                      Set to processed
                    </Button>
                    <div
                      className={`mt-6 ${
                        activeIndex === index ? "block" : "hidden"
                      }`}
                    >
                      <div>
                        <p className="font-semibold">Product Store ID</p>
                        <p className="text-gray-500">{order?.address}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </>
      )}

      {activeTab === "processedDelivery" && (
        <>
          {successfulOrderData ? (
            <>
              {successfulOrderData.map((order, index) => {
                return (
                  <div
                    key={order?.id}
                    className="mb-6 py-2 border-b border-neutral-300 w-full"
                  >
                    <div className="grid grid-cols-6 text-sm xl:text-base w-full">
                      <p>{order?.vendor}</p>
                      <p>{order?.product?.productName}</p>
                      <p>{order?.store}</p>
                      <p>{order?.quantity}</p>
                      <p>{order?.totalPrice}</p>
                      <div className="flex gap-1">
                        <p className="text-left whitespace-nowrap">
                          {formatDateTime(order?.orderTime)}
                        </p>
                        <ToggleAccordionBtn
                          activeIndex={activeIndex}
                          setActiveIndex={handleToggleAccordion}
                          index={index}
                        />
                      </div>
                    </div>

                    <Button
                      className="mt-4"
                      variant="caution"
                      onClick={() => handleSetToShipped(order?.id)}
                    >
                      Set to shipped
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
                          <p className="text-gray-500">
                            {!order?.shipment?.courierName}
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold">Tracking ID</p>
                          <p className="text-gray-500">
                            {order?.shipment?.trackingCode}
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold">Contact Number</p>
                          <p className="text-gray-500">
                            {order?.shipment?.contactNumber}
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold">Receipt</p>
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="bg-none text-primaryBlue font-medium">
                                View Receipt
                              </button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle>Order receipt</DialogTitle>
                                <DialogDescription>
                                  <Image
                                    src={"/assets/images/dp-avatar.png"}
                                    width={400}
                                    height={400}
                                    alt="Order Receipt"
                                  />
                                </DialogDescription>
                              </DialogHeader>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <p>No data yet</p>
          )}
        </>
      )}
    </div>
  );
}
