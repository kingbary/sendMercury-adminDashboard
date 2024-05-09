"use client";
import React from "react";
import { MdOutlineWavingHand } from "react-icons/md";
import InnerCard from "../universal/InnerCard";
import RevenueSection from "./RevenueSection";
import ProductSales from "./ProductSales";
import OrderStatus from "./OrderStatus";
import BestSelling from "./BestSelling";
import { useAdminData } from "@/app/provider/AdminDataProvider";
import useGetOverview from "@/hooks/queries/useGetOverview";

export default function DashHome() {
  const { adminData } = useAdminData();
  const { data } = useGetOverview();
  const dashboardData = data?.data?.data;
  return (
    <div className="flex flex-col gap-8 md:gap-0 mx-4">
      <div className="flex flex-col gap-1 md:px-4 pb-5">
        <p className="flex gap-2 items-center text-2xl md:text-base">
          Hello {adminData?.fullName} <MdOutlineWavingHand />
        </p>
        <p className=" text-base md:text-sm">
          Here&apos;s what is happening on Send Mercury today
        </p>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:mx-4">
        <InnerCard
          iconSrc={"/assets/icons/index-wallet.svg"}
          cardHeading={"Total Transaction Value"}
          value={dashboardData?.transactions?.total}
          percentageIncrease={dashboardData?.transactions?.percentage}
          increaseAmount={`+ ${dashboardData?.transactions?.currentMonth}`}
          percentage
        />
        <InnerCard
          iconSrc={"/assets/icons/index-wallet.svg"}
          cardHeading={"Revenue"}
          value={dashboardData?.revenue?.total}
          percentageIncrease={dashboardData?.revenue?.percentage}
          increaseAmount={`+ ${dashboardData?.revenue?.currentMonth}`}
          percentage
        />
        <InnerCard
          iconSrc={"/assets/icons/vendor.svg"}
          cardHeading={"Total Vendors"}
          value={dashboardData?.vendors?.total}
          percentageIncrease={dashboardData?.vendors?.percentage}
          increaseAmount={`+ ${dashboardData?.vendors?.currentMonth}`}
          percentage
        />
        <InnerCard
          iconSrc={"/assets/icons/bag.svg"}
          cardHeading={"Total Products"}
          value={dashboardData?.products?.total}
          percentageIncrease={dashboardData?.products?.percentage}
          increaseAmount={`+ ${dashboardData?.products?.currentMonth}`}
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
