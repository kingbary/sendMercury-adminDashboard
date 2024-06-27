import React, { useState } from "react";
import ToggleAccordionBtn from "../universal/ToggleAccordionBtn";
import { formatDateTime } from "@/utils/formatDateTime";
import { Skeleton } from "../ui/skeleton";
import OrderStatusSelect from "../universal/OrderStatusSelect";
import useSetOrderStatus from "@/hooks/mutations/orders/useSetOrderStatus";
import { Button } from "../ui/button";
import Link from "next/link";

export default function OrdersTable({ orderData, isLoading }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleToggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };
  const deliveryOptions = [
    { id: 1, value: undefined, option: "Delivered/Returned" },
    { id: 2, value: "fulfilled", option: "Delivered" },
    { id: 3, value: "returned", option: "Returned" },
  ];

  const processedOptions = [
    { id: 1, value: undefined, option: "Set to processed/Cancel" },
    { id: 2, value: "setToProcessed", option: "Set to processed" },
    { id: 3, value: "cancel", option: "Cancel" },
  ];
  const { mutate } = useSetOrderStatus();
  const handleOrderStatus = (orderStatus, orderId) => {
    if (orderStatus === undefined) {
      return null;
    } else {
      const payload = { orderStatus, orderId };
      mutate(payload);
    }
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
      <>
        {orderData?.length > 0 ? (
          <>
            {orderData?.map((order, index) => {
              return (
                <div
                  key={order?.id}
                  className="mb-6 py-2 border-b border-neutral-300 w-full"
                >
                  <div className="grid grid-cols-6 text-sm xl:text-base w-full">
                    <p>{order?.vendor}</p>
                    <p>{order?.product}</p>
                    <p>{order?.store?.name}</p>
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
                  {order?.status === "Pending" && (
                    <OrderStatusSelect
                      bgClass="bg-midGray"
                      handleOrderStatus={handleOrderStatus}
                      selectItems={processedOptions}
                      orderId={order?.id}
                    />
                  )}
                  {order?.status === "shipment_uploaded" ||
                    (order?.status === "Shipped" && (
                      <>
                        {order?.status === "shipment_uploaded" ? (
                          <Button
                            className="bg-[#FF9900]"
                            onClick={() =>
                              handleOrderStatus("shipped", order?.id)
                            }
                          >
                            Confirm delivery
                          </Button>
                        ) : (
                          <OrderStatusSelect
                            bgClass="bg-primaryBlue"
                            orderId={order?.id}
                            selectItems={deliveryOptions}
                            handleOrderStatus={handleOrderStatus}
                          />
                        )}
                      </>
                    ))}
                  {order?.status === "Delivered" && (
                    <p className="text-[#219653] text-lg pt-4">
                      Order delivered
                    </p>
                  )}
                  <div
                    className={`mt-6 ${
                      activeIndex === index ? "block" : "hidden"
                    }`}
                  >
                    <div>
                      <p className="font-semibold">Product Store ID</p>
                      <p className="text-gray-500">{order?.address}</p>
                      {order?.shipment?.courierName &&
                        order?.shipment !== null && (
                          <div className="grid grid-cols-4 gap-4 mt-4">
                            <div>
                              <p className="font-semibold">Courier Service</p>
                              <p>{order?.shipment?.courierName}</p>
                            </div>
                            <div>
                              <p className="font-semibold">Tracking ID</p>
                              <p>{order?.shipment?.trackingCode}</p>
                            </div>
                            <div>
                              <p className="font-semibold">Contact Number</p>
                              <p>{order?.shipment?.contactNumber}</p>
                            </div>
                            <div>
                              <p className="font-semibold">Receipt</p>
                              <Link
                                className="text-primaryBlue font-semibold"
                                href={order?.shipment?.receipt}
                                target="_blank"
                              >
                                View receipt
                              </Link>
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            {isLoading ? (
              <div className="grid grid-cols-6 gap-4 w-full">
                <Skeleton className="h-5 rounded-md mb-1" />
                <Skeleton className="h-5 rounded-md mb-1" />
                <Skeleton className="h-5 rounded-md mb-1" />
                <Skeleton className="h-5 rounded-md mb-1" />
                <Skeleton className="h-5 rounded-md mb-1" />
                <Skeleton className="h-5 rounded-md mb-1" />
              </div>
            ) : (
              "No orders available for the selected order status"
            )}
          </>
        )}
      </>
    </div>
  );
}
