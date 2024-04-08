import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { ModalLayout } from "../ui/modalLayout";
import useCreateOrder from "@/hooks/mutations/orders/useCreateOrder";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { BeatLoader } from "react-spinners";
import useGetStores from "@/hooks/queries/useGetStores";

export default function CreateOrderModal({
  handleCreateOrderModal,
  isCreateOrderModalOpen,
}) {
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  const { data, isError } = useGetStores();
  const storeOption = data?.data.data.stores;
  const { mutate, isPending } = useCreateOrder();

  const onSubmit = async (data) => {
    data.createdAt = new Date().toISOString();
    console.log(data);
    mutate(data, {
      onSuccess: (result) => {
        setConfirm(true);
      },
    });
  };

  return (
    <div>
      <ModalLayout
        hideIcon={true}
        isModalOpen={isCreateOrderModalOpen}
        className="max-w-[450px]"
      >
        {!confirm && (
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="flex flex-col w-full mb-6">
              <p className="text-2xl font-semibold text-center mb-2">
                Create new order
              </p>
              <label htmlFor="skuNumber">SKU Number</label>
              <input
                type="text"
                {...register("sku", {
                  required: "Enter specific SKU number for product ordered",
                })}
                className="border border-neutral200 rounded outline-none py-3 px-4"
                id="skuNumber"
                placeholder="SKU Number"
              />
              {errors.sku && (
                <p className="text-xs text-red-400 font-normal">
                  {errors?.sku.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-full mb-6">
              <label htmlFor="orderQty">Order Quantity</label>
              <input
                type="text"
                {...register("quantity", {
                  required: "This feild is required",
                })}
                className="border border-neutral200 rounded outline-none py-3 px-4"
                id="orderQty"
                placeholder="Order Quantity"
              />
              {errors.quantity && (
                <p className="text-xs text-red-400 font-normal">
                  {errors?.quantity.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-full mb-6">
              <label htmlFor="storeId">Store Name</label>
              <select
                name="storeId"
                {...register("storeId", {
                  required: "Store should be the one the order was placed on",
                })}
                className="border border-neutral200 rounded outline-none py-3 px-4"
              >
                {storeOption ? (
                  storeOption.map((store) => {
                    return (
                      <>
                        <option value={store.id}>{store.name}</option>
                      </>
                    );
                  })
                ) : (
                  <option>No store available</option>
                )}
              </select>
              {errors.storeId && (
                <p className="text-xs text-red-400 font-normal">
                  {errors?.storeId.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-full mb-6">
              <label htmlFor="address">Delivery Address</label>
              <input
                type="text"
                {...register("address", { required: "This feild is required" })}
                className="border border-neutral200 rounded outline-none py-3 px-4"
                id="address"
                placeholder="Address"
              />
              {errors.address && (
                <p className="text-xs text-red-400 font-normal">
                  {errors?.address.message}
                </p>
              )}
            </div>
            {/* <div className="flex flex-col w-full mb-6">
            <label htmlFor="time">Order Time</label>
            <input
              type="text"
              {...register("createdAt", {
                required: "Input the time the order was placed on the store",
              })}
              className="border border-neutral200 rounded outline-none py-3 px-4"
              id="time"
              placeholder="Time"
            />
            {errors.createdAt && (
              <p className="text-xs text-red-400 font-normal">
                {errors?.createdAt.message}
              </p>
            )}
          </div> */}
            <div className="flex flex-col items-center gap-4">
              <Button variant="default" type="submit">
                {isPending ? <BeatLoader color="#0032C8" /> : "Create order"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleCreateOrderModal}
              >
                Close
              </Button>
            </div>
          </form>
        )}
        {confirm && (
          <div className="flex flex-col items-center gap-6 mb-4">
            <Image
              src="/assets/images/confirmation.svg"
              width={250}
              height={250}
              alt=""
            />
            <p className="text-2xl text-center font-medium">
              Order created successfully and the vendor has been notified
            </p>
            <Button
              type="button"
              variant="default"
              onClick={handleCreateOrderModal}
            >
              Done
            </Button>
          </div>
        )}
      </ModalLayout>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger aschild="true">
          <Button variant="default" className="w-full mt-6 md:hidden">
            Create new order
          </Button>
        </DrawerTrigger>
        {!confirm && (
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle className="text-center mb-2">Create new order</DrawerTitle>
              <DrawerDescription>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                  <div className="flex flex-col w-full mb-6">
                    <label htmlFor="skuNumber">SKU Number</label>
                    <input
                      type="text"
                      {...register("sku", {
                        required:
                          "Enter specific SKU number for product ordered",
                      })}
                      className="border border-neutral200 rounded outline-none py-3 px-4"
                      id="skuNumber"
                      placeholder="SKU Number"
                    />
                    {errors.sku && (
                      <p className="text-xs text-red-400 font-normal">
                        {errors?.sku.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col w-full mb-6">
                    <label htmlFor="orderQty">Order Quantity</label>
                    <input
                      type="text"
                      {...register("quantity", {
                        required: "This feild is required",
                      })}
                      className="border border-neutral200 rounded outline-none py-3 px-4"
                      id="orderQty"
                      placeholder="Order Quantity"
                    />
                    {errors.quantity && (
                      <p className="text-xs text-red-400 font-normal">
                        {errors?.quantity.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col w-full mb-6">
                    <label htmlFor="storeId">Store Name</label>
                    <select
                      name="storeId"
                      {...register("storeId", {
                        required:
                          "Store should be the one the order was placed on",
                      })}
                      className="border border-neutral200 rounded outline-none py-3 px-4"
                    >
                      {storeOption ? (
                        storeOption.map((store) => {
                          return (
                            <>
                              <option value={store.id}>{store.name}</option>
                            </>
                          );
                        })
                      ) : (
                        <option>No store available</option>
                      )}
                    </select>
                    {errors.storeId && (
                      <p className="text-xs text-red-400 font-normal">
                        {errors?.storeId.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col w-full mb-6">
                    <label htmlFor="address">Delivery Address</label>
                    <input
                      type="text"
                      {...register("address", {
                        required: "This feild is required",
                      })}
                      className="border border-neutral200 rounded outline-none py-3 px-4"
                      id="address"
                      placeholder="Address"
                    />
                    {errors.address && (
                      <p className="text-xs text-red-400 font-normal">
                        {errors?.address.message}
                      </p>
                    )}
                  </div>
                  {/* <div className="flex flex-col w-full mb-6">
            <label htmlFor="time">Order Time</label>
            <input
              type="text"
              {...register("createdAt", {
                required: "Input the time the order was placed on the store",
              })}
              className="border border-neutral200 rounded outline-none py-3 px-4"
              id="time"
              placeholder="Time"
            />
            {errors.createdAt && (
              <p className="text-xs text-red-400 font-normal">
                {errors?.createdAt.message}
              </p>
            )}
          </div> */}
                  <div className="flex flex-col items-center gap-4">
                    <Button variant="default" type="submit">
                      {isPending ? (
                        <BeatLoader color="#0032C8" />
                      ) : (
                        "Create order"
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleCreateOrderModal}
                    >
                      Close
                    </Button>
                  </div>
                </form>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter className="pt-2"></DrawerFooter>
          </DrawerContent>
        )}
        {confirm && (
          <DrawerContent className="flex flex-col items-center gap-6 mb-4">
            <Image
              src="/assets/images/confirmation.svg"
              width={250}
              height={250}
              alt=""
            />
            <p className="text-2xl text-center font-medium">
              Order created successfully and the vendor has been notified
            </p>
            <DrawerClose>
              <Button onClick={() => setConfirm(false)} variant="default">
                Done
              </Button>
            </DrawerClose>
          </DrawerContent>
        )}
      </Drawer>
    </div>
  );
}
