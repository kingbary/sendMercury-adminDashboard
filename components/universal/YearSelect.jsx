import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function YearSelect({ handleActiveTab }) {
  return (
    <Select
      onValueChange={(value) => handleActiveTab(value)}
      className="w-full"
    >
      <SelectTrigger className="md:w-44">
        <SelectValue defaultValue={"basic"} placeholder="2024" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem value="2024" onClick={() => handleActiveTab(2024)}>
          2024
        </SelectItem>
        {/* <SelectItem value="2023" onClick={() => handleActiveTab(2023)}>
          2023
        </SelectItem>
        <SelectItem value="2022" onClick={() => handleActiveTab(2022)}>
          2022
        </SelectItem> */}
      </SelectContent>
    </Select>
  );
}
