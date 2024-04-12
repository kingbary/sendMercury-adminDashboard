"use client";
import React, { useState } from "react";
import InnerCard from "../universal/InnerCard";
import VendorsDetails from "./VendorsDetails";
import PlanSelect from "../universal/PlanSelect";
import StatusSelect from "../universal/StatusSelect";
import useListVendors from "@/hooks/queries/useListVendors";
import { useEffect } from "react";
import useGetVendorsMetricData from "@/hooks/queries/useGetVendorMetricData";
import { PulseLoader } from "react-spinners";

export default function Vendors() {
  const [plan, setPlanChange] = useState("basic");
  const [status, setStatus] = useState("active");
  const { data: vendorMetric } = useGetVendorsMetricData();
  const vendorMetricData = vendorMetric?.data?.data.metrics;
  console.log(vendorMetricData);
  const { data, isLoading, refetch } = useListVendors({
    plan: plan,
    pageParam: 1,
    status: status,
  });

  useEffect(() => {
    refetch();
  }, [plan, status]);
  const vendors = data?.data?.data?.vendors;
  return (
    <div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-4 md:mx-8">
        {vendorMetricData ? (
          <>
            {vendorMetricData?.map((data) => {
              return (
                <InnerCard
                  cardHeading={`${data?.plan} Plan Vendors`}
                  value={data?.total}
                  percentageIncrease={data?.percentage}
                  increaseAmount={data?.currentMonth}
                  percentage
                />
              );
            })}
          </>
        ) : (
          <PulseLoader color="#4d4d4d" />
        )}
        {/* <InnerCard
          cardHeading={"Silver plan Vendors"}
          value={"2,999,987"}
          percentageIncrease={"29.09"}
          increaseAmount={"- 10,000"}
          percentage
        />
        <InnerCard
          cardHeading={"Gold Plan Vendors"}
          value={"234,989"}
          percentageIncrease={"29.09"}
          increaseAmount={"+1,234"}
          percentage
        />
        <InnerCard
          cardHeading={"Platinum Plan Vendors"}
          value={"23,456"}
          percentageIncrease={"29.09"}
          increaseAmount={"+12,456"}
          percentage
        /> */}
      </div>
      <div className="flex gap-4 mx-4 my-8 md:m-8">
        <PlanSelect handlePlanChange={setPlanChange} />
        <StatusSelect handleStatusChange={setStatus} />
      </div>

      <VendorsDetails vendors={vendors} isLoading={isLoading} />
    </div>
  );
}
