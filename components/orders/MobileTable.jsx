import Image from "next/image";
import { Button } from "../ui/button";
import ToggleAccordionBtn from "../universal/ToggleAccordionBtn";
import { useState } from "react";
import useListPendingOrders from "@/hooks/queries/useListPendingOrders";
import useListSuccessfulOrders from "@/hooks/queries/useListSuccessfulOrders";
import { formatDateTime } from "@/utils/formatDateTime";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

export default function MobileTable({ activeTab }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);
  const [open, setOpen] = useState(false);
  const handleSetToConfirmed = () => {
    setIsConfirmed(true);
  };
  const handleSetToDelivered = () => {
    setIsDelivered(true);
  };
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
  const successfulOrderData = successfulData?.data.data.orders;
  return (
    <>
      {activeTab === "awaitingDelivery" && (
        <>
          {pendingOrderData ? (
            <>
              {pendingOrderData.map((order, index) => {
                return (
                  <div
                    key={order?.id}
                    className="border-gray-300 border-b-[0.2px] p-5 md:hidden"
                  >
                    <div
                      key={index}
                      className="flex w-full justify-between items-center"
                    >
                      <div className="flex gap-1 items-center">
                        <Image
                          src={"/assets/images/store-logo.png"}
                          width={40}
                          height={40}
                          alt="store logo"
                        />
                        <div>
                          <p className="font-semibold">
                            {order?.product}
                          </p>
                          <p className="text-xs text-midGrey">
                            {order?.vendor}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col items-end">
                          <p className="font-semibold">{order?.totalPrice}</p>
                          <p className="text-xs text-midGrey">
                            {formatDateTime(order?.orderTime)}
                          </p>
                        </div>
                        <ToggleAccordionBtn
                          activeIndex={activeIndex}
                          setActiveIndex={handleToggleAccordion}
                          index={index}
                        />
                      </div>
                    </div>
                    <div
                      className={`mt-2 p-2 ${
                        activeIndex === index ? "block" : "hidden"
                      }`}
                    >
                      <div>
                        <p className="font-semibold">Product Store ID</p>
                        <p>{order?.address}</p>
                      </div>
                    </div>
                    <Button
                      className={`w-full mt-4 ${
                        isConfirmed ? "hidden" : "block"
                      }`}
                      variant="secondary"
                      onClick={handleSetToConfirmed}
                    >
                      Set to processed
                    </Button>
                    <Button
                      className={`w-full mt-4 ${
                        isConfirmed ? "block" : "hidden"
                      }`}
                      variant={`${isDelivered ? "default" : "caution"}`}
                      onClick={handleSetToDelivered}
                    >
                      {isDelivered ? "Delivered/Returned" : "Confirm delivery"}
                    </Button>
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
                    className="border-gray-300 border-b-[0.2px] p-5 md:hidden"
                  >
                    <div
                      key={index}
                      className="flex w-full justify-between items-center"
                    >
                      <div className="flex gap-1 items-center">
                        <Image
                          src={"/assets/images/store-logo.png"}
                          width={40}
                          height={40}
                          alt="store logo"
                        />
                        <div>
                          <p className="font-semibold">
                            {order?.product}
                          </p>
                          <p className="text-xs text-midGrey">
                            {order?.vendor}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col items-end">
                          <p className="font-semibold">{order?.totalPrice}</p>
                          <p className="text-xs text-midGrey">
                            {formatDateTime(order?.orderTime)}
                          </p>
                        </div>
                        <ToggleAccordionBtn
                          activeIndex={activeIndex}
                          setActiveIndex={handleToggleAccordion}
                          index={index}
                        />
                      </div>
                    </div>
                    <div
                      className={`mt-2 p-2 ${
                        activeIndex === index ? "block" : "hidden"
                      }`}
                    >
                      <div>
                        <p className="font-semibold">Product Store ID</p>
                        <p>{order?.address}</p>
                      </div>
                      <div>
                        <div>
                          <p className="font-semibold">Courier Service</p>
                          <p className="text-gray-500">
                            {order?.shipment?.courierName}
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
                          <Drawer open={open} onOpenChange={setOpen}>
                            <DrawerTrigger aschild="true">
                              <button
                                // variant="default"
                                className="w-full font-medium md:hidden bg-none text-primaryBlue"
                              >
                                View receipt
                              </button>
                            </DrawerTrigger>
                            <DrawerContent>
                              <DrawerHeader className="text-left">
                                <DrawerTitle className="text-center mb-2">
                                  Receipt
                                </DrawerTitle>
                                <DrawerDescription>
                                  <Image
                                    src={"/assets/images/dp-avatar.png"}
                                    width={400}
                                    height={400}
                                    alt="order receipt"
                                  />
                                </DrawerDescription>
                              </DrawerHeader>
                              <DrawerFooter className="pt-2"></DrawerFooter>
                            </DrawerContent>
                          </Drawer>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="w-full mt-4"
                      variant="caution"
                      onClick={handleSetToConfirmed}
                    >
                      Confirm Delivery
                    </Button>
                    <Button
                      className={`w-full mt-4 ${
                        isConfirmed ? "block" : "hidden"
                      }`}
                      variant={`${isDelivered ? "default" : "caution"}`}
                      onClick={handleSetToDelivered}
                    >
                      {isDelivered ? "Delivered/Returned" : "Confirm delivery"}
                    </Button>
                  </div>
                );
              })}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </>
      )}
    </>
  );
}
