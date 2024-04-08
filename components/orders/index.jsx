"use client";
import React, { useState } from "react";
import InnerCard from "../universal/InnerCard";
import Container from "../universal/Container";
import OrdersTable from "./OrdersTable";
import MobileTable from "./MobileTable";
import CreateOrderModal from "./CreateOrderModal";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";
import DeliveryStatusSelect from "../universal/DeliveryStatusSelect";
import useListOrders from "@/hooks/queries/useListPendingOrders";
import useSetSuccessful from "@/hooks/mutations/orders/useSetSuccessful";
import useListPendingOrders from "@/hooks/queries/useListPendingOrders";

export default function OrdersPage({}) {
  const [activeTab, setActiveTab] = useState("awaitingDelivery");

  const [isCreateOrderModalOpen, setIsCreateOrderModalOpen] = useState(false);
  const handleCreateOrderModal = () => {
    setIsCreateOrderModalOpen(!isCreateOrderModalOpen);
  };

  const handleTabClick = (selectedTab) => {
    setTab(selectedTab);
  };

  const {mutation, isPending} = useSetSuccessful()
   const handleSetSuccessful = () =>{
    mutation(data)
   }

  const { data, isError } = useListPendingOrders();
  const storeInformation = data?.data.data;
  return (
    <div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-5 md:mx-8">
        <InnerCard
          cardHeading={"Total Orders"}
          value={"0"}
          // percentageIncrease={"29.09"}
          // increaseAmount={"+ ₦1,000,000"}
          // percentage
        />
        <InnerCard
          cardHeading={"Successful Orders"}
          value={"0"}
          // percentageIncrease={"29.09"}
          // increaseAmount={"- ₦1,000,000"}
          // percentage
        />
        <InnerCard
          cardHeading={"Pending Orders"}
          value={"0"}
          // percentageIncrease={"29.09"}
          // increaseAmount={"+100"}
          // percentage
        />
        <InnerCard
          cardHeading={"Cancelled Orders"}
          value={"0"}
          // percentageIncrease={"29.09"}
          // increaseAmount={"+100"}
          // percentage
        />
      </div>
      <div className="mt-8 w-full mb-4 flex flex-col md:flex-row justify-between pl-4 pr-6">
        <DeliveryStatusSelect handleActiveTab={setActiveTab} />
        <div className="flex justify-center">
          <CreateOrderModal
            handleCreateOrderModal={handleCreateOrderModal}
            isCreateOrderModalOpen={isCreateOrderModalOpen}
          />
        </div>
        <Button
          variant="default"
          onClick={handleCreateOrderModal}
          className="hidden md:block"
        >
          Create new order
        </Button>
      </div>
      <Container>
        <OrdersTable activeTab={activeTab} />
        <MobileTable activeTab={activeTab} />
      </Container>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
