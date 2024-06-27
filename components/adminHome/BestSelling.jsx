import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import axios from "axios";

export default function BestSelling() {
  const [bestSellingVendorData, setBestSellingVendorData] = useState([]);
  const [token, setToken] = useState("");
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  useEffect(() => {
    const item = localStorage.getItem("token");
    setToken(item);
  }, []);

  useEffect(() => {
    const getBestSellingVendorData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/admin/orders/top-sellers?limit=4`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data.data.metrics;
        setBestSellingVendorData(data);
      } catch (error) {
        toast.error(`${error}`);
      }
    };

    if (token) {
      getBestSellingVendorData();
    }
  }, [token]);
  return (
    <section className="bg-white lg:rounded-[20px] p-6 w-full max-w-[430px]">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <p className="text-[#333] text-xl font-bold">Best Selling Vendors</p>
          <Link
            href={"/vendors"}
            className="text-xl text-primaryBlue font-bold"
          >
            See All
          </Link>
        </div>
      </div>
      {bestSellingVendorData.length < 0 ? (
        <>
          {bestSellingVendorData?.map((data) => {
            return (
              <div key={data?.id} className="border-b border-[#C4C4C4] pr-20">
                <div className="flex justify-start items-center gap-6 py-4">
                  {data?.avatar ? (
                    <Image src={data?.avatar} width={64} height={64} alt="" />
                  ) : (
                    <Image
                      src="/assets/images/best-selling-dp.svg"
                      width={64}
                      height={64}
                      alt=""
                    />
                  )}
                  <div>
                    <p className="font-medium">{data?.vendorName}</p>
                    <p>{data?.email}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <p className="text-center text-midGray text-lg pt-6">You do not have any best selling vendors yet</p>
      )}
    </section>
  );
}
