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
import { BeatLoader, ClipLoader } from "react-spinners";
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

export default function AddProductDetailsModal({
  variantId,
  storeId,
  storeName,
}) {
  const [open, setOpen] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [token, setToken] = useState("");
  const [SKU, setSKU] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "all" });
  const { data, isError } = useGetStores();
  const storeOption = data?.data?.data.stores;

  const baseUrl = "https://send-mercury-backend-staging.up.railway.app/api/v1";

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    setToken(authToken);
  }, []);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/admin/variants/${variantId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data.data.variantStores;
        setProductDetails(data);
      } catch (error) {
        toast.error(`${error.response.data.message}`);
      }
    };

    if (token) {
      getProductDetails();
    }
  }, [token]);

  const onSubmit = async (data) => {
    setSKU(data.sku);
    data.storeId = storeId;
    console.log(data);
    try {
      await axios.patch(`${baseUrl}/admin/variants/${variantId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setConfirmationModal(true);
    } catch (error) {
      console.error("Error:", error);
      toast.error(`${error.response.data.message}`);
    }
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
                    defaultValue={productDetails[0]?.sku}
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
                    defaultValue={productDetails[0]?.productURL}
                  />
                  {errors.productURL && (
                    <p className="text-xs text-red-400 font-normal mt-1">
                      {errors?.productURL.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-center gap-4 mt-4">
                  <Button variant="default" type="submit" className="flex gap-1">
                    {isSubmitting ? <ClipLoader color="#ffffff" size={16} /> : ""}
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
