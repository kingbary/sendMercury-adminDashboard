"use client";
import React, { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { useForm } from "react-hook-form";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { PulseLoader } from "react-spinners";

export default function Suspend() {
  const [open, setOpen] = useState(false);
  const [formStep, setFormStep] = useState("step1");
  const [confirmationModal, setConfirmationModal] = useState(false);
  const queryClient = useQueryClient();

  const params = useParams();
  const userId = params.vendorId;
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isLoading },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => {
    const authToken = localStorage.getItem("token");
    const vendorSuspendData = {
      message: data.message,
    };
    axios
      .delete(`${baseUrl}/admin/vendors/${userId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        data: vendorSuspendData,
      })
      .then(() => {
        queryClient.invalidateQueries({
          queryKey: [`get-vendors-details, ${userId}`],
        });
        setConfirmationModal(true);
      })
      .catch((error) => {
        console.error("Error deleting vendor:", error);
        toast.error(`${error}`);
      });
  };

  return (
    <div className="px-4 w-full">
      <Dialog>
        <DialogTrigger aschild="true">
            <Button
              variant="destructive"
              type="button"
              className="font-semibold mt-8 hidden md:block"
            >
              Suspend Vendor
            </Button>
        </DialogTrigger>
        {!confirmationModal && (
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
                    <p className="text-red-500">{`${errors?.message?.message}`}</p>
                  )}
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div>
                    <Button
                      variant="destructive"
                      className={`${formStep === "step2" ? "hidden" : "block"}`}
                      type="button"
                      onClick={() => {
                        if (formStep === "step1") {
                          setFormStep("step2");
                        }
                      }}
                    >
                      Suspend Vendor
                    </Button>
                    <Button
                      variant="destructive"
                      className={`${formStep === "step2" ? "block" : "hidden"}`}
                      type="submit"
                    >
                      {isLoading ? (
                        <PulseLoader color="#4d4d4d" />
                      ) : (
                        " Suspend Vendor"
                      )}
                    </Button>
                  </div>
                  <DialogClose aschild="true">
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
              You have successfully suspended this vendor.
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
          <Button variant="destructive" className="md:hidden">
            Suspend Vendor
          </Button>
        </DrawerTrigger>
        {!confirmationModal && (
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
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div>
                      <Button
                        variant="destructive"
                        className={`${
                          formStep === "step2" ? "hidden" : "block"
                        }`}
                        type="button"
                        onClick={() => {
                          if (formStep === "step1") {
                            setFormStep("step2");
                          }
                        }}
                      >
                        Suspend Vendor
                      </Button>
                      <Button
                        variant="destructive"
                        className={`${
                          formStep === "step2" ? "block" : "hidden"
                        }`}
                        type="submit"
                      >
                        Suspend Vendor
                      </Button>
                    </div>
                    <DrawerClose aschild="true">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          reset();
                          setFormStep("step1");
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
              You have successfully suspended this vendor.
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
