"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "../universal/Container";
import InputContainer from "./InputContainer";
import { Button } from "../ui/button";
import { IoMdArrowDropdown } from "react-icons/io";
import LabelCard from "./LabelCard";
import { redirect, useParams, useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import VetProduct from "./VetProduct";

export default function ProductInformation() {
  const param = useParams();
  const productId = param.productId;
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);
  const [productData, setProductData] = useState({});
  const [token, setToken] = useState("");
  const [viewMore, setViewMore] = useState(false);
  // const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  const baseUrl = "https://send-mercury-backend-staging.up.railway.app/api/v1";

  const handleIncrement2 = () => {
    setCount2((prevCount) => prevCount + 1);
  };

  const handleDecrement2 = () => {
    if (count2 > 1) {
      setCount2((prevCount) => prevCount - 1);
    }
  };
  useEffect(() => {
    const item = localStorage.getItem("token");
    setToken(item);
  }, []);

  useEffect(() => {
    const getProductData = async () => {
      await axios
        .get(`${baseUrl}/admin/products/${productId}`, {
          headers: {
            Authorization: `Bearer ${item}`,
          },
        })
        .then((response) => {
          const data = response.data.data;
          setProductData(data);
        })
        .catch((error) => {
          toast.error(`Error encountered fetching product data : ${error}`);
        });
    };

    getProductData();
  }, []);

  console.log(productData);

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
        <div className="flex gap-8 items-end">
          <div>
            <p>Display image</p>
            <Image
              src={productData?.thumbnail}
              width={120}
              height={120}
              alt=""
            />
          </div>
          <p className="text-primaryBlue font-bold pb-4">Save Image</p>
        </div>
        <div className="mt-8 w-fit justify-end">
          <div>
            <p>Product Images</p>
            <div className="flex gap-2 w-full">
              <Image
                src={productData?.thumbnail}
                width={40}
                height={40}
                alt=""
              />
            </div>
          </div>
          <p className="text-primaryBlue font-bold py-3 pb-4 text-right">
            Save images
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
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
              inputVal={"Thrift Wears"}
            />
            <InputContainer
              labelName={"Product Type"}
              id={"productType"}
              inputVal={"Physical"}
            />
            {/* <InputContainer
              labelName={"Price"}
              id={"productType"}
              inputVal={"₦23,789.00"}
            /> */}
            <div className="relative flex flex-col w-full">
              <label htmlFor="availableStock">Available Stock</label>
              <div className="py-3 text-sm rounded-sm border bg-white border-neutral-200 pl-4">
                {productData?.totalStock}
              </div>
            </div>
          </div>
          <div className="mt-8">
            <label htmlFor="productDescription">Product Description</label>
            <div className="text-sm py-3 px-4 rounded-sm border bg-white border-neutral-200 w-full">
              {productData?.description}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p>Stores (click the store icon to get to the store)</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full">
              <InputContainer
                hasLogo
                logoSrc="/assets/icons/shopify.png"
                inputVal={"Add SKU Number"}
              />
              <Button variant="outlineBlue" className="mt-2">
                Add Product Store ID
              </Button>
            </div>
            <div className="w-full">
              <InputContainer
                hasLogo
                logoSrc="/assets/icons/shopify.png"
                inputVal={"Add SKU Number"}
              />
              <Button variant="outlineBlue" className="mt-2">
                Add Product Store ID
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="font-semibold text-lg">Shipping Locations</p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="mt-2">
              <p className="font-semibold">Continents</p>
              <div className="flex flex-wrap gap-2">
                <LabelCard text={"Africa"} />
                <LabelCard text={"Europe"} />
                <LabelCard text={"Asia"} />
                <LabelCard text={"Australia"} />
              </div>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Countries</p>
              <div className="flex flex-wrap gap-2">
                <LabelCard text={"Ghana"} />
                <LabelCard text={"Nigeria"} />
                <LabelCard text={"USA"} />
                <LabelCard text={"United Kingdom"} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="font-semibold text-lg">Sizes</p>
          <div className="flex gap-2 flex-wrap">
            <LabelCard text={"Large"} hasX />
            <LabelCard text={"Small"} hasX />
            <LabelCard text={"Extra Small"} hasX />
            <LabelCard text={"Extra Large"} hasX />
            <LabelCard text={"Medium"} hasX />
          </div>
        </div>
        <div className="mt-8">
          {productData?.variants ? (
            <>
              <p className="font-semibold mb-1">Variants</p>
              {productData?.variants.map((variant) => {
                return (
                  <>
                    <button
                      className="flex flex-col gap-6 w-full mb-4"
                      onClick={() => {
                        setViewMore(true);
                      }}
                    >
                      <div className="bg-gray-50 flex justify-between w-full shadow items-center px-4 py-[10px] rounded-lg">
                        <p>
                          Variant{" "}
                          {variant?.color.toUpperCase().charAt(0) +
                            variant?.color.slice(1)}
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
                        <p className="mb-4">
                          Variant{" "}
                          {variant?.color.toUpperCase().charAt(0) +
                            variant?.color.slice(1)}
                        </p>
                        <label
                          htmlFor="color"
                          className="flex flex-col gap-2 mb-4"
                        >
                          Color
                          <input
                            className="w-full text-sm py-3 px-4 rounded-sm border bg-white border-neutral-200"
                            type="text"
                            value={
                              variant?.color.toUpperCase().charAt(0) +
                              variant?.color.slice(1)
                            }
                            disable
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
                          <p className="text-primaryBlue font-bold py-3 pb-4 text-right">
                            Save images
                          </p>
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
                            <div className="w-full">
                              <InputContainer
                                hasLogo
                                logoSrc="/assets/icons/shopify.png"
                                inputVal={"Add SKU Number"}
                              />
                              <Button variant="outlineBlue" className="mt-2">
                                Add Product Store ID
                              </Button>
                            </div>
                            <div className="w-full">
                              <InputContainer
                                hasLogo
                                logoSrc="/assets/icons/shopify.png"
                                inputVal={"Add SKU Number"}
                              />
                              <Button variant="outlineBlue" className="mt-2">
                                Add Product Store ID
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
            </>
          ) : (
            <p>No variants available</p>
          )}
        </div>
        <VetProduct />
      </Container>
    </div>
  );
}
