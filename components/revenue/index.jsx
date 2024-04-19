"use client";
import React, { useState } from "react";
import InnerCard from "../universal/InnerCard";
import RevenueSection from "../adminHome/RevenueSection";
import LineChart from "../universal/LineChart";
import Container from "../universal/Container";
import {
  dailyRevenueAndSalesData,
  monthlyRevenueAndSalesData,
  yearlRevenueAndSalesData,
} from "../../data/homeDash/chartData";
import { formatNumbers } from "../../utils/formatNumbers.util";
import StoreSelect from "../universal/StoreSelect";
import YearSelect from "../universal/YearSelect";
import PeriodSelect from "../universal/PeriodSelect";
import Link from "next/link";

export default function Revenue() {
  let [activeTab, setActiveTab] = useState("2023");
  const [tab, setTab] = useState(1);
  const handleTabClick = (selectedTab) => {
    setTab(selectedTab);
  };
  return (
    <>
      <div className="ml-8 font-extrabold text-2xl w-full mb-4">Sales</div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-8">
        <InnerCard
          cardHeading={"Amazon"}
          value={"₦1,103,789.00"}
          percentageIncrease={"29.09"}
          increaseAmount={"+ ₦1,000,000"}
          percentage
        />
        <InnerCard
          cardHeading={"Jumia"}
          value={"₦1,103,789.00"}
          percentageIncrease={"29.09"}
          increaseAmount={"- ₦1,000,000"}
          percentage
        />
        <InnerCard
          cardHeading={"Ebay"}
          value={"₦1,103,789.00"}
          percentageIncrease={"29.09"}
          increaseAmount={"+100"}
          percentage
        />
        <InnerCard
          cardHeading={"Konga"}
          value={"₦1,103,789.00"}
          percentageIncrease={"29.09"}
          increaseAmount={"+100"}
          percentage
        />
      </div>
      <Container
        className={"flex flex-col gap-2 md:flex-row justify-between mx-8"}
      >
        <div>
          <p className="font-bold">Withdrawals</p>
          <p>You have {"20"} pending withdrawals awaiting approval</p>
        </div>
        <Link
          href={"/revenue/withdrawal"}
          className="bg-primaryBlue inline-flex items-center justify-center text-neutral-50 hover:bg-primaryBlue/90 h-10 px-4 py-2 whitespace-nowrap rounded-md text-sm font-medium"
        >
          View withdrawal requests
        </Link>
      </Container>
      <div className="flex gap-6 mx-4 my-8 md:m-8">
        <StoreSelect />
      </div>
      <RevenueSection activeTab={activeTab} />
      <Container className="mx-4">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-[#333] text-xl font-semibold">
              Products, Vendors & Orders
            </p>
            <p className="text-base leading-normal">April 2023 Report</p>
          </div>
          <div className="flex flex-col justify-between md:flex-row gap-6 p-3 mb-3">
            <div className="flex flex-col md:flex-row gap-2">
              <PeriodSelect handleActiveTab={setActiveTab} />
              <YearSelect handleActiveTab={setActiveTab} />
            </div>
            <div className="flex gap-4">
              <div className="flex gap-3">
                <div className="bg-[#FC741C] h-6 w-6 rounded-full"></div>Vendors
              </div>
              <div className="flex gap-3">
                <div className="bg-[#B14F6B] h-6 w-6 rounded-full"></div>
                Products
              </div>
              <div className="flex gap-3">
                <div className="bg-[#0032C8] h-6 w-6 rounded-full"></div>Orders
              </div>
            </div>
          </div>
        </div>
        <div className="w-full aspect-3">
          {activeTab === "2023" && (
            <LineChart
              data={{
                labels: dailyRevenueAndSalesData.map((label) => label?.day),
                datasets: [
                  {
                    label: "Vendors",
                    data: dailyRevenueAndSalesData.map((data) => data?.revenue),
                    backgroundColor: "#fff",
                    borderColor: "#FC741C",
                    borderWidth: 1.5,
                    pointBorderColor: "#FC741C",
                  },
                  {
                    label: "Products",
                    data: dailyRevenueAndSalesData.map((data) => data?.sales),
                    backgroundColor: "#fff",
                    borderColor: "#B14F6B",
                    borderWidth: 1.5,
                    pointBorderColor: "#B14F6B",
                  },
                  {
                    label: "Orders",
                    data: [2000, 8000, 4500, 4300, 3040, 1003, 5040],
                    backgroundColor: "#fff",
                    borderColor: "#0032C8",
                    borderWidth: 1.5,
                    pointBorderColor: "#0032C8",
                  },
                ],
              }}
              options={{
                aspectRatio: 3,
                plugins: {
                  legend: false,
                },
                scales: {
                  x: {
                    grid: {
                      color: "rgba(0, 0, 0)",
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      color: "#fff",
                      display: false,
                    },
                    ticks: {
                      stepSize: 2000,
                      callback: (value) => formatNumbers(value),
                    },
                  },
                },
              }}
            />
          )}

          {activeTab === "2022" && (
            <LineChart
              data={{
                labels: monthlyRevenueAndSalesData.map((label) => label?.week),
                datasets: [
                  {
                    label: "Vendors",
                    data: monthlyRevenueAndSalesData.map(
                      (data) => data?.revenue
                    ),
                    backgroundColor: "#fff",
                    borderColor: "#FC741C",
                    borderWidth: 1.5,
                    pointBorderColor: "#FC741C",
                  },
                  {
                    label: "Products",
                    data: monthlyRevenueAndSalesData.map((data) => data?.sales),
                    backgroundColor: "#fff",
                    borderColor: "#B14F6B",
                    borderWidth: 1.5,
                    pointBorderColor: "#B14F6B",
                  },
                  {
                    label: "Orders",
                    data: [20004, 43004, 93030, 50400],
                    backgroundColor: "#fff",
                    borderColor: "#0032C8",
                    borderWidth: 1.5,
                    pointBorderColor: "#0032C8",
                  },
                ],
              }}
              options={{
                aspectRatio: 3,
                plugins: {
                  legend: false,
                },
                scales: {
                  x: {
                    grid: {
                      color: "rgba(0, 0, 0)",
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      color: "#fff",
                      display: false,
                    },
                    ticks: {
                      stepSize: 20000,
                      callback: (value) => formatNumbers(value),
                    },
                  },
                },
              }}
            />
          )}
          {activeTab === "2021" && (
            <LineChart
              data={{
                labels: yearlRevenueAndSalesData.map((label) => label?.month),
                datasets: [
                  {
                    label: "Vendors",
                    data: yearlRevenueAndSalesData.map((data) => data?.revenue),
                    backgroundColor: "#fff",
                    borderColor: "#FC741C",
                    borderWidth: 1.5,
                    pointBorderColor: "#FC741C",
                  },
                  {
                    label: "Products",
                    data: yearlRevenueAndSalesData.map((data) => data?.sales),
                    backgroundColor: "#fff",
                    borderColor: "#B14F6B",
                    borderWidth: 1.5,
                    pointBorderColor: "#B14F6B",
                  },
                  {
                    label: "Orders",
                    data: [
                      206000, 80100, 450100, 403300, 304033, 156003, 509040,
                      206000, 80100, 450100, 210004, 709000,
                    ],
                    backgroundColor: "#fff",
                    borderColor: "#0032C8",
                    borderWidth: 1.5,
                    pointBorderColor: "#0032C8",
                  },
                ],
              }}
              options={{
                aspectRatio: 3,
                plugins: {
                  legend: false,
                },
                scales: {
                  x: {
                    grid: {
                      color: "rgba(0, 0, 0)",
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      color: "#fff",
                      display: false,
                    },
                    ticks: {
                      stepSize: 250000,
                      callback: (value) => formatNumbers(value),
                    },
                  },
                },
              }}
            />
          )}
        </div>
      </Container>
    </>
  );
}
