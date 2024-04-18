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
import useCreateOrder from "@/hooks/mutations/orders/useCreateOrder";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { BeatLoader } from "react-spinners";
import useGetStores from "@/hooks/queries/useGetStores";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import axios from "axios";

export default function CreateOrderModal({
  handleCreateOrderModal,
  isCreateOrderModalOpen,
}) {
  const [open, setOpen] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ mode: "all" });
  const { data, isError } = useGetStores();
  const storeOption = data?.data.data.stores;
  const { mutate, isPending } = useCreateOrder();

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  const onSubmit = async (data) => {
    const createdAt = new Date().toISOString();
    const authToken = localStorage.getItem("token");
    axios
      .post(`${baseUrl}/admin/orders`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        data: createdAt,
      })
      .then((response) => {
        console.log("Order created successful:", response);
        // queryClient.invalidateQueries({
        //   queryKey: [`get-vendors-details, ${userId}`],
        // });
        setConfirmationModal(true);
      })
      .catch((error) => {
        console.error("Error creating order:", error);
        toast.error(`${error}`);
      });
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger aschild="true">
          <div>
            <Button
              variant="default"
              type="button"
              className="mt-8 hidden md:block"
            >
              Create new Order
            </Button>
          </div>
        </DialogTrigger>
        {!confirmationModal && (
          <DialogContent>
            <DialogHeader className="flex flex-col items-center py-1">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="flex flex-col w-full mb-6">
                  <p className="text-2xl text-center mb-2">Create new order</p>
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
                <div className="flex flex-col items-center gap-4">
                  <Button variant="default" type="submit">
                    {isPending ? (
                      <BeatLoader color="#0032C8" />
                    ) : (
                      "Create order"
                    )}
                  </Button>
                  <DrawerClose aschild="true">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        reset();
                      }}
                    >
                      Close
                    </Button>
                  </DrawerClose>
                </div>
              </form>
            </DialogHeader>
          </DialogContent>
        )}
        {confirmationModal && (
          <DialogContent className="flex flex-col items-center gap-6">
            <Image
              src="/assets/images/confirmation.svg"
              width={250}
              height={250}
              alt=""
            />
            <p className="text-2xl text-center font-medium">
              Order created successfully and the vendor has been notified
            </p>
            <DialogClose>
              <div>
                <Button onClick={() => setFormStep(false)} variant="default">
                  Done
                </Button>
              </div>
            </DialogClose>
          </DialogContent>
        )}
      </Dialog>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger aschild="true">
          <Button variant="default" className="w-full mt-6 md:hidden">
            Create new order
          </Button>
        </DrawerTrigger>
        {!confirmationModal && (
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle className="text-center mb-2">
                Create new order
              </DrawerTitle>
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
        {confirmationModal && (
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
              <Button
                onClick={() => setConfirmationModal(false)}
                variant="default"
              >
                Done
              </Button>
            </DrawerClose>
          </DrawerContent>
        )}
      </Drawer>
    </div>
  );
}
