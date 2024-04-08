"use client";
import dynamic from "next/dynamic";
// import LineChart from "../universal/LineChart";
const LineChart = dynamic(() => import("../universal/LineChart",{ssr:false}))
import { formatNumbers } from "../../utils/formatNumbers.util";
import { useState } from "react";
import YearSelect from "../universal/YearSelect";
import Container from "../universal/Container";
import { yearlRevenueAndSalesData } from "../../data/homeDash/chartData";

export default function RevenueSection() {
  const [activeTab, setActiveTab] = useState("2023");

  return (
    <Container>
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
          <LineChart
            data={{
              labels: yearlRevenueAndSalesData.map((label) => label?.month),
              datasets: [
                {
                  label: "Revenue",
                  data: yearlRevenueAndSalesData.map((data) => data?.revenue),
                  backgroundColor: "#fff",
                  borderColor: "#219653",
                  borderWidth: 1.5,
                  pointBorderColor: "#219653",
                },
                {
                  label: "Sales",
                  data: yearlRevenueAndSalesData.map((data) => data?.sales),
                  backgroundColor: "#fff",
                  borderColor: "#0032C8",
                  borderWidth: 1.5,
                  pointBorderColor: "#219653",
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

        {activeTab === "2022" && (
          <LineChart
            data={{
              labels: yearlRevenueAndSalesData.map((label) => label?.month),
              datasets: [
                {
                  label: "Revenue",
                  data: yearlRevenueAndSalesData.map((data) => data?.revenue),
                  backgroundColor: "#fff",
                  borderColor: "#219653",
                  borderWidth: 1.5,
                  pointBorderColor: "#219653",
                },
                {
                  label: "Sales",
                  data: yearlRevenueAndSalesData.map((data) => data?.sales),
                  backgroundColor: "#fff",
                  borderColor: "#0032C8",
                  borderWidth: 1.5,
                  pointBorderColor: "#219653",
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
        {activeTab === "2023" && (
          <LineChart
            data={{
              labels: yearlRevenueAndSalesData.map((label) => label?.month),
              datasets: [
                {
                  label: "Revenue",
                  data: yearlRevenueAndSalesData.map((data) => data?.revenue),
                  backgroundColor: "#fff",
                  borderColor: "#219653",
                  borderWidth: 1.5,
                  pointBorderColor: "#219653",
                },
                {
                  label: "Sales",
                  data: yearlRevenueAndSalesData.map((data) => data?.sales),
                  backgroundColor: "#fff",
                  borderColor: "#0032C8",
                  borderWidth: 1.5,
                  pointBorderColor: "#219653",
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
  );
}
