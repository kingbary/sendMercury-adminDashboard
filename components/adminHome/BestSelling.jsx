import React from "react";
import Image from "next/image";
import Link from "next/link";
import { bestSellingData } from "@/data/homeDash/bestSellingData";

export default function BestSelling() {
  return (
    <section className="bg-white lg:rounded-[20px] p-6 w-full max-w-[430px]">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <p className="text-[#333] text-xl font-bold">
            Best Selling Vendors
          </p>
          <Link href={'/'} className="text-xl text-primaryBlue font-bold">See All</Link>
        </div>
      </div>
      {bestSellingData.map((data) => {
        return (
          <div key={data?.id} className="border-b border-[#C4C4C4] pr-20">
            <div className="flex justify-start items-center gap-6 py-4">
              <Image
                src={"/assets/images/best-selling-dp.svg"}
                width={64}
                height={64}
                alt=""
              />
              <div>
                <p className="font-medium">{data?.name}</p>
                <p>{data?.email}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
