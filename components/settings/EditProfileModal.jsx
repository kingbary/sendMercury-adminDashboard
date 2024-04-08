import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import Image from "next/image";

export default function EditProfileModal() {
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const handleSubmitBtn = () => {
    // Create Order Logic
    setConfirm(true);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger aschild="true">
          <Button variant="default" className="hidden md:block">Edit</Button>
        </DialogTrigger>
        {!confirm && (
          <DialogContent>
            <DialogHeader className="flex flex-col items-center py-1">
              <form action="" className="w-full">
                <div className="flex flex-col w-full mb-6">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="border border-neutral200 rounded outline-none py-3 px-4"
                    id="name"
                    placeholder="Ized"
                    required
                  />
                  <p className="text-sm text-neutral-600 font-normal">
                    New name should be different from old name
                  </p>
                </div>
                <div className="flex flex-col w-full mb-6">
                  <label htmlFor="currentPassword">Current Password</label>
                  <input
                    type="password"
                    className="border border-neutral200 rounded outline-none py-3 px-4"
                    id="currentPassword"
                    placeholder="•••••••••"
                    required
                  />
                  <p className="text-sm text-neutral-600 font-normal">
                    Input correct password
                  </p>
                </div>
                <div className="flex flex-col w-full mb-6">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    className="border border-neutral200 rounded outline-none py-3 px-4"
                    id="newPassword"
                    placeholder="•••••••••"
                    required
                  />
                  <p className="text-sm text-neutral-600 font-normal">
                    New password must differ from old password
                  </p>
                </div>
                <div className="flex flex-col w-full mb-6">
                  <label htmlFor="confirmNewPassword">New Password</label>
                  <input
                    type="password"
                    className="border border-neutral200 rounded outline-none py-3 px-4"
                    id="ConfirmNewPassword"
                    placeholder="•••••••••"
                    required
                  />
                  <p className="text-sm text-neutral-600 font-normal">
                    Must match new password
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Button
                    variant="default"
                    type="submit"
                    onClick={handleSubmitBtn}
                  >
                    Save changes
                  </Button>
                  <DrawerClose aschild="true">
                    <Button type="button" variant="outline">
                      Close
                    </Button>
                  </DrawerClose>
                </div>
              </form>
            </DialogHeader>
          </DialogContent>
        )}
        {confirm && (
          <DialogContent className="flex flex-col items-center gap-6">
            <Image
              src="/assets/images/confirmation.svg"
              width={250}
              height={250}
              alt=""
            />
            <p className="text-2xl text-center font-medium">
              Your changes have been successfully changed.
            </p>
            <DialogClose>
              <Button onClick={() => setConfirm(false)} variant="default">
                Done
              </Button>
            </DialogClose>
          </DialogContent>
        )}
      </Dialog>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger aschild="true">
          <Button variant="default" className="md:hidden">Edit</Button>
        </DrawerTrigger>
        {!confirm && (
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerDescription>
                <form action="" className="w-full">
                  <div className="flex flex-col w-full mb-6">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="border border-neutral200 rounded outline-none py-3 px-4"
                      id="name"
                      placeholder="Ized"
                      required
                    />
                    <p className="text-sm text-neutral-600 font-normal">
                      New name should be different from old name
                    </p>
                  </div>
                  <div className="flex flex-col w-full mb-6">
                    <label htmlFor="currentPassword">Current Password</label>
                    <input
                      type="password"
                      className="border border-neutral200 rounded outline-none py-3 px-4"
                      id="currentPassword"
                      placeholder="•••••••••"
                      required
                    />
                    <p className="text-sm text-neutral-600 font-normal">
                      Input correct password
                    </p>
                  </div>
                  <div className="flex flex-col w-full mb-6">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                      type="password"
                      className="border border-neutral200 rounded outline-none py-3 px-4"
                      id="newPassword"
                      placeholder="•••••••••"
                      required
                    />
                    <p className="text-sm text-neutral-600 font-normal">
                      New password must differ from old password
                    </p>
                  </div>
                  <div className="flex flex-col w-full mb-6">
                    <label htmlFor="confirmNewPassword">New Password</label>
                    <input
                      type="password"
                      className="border border-neutral200 rounded outline-none py-3 px-4"
                      id="ConfirmNewPassword"
                      placeholder="•••••••••"
                      required
                    />
                    <p className="text-sm text-neutral-600 font-normal">
                      Must match new password
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <Button
                      variant="default"
                      type="submit"
                      onClick={handleSubmitBtn}
                    >
                      Save changes
                    </Button>
                    <DrawerClose aschild="true">
                      <Button type="button" variant="outline">
                        Close
                      </Button>
                    </DrawerClose>
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
              Your changes have been successfully changed.
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
