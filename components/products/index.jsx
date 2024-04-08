"use client";
import React, { useState } from "react";
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

export default function Products() {
  const [activeTab, setActiveTab] = useState("physical");
  const [activeStatus, setActiveStatus] = useState("live");
  return (
    <>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:mx-4">
        <InnerCard cardHeading={"Total Products"} value={"730,650"} />
        <InnerCard cardHeading={"Pending Products"} value={"35,400"} />
        <InnerCard cardHeading={"Live Products"} value={"230"} />
      </div>
      <div className="mx-4 my-8 md:m-8">
        <p className="mb-2">Filter by</p>
        <div className="flex gap-4">
          <ProductStatusSelect handleActiveTab={setActiveStatus} />
          <ProductTypeSelect handleActiveTab={setActiveTab} />
        </div>
      </div>
      <ProductDetails activeTab={activeTab} activeStatus={activeStatus} />
      <Pagination>
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
