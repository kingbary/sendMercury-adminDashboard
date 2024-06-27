import React, { useState } from "react";
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
import { ClipLoader } from "react-spinners";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import useGetVariant from "@/hooks/queries/useGetVariant";
import useUpdateVariantStore from "@/hooks/mutations/useUpdateVariantStore";

export default function AddProductDetailsModal({
  variantId,
  storeId,
  storeName,
}) {
  const [open, setOpen] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [SKU, setSKU] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "all" });
  // const { data, isError } = useGetStores();
  // const storeOption = data?.data?.data.stores;

  const { data: variantData } = useGetVariant(variantId);
  const productDetails = variantData?.data?.data?.variantStores[0];

  const { mutate, isPending } = useUpdateVariantStore();
  const onSubmit = async (data) => {
    setSKU(data.sku);
    data.storeId = storeId;
    const payload = {
      ...data,
      variantId: variantId,
    };
    mutate(payload, {
      onSuccess: () => {
        setConfirmationModal(true);
      },
    });
  };

  const handleCloseModal = () => {
    setConfirmationModal(false);
    reset();
  };

  return (
    <div className="flex flex-col items-center">
      <Dialog>
        <DialogTrigger aschild="true">
          <Button
            variant="ghost"
            type="button"
            className="w-full hidden md:block"
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
                  <div className="border border-neutral200 rounded outline-none py-3 px-4">
                    {storeName}
                  </div>
                </div>
                <div className="flex flex-col w-full mb-3">
                  <label htmlFor="sku">Product Store ID</label>
                  <input
                    type="text"
                    {...register("sku", {
                      required: "Enter the SKU Number",
                    })}
                    className="border border-neutral200 rounded outline-none py-3 px-4 text-black"
                    id="sku"
                    placeholder="Enter SKU Number"
                    defaultValue={productDetails?.sku}
                  />
                  {errors.sku && (
                    <p className="text-xs text-red-400 font-normal mt-1">
                      {errors?.sku.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full mb-3">
                  <label htmlFor="customerName">{"Product URL"}</label>
                  <input
                    type="url"
                    {...register("productURL", {
                      required: "Enter the Product URL on this store",
                    })}
                    className="border border-neutral200 rounded outline-none py-3 px-4"
                    id="productURL"
                    placeholder={"example: https://sendmercury.com/my-product"}
                    defaultValue={productDetails?.productURL}
                  />
                  {errors.productURL && (
                    <p className="text-xs text-red-400 font-normal mt-1">
                      {errors?.productURL.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-center gap-4 mt-4">
                  <Button
                    variant="default"
                    type="submit"
                    className="flex gap-1"
                  >
                    {isPending ? <ClipLoader color="#ffffff" size={16} /> : ""}
                    Add Details
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
                <form onSubmit={handleSubmit(onSubmit)} className="w-full px-8">
                  <div className="flex flex-col w-full mb-3">
                    <label htmlFor="storeId">Store Name</label>
                    <div className="border border-neutral200 rounded outline-none py-3 px-4">
                      {storeName}
                    </div>
                  </div>
                  <div className="flex flex-col w-full mb-3">
                    <label htmlFor="sku">Product Store ID</label>
                    <input
                      type="text"
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
                    <label htmlFor="customerName">{"Product URL"}</label>
                    <input
                      type="url"
                      {...register("productURL", {
                        required: "Enter the Product URL on this store",
                      })}
                      className="border border-neutral200 rounded outline-none py-3 px-4"
                      id="productURL"
                      placeholder="example: https://sendmercury.com/my-product"
                    />
                    {errors.productURL && (
                      <p className="text-xs text-red-400 font-normal mt-1">
                        {errors?.productURL.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-center gap-4 mt-4">
                    <Button
                      variant="default"
                      type="submit"
                      className="flex items-center justify-center gap-1"
                    >
                      {isPending ? <ClipLoader color="#ffffff" /> : null}
                      Add Details
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
