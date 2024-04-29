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
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import axios from "axios";
import { toast } from "sonner";

export default function ApproveTransactionModal({ transactionId }) {
  console.log(transactionId);
  const [open, setOpen] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [token, setToken] = useState("");
  //   const {
  //     formState: { isSubmitting },
  //     reset,
  //   } = useForm({ mode: "all" });
  // const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  const baseUrl = "https://send-mercury-backend-staging.up.railway.app/api/v1";
  useEffect(() => {
    const item = localStorage.getItem("token");
    setToken(item);
  }, []);

  const handleApproveTransaction =  () => {
    console.log("btn clicked")
    // try {
    //   const response = await axios.patch(
    //     `${baseUrl}/admin/withdrawals/${transactionId}`,
    //     {},
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   setConfirmationModal(true);
    // } catch (error) {
    //   toast.error(`Error approving withdrawal: ${error}`);
    // }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger aschild="true">
          <Button variant="default" className="hidden md:block">
            Approve
          </Button>
        </DialogTrigger>
        {!confirmationModal && (
          <DialogContent>
            <DialogHeader className="flex flex-col items-center py-1">
              <DialogTitle>
                Are you sure you want to approve the transaction?
              </DialogTitle>
              {/* <form onSubmit={handleApproveTransaction} className="w-full pt-8"> */}
              <div className="flex flex-col items-center gap-4">
                <div>
                  <Button
                    className="min-w-full"
                    variant="default"
                    type="submit"
                    onClick={handleApproveTransaction}
                  >
                    Approve Withdrawal
                  </Button>
                </div>
                <DialogClose aschild="true">
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
                </DialogClose>
              </div>
              {/* </form> */}
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
              You have successfully approved this withdrawal
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
                Are you sure you want to approve the transaction?
              </DrawerTitle>
              <DrawerDescription>
                <form onSubmit={handleApproveTransaction} className="w-full">
                  <div className="flex flex-col items-center gap-4">
                    <div>
                      <Button
                        className="min-w-full"
                        variant="default"
                        type="submit"
                      >
                        Approve Withdrawal
                      </Button>
                    </div>
                    <DialogClose aschild="true">
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
                    </DialogClose>
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
              You have successfully approved this withdrawal
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
