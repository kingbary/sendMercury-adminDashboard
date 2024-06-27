"use client";
import React, { useState } from "react";
import StoreCard from "./StoreCard";
import AddNewStoreModal from "./AddNewStoreModal";
import useGetStores from "@/hooks/queries/useGetStores";
import { useAuthToken } from "@/hooks/useAuthToken";
import { Skeleton } from "../ui/skeleton";
import useUpdateStore from "@/hooks/mutations/useUpdateStore";

export default function Stores() {
  const [open, setOpen] = useState(false);
  useAuthToken();
  const { data } = useGetStores();
  const stores = data?.data?.data?.stores;
  const { mutate, isPending } = useUpdateStore();

  const handleUpdateStore = (id) => {
    mutate({ storeId: id });
  };
  return (
    <>
      <div className="sm:px-6">
        <div>
          <p className="text-lg font-semibold">Store settings</p>
          <p className="text-sm">
            Manage new and existing stores to make available to vendors
          </p>
          <AddNewStoreModal />
        </div>

        {/* FORM PROCESSING  */}
        <div className="mt-6">
          <div className="grid grid-cols-4 gap-4 mt-2">
            {stores ? (
              <>
                {stores.map((store) => {
                  return (
                    <>
                      <StoreCard
                        key={store?.id}
                        imageSrc={store?.logo}
                        storeName={store?.name}
                        storeId={store?.id}
                        buttonText={"Delete store"}
                        isPending={isPending}
                        loadingText={"Deleting"}
                        hasUpdateButton
                      />
                    </>
                  );
                })}
              </>
            ) : (
              <>
                <Skeleton className="w-[248px] h-[160px] rounded-2xl" />
                <Skeleton className="w-[248px] h-[160px] rounded-2xl" />
                <Skeleton className="w-[248px] h-[160px] rounded-2xl" />
                <Skeleton className="w-[248px] h-[160px] rounded-2xl" />
                <Skeleton className="w-[248px] h-[160px] rounded-2xl" />
                <Skeleton className="w-[248px] h-[160px] rounded-2xl" />
                <Skeleton className="w-[248px] h-[160px] rounded-2xl" />
                <Skeleton className="w-[248px] h-[160px] rounded-2xl" />
              </>
            )}
          </div>
        </div>
      </div>
      {/* <UpdateStoreModal setOpen={setOpen} open={open} /> */}
    </>
  );
}
