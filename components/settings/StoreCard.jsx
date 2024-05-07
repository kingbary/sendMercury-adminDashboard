import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function StoreCard({ imageSrc, storeName, buttonText }) {
  return (
    <div className="bg-white p-6 rounded-2xl">
      <div className="flex  items-center gap-2 font-bold p-4 mb-2">
        <div className="w-8 h-8 overflow-hidden">
          <Image src={imageSrc} width={32} height={32} alt="" />
        </div>
        {storeName}
      </div>
      <Button variant="outlineBlue" className="w-full">
        {buttonText}
      </Button>
    </div>
  );
}
