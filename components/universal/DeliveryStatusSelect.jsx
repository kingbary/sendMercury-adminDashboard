import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRouter } from "next/navigation";

export default function DeliveryStatusSelect() {
  const router = useRouter();
  const onValueChange = (orderStatus) => {
    router.push(`?orderStatus=${orderStatus}`);
  };
  return (
    <Select onValueChange={onValueChange} className="w-full">
      <SelectTrigger className="md:w-44">
        <SelectValue
          defaultValue={"awaitingDelivery"}
          placeholder="Awaiting Delivery"
        />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="Pending">Awaiting Delivery</SelectItem>
        <SelectItem value="Cancelled">Cancelled</SelectItem>
        <SelectItem value="shipment_uploaded">Processed Delivery</SelectItem>
        <SelectItem value="Shipped">Delivery Confirmed</SelectItem>
        <SelectItem value="Delivered">Delivered</SelectItem>
        {/* <SelectItem
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
        </SelectItem> */}
      </SelectContent>
    </Select>
  );
}
