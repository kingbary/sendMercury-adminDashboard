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
import { Eye, EyeOff } from "lucide-react";

export default function EditProfileModal({ adminData }) {
  const [open, setOpen] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [token, setToken] = useState("");
  let [passwordType, setPasswordType] = useState("password");

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "all" });
  const { data, isError } = useGetStores();
  const storeOption = data?.data?.data.stores;
  const handleViewPassword = () => {
    setPasswordType("text");
  };
  const handleHidePassword = () => {
    setPasswordType("password");
  };

  // const { mutate } = useCreateReview();
  const baseUrl = "https://send-mercury-backend-staging.up.railway.app/api/v1";

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    setToken(authToken);
  }, []);

  const onSubmit = async (data) => {
    console.log(errors);
    console.log(data)
    // data.rating = rating;
    // try {
    //   await axios.post(`${baseUrl}/admin/reviews`, data, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //     // data: rating,
    //   });
    //   setConfirmationModal(true);
    // } catch (error) {
    //     toast.error(`${error.response.data.message}`);
    // }
    // setConfirmationModal(true);
  };

  const handleCloseModal = () => {
    setConfirmationModal(false);
    reset();
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger aschild="true">
          <Button variant="default" type="button" className="w-24">
            Edit
          </Button>
        </DialogTrigger>
        {!confirmationModal && (
          <DialogContent>
            <DialogHeader className="flex flex-col items-center pt-8">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full px-8">
                <div className="flex flex-col w-full mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    {...register("name")}
                    className="border border-neutral200 rounded outline-none py-3 px-4"
                    id="name"
                    placeholder={adminData?.fullName}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 font-normal mt-1">
                      {errors?.name.message}
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <div className="relative flex flex-col">
                    <label htmlFor="currentPassword">Current Password</label>
                    <input
                      className="w-full bg-transparent text-neutral-500 border border-neutral-200 rounded-sm px-4 py-3 outline-none"
                      {...register("currentPassword")}
                      type={passwordType}
                      id="currentPassword"
                      name="currentPassword"
                      placeholder="••••••••••"
                    />
                    <div className="absolute right-3 top-[50%]">
                      <Eye
                        onClick={handleViewPassword}
                        className={`${
                          passwordType === "password" ? "block" : "hidden"
                        } cursor-pointer`}
                      />
                      <EyeOff
                        onClick={handleHidePassword}
                        className={`${
                          passwordType === "text" ? "block" : "hidden"
                        } cursor-pointer`}
                      />
                    </div>
                  </div>
                  {errors.currentPassword && (
                    <p className="text-neutral-500">{`${errors?.currentPassword?.message}`}</p>
                  )}
                </div>
                <div className="mb-3">
                  <div className="relative flex flex-col">
                    <label htmlFor="password">New Password</label>
                    <input
                      className="w-full bg-transparent text-neutral-500 border border-neutral-200 rounded-sm px-4 py-3 outline-none"
                      {...register("newPassword")}
                      type={passwordType}
                      id="newPassword"
                      name="newPassword"
                      placeholder="New Password"
                    />
                    <div className="absolute right-3 top-[50%]">
                      <Eye
                        onClick={handleViewPassword}
                        className={`${
                          passwordType === "password" ? "block" : "hidden"
                        } cursor-pointer`}
                      />
                      <EyeOff
                        onClick={handleHidePassword}
                        className={`${
                          passwordType === "text" ? "block" : "hidden"
                        } cursor-pointer`}
                      />
                    </div>
                  </div>
                  {errors.password && (
                    <p className="text-neutral-500">{`${errors?.newPassword?.message}`}</p>
                  )}
                </div>
                <div className="mb-3">
                  <div className="relative flex flex-col">
                    <label htmlFor="password">Re-enter Password</label>
                    <input
                      className="w-full bg-transparent text-neutral-500 border border-neutral-200 rounded-sm px-4 py-3 outline-none"
                      {...register("confirmNewPassword")}
                      type={passwordType}
                      id="confirmNewPassword"
                      name="confirmNewPassword"
                      placeholder="Confirm Password"
                    />
                    <div className="absolute right-3 top-[50%]">
                      <Eye
                        onClick={handleViewPassword}
                        className={`${
                          passwordType === "password" ? "block" : "hidden"
                        } cursor-pointer`}
                      />
                      <EyeOff
                        onClick={handleHidePassword}
                        className={`${
                          passwordType === "text" ? "block" : "hidden"
                        } cursor-pointer`}
                      />
                    </div>
                  </div>
                  {errors.password && (
                    <p className="text-neutral-500">{`${errors?.confirmPassword?.message}`}</p>
                  )}
                </div>
                <div className="flex flex-col items-center gap-4 mt-4">
                  <Button variant="default" type="submit">
                    {isSubmitting ? (
                      <BeatLoader color="#ffffff" />
                    ) : (
                      "Save changes"
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
          <Button variant="default" type="button" className="w-full md:hidden">
            Edit
          </Button>
        </DrawerTrigger>
        {!confirmationModal && (
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerDescription>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full px-8">
                  <div className="flex flex-col w-full mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      {...register("name")}
                      className="border border-neutral200 rounded outline-none py-3 px-4"
                      id="name"
                      placeholder={adminData?.fullName}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 font-normal mt-1">
                        {errors?.name.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <div className="relative flex flex-col">
                      <label htmlFor="currentPassword">Current Password</label>
                      <input
                        className="w-full bg-transparent text-neutral-500 border border-neutral-200 rounded-sm px-4 py-3 outline-none"
                        {...register("currentPassword")}
                        type={passwordType}
                        id="currentPassword"
                        name="currentPassword"
                        placeholder="••••••••••"
                      />
                      <div className="absolute right-3 top-[50%]">
                        <Eye
                          onClick={handleViewPassword}
                          className={`${
                            passwordType === "password" ? "block" : "hidden"
                          } cursor-pointer`}
                        />
                        <EyeOff
                          onClick={handleHidePassword}
                          className={`${
                            passwordType === "text" ? "block" : "hidden"
                          } cursor-pointer`}
                        />
                      </div>
                    </div>
                    {errors.currentPassword && (
                      <p className="text-neutral-500">{`${errors?.currentPassword?.message}`}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <div className="relative flex flex-col">
                      <label htmlFor="password">New Password</label>
                      <input
                        className="w-full bg-transparent text-neutral-500 border border-neutral-200 rounded-sm px-4 py-3 outline-none"
                        {...register("newPassword")}
                        type={passwordType}
                        id="newPassword"
                        name="newPassword"
                        placeholder="New Password"
                      />
                      <div className="absolute right-3 top-[50%]">
                        <Eye
                          onClick={handleViewPassword}
                          className={`${
                            passwordType === "password" ? "block" : "hidden"
                          } cursor-pointer`}
                        />
                        <EyeOff
                          onClick={handleHidePassword}
                          className={`${
                            passwordType === "text" ? "block" : "hidden"
                          } cursor-pointer`}
                        />
                      </div>
                    </div>
                    {errors.password && (
                      <p className="text-neutral-500">{`${errors?.newPassword?.message}`}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <div className="relative flex flex-col">
                      <label htmlFor="password">Re-enter Password</label>
                      <input
                        className="w-full bg-transparent text-neutral-500 border border-neutral-200 rounded-sm px-4 py-3 outline-none"
                        {...register("confirmNewPassword")}
                        type={passwordType}
                        id="confirmNewPassword"
                        name="confirmNewPassword"
                        placeholder="Confirm Password"
                      />
                      <div className="absolute right-3 top-[50%]">
                        <Eye
                          onClick={handleViewPassword}
                          className={`${
                            passwordType === "password" ? "block" : "hidden"
                          } cursor-pointer`}
                        />
                        <EyeOff
                          onClick={handleHidePassword}
                          className={`${
                            passwordType === "text" ? "block" : "hidden"
                          } cursor-pointer`}
                        />
                      </div>
                    </div>
                    {errors.password && (
                      <p className="text-neutral-500">{`${errors?.confirmPassword?.message}`}</p>
                    )}
                  </div>
                  <div className="flex flex-col items-center gap-4 mt-4">
                    <Button variant="default" type="submit">
                      {isSubmitting ? (
                        <BeatLoader color="#ffffff" />
                      ) : (
                        "Save changes"
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
