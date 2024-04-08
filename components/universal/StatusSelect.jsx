import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function PlanSelect({ handleStatusChange }) {
  return (
    <Select
      onValueChange={(value) => handleStatusChange(value)}
      className="w-full"
    >
      <SelectTrigger className="md:w-44">
        <SelectValue defaultValue={"active"} placeholder="Active" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem value="active" onClick={() => handleStatusChange("active")}>
          Active
        </SelectItem>
        <SelectItem value="suspended" onClick={() => handleStatusChange("suspended")}>
          Suspended
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
