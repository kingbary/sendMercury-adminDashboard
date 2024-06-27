import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function OrderStatusSelect({
  handleOrderStatus,
  orderId,
  bgClass,
  selectItems,
}) {
  const onValueChange = (orderStatus) => {
    handleOrderStatus(orderStatus, orderId);
  };
  return (
    <Select onValueChange={onValueChange} className="w-full">
      <SelectTrigger
        className={`md:max-w-fit md:px-4 mt-4 ${bgClass} text-white`}
      >
        <SelectValue defaultValue="setToProcessed" placeholder="" />
      </SelectTrigger>
      <SelectContent className="">
        {selectItems.map((item) => {
          return (
            <SelectItem value={item.value} key={item.id}>
              {item.option}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
