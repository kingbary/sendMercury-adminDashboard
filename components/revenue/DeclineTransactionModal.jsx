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
import { PulseLoader } from "react-spinners";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import axios from "axios";
import { toast } from "sonner";

export default function DeclineTransactionModal({ transactionId }) {
  console.log(transactionId);
  const [open, setOpen] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [token, setToken] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ mode: "all" });

  // const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  const baseUrl = "https://send-mercury-backend-staging.up.railway.app/api/v1";
  useEffect(() => {
    const item = localStorage.getItem("token");
    setToken(item);
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axios.delete(
        `${baseUrl}/admin/withdrawals/${transactionId}`,
        {
          data,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("WIthdrawal declined successful:", response);
      setConfirmationModal(true);
    } catch (error) {
      // console.error("Error declining withdrawal:", error);
      toast.error(`Error declining withdrawal: ${error}`);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger aschild="true">
          <Button variant="secondaryDestructive" className="hidden md:block">
            Decline
          </Button>
        </DialogTrigger>
        {!confirmationModal && (
          <DialogContent>
            <DialogHeader className="flex flex-col items-center py-1">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <DrawerTitle className="mb-6 text-center">
                  Reason for declining withdrawal
                </DrawerTitle>
                <div className="flex flex-col w-full mb-6">
                  <textarea
                    className="border border-neutral-300 focus:outline-neutral-300 rounded-xl p-5"
                    name="reason"
                    {...register("reason", {
                      required:
                        "The reason for declining withdrawal is required",
                    })}
                    cols="20"
                    rows="5"
                    spellCheck
                    placeholder="Enter your reason for declining withdrawal"
                  ></textarea>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div>
                    <Button
                      className="min-w-full"
                      variant="destructive"
                      type="submit"
                    >
                      {isSubmitting ? (
                        <PulseLoader color="#fdfdfd" size={10} />
                      ) : (
                        "Decline Withdrawal"
                      )}
                    </Button>
                  </div>
                  <DrawerClose aschild="true">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        reset();
                        setConfirmationModal(false);
                      }}
                    >
                      Cancel
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
              You have successfully declined this withdrawal
            </p>
            <DialogClose>
              <div>
                <Button
                  onClick={() => setConfirmationModal(false)}
                  variant="default"
                >
                  Done
                </Button>
              </div>
            </DialogClose>
          </DialogContent>
        )}
      </Dialog>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger aschild="true">
          <Button variant="secondaryDestructive" className="md:hidden">
            Decline
          </Button>
        </DrawerTrigger>
        {!confirmationModal && (
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle className="text-center mb-2">
                Reason for declining withdrawal
              </DrawerTitle>
              <DrawerDescription>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                  <div className="flex flex-col w-full mb-6">
                    <textarea
                      className="border border-neutral-300 focus:outline-neutral-300 rounded-xl p-5"
                      name="reason"
                      {...register("reason", {
                        required:
                          "The reason for declining withdrawal is required",
                      })}
                      cols="20"
                      rows="5"
                      spellCheck
                      placeholder="Enter your reason for declining withdrawal"
                    ></textarea>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div>
                      <Button variant="destructive" type="submit">
                        Decline Withdrawal
                      </Button>
                    </div>
                    <DrawerClose aschild="true">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          reset();
                          setConfirmationModal(false);
                        }}
                      >
                        Cancel
                      </Button>
                    </DrawerClose>
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
              You have successfully declined this withdrawal
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
