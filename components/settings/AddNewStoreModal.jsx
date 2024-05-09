"use client";
import React, { useEffect, useState } from "react";
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
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { BeatLoader } from "react-spinners";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import axios from "axios";
import { toast } from "sonner";

export default function AddNewStoreModal() {
  const [open, setOpen] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ mode: "all" });
  const [token, setToken] = useState("");

  // const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  const baseUrl = "https://send-mercury-backend-staging.up.railway.app/api/v1";
  useEffect(() => {
    const authToken = localStorage.getItem("token");
    setToken(authToken);
  }, []);

  const onSubmit = async (data) => {
    const createdAt = new Date().toISOString();
    try {
      (data.createdAt = createdAt),
        await axios.post(`${baseUrl}/admin/orders`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      setConfirmationModal(true);
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };

  const handleCloseModal = () => {
    setConfirmationModal(false);
    reset();
  };

  return (
    <div>
      <Dialog className="px-10">
        <DialogTrigger aschild="true">
          <Button
            variant="default"
            type="button"
            className="mt-3 hidden md:block"
          >
            Add new store
          </Button>
        </DialogTrigger>
        {!confirmationModal && (
          <DialogContent>
            <DialogHeader className="flex flex-col items-center py-1">
              <form
                onSubmit={handleSubmit(onSubmit)}
                enctype="multipart/form-data"
                className="w-full"
              >
                <div className="flex flex-col w-full mb-3">
                  <label htmlFor="storeName">Store Name</label>
                  <input
                    type="text"
                    {...register("storeName", {
                      required: "Store Name is required",
                    })}
                    className="border border-neutral200 rounded outline-none py-3 px-4"
                    id="storeName"
                    placeholder="Enter the store name"
                  />
                  {errors.storeName && (
                    <p className="text-xs text-red-400 font-normal">
                      {errors?.storeName.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full mb-3 relative">
                  <label htmlFor="storeImage">Upload store image</label>
                  <input
                    type="file"
                    {...register("storeImage", {
                      required: "This field is required",
                    })}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    id="storeImage"
                    placeholder="Enter the store image"
                    accept="image/png, image/svg+xml, image/jpeg"
                  />
                  <div className="border border-neutral200 rounded outline-none py-3 px-4">
                    <span className="block">Select Image</span>
                  </div>
                  {errors.storeImage && (
                    <p className="text-xs text-red-400 font-normal">
                      {errors.storeImage.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-center gap-4">
                  <Button variant="default" type="submit">
                    {isSubmitting ? (
                      <BeatLoader color="#ffffff" size={10} />
                    ) : (
                      "Add store"
                    )}
                  </Button>
                  <DrawerClose aschild="true">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleCloseModal}
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
                <Button onClick={handleCloseModal} variant="default">
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
                  <div className="flex flex-col w-full mb-3">
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
                  <div className="flex flex-col w-full mb-3">
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
                  <div className="flex flex-col w-full mb-3">
                    <label htmlFor="storeId">Store Name</label>
                    {errors.storeId && (
                      <p className="text-xs text-red-400 font-normal">
                        {errors?.storeId.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col w-full mb-3">
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
                  {/* <div className="flex flex-col w-full mb-3">
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
                      {isSubmitting ? (
                        <BeatLoader color="#ffffff" size={10} />
                      ) : (
                        "Create order"
                      )}
                    </Button>
                    <Button type="button" variant="outline">
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
              <Button onClick={handleCloseModal} variant="default">
                Done
              </Button>
            </DrawerClose>
          </DrawerContent>
        )}
      </Drawer>
    </div>
  );
}
