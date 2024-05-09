"use client";
import React, { useState } from "react";
import Link from "next/link";
import YearSelect from "../universal/YearSelect";
import Container from "../universal/Container";
import {
  dailyProductSalesData,
  monthlyProductSalesData,
  yearlyProductSalesData,
} from "../../data/homeDash/productSalesData";

export default function ProductSales() {
  const [activeTab, setActiveTab] = useState("2023");
  const productSalesData = [];
  return (
    <Container>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <p className="text-[#333] text-xl font-bold">Product Sales</p>
          <Link
            href={"/product-sales"}
            className="text-base text-primaryBlue font-bold hidden md:block"
          >
            See All
          </Link>
        </div>
        <div className="w-full gap-2 md:gap-6 mb-3">
          <YearSelect handleActiveTab={setActiveTab} />
        </div>
      </div>
      {productSalesData.length > 0 ? (
        <table className="table-auto md:table-fixed w-full mt-6 hidden md:table">
          <thead>
            <tr>
              <th className="text-left">Product</th>
              <th className="hidden md:table-cell text-left">Price</th>
              <th className="hidden md:table-cell text-left">Vendor</th>
              <th className="text-left">Units sold</th>
              <th className="text-left">Sales</th>
            </tr>
          </thead>

          {activeTab === "2021" && (
            <tbody>
              {dailyProductSalesData.map((data) => {
                return (
                  <tr key={data?.id} className="border-b border-[#C4C4C4]">
                    <td className="py-2">{data?.product}</td>
                    <td className="hidden md:table-cell py-2">{data?.price}</td>
                    <td className="hidden md:table-cell py-2">
                      {data?.vendor}
                    </td>
                    <td className="py-2">{data?.unitSold}</td>
                    <td className="py-2">{data?.sales}</td>
                  </tr>
                );
              })}
            </tbody>
          )}
          {activeTab === "2022" && (
            <tbody>
              {monthlyProductSalesData.map((data) => {
                return (
                  <tr key={data?.id} className="border-b border-[#C4C4C4]">
                    <td className="py-2">{data?.product}</td>
                    <td className="hidden md:table-cell py-2">{data?.price}</td>
                    <td className="hidden md:table-cell py-2">
                      {data?.vendor}
                    </td>
                    <td className="py-2">{data?.unitSold}</td>
                    <td className="py-2">{data?.sales}</td>
                  </tr>
                );
              })}
            </tbody>
          )}
          {activeTab === "2023" && (
            <tbody>
              {yearlyProductSalesData.map((data) => {
                return (
                  <tr key={data?.id} className="border-b border-[#C4C4C4]">
                    <td className="py-2">{data?.product}</td>
                    <td className="hidden md:table-cell py-2">{data?.price}</td>
                    <td className="hidden md:table-cell py-2">
                      {data?.vendor}
                    </td>
                    <td className="py-2">{data?.unitSold}</td>
                    <td className="py-2">{data?.sales}</td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      ) : (
        <p className="text-xl text-midGray text-center py-6">
          You do not have any sales yet
        </p>
      )}
      {productSalesData.length > 0 ? (
        <div className="md:hidden">
          {activeTab === "2021" && (
            <>
              {dailyProductSalesData.map((data) => {
                return (
                  <div
                    key={data?.id}
                    className="flex justify-between px-2 py-4 border-b-[0.2px] border-darkGray"
                  >
                    <div>
                      <p className="font-semibold">
                        {data?.product}{" "}
                        <span className="text-xs font-normal">{`(${data?.price} per unit)`}</span>
                      </p>
                      <p className="text-xs font-normal">{data?.vendor}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="font-extrabold">{data?.sales}</p>
                      <p className="text-xs font-normal">
                        {data?.unitSold} units
                      </p>
                    </div>
                  </div>
                );
              })}
            </>
          )}
          {activeTab === "2022" && (
            <>
              {monthlyProductSalesData.map((data) => {
                return (
                  <div
                    key={data?.id}
                    className="flex justify-between px-2 py-4 border-b-[0.2px] border-darkGray"
                  >
                    <div>
                      <p className="font-semibold">
                        {data?.product}{" "}
                        <span className="text-xs font-normal">{`(${data?.price} per unit)`}</span>
                      </p>
                      <p className="text-xs font-normal">{data?.vendor}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="font-extrabold">{data?.sales}</p>
                      <p className="text-xs font-normal">
                        {data?.unitSold} units
                      </p>
                    </div>
                  </div>
                );
              })}
            </>
          )}
          {activeTab === "2023" && (
            <>
              {yearlyProductSalesData.map((data) => {
                return (
                  <div
                    key={data?.id}
                    className="flex justify-between px-2 py-4 border-b-[0.2px] border-darkGray"
                  >
                    <div>
                      <p className="font-semibold">
                        {data?.product}{" "}
                        <span className="text-xs font-normal">{`(${data?.price} per unit)`}</span>
                      </p>
                      <p className="text-xs font-normal">{data?.vendor}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="font-extrabold">{data?.sales}</p>
                      <p className="text-xs font-normal">
                        {data?.unitSold} units
                      </p>
                    </div>
                  </div>
                );
              })}
            </>
          )}
          <div className="flex justify-end mt-4 pr-4">
            <Link
              href={"/"}
              className="text-base text-primaryBlue font-bold md:hidden"
            >
              See All
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-xl text-midGray text-center py-6 md:hidden">
          You do not have any sales yet
        </p>
      )}
    </Container>
  );
}
