"use client";
import React, { useState } from "react";
import InnerCard from "../universal/InnerCard";
import ProductDetails from "./ProductDetails";
import ProductStatusSelect from "../universal/ProductStatusSelect";
import ProductTypeSelect from "../universal/ProductTypeSelect";
import useListProducts from "@/hooks/queries/useListProducts";
import useGetProductMetricData from "@/hooks/queries/useGetProductMetricData";
import { useAuthToken } from "@/hooks/useAuthToken";
import { Skeleton } from "../ui/skeleton";
import PaginationComp from "../universal/PaginationComp";
import { useSearchParams } from "next/navigation";

export default function Products() {
  const searchParams = useSearchParams();

  const page = searchParams.get("page");
  const productType = searchParams.get("productType");
  const productStatus = searchParams.get("status");

  useAuthToken();
  const { data: productMetric } = useGetProductMetricData();
  const productMetricData = productMetric?.data.data[0];

  const { data, isLoading } = useListProducts({
    type: productType === "all" ? "" : productType,
    pageParam: page ?? 1,
    status: productStatus ?? "",
    limit: 20,
  });

  const productsData = data?.data?.data;
  const totalPages = data?.data?.meta?.totalPages;
  const nextPage = data?.data?.meta?.nextPage;
  const previousPage = data?.data?.meta?.previousPage;

  const linkHrefFetch = (index) => {
    return `?productType=${productType ? productType : "all"}&productStatus=${
      productStatus ?? "active"
    }&page=${index + 1}`;
  };

  return (
    <>
      {productMetricData ? (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-4">
          <InnerCard
            cardHeading={"Total Products"}
            value={productMetricData?.total.total}
          />
          <InnerCard
            cardHeading={"Pending Products"}
            value={productMetricData?.pending.total}
          />
          <InnerCard
            cardHeading={"Live Products"}
            value={productMetricData?.active.total}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-4">
          <Skeleton className="w-[252px] h-20 rounded-2xl shadow" />
          <Skeleton className="w-[252px] h-20 rounded-2xl shadow" />
          <Skeleton className="w-[252px] h-20 rounded-2xl shadow" />
        </div>
      )}
      <div className="mx-4 my-8 md:m-8">
        <p className="mb-2">Filter by</p>
        <div className="flex flex-col md:flex-row gap-4">
          <ProductStatusSelect />
          <ProductTypeSelect />
        </div>
      </div>
      <ProductDetails
        isLoading={isLoading}
        productsData={productsData}
        statusSelect={productStatus}
        productTypeSelect={productType}
      />
      <PaginationComp
        linkHref={linkHrefFetch}
        nextHref={`?productType=${productType}&status=${productStatus}&page=${
          Number(page) + 1
        }`}
        prevHref={`?productType=${productType}&status=${productStatus}&page=${
          Number(page) - 1
        }`}
        previousPage={previousPage}
        totalPages={totalPages}
        page={page}
        nextPage={nextPage}
      />
    </>
  );
}
