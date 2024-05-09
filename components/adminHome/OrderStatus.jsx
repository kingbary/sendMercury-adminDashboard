"use client";
import React from "react";
import dynamic from "next/dynamic";
const PieChart = dynamic(() => import("./PieChart"), {
  ssr: false,
});
import {
  orderStatusData,
  revenueAndSalesData,
} from "@/data/homeDash/chartData";
import Link from "next/link";

export default function OrderStatus() {
  return (
    <section className="bg-white lg:rounded-[20px] p-6 w-full overflow-hidden">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <p className="text-[#333] text-xl font-bold">Order Status</p>
          <Link href={"/"} className="text-xl text-primary font-bold">
            See All
          </Link>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-2 xl:gap- justify-center mt-4">
        <div className="w-[250px] h-[250px]">
          <PieChart
            data={{
              labels: orderStatusData.map((data) => data?.status),
              datasets: [
                {
                  label: "Order Status",
                  data: orderStatusData.map((data) => data?.value),
                  backgroundColor: ["#219653", "#F2C94C", "#EB5757"],
                  hoverOffset: 4,
                },
              ],
            }}
            options={{
              aspectRatio: 1,
              plugins: {
                legend: false,
              },
            }}
          />
        </div>
        <div className="flex flex-col gap-4 mt-4 xl:mt-[200px]">
          <div className="flex gap-3">
            <div className="bg-primaryGreen h-5 w-5 rounded-full"></div>
            Successful{" "}
            <span className="font-bold">
              {`(${orderStatusData[0].value})`}%
            </span>
          </div>
          <div className="flex gap-3">
            <div className="bg-[#F2C94C] h-5 w-5 rounded-full"></div>
            Pending{" "}
            <span className="font-bold">
              {`(${orderStatusData[1].value})`}%
            </span>
          </div>
          <div className="flex gap-3">
            <div className="bg-[#EB5757] h-5 w-5 rounded-full"></div>
            Cancelled{" "}
            <span className="font-bold">
              {`(${orderStatusData[2].value})`}%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
