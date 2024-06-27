"use client";
import React from "react";
import Container from "../universal/Container";
import Image from "next/image";
import Link from "next/link";
import useListPlan from "@/hooks/queries/useListPlan";
import { useAuthToken } from "@/hooks/useAuthToken";
import { Skeleton } from "../ui/skeleton";

export default function Plans() {
  useAuthToken();
  const { data, isLoading } = useListPlan();
  const planData = data?.data?.data?.plans;
  return (
    <div className="w-full md:w-11/12">
      <div className="lg:ml-6">
        <p className="text-lg font-bold mt-8">Plan Settings</p>
        <p className="text-midGray">
          Set the stores available for the various plans
        </p>
      </div>
      {planData ? (
        <>
          {planData.map((plan) => {
            return (
              <Container className="px-4" key={plan?.id}>
                <p className="text-lg font-semibold mb-4">{plan?.name}</p>
                <div className="flex gap-4">
                  {plan?.stores.slice(0, 7).map((store) => {
                    return (
                      <div key={store?.id} className="bg-white rounded-[10px] shadow w-[104px] h-[54px] flex justify-center items-center">
                        <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                          <Image
                            src={store?.logo}
                            width={40}
                            height={40}
                            alt=""
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Link
                  href={`/settings/plans/${plan?.id}`}
                  className="bg-primaryBlue inline-flex text-white px-4 py-3 mt-5 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300"
                >
                  Set Stores
                </Link>
              </Container>
            );
          })}
        </>
      ) : (
        <>
          {isLoading ? (
            <Container>
              <Skeleton className="w-[120px] h-4 rounded-md mb-4" />
              <div className="flex gap-4">
                <Skeleton className="w-[104px] h-14 rounded-[10px]" />
                <Skeleton className="w-[104px] h-14 rounded-[10px]" />
                <Skeleton className="w-[104px] h-14 rounded-[10px]" />
                <Skeleton className="w-[104px] h-14 rounded-[10px]" />
                <Skeleton className="w-[104px] h-14 rounded-[10px]" />
                <Skeleton className="w-[104px] h-14 rounded-[10px]" />
              </div>
              <Skeleton className="w-[96px] h-11 rounded-md mt-5" />
            </Container>
          ) : (
            <p>No plans available</p>
          )}
        </>
      )}
    </div>
  );
}
