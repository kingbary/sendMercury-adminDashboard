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
import { useQueryClient } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import useReactivateVendor from "@/hooks/mutations/useReactivateVendor";

export default function ActivateVendor() {
  const [open, setOpen] = useState(false);
  const [formStep, setFormStep] = useState("step1");
  const [confirmationModal, setConfirmationModal] = useState(false);
  const params = useParams();
  const userId = params.vendorId;
  const { register, handleSubmit, reset } = useForm({
    mode: "all",
  });

  const { mutate, isPending } = useReactivateVendor();

  const onSubmit = () => {
    mutate(userId);
  };

  return (
    <div className="px-4 w-full">
      <Dialog openDialog={open} onDialogOpenChange={setOpen}>
        <DialogTrigger aschild="true">
          <Button
            variant="default"
            type="button"
            className="font-semibold mt-8 hidden md:block"
          >
            Reactivate Vendor
          </Button>
        </DialogTrigger>
        {!confirmationModal && (
          <DialogContent>
            <DialogHeader className="flex flex-col items-center py-1">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <DialogTitle className="mb-6 text-center">
                  Are you sure you want to reactivate vendor ?
                </DialogTitle>
                <div className="flex flex-col items-center gap-4">
                  <div>
                    <Button
                      variant="default"
                      type="submit"
                      className="flex gap-1 items-center"
                    >
                      {isPending ? (
                        <ClipLoader size={16} color="#ffffff" />
                      ) : null}
                      Reactivate Vendor
                    </Button>
                  </div>
                  <DialogClose aschild="true">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
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
              You have successfully reactivated this vendor.
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
          <Button variant="default" className="md:hidden">
            Reactivate Vendor
          </Button>
        </DrawerTrigger>
        {!confirmationModal && (
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerDescription>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                  <DrawerTitle className="mb-6 text-center">
                    Are you sure you want to reactivate vendor ?
                  </DrawerTitle>
                  <div className="flex flex-col items-center gap-4">
                    <div>
                      <Button variant="default" type="submit">
                        Reactivate Vendor
                      </Button>
                    </div>
                    <DrawerClose aschild="true">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
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
              You have successfully reactivated this vendor.
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
