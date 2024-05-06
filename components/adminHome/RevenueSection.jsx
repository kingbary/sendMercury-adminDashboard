"use client";
import dynamic from "next/dynamic";
import LineChart from "../universal/LineChart";
// const LineChart = dynamic(() => import("../universal/LineChart",{ssr:false}))
import { formatNumbers } from "../../utils/formatNumbers.util";
import { useState } from "react";
import YearSelect from "../universal/YearSelect";
import Container from "../universal/Container";
import { yearlRevenueAndSalesData } from "../../data/homeDash/chartData";

export default function RevenueSection() {
  const [activeTab, setActiveTab] = useState("2023");
  const seriesData = [
    {
      name: "Revenue",
      data: yearlRevenueAndSalesData.map((data) => {
        return formatNumbers(data?.revenue);
      }),
    },
  ];

  const categories = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
  ];

  return (
    <Container className="mx-4">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-[#333] text-xl font-extrabold">
            Revenue & Sales Report
          </p>
          <p className="text-base leading-normal">April 2023 Report</p>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-2 md:gap-6 mb-3 justify-between md:items-center">
          <YearSelect handleActiveTab={setActiveTab} />
          <div className="flex gap-4">
            <div className="flex gap-3">
              <div className="bg-primaryBlue h-6 w-6 rounded-full"></div>Revenue
            </div>
            <div className="flex gap-3">
              <div className="bg-primaryGreen h-6 w-6 rounded-full"></div>Sales
            </div>
          </div>
        </div>
      </div>
      <div className="w-full aspect-3">
        {activeTab === "2021" && (
          <LineChart series={seriesData} categories={categories} />
        )}

        {activeTab === "2022" && (
          <LineChart series={seriesData} categories={categories} />
        )}
        {activeTab === "2023" && (
          <LineChart series={seriesData} categories={categories} />
        )}
      </div>
    </Container>
  );
}
