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
        <SelectValue defaultValue={""} placeholder="" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem value={undefined} onClick={() => handlePlanChange("")}>
          All Plan
        </SelectItem>
        <SelectItem value="basic" onClick={() => handlePlanChange("basic")}>
          Basic Plan
        </SelectItem>
        <SelectItem value="silver" onClick={() => handlePlanChange("silver")}>
          Silver Plan
        </SelectItem>
        <SelectItem value="gold" onClick={() => handlePlanChange("gold")}>
          Gold Plan
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
