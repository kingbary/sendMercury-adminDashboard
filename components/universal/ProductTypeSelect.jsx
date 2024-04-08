import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function ProductTypeSelect({ handleActiveTab }) {
  return (
    <Select
      onValueChange={(value) => handleActiveTab(value)}
      className="w-full"
    >
      <SelectTrigger className="md:w-44">
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem
          value="digitalProduct"
          onClick={() => handleActiveTab("digitalProduct")}
        >
          Digital Product
        </SelectItem>
        <SelectItem
          value="physicalProduct"
          onClick={() => handleActiveTab("physicalProduct")}
        >
          Physical Product
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
