"use client";
import React, { useState } from "react";
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
import { BeatLoader, ClipLoader } from "react-spinners";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { toast } from "sonner";
import { CheckCircle, Upload } from "lucide-react";
import useMediaUpload from "@/hooks/mutations/useMediaUpload";
import useCreateStore from "@/hooks/mutations/useCreateStore";
import { useAuthToken } from "@/hooks/useAuthToken";

export default function AddNewStoreModal() {
  const [open, setOpen] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [imagePath, setImagePath] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ mode: "all" });
  const [token, setToken] = useState("");
  const { mutate: uploadMedia, isPending: isUploadingMediaPending } =
    useMediaUpload();
  const { mutate: createStore, isPending: isCreatePending } = useCreateStore();

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    uploadMedia(file, {
      onSuccess: (data) => {
        setImagePath(data);
        setUploadSuccess(true);
      },
      onError: (error) => {
        toast.error("Error uploading image: " + error.message);
      },
    });
  };
  useAuthToken();
  const onSubmit = async (formData) => {
    const data = {
      name: formData.name,
      logo: imagePath,
    };
    createStore(data, {
      onSuccess: () => {
        setConfirmationModal(true);
        reset();
        setUploadSuccess(false);
      },
    });
  };

  const handleCloseModal = () => {
    setConfirmationModal(false);
    reset();
    setUploadSuccess(false);
  };

  return (
    <div>
      <Dialog className="px-10">
        <DialogTrigger asChild>
          <Button
            variant="default"
            type="button"
            className="mt-3 hidden md:block"
          >
            Add new store
          </Button>
        </DialogTrigger>
        {!confirmationModal && (
          <DialogContent>
            <DialogHeader className="flex flex-col items-center py-1">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="flex flex-col w-full mb-3">
                  <label htmlFor="name">Store Name</label>
                  <input
                    type="text"
                    {...register("name", {
                      required: "Store Name is required",
                    })}
                    className="border border-neutral200 rounded outline-none py-3 px-4"
                    id="name"
                    placeholder="Enter the store name"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 font-normal">
                      {errors?.name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Upload store image</label>
                  <label
                    htmlFor="fileInput"
                    className="py-3 px-4 text-gray-400 border border-neutral200 rounded outline-none text-sm sm:text-base font-light"
                  >
                    <div className="relative flex items-center">
                      {uploadSuccess ? (
                        <CheckCircle
                          size={16}
                          color="#0032C8"
                          className="absolute right-0 top-1"
                        />
                      ) : isUploadingMediaPending ? (
                        <ClipLoader
                          color="#c4c4c4"
                          className="absolute right-0 top-1"
                          size={18}
                        />
                      ) : (
                        <Upload size={16} className="absolute right-0 top-1" />
                      )}
                    </div>
                    {uploadSuccess
                      ? "Image uploaded successfully"
                      : "Upload image"}
                  </label>
                  <input
                    className="w-full h-full hidden"
                    placeholder="Upload deck"
                    id="fileInput"
                    type="file"
                    name="file"
                    onChange={handleMediaChange}
                    accept="image/*"
                  />
                  {errors.fileInput && (
                    <p className="text-xs text-red-400 font-normal">
                      {errors?.fileInput.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-center gap-4 mt-4">
                  <Button
                    variant="default"
                    type="submit"
                    className="flex gap-1"
                  >
                    {isCreatePending ? (
                      <ClipLoader color="#ffffff" size={16} />
                    ) : null}
                    Add store
                  </Button>
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleCloseModal}
                    >
                      Close
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
              Store added successfully
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
      {/* <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="default" className="w-full mt-6 md:hidden">
            Create new order
          </Button>
        </DrawerTrigger>
        {!confirmationModal && (
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle className="text-center mb-2">
                Create new order
              </DrawerTitle>
              <DrawerDescription>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                  <div className="flex flex-col w-full mb-3">
                    <label htmlFor="name">Store Name</label>
                    <input
                      type="text"
                      {...register("name", {
                        required: "Store Name is required",
                      })}
                      className="border border-neutral200 rounded outline-none py-3 px-4"
                      id="name"
                      placeholder="Enter the store name"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 font-normal">
                        {errors?.name.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">Upload store image</label>
                    <label
                      htmlFor="fileInput"
                      className="py-3 px-4 text-gray-400 border border-neutral200 rounded outline-none text-sm sm:text-base font-light"
                    >
                      <div className="relative flex items-center">
                        {uploadSuccess ? (
                          <CheckCircle
                            size={16}
                            color="#0032C8"
                            className="absolute right-0 top-1"
                          />
                        ) : isUploadingMediaPending ? (
                          <ClipLoader
                            color="#c4c4c4"
                            className="absolute right-0 top-1"
                            size={18}
                          />
                        ) : (
                          <Upload
                            size={16}
                            className="absolute right-0 top-1"
                          />
                        )}
                      </div>
                      {uploadSuccess
                        ? "Image uploaded successfully"
                        : "Upload image"}
                    </label>
                    <input
                      className="w-full h-full hidden"
                      placeholder="Upload deck"
                      id="fileInput"
                      type="file"
                      name="file"
                      onChange={handleMediaChange}
                      accept="image/*"
                    />
                    {errors.fileInput && (
                      <p className="text-xs text-red-400 font-normal">
                        {errors?.fileInput.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col items-center gap-4 mt-4">
                    <Button variant="default" type="submit">
                      {isSubmitting ? (
                        <ClipLoader color="#ffffff" size={16} />
                      ) : null}
                      Add store
                    </Button>
                    <DrawerClose asChild>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleCloseModal}
                      >
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
        {confirmationModal && (
          <DrawerContent className="flex flex-col items-center gap-6 mb-4">
            <Image
              src="/assets/images/confirmation.svg"
              width={250}
              height={250}
              alt=""
            />
            <p className="text-2xl text-center font-medium">
              Order created successfully and the vendor has been notified
            </p>
            <DrawerClose>
              <Button onClick={handleCloseModal} variant="default">
                Done
              </Button>
            </DrawerClose>
          </DrawerContent>
        )}
      </Drawer> */}
    </div>
  );
}
