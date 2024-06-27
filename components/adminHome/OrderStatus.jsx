"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const PieChart = dynamic(() => import("./PieChart"), {
  ssr: false,
});
import Link from "next/link";
import axios from "axios";
import { toast } from "sonner";

export default function OrderStatus() {
  const [orderStatusData, setOrderStatusData] = useState([]);
  const [token, setToken] = useState("");

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  useEffect(() => {
    const item = localStorage.getItem("token");
    setToken(item);
  }, []);

  useEffect(() => {
    const getOrderStatusData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/admin/orders/status-metric`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data.data.metrics;
        setOrderStatusData(data);
      } catch (error) {
        toast.error(`${error}`);
      }
    };

    if (token) {
      getOrderStatusData();
    }
  }, [token]);
  return (
    <section className="bg-white lg:rounded-[20px] p-6 w-full overflow-hidden">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <p className="text-[#333] text-xl font-bold">Order Status</p>
          <Link href={"/orders"} className="text-xl text-primaryBlue font-bold">
            See All
          </Link>
        </div>
      </div>
      {orderStatusData.length > 0 ? (
        <>
          <div className="flex flex-col xl:flex-row gap-2 xl:gap- justify-center mt-4">
            <div className="w-[250px] h-[250px]">
              <PieChart
                data={{
                  labels: orderStatusData.map((data) => data?.status),
                  datasets: [
                    {
                      label: "Order Status",
                      data: orderStatusData.map((data) => data?.percentage),
                      backgroundColor: [
                        "#5E3FBE",
                        "#F4F0FD",
                        "#E5DAFB",
                        "#CBB6F8",
                        "#A88DEB",
                      ],
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
              <div className="flex gap-3 text-sm whitespace-nowrap">
                <div className="bg-[#5E3FBE] h-5 w-5 rounded-full"></div>
                Pending{" "}
                <span className="font-bold">
                  {`(${orderStatusData[0]?.percentage})`}%
                </span>
              </div>
              <div className="flex gap-3 text-sm whitespace-nowrap">
                <div className="bg-[#F4F0FD] h-5 w-5 rounded-full"></div>
                Cancelled{" "}
                <span className="font-bold">
                  {`(${orderStatusData[1]?.percentage})`}%
                </span>
              </div>
              <div className="flex gap-3 text-sm whitespace-nowrap">
                <div className="bg-[#CBB6F8] h-5 w-5 rounded-full"></div>
                Shipped{" "}
                <span className="font-bold">
                  {`(${orderStatusData[3]?.percentage})`}%
                </span>
              </div>
              <div className="flex gap-3 text-sm whitespace-nowrap">
                <div className="bg-[#CBB6F8] h-5 w-5 rounded-full"></div>
                Fulfilled{" "}
                <span className="font-bold">
                  {`(${orderStatusData[4]?.percentage})`}%
                </span>
              </div>
              <div className="flex gap-3 text-sm whitespace-nowrap">
                <div className="bg-[#CBB6F8] h-5 w-5 rounded-full"></div>
                Successful{" "}
                <span className="font-bold">
                  {`(${orderStatusData[4]?.percentage})`}%
                </span>
              </div>
              <div className="flex gap-3 text-sm whitespace-nowrap">
                <div className="bg-[#A88DEB] h-5 w-5 rounded-full"></div>
                Shipment Uploaded{" "}
                <span className="font-bold">
                  {`(${orderStatusData[5]?.percentage})`}%
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-midGray text-lg pt-6">
          You do not have any order status yet
        </p>
      )}
    </section>
  );
}
