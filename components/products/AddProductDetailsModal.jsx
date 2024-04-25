import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
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
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import axios from "axios";
import { toast } from "sonner";
import useGetStores from "@/hooks/queries/useGetStores";

export default function AddProductDetailsModal() {
  const [open, setOpen] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);

  const [rating, setRating] = useState(0);
  const [token, setToken] = useState("");
  const [SKU, setSKU] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "all" });
  const { data, isError } = useGetStores();
  const storeOption = data?.data?.data.stores;

  // const { mutate } = useCreateReview();
  const baseUrl = "https://send-mercury-backend-staging.up.railway.app/api/v1";

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    setToken(authToken);
  }, []);

  const onSubmit = async (data) => {
    setSKU(data.sku);
    // data.rating = rating;
    // try {
    //   await axios.post(`${baseUrl}/admin/reviews`, data, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //     // data: rating,
    //   });
    //   setConfirmationModal(true);
    // } catch (error) {
    //     toast.error(`${error.response.data.message}`);
    // }
    setConfirmationModal(true);
  };

  const handleCloseModal = () => {
    setConfirmationModal(false);
    reset();
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger aschild="true">
          <Button
            variant="ghost"
            type="button"
            className="mt-8 w-full hidden md:block"
          >
            Add Product Details
          </Button>
        </DialogTrigger>
        {!confirmationModal && (
          <DialogContent>
            <DialogHeader className="flex flex-col items-center py-1">
              <DialogTitle className="mb-6">Add Store Details</DialogTitle>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full px-8">
                <div className="flex flex-col w-full mb-3">
                  <label htmlFor="storeId">Store Name</label>
                  <select
                    name="storeId"
                    {...register("storeId", {
                      required:
                        "Store should be the one the order was placed on",
                    })}
                    className="border border-neutral200 rounded outline-none py-3 px-4"
                  >
                    <option>Select a store</option>
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
                    <p className="text-xs text-red-400 font-normal mt-1">
                      {errors?.storeId.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full mb-3">
                  <label htmlFor="sku">Product Store ID</label>
                  <input
                    type="text"
                    name="sku"
                    {...register("sku", {
                      required: "Enter the SKU Number",
                      // minLength: {
                      //   value: 24,
                      //   message: "Store ID have length of 24 characters long",
                      // },
                    })}
                    className="border border-neutral200 rounded outline-none py-3 px-4"
                    id="sku"
                    placeholder="SKU Number"
                  />
                  {errors.sku && (
                    <p className="text-xs text-red-400 font-normal mt-1">
                      {errors?.sku.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full mb-3">
                  <label htmlFor="customerName">{"Product Url"}</label>
                  <input
                    type="url"
                    {...register("productUrl", {
                      required: "Enter the Product URL on this store",
                    })}
                    className="border border-neutral200 rounded outline-none py-3 px-4"
                    id="productUrl"
                    placeholder="Paste URL"
                  />
                  {errors.productUrl && (
                    <p className="text-xs text-red-400 font-normal mt-1">
                      {errors?.productUrl.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-center gap-4 mt-4">
                  <Button variant="default" type="submit">
                    {isSubmitting ? (
                      <BeatLoader color="#ffffff" />
                    ) : (
                      "Add Details"
                    )}
                  </Button>
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
              You have successfully added product details for product with SKU
              Number - {SKU}
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
      <Drawer open={open} onOpenChange={setOpen} className="md:hidden">
        <DrawerTrigger aschild="true" className="w-full">
          <Button variant="ghost" className="w-full md:hidden">
            Add Products Details
          </Button>
        </DrawerTrigger>
        {!confirmationModal && (
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerDescription>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                  <div className="flex flex-col w-full mb-3">
                    <label htmlFor="storeId">Store Name</label>
                    <select
                      name="storeId"
                      {...register("storeId", {
                        required:
                          "Store should be the one the order was placed on",
                      })}
                      className="border border-neutral200 rounded outline-none py-3 px-4"
                    >
                      <option>Select a store</option>
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
                      <p className="text-xs text-red-400 font-normal mt-1">
                        {errors?.storeId.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col w-full mb-3">
                    <label htmlFor="sku">Product Store ID</label>
                    <input
                      type="text"
                      name="sku"
                      {...register("sku", {
                        required:
                          "The product name will be visible after you’ve inputted ID",
                        // minLength: {
                        //   value: 24,
                        //   message: "Store ID have length of 24 characters long",
                        // },
                      })}
                      className="border border-neutral200 rounded outline-none py-3 px-4"
                      id="sku"
                      placeholder="Enter SKU Number"
                    />
                    {errors.sku && (
                      <p className="text-xs text-red-400 font-normal mt-1">
                        {errors?.sku.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col w-full mb-3">
                    <label htmlFor="customerName">{"Product Url"}</label>
                    <input
                      type="url"
                      {...register("productUrl", {
                        required: "Enter product URL on this store",
                      })}
                      className="border border-neutral200 rounded outline-none py-3 px-4"
                      id="productUrl"
                      placeholder="Paste URL"
                    />
                    {errors.productUrl && (
                      <p className="text-xs text-red-400 font-normal mt-1">
                        {errors?.productUrl.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <Button variant="default" type="submit">
                      {isSubmitting ? (
                        <BeatLoader color="#ffffff" />
                      ) : (
                        "Add Details"
                      )}
                    </Button>
                  </div>
                </form>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter className="pt-2"></DrawerFooter>
          </DrawerContent>
        )}
        {confirmationModal && (
          <DrawerContent className="flex flex-col items-center gap-6 mb-4 px-4">
            <Image
              src="/assets/images/confirmation.svg"
              width={250}
              height={250}
              alt=""
            />
            <p className="text-lg text-center font-medium">
              You have successfully added product details for product with SKU
              Number - {SKU}
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
