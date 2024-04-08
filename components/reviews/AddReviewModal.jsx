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
import { ModalLayout } from "../ui/modalLayout";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { BeatLoader } from "react-spinners";
import useGetStores from "@/hooks/queries/useGetStores";
import useCreateReview from "@/hooks/mutations/useCreateReview";
import StarRating from "./StarRating";

export default function AddReviewModal({
  handleAddReviewModal,
  isAddReviewModalOpen,
}) {
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [rating, setRating] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "all" });
  const { data, isError } = useGetStores();
  const storeOption = data?.data?.data.stores;

  const { mutate } = useCreateReview();

  const onSubmit = async (data) => {
    data.rating = rating;
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
        isModalOpen={isAddReviewModalOpen}
        className="max-w-[450px] hidden md:block"
      >
        {!confirm && (
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="flex flex-col w-full mb-6">
              <label htmlFor="storeId">Store Name</label>
              <select
                name="storeId"
                {...register("storeId", {
                  required: "Store should be the one the order was placed on",
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
            <div className="flex flex-col w-full mb-6">
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
            <div className="flex flex-col w-full mb-6">
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
            <div className="flex flex-col w-full mb-6">
              <label htmlFor="message">{"Customer's Review"}</label>
              <textarea
                name="message"
                {...register("message", {
                  required: "This feild is required",
                })}
                className="border border-neutral200 rounded outline-none py-3 px-4"
                id="message"
                cols="30"
                rows="4"
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
                {isSubmitting ? <BeatLoader color="#ffffff" /> : "Add Review"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleAddReviewModal}
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
              onClick={handleAddReviewModal}
            >
              Done
            </Button>
          </div>
        )}
      </ModalLayout>
      <Drawer open={open} onOpenChange={setOpen} className="md:hidden">
        <DrawerTrigger aschild="true">
          <Button variant="default" className="w-full mt-6 md:hidden">
            Add New Review
          </Button>
        </DrawerTrigger>
        {!confirm && (
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerDescription>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
                  <div className="flex flex-col w-full mb-6">
                    <label htmlFor="sku">Product Store ID</label>
                    <input
                      type="text"
                      name="sku"
                      {...register("sku", {
                        required:
                          "The product name will be visible after you’ve inputted ID",
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
                  <div className="flex flex-col w-full mb-6">
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
                  <div className="flex flex-col w-full mb-6">
                    <label htmlFor="message">{"Customer's Review"}</label>
                    <textarea
                      name="message"
                      {...register("message", {
                        required: "This feild is required",
                      })}
                      className="border border-neutral200 rounded outline-none py-3 px-4"
                      id="message"
                      cols="30"
                      rows="4"
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
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleAddReviewModal}
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
              You have successfully added a new review.
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
