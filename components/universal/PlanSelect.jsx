import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function PlanSelect({ handlePlanChange }) {
  return (
    <Select
      onValueChange={(value) => handlePlanChange(value)}
      className="w-full"
    >
      <SelectTrigger className="md:w-44">
        <SelectValue defaultValue={"basic"} placeholder="Basic Plan" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem value="basic" onClick={() => handlePlanChange("basic")}>
          Basic Plan
        </SelectItem>
        <SelectItem value="silver" onClick={() => handlePlanChange("silver")}>
          Silver Plan
        </SelectItem>
        <SelectItem
          value="platinum"
          onClick={() => handlePlanChange("platinum")}
        >
          Platinum Plan
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
