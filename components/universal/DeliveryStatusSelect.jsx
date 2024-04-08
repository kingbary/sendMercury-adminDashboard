import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function DeliveryStatusSelect({ handleActiveTab }) {
  return (
    <Select
      onValueChange={(value) => handleActiveTab(value)}
      className="w-full"
    >
      <SelectTrigger className="md:w-44">
        <SelectValue defaultValue={"awaitingDelivery"} placeholder="Awaiting Delivery" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem
          value="awaitingDelivery"
          onClick={() => handleActiveTab("awaitingDelivery")}
        >
          Awaiting Delivery
        </SelectItem>
        <SelectItem
          value="processedDelivery"
          onClick={() => handleActiveTab("processedDelivery")}
        >
          Processed Delivery
        </SelectItem>
        <SelectItem
          value="deliveryConfirmed"
          onClick={() => handleActiveTab("deliveryConfirmed")}
        >
          Delivery Confirmed
        </SelectItem>
        <SelectItem
          value="delivered"
          onClick={() => handleActiveTab("delivered")}
        >
          Delivered
        </SelectItem>
        <SelectItem
          value="returnInProgress"
          onClick={() => handleActiveTab("returnInProgress")}
        >
          Return In Progress
        </SelectItem>
        <SelectItem
          value="returnInCompleted"
          onClick={() => handleActiveTab("returnInCompleted")}
        >
          Return Completed
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
