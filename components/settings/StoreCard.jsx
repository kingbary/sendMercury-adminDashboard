import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ClipLoader } from "react-spinners";
import UpdateStoreModal from "./UpdateStoreModal";

export default function StoreCard({
  imageSrc,
  storeId,
  storeName,
  buttonText,
  handleOnClick,
  isPending,
  loadingText,
  hasUpdateButton,
}) {
  return (
    <div className="bg-white p-6 rounded-2xl">
      <div className="flex  items-center gap-2 font-bold p-4 mb-2 whitespace-nowrap">
        <div className="w-8 h-8 overflow-hidden">
          <Image src={imageSrc} width={32} height={32} alt="" />
        </div>
        {storeName}
      </div>
      {hasUpdateButton ? (
        <UpdateStoreModal storeName={storeName} storeId={storeId} />
      ) : (
        <Button
          variant="outlineBlue"
          className="w-full flex gap-1"
          onClick={handleOnClick}
        >
          {isPending ? (
            <>
              <ClipLoader color="#ffffff" size={16} /> {loadingText}
            </>
          ) : (
            buttonText
          )}
        </Button>
      )}
    </div>
  );
}
