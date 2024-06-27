"use client";
import React, { useState } from "react";
import InnerCard from "../universal/InnerCard";
import Container from "../universal/Container";
import OrdersTable from "./OrdersTable";
import MobileTable from "./MobileTable";
import CreateOrderModal from "./CreateOrderModal";
import DeliveryStatusSelect from "../universal/DeliveryStatusSelect";
import { Skeleton } from "../ui/skeleton";
import PaginationComp from "../universal/PaginationComp";
import useGetOrderMetrics from "@/hooks/queries/useGetOrderMetrics";
import { useAuthToken } from "@/hooks/useAuthToken";
import { useSearchParams, useRouter } from "next/navigation";
import useGetOrders from "@/hooks/queries/useGetOrders";

export default function OrdersPage({}) {
  const [isCreateOrderModalOpen, setIsCreateOrderModalOpen] = useState(false);
  const handleCreateOrderModal = () => {
    setIsCreateOrderModalOpen(!isCreateOrderModalOpen);
  };

  const searchParams = useSearchParams();
  const status = searchParams.get("orderStatus") || "";
  const page = parseInt(searchParams.get("page")) || 1;

  const router = useRouter();

  useAuthToken();
  const { data: metricsData } = useGetOrderMetrics();
  const metricData = metricsData?.data?.data;

  const { data: orderDataResponse, isLoading } = useGetOrders({
    pageParam: page,
    limit: 20,
    status: status === "all" ? "" : status,
  });

  const orderData = orderDataResponse?.data?.data?.orders;
  const totalPages = orderDataResponse?.data?.meta?.totalPages;
  const nextPage = orderDataResponse?.data?.meta?.nextPage;
  const previousPage = orderDataResponse?.data?.meta?.previousPage;

  const handlePageChange = (newPage) => {
    router.push(`?orderStatus=${status}&page=${newPage}`);
  };

  return (
    <div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-5 md:mx-8">
        {metricData ? (
          <>
            <InnerCard
              cardHeading={"Total Orders"}
              value={metricData.total?.total}
              percentageIncrease={
                metricData?.total?.percentage !== 0
                  ? metricData?.total?.percentage
                  : null
              }
              increaseAmount={
                metricData.total?.thisMonth !== 0
                  ? metricData.total?.thisMonth
                  : null
              }
              percentage
            />
            <InnerCard
              cardHeading={"Successful Orders"}
              value={metricData?.Successful?.total}
              percentageIncrease={
                metricData?.Successful?.percentage !== 0
                  ? metricData?.Successful?.percentage
                  : null
              }
              increaseAmount={
                metricData.total?.thisMonth !== 0
                  ? metricData.Successful?.thisMonth
                  : null
              }
              percentage
            />
            <InnerCard
              cardHeading={"Pending Orders"}
              value={metricData?.Pending?.total}
              percentageIncrease={
                metricData?.Pending?.percentage !== 0
                  ? metricData?.Pending?.percentage
                  : null
              }
              increaseAmount={
                metricData.total?.thisMonth !== 0
                  ? metricData.Pending?.thisMonth
                  : null
              }
              percentage
            />
            <InnerCard
              cardHeading={"Cancelled Orders"}
              value={metricData?.Cancelled?.total}
              percentageIncrease={
                metricData?.Cancelled?.percentage !== 0
                  ? metricData?.Cancelled?.percentage
                  : null
              }
              increaseAmount={
                metricData.total?.thisMonth !== 0
                  ? metricData.Cancelled?.thisMonth
                  : null
              }
              percentage
            />
          </>
        ) : (
          <Skeleton />
        )}
      </div>
      <div className="mt-8 w-full mb-4 flex flex-col md:flex-row justify-between pl-4 pr-6">
        <DeliveryStatusSelect />
        <div className="flex justify-center">
          <CreateOrderModal />
        </div>
      </div>
      <Container>
        <OrdersTable orderData={orderData} isLoading={isLoading} />
        <MobileTable orderData={orderData} isLoading={isLoading} />
      </Container>
      <PaginationComp
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </div>
  );
}
