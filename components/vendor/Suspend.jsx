"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useParams } from "next/navigation";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { ClipLoader } from "react-spinners";
import useSuspendVendor from "@/hooks/mutations/useSuspendVendor";
import { useAuthToken } from "@/hooks/useAuthToken";

export default function Suspend() {
  const [open, setOpen] = useState(false);
  const [formStep, setFormStep] = useState("step1");
  const [confirmationModal, setConfirmationModal] = useState(false);

  const params = useParams();
  const userId = params.vendorId;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
  });

  useAuthToken();
  const { mutate, isPending } = useSuspendVendor();

  const onSubmit = (data) => {
    mutate(
      { userId, ...data },
      {
        onSuccess: () => {
          reset();
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };

  return (
    <div className="px-4 w-full">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="destructive"
            type="button"
            className="font-semibold mt-8 hidden md:block"
          >
            Suspend Vendor
          </Button>
        </DialogTrigger>
        {!confirmationModal ? (
          <DialogContent>
            <DialogHeader className="flex flex-col items-center py-1">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={`w-full ${
                  formStep === "step3" ? "hidden" : "block"
                }`}
              >
                <DialogTitle className="mb-6 text-center">
                  {formStep === "step1"
                    ? "Reason for suspension"
                    : "Are you sure you want to suspend vendor ?"}
                </DialogTitle>
                <div
                  className={`flex flex-col w-full mb-6 ${
                    formStep === "step1" ? "block" : "hidden"
                  }`}
                >
                  <textarea
                    className="border border-neutral-300 focus:outline-neutral-300 rounded-xl p-5"
                    name="message"
                    {...register("message", {
                      required: "The reason for suspension is required",
                    })}
                    cols="30"
                    rows="5"
                    spellCheck
                    placeholder="Enter your reason for suspending vendor"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500">{errors.message.message}</p>
                  )}
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Button
                    variant="destructive"
                    className={`${formStep === "step2" ? "hidden" : "block"}`}
                    type="button"
                    onClick={() => setFormStep("step2")}
                  >
                    Suspend Vendor
                  </Button>
                  <Button
                    variant="destructive"
                    className={`${
                      formStep === "step2"
                        ? "flex items-center gap-1"
                        : "hidden"
                    }`}
                    type="submit"
                  >
                    {isPending ? (
                      <ClipLoader color="#ffffff" size={16} />
                    ) : null}
                    Suspend Vendor
                  </Button>
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setFormStep("step1");
                        reset();
                      }}
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </div>
              </form>
            </DialogHeader>
          </DialogContent>
        ) : (
          <DialogContent className="flex flex-col items-center gap-6">
            <Image
              src="/assets/images/confirmation.svg"
              width={250}
              height={250}
              alt=""
            />
            <p className="text-2xl text-center font-medium">
              You have successfully suspended this vendor.
            </p>
            <DialogClose asChild>
              <Button
                onClick={() => setConfirmationModal(false)}
                variant="default"
              >
                Done
              </Button>
            </DialogClose>
          </DialogContent>
        )}
      </Dialog>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="destructive" className="md:hidden">
            Suspend Vendor
          </Button>
        </DrawerTrigger>
        {!confirmationModal ? (
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerDescription>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={`w-full ${
                    formStep === "step3" ? "hidden" : "block"
                  }`}
                >
                  <DrawerTitle className="mb-6">
                    {formStep === "step1"
                      ? "Reason for suspension"
                      : "Are you sure you want to suspend vendor ?"}
                  </DrawerTitle>
                  <div
                    className={`flex flex-col w-full mb-6 ${
                      formStep === "step1" ? "block" : "hidden"
                    }`}
                  >
                    <textarea
                      className="border border-neutral-300 focus:outline-neutral-300 rounded-xl p-5"
                      name="message"
                      {...register("message", {
                        required: "The reason for suspension is required",
                      })}
                      cols="30"
                      rows="5"
                      spellCheck
                      placeholder="Enter your reason for suspending vendor"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500">{errors.message.message}</p>
                    )}
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <Button
                      variant="destructive"
                      className={`${formStep === "step2" ? "hidden" : "block"}`}
                      type="button"
                      onClick={() => setFormStep("step2")}
                    >
                      Suspend Vendor
                    </Button>
                    <Button
                      variant="destructive"
                      className={`${
                        formStep === "step2"
                          ? "flex items-center gap-1"
                          : "hidden"
                      }`}
                      type="submit"
                    >
                      {isSubmitting ? (
                        <ClipLoader color="#ffffff" size={16} />
                      ) : null}
                      Suspend Vendor
                    </Button>
                    <DrawerClose asChild>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setFormStep("step1");
                          reset();
                        }}
                      >
                        Cancel
                      </Button>
                    </DrawerClose>
                  </div>
                </form>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        ) : (
          <DrawerContent className="flex flex-col items-center gap-6 mb-4">
            <Image
              src="/assets/images/confirmation.svg"
              width={250}
              height={250}
              alt=""
            />
            <p className="text-2xl text-center font-medium">
              You have successfully suspended this vendor.
            </p>
            <DrawerClose asChild>
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
