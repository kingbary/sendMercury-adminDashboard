import React from "react";
import Image from "next/image";
import { MdArrowUpward } from "react-icons/md";

export default function InnerCard({
  iconSrc,
  cardHeading,
  revenueVal,
  saleVal,
  value,
  percentageIncrease,
  increaseAmount,
  percentage
}) {
  return (
    <div className="flex flex-col justify-between gap-6 md:gap-3 lg:gap-6 p-[10px] lg:py-4 lg:px-2 shadow rounded-2xl">
      <div className=" flex gap-3">
        {iconSrc ? (
          <Image
            src={iconSrc}
            alt="Send Mercury icon logo"
            width={40}
            height={40}
          />
        ) : (
          ""
        )}
        <div>
          <p className="text-base lg:text-sm font-light">{cardHeading}</p>
          {revenueVal && saleVal ? (
            <div>
              <p className="font-normal">
                Revenue: <span className="font-medium">{revenueVal}</span>
              </p>
              <p className="font-normal">
                Sale: <span className="font-medium">{saleVal}</span>
              </p>
            </div>
          ) : (
            <p className="text-xl font-extrabold text-[#1c1c1c] md:text-lg">
              {value}
            </p>
          )}
        </div>
      </div>
      {percentage ? (
        <div className="flex gap-2 text-xs text-green-600 lg:flex-row">
          <p className="flex">
            <MdArrowUpward size={16} />
            {percentageIncrease}%{" "}
          </p>
          <p className="text-[#1c1c1c] font-medium">
            {increaseAmount} this month
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
