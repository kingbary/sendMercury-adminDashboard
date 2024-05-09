import React from "react";
import Container from "../universal/Container";
import Image from "next/image";
import Link from "next/link";
import { PulseLoader } from "react-spinners";

export default function ProductDetails({ productsData, isLoading }) {
  return (
    <>
      <div className="hidden md:block">
        <Container>
          <div className="grid grid-cols-6 font-semibold w-full mb-6">
            <p className="text-center">Vendor</p>
            <p className="text-center">Product</p>
            <p className="text-center">Category</p>
            <p className="text-center">Type</p>
            <p className="text-center">Price</p>
            <p className="text-center">Status</p>
          </div>
          {productsData ? (
            <>
              {productsData.map((data) => {
                return (
                  <Link
                    href={`/products/${data?.id}`}
                    key={data?.id}
                    className="relative grid grid-cols-6 rounded-[8px] shadow w-full py-[10px] mb-6"
                  >
                    <p className="text-center">{data?.vendorName}</p>
                    <p className="text-center">{data?.productName}</p>
                    <p className="text-center">{data?.category}</p>
                    <p className="text-center">{data?.type}</p>
                    <p className="text-center">{data?.price.toFixed(2)}</p>
                    <p
                      className={`text-center ${
                        data?.status === "active"
                          ? "text-[#219653]"
                          : data?.status === "pending"
                          ? "text-[#F79E1B]"
                          : "text-[#EB001B]"
                      }`}
                    >
                      {data?.status}
                    </p>{" "}
                    <div className="-rotate-90 w-[18px] h-[18px] border-[0.75px] rounded-[3px] border-neutral-200 absolute right-3 top-[13px]">
                      <Image
                        src={"/assets/icons/arrow-down-2.svg"}
                        width={30}
                        height={30}
                        alt=""
                      />
                    </div>
                  </Link>
                );
              })}
            </>
          ) : (
            <div className="text-center hidden md:block">
              {isLoading ? (
                <PulseLoader color="#4d4d4d" />
              ) : (
                "No products avaialable"
              )}
            </div>
          )}
        </Container>
      </div>
      {productsData ? (
        <>
          {productsData.map((data) => {
            return (
              <div
                className="md:hidden mx-4 shadow rounded-[16px] py-4 px-2 flex items-center mb-4"
                key={data?.id}
              >
                <Link href={`/products/${data?.id}`} className="w-full">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full ${
                          data?.status === "active"
                            ? "bg-[#219653]"
                            : data?.status === "pending"
                            ? "bg-[#F79E1B]"
                            : "bg-[#EB001B]"
                        }`}
                      ></div>
                      <div>
                        <p className="font-medium">{data?.productName}</p>
                        <p className="text-xs text-midGray">
                          {data?.vendorName}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col items-end">
                          <p className="font-medium">{data?.price}</p>
                          <p className="text-xs text-midGray">{data?.type}</p>
                        </div>
                        <div className="-rotate-90 w-[18px] h-[18px] border-[0.75px] rounded-[3px] border-neutral-200">
                          <Image
                            src={"/assets/icons/arrow-down-2.svg"}
                            width={30}
                            height={30}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </>
      ) : (
        <div className="text-center md:hidden">
          {isLoading ? (
            <PulseLoader color="#4d4d4d" />
          ) : (
            "No products avaialable"
          )}
        </div>
      )}
    </>
  );
}
