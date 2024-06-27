"use client";
import React from "react";
import InnerCard from "../universal/InnerCard";
import VendorsDetails from "./VendorsDetails";
import PlanSelect from "../universal/PlanSelect";
import StatusSelect from "../universal/StatusSelect";
import useListVendors from "@/hooks/queries/useListVendors";
import useGetVendorsMetricData from "@/hooks/queries/useGetVendorMetricData";
import { useAuthToken } from "@/hooks/useAuthToken";
import { Skeleton } from "../ui/skeleton";
import PaginationComp from "../universal/PaginationComp";
import { useSearchParams } from "next/navigation";

export default function Vendors() {
  const searchParams = useSearchParams();

  const page = searchParams.get("page");
  const plan = searchParams.get("plan");
  const status = searchParams.get("status");

  useAuthToken();

  const { data: vendorMetric } = useGetVendorsMetricData();
  const vendorMetricData = vendorMetric?.data?.data?.metrics;

  const { data, isLoading } = useListVendors({
    plan: plan === "all" ? "" : plan,
    pageParam: page ?? 1,
    status: status ?? "active",
    limit: 20,
  });

  const vendors = data?.data?.data?.vendors;
  const totalPages = data?.data?.meta?.totalPages;
  const nextPage = data?.data?.meta?.nextPage;
  const previousPage = data?.data?.meta?.previousPage;

  const linkHrefFetch = (index) => {
    return `?plan=${plan ? plan : "all"}&status=${status ?? "active"}&page=${
      index + 1
    }`;
  };

  return (
    <div>
      {vendorMetricData ? (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-4 md:mx-8">
          {vendorMetricData?.map((data) => (
            <InnerCard
              key={data?.plan}
              cardHeading={`${data?.plan} Plan Vendors`}
              value={data?.total}
              percentageIncrease={data?.percentage}
              increaseAmount={data?.currentMonth}
              percentage
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="lg:py-4 lg:px-2 shadow rounded-2xl">
              <Skeleton className="w-[143px] h-5 mb-2" />
              <Skeleton className="w-12 h-7 mb-6" />
              <Skeleton className="w-[143px] h-4" />
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-4 mx-4 my-8 md:m-8">
        <PlanSelect />
        <StatusSelect />
      </div>

      <VendorsDetails vendors={vendors} isLoading={isLoading} />
      <PaginationComp
        linkHref={linkHrefFetch}
        nextHref={`?plan=${plan}&status=${status}&page=${Number(page) + 1}`}
        prevHref={`?plan=${plan}&status=${status}&page=${Number(page) - 1}`}
        previousPage={previousPage}
        totalPages={totalPages}
        page={page}
        nextPage={nextPage}
      />
    </div>
  );
}
