import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function PeriodSelect({ handleActiveTab }) {
  return (
    <Select
      onValueChange={(value) => handleActiveTab(value)}
      className="w-full"
    >
      <SelectTrigger className="md:w-44">
        <SelectValue defaultValue={"annually"} placeholder="Annually" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem value="annually" onClick={() => handleActiveTab("anually")}>
          Annually
        </SelectItem>
        <SelectItem value="monthly" onClick={() => handleActiveTab("monthly")}>
          Monthly
        </SelectItem>
        <SelectItem value="weekly" onClick={() => handleActiveTab("weekly")}>
          Weekly
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
