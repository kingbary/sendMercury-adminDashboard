"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "../universal/Container";
import InputContainer from "./InputContainer";
import { IoMdArrowDropdown } from "react-icons/io";
import LabelCard from "./LabelCard";
import { useParams } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import VetProduct from "./VetProduct";
import AddProductDetailsModal from "./AddProductDetailsModal";
import { Skeleton } from "../ui/skeleton";
import { saveAs } from "file-saver";
import useGetIndividualProduct from "@/hooks/queries/useGetIndividualProduct";
import { useAuthToken } from "@/hooks/useAuthToken";
import useGetProductStore from "@/hooks/queries/useGetProductStores";

export default function ProductInformation() {
  const param = useParams();
  const productId = param.productId;
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);
  const [viewMore, setViewMore] = useState(false);

  const handleIncrement2 = () => {
    setCount2((prevCount) => prevCount + 1);
  };

  const handleDecrement2 = () => {
    if (count2 > 1) {
      setCount2((prevCount) => prevCount - 1);
    }
  };
  useAuthToken();
  const { data: individualProductData, isLoading } =
    useGetIndividualProduct(productId);
  const productData = individualProductData?.data?.data;
  const { data: productStoresData } = useGetProductStore(productId);
  const productStores = productStoresData?.data?.data;

  const saveImage = (imageUrl, imgName) => {
    saveAs(imageUrl, imgName);
  };
  return (
    <div className="sm:px-6">
      <Link
        href="/products"
        className="flex items-center gap-2 p-4 font-bold text-primaryBlue text-lg"
      >
        <div className="bg-[#E1E7FA] flex justify-center items-center w-6 h-6 rounded-full">
          <Image
            src={"/assets/icons/arrow-left.png"}
            height={20}
            width={20}
            alt=""
          />
        </div>
        Back
      </Link>
      <Container className={"px-4"}>
        {productData?.thumbnail ? (
          <div className="flex gap-8 items-end">
            <div>
              <p>Display image</p>
              <div
                className="w-28 h-28 bg-cover rounded-md bg-center"
                style={{ backgroundImage: `url(${productData?.thumbnail})` }}
              ></div>
            </div>
            <button
              className="text-primaryBlue font-bold pb-4"
              download
              onClick={() => {
                saveImage(productData?.thumbnail, "display-img");
              }}
            >
              Save Image
            </button>
          </div>
        ) : (
          <div>
            <Skeleton className="w-28 h-4 rounded-lg mb-1" />
            <Skeleton className="w-28 h-28 rounded-md" />
          </div>
        )}
        <div className="mt-8 w-fit justify-end">
          <div>
            <p>Product Images</p>
            {productData?.thumbnail ? (
              <div className="flex gap-2 w-full">
                <Link
                  href={productData?.thumbnail}
                  className="w-10 h-10 bg-cover bg-center rounded-sm"
                  style={{ backgroundImage: `url(${productData?.thumbnail})` }}
                ></Link>
              </div>
            ) : (
              <div className="flex gap-2">
                <Skeleton className="w-10 h-10 rounded-sm" />
                <Skeleton className="w-10 h-10 rounded-sm" />
                <Skeleton className="w-10 h-10 rounded-sm" />
              </div>
            )}
          </div>
          <button
            className="text-primaryBlue font-bold py-3 pb-4 text-right"
            onClick={() => saveImage(productData?.thumbnail, "product-image")}
          >
            Save images
          </button>
        </div>
        <div>
          {productData?.name ? (
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
              <InputContainer
                labelName={"Product Name"}
                id={"productName"}
                inputVal={productData?.name}
              />
              <InputContainer
                labelName={"Product Category"}
                id={"productCategory"}
                inputVal={"Clothings"}
              />
              <InputContainer
                labelName={"Vendor"}
                id={"productName"}
                inputVal={productData?.vendorName}
              />
              <InputContainer
                labelName={"Product Type"}
                id={"productType"}
                inputVal={productData?.type}
              />
              <InputContainer
                labelName={"Total Stock"}
                id={"availableStock"}
                inputVal={productData?.totalStock}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
              <Skeleton className="w-full h-11 rounded-sm" />
              <Skeleton className="w-full h-11 rounded-sm" />
              <Skeleton className="w-full h-11 rounded-sm" />
              <Skeleton className="w-full h-11 rounded-sm" />
            </div>
          )}
          <InputContainer
            className="mt-8"
            labelName={"Product Description"}
            id={"description"}
            inputVal={productData?.description}
          />
        </div>
        <div className="mt-8">
          {productData?.variants ? (
            <>
              <p className="font-semibold mb-1">Variants</p>
              {productData?.variants.map((variant, variantIndex) => {
                return (
                  <div key={variant?.id}>
                    <button
                      className="flex flex-col gap-6 w-full mb-4"
                      onClick={() => {
                        setViewMore(true);
                      }}
                    >
                      <div className="bg-gray-50 flex justify-between w-full shadow items-center px-4 py-[10px] rounded-lg">
                        <p>
                          Variant{" "}
                          {variant?.color
                            ? variant.color.toUpperCase().charAt(0) +
                              variant.color.slice(1)
                            : variantIndex + 1}
                        </p>
                        <div className="-rotate-90 w-[18px] h-[18px] border-[0.75px] rounded-[3px] border-neutral-200">
                          <Image
                            src={"/assets/icons/arrow-down-2.svg"}
                            width={30}
                            height={30}
                            alt=""
                          />
                        </div>
                      </div>
                    </button>
                    {viewMore && (
                      <div className="bg-gray-50 shadow mt-8 p-4">
                        <button
                          onClick={() => {
                            setViewMore(false);
                          }}
                          className="rotate-90 w-[18px] h-[18px] border-[0.75px] rounded-[3px] border-neutral-200 mb-4"
                        >
                          <Image
                            src={"/assets/icons/arrow-down-2.svg"}
                            width={30}
                            height={30}
                            alt=""
                          />
                        </button>
                        <p className="mb=4">
                          Variant{" "}
                          {variant?.color
                            ? variant.color.toUpperCase().charAt(0) +
                              variant.color.slice(1)
                            : variantIndex + 1}
                        </p>
                        <label
                          htmlFor="color"
                          className="flex flex-col gap-2 mb-4"
                        >
                          <InputContainer
                            labelName={"Color"}
                            id={"color"}
                            inputVal={
                              variant.color
                                ? variant?.color?.toUpperCase().charAt(0) +
                                  variant?.color?.slice(1)
                                : "No color for this variant"
                            }
                          />
                        </label>
                        <div className="mt-8 w-fit justify-end">
                          <div>
                            <p>Variant Images</p>
                            {variant?.images ? (
                              <>
                                {variant?.images.map((imageSrc) => {
                                  return (
                                    <div
                                      className="flex gap-2 w-full"
                                      key={imageSrc}
                                    >
                                      <Image
                                        src={imageSrc}
                                        width={40}
                                        height={40}
                                        alt=""
                                      />
                                    </div>
                                  );
                                })}
                              </>
                            ) : null}
                          </div>
                          <button
                            className="text-primaryBlue font-bold py-3 pb-4 text-right"
                            onClick={() =>
                              saveImage(productData?.thumbnail, "variant-image")
                            }
                          >
                            Save images
                          </button>
                        </div>
                        <div className="mt-8">
                          <p className="font-semibold text-lg">Sizes</p>
                          <div className="flex gap-2">
                            <LabelCard text={variant?.size} hasX />
                          </div>
                        </div>
                        <label htmlFor="price">Price</label>
                        <div className="flex items-center border border-neutral-200 rounded-lg text-neutral-500">
                          <div className="flex gap-1 items-center border-r border-neutral-200 p-2">
                            ₦ <IoMdArrowDropdown />
                          </div>
                          <input
                            className="px-6"
                            type="text"
                            value={variant?.price}
                            disabled
                          />
                        </div>
                        <div className="relative flex flex-col w-full mt-8">
                          <label htmlFor="availableStock">
                            Available Stock
                          </label>
                          <button
                            onClick={handleDecrement2}
                            className="absolute bg-[#8E8EA9] hover:opacity-90 rounded-sm p-3 w-11 text-white font-bold top-[33%] left-0 flex justify-center items-center"
                          >
                            -
                          </button>
                          <button
                            onClick={handleIncrement2}
                            className="absolute bg-[#8E8EA9] hover:opacity-90 rounded-sm p-3 w-11 text-white font-bold top-[33%] right-0 flex justify-center items-center"
                          >
                            +
                          </button>
                          <input
                            className="py-3 pl-[50%] text-sm rounded-sm border flex justify-center bg-white border-neutral-200"
                            type="text"
                            id="availableStock"
                            value={variant?.availableStock}
                            disabled
                          />
                        </div>
                        <div className="mt-8">
                          <p>
                            Stores (click the store icon to get to the store)
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {productStores ? (
                              <>
                                {productStores?.map((store) => {
                                  return (
                                    <div
                                      key={store?.id}
                                      className="relative flex justify-center items-center w-full border border-lightGray h-11 rounded-lg"
                                    >
                                      <div className="absolute bg-[#8E8EA9] rounded-sm w-11 h-full left-0 overflow-hidden">
                                        <Image
                                          className="w-full h-full"
                                          src={store?.logo}
                                          width={400}
                                          height={100}
                                          alt=""
                                        />
                                      </div>
                                      <AddProductDetailsModal
                                        variantId={variant?.id}
                                        storeName={store?.name}
                                        storeId={store?.id}
                                      />
                                    </div>
                                  );
                                })}
                              </>
                            ) : (
                              <p>No stores avaialable for the products</p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          ) : (
            <p>No variants available</p>
          )}
        </div>
        <VetProduct isActive={productData?.status} />
      </Container>
    </div>
  );
}
