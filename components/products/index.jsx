"use client";
import React, { useEffect, useState } from "react";
import InnerCard from "../universal/InnerCard";
import ProductDetails from "./ProductDetails";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ProductStatusSelect from "../universal/ProductStatusSelect";
import ProductTypeSelect from "../universal/ProductTypeSelect";
import useListProducts from "@/hooks/queries/useListProducts";

export default function Products() {
  const [productTypeSelect, setProductTypeSelect] = useState("");
  const [statusSelect, setStatusSelect] = useState("");
  const { data, isLoading, refetch } = useListProducts({
    status: statusSelect !== "" && statusSelect,
    type: productTypeSelect,
    pageParam: 1,
  });

  useEffect(() => {
    refetch();
  }, [statusSelect, productTypeSelect]);
  const productsData = data?.data?.data;
  return (
    <>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-4">
        <InnerCard cardHeading={"Total Products"} value={"730,650"} />
        <InnerCard cardHeading={"Pending Products"} value={"35,400"} />
        <InnerCard cardHeading={"Live Products"} value={"230"} />
      </div>
      <div className="mx-4 my-8 md:m-8">
        <p className="mb-2">Filter by</p>
        <div className="flex flex-col md:flex-row gap-4">
          <ProductStatusSelect handleStatusSelect={setStatusSelect} />
          <ProductTypeSelect handleProductTypeSelect={setProductTypeSelect} />
        </div>
      </div>
      <ProductDetails
        isLoading={isLoading}
        productsData={productsData}
        statusSelect={statusSelect}
        productTypeSelect={productTypeSelect}
      />
      <Pagination className={'mt-10'}>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
