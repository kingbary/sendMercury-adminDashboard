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
        <SelectValue defaultValue={"basic"} placeholder="2023" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem value="2023" onClick={() => handleActiveTab("2023")}>
          2023
        </SelectItem>
        <SelectItem value="2022" onClick={() => handleActiveTab("2022")}>
          2022
        </SelectItem>
        <SelectItem value="2021" onClick={() => handleActiveTab("2021")}>
          2021
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
