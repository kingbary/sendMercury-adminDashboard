import React from "react";
import Container from "../universal/Container";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "@/data/productsData";

export default function ProductDetails({activeTab, activeStatus}) {
  let filteredProductsData = productsData.filter((data) => {
    if (activeTab === "live" && data.status === "live") {
      return true;
    }
    if (activeTab === "pending" && data.status === "pending") {
      return true;
    }
    if (activeTab === "deleted" && data.status === "deleted") {
      return true;
    }
    return false;
  });

  if (activeStatus) {
    filteredProductsData = filteredProductsData.filter(
      (data) => data.status === activeStatus
    );
  }
  return (
    <Container>
      <div className="grid grid-cols-6 font-semibold w-full mb-6">
        <p className="text-center">Vendor</p>
        <p className="text-center">Product</p>
        <p className="text-center">Category</p>
        <p className="text-center">Type</p>
        <p className="text-center">Price</p>
        <p className="text-center">Status</p>
      </div>
      {filteredProductsData.map((data) => {
        return (
          <Link
            href={"/product/productId"}
            key={data?.id}
            className="relative grid grid-cols-6 rounded-[8px] shadow w-full py-[10px] mb-6"
          >
            <p className="text-center">{data?.vendor}</p>
            <p className="text-center">{data?.product}</p>
            <p className="text-center">{data?.category}</p>
            <p className="text-center">{data?.type}</p>
            <p className="text-center">{data?.price}</p>
            <p
              className={`text-center ${
                data?.status === "Live"
                  ? "text-[#F79E1B]"
                  : data?.status === "Deleted"
                  ? "text-[#EB001B]"
                  : "text-[#219653]"
              }`}
            >
              {data?.status}
            </p>
            <div className="-rotate-90 w-[18px] h-[18px] border-[0.75px] rounded-[3px] border-neutral-200 absolute right-3 top-[13px]">
              <Image
                src={"/assets/icons/arrow-down-2.svg"}
                width={30}
                height={30}
                alt=""
              />
            </div>
          </Link>
        );
      })}
    </Container>
  );
}
