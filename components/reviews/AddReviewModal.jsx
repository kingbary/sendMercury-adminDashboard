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
import useGetStores from "@/hooks/queries/useGetStores";
import useCreateReview from "@/hooks/mutations/useCreateReview";
import StarRating from "./StarRating";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import axios from "axios";
import { toast } from "sonner";

export default function AddReviewModal() {
  const [open, setOpen] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);

  const [rating, setRating] = useState(0);
  const [token, setToken] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "all" });
  const { data, isError } = useGetStores();
  const storeOption = data?.data?.data.stores;

  // const { mutate } = useCreateReview();
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    setToken(authToken);
  }, []);

  const onSubmit = async (data) => {
    data.rating = rating;
    try {
      await axios.post(`${baseUrl}/admin/reviews`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: rating,
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
      <Dialog>
        <DialogTrigger aschild="true">
          <Button
            variant="default"
            type="button"
            className="w-full hidden md:block"
          >
            Add New Review
          </Button>
        </DialogTrigger>
        {!confirmationModal && (
          <DialogContent>
            <DialogHeader className="flex flex-col items-center py-1">
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
                    <p className="text-xs text-red-400 font-normal">
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
                    placeholder="Input Product Store ID"
                  />
                  {errors.sku && (
                    <p className="text-xs text-red-400 font-normal">
                      {errors?.sku.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full mb-3">
                  <label htmlFor="customerName">{"Customer's Name"}</label>
                  <input
                    type="text"
                    {...register("customerName", {
                      required: "This feild is required",
                    })}
                    className="border border-neutral200 rounded outline-none py-3 px-4"
                    id="customerName"
                    placeholder="Input Customer's Name"
                  />
                  {errors.customerName && (
                    <p className="text-xs text-red-400 font-normal">
                      {errors?.customerName.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full mb-3">
                  <label htmlFor="message">{"Customer's Review"}</label>
                  <textarea
                    name="message"
                    {...register("message", {
                      required: "This feild is required",
                    })}
                    className="border border-neutral200 rounded outline-none py-3 px-4"
                    id="message"
                    cols="30"
                    rows="2"
                    spellCheck
                    placeholder="Input the client’s review"
                  ></textarea>
                  {errors.message && (
                    <p className="text-xs text-red-400 font-normal">
                      {errors?.message.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-center mb-4">
                  <div className="flex justify-center">
                    <StarRating setRating={setRating} rating={rating} />
                  </div>
                  {rating < 1 && (
                    <p className="text-xs text-red-400 font-normal">
                      Select a rating
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Button variant="default" type="submit">
                    {isSubmitting ? (
                      <BeatLoader color="#ffffff" />
                    ) : (
                      "Add Review"
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
              You have successfully added a new review.
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
          <Button variant="default" className="w-full md:hidden">
            Add New Review
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
                      <p className="text-xs text-red-400 font-normal">
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
                      placeholder="Input Product Store ID"
                    />
                    {errors.sku && (
                      <p className="text-xs text-red-400 font-normal">
                        {errors?.sku.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col w-full mb-3">
                    <label htmlFor="customerName">{"Customer's Name"}</label>
                    <input
                      type="text"
                      {...register("customerName", {
                        required: "This feild is required",
                      })}
                      className="border border-neutral200 rounded outline-none py-3 px-4"
                      id="customerName"
                      placeholder="Input Customer's Name"
                    />
                    {errors.customerName && (
                      <p className="text-xs text-red-400 font-normal">
                        {errors?.customerName.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col w-full mb-3">
                    <label htmlFor="message">{"Customer's Review"}</label>
                    <textarea
                      name="message"
                      {...register("message", {
                        required: "This feild is required",
                      })}
                      className="border border-neutral200 rounded outline-none py-3 px-4"
                      id="message"
                      cols="30"
                      rows="1"
                      spellCheck
                      placeholder="Input the client’s review"
                    ></textarea>
                    {errors.message && (
                      <p className="text-xs text-red-400 font-normal">
                        {errors?.message.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-center mb-4">
                    <div className="flex justify-center">
                      <StarRating setRating={setRating} rating={rating} />
                    </div>
                    {rating < 1 && (
                      <p className="text-xs text-red-400 font-normal">
                        Select a rating
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <Button variant="default" type="submit">
                      {isSubmitting ? (
                        <BeatLoader color="#ffffff" />
                      ) : (
                        "Add Review"
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
          <DrawerContent className="flex flex-col items-center gap-6 mb-4">
            <Image
              src="/assets/images/confirmation.svg"
              width={250}
              height={250}
              alt=""
            />
            <p className="text-2xl text-center font-medium">
              You have successfully added a new review.
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
