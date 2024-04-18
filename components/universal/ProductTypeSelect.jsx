import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function ProductTypeSelect({ handleProductTypeSelect }) {
  return (
    <Select
      onValueChange={(value) => handleProductTypeSelect(value)}
      className="w-full"
    >
      <SelectTrigger className="md:w-44">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem
          onClick={() => handleProductTypeSelect("")}
        >
          All Types
        </SelectItem>
        <SelectItem
          value="digital"
          onClick={() => handleProductTypeSelect("digital")}
        >
          Digital Product
        </SelectItem>
        <SelectItem
          value="physical"
          onClick={() => handleProductTypeSelect("physical")}
        >
          Physical Product
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
