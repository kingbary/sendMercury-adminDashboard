"use client";
import React, { useEffect } from "react";
import { MdOutlineWavingHand } from "react-icons/md";
import InnerCard from "../universal/InnerCard";
import RevenueSection from "./RevenueSection";
import ProductSales from "./ProductSales";
import OrderStatus from "./OrderStatus";
import BestSelling from "./BestSelling";
import { useAuth } from "@/hooks/useAuth";
import { redirect, useRouter } from "next/navigation";

export default function DashHome() {
  return (
    <div className="flex flex-col gap-8 md:gap-0 mx-4">
      <div className="flex flex-col gap-1 md:px-4 pb-5">
        <p className="flex gap-2 items-center text-2xl md:text-base">
          Hello Admin <MdOutlineWavingHand />
        </p>
        <p className=" text-base md:text-sm">
          Here&apos;s what is happening on Send Mercury today
        </p>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:mx-4">
        <InnerCard
          iconSrc={"/assets/icons/index-wallet.svg"}
          cardHeading={"Total Transaction Value"}
          value={"₦12,374,738,233"}
          percentageIncrease={"29.09"}
          increaseAmount={"+ ₦1,000,000"}
          percentage
        />
        <InnerCard
          iconSrc={"/assets/icons/index-wallet.svg"}
          cardHeading={"Revenue"}
          value={"₦12,374,738,233"}
          percentageIncrease={"29.09"}
          increaseAmount={"- ₦1,000,000"}
          percentage
        />
        <InnerCard
          iconSrc={"/assets/icons/vendor.svg"}
          cardHeading={"Total Vendors"}
          value={"230"}
          percentageIncrease={"29.09"}
          increaseAmount={"+100"}
          percentage
        />
        <InnerCard
          iconSrc={"/assets/icons/bag.svg"}
          cardHeading={"Total Vendors"}
          value={"230"}
          percentageIncrease={"29.09"}
          increaseAmount={"+100"}
          percentage
        />
      </div>
      <RevenueSection />
      <ProductSales />
      <div className="md:flex gap-7 lg:m-8 justify-between">
        <OrderStatus />
        <BestSelling />
      </div>
    </div>
  );
}
