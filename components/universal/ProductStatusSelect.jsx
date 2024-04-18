import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function ProductStatusSelect({ handleStatusSelect }) {
  return (
    <Select onValueChange={(value) => handleStatusSelect(value)} className="w-full">
      <SelectTrigger className="md:w-44">
        <SelectValue placeholder="Product Status" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem value="all" onClick={() => handleStatusSelect("")}>
          All
        </SelectItem>
        <SelectItem value="active" onClick={() => handleStatusSelect("active")}>
          Live
        </SelectItem>
        <SelectItem value="suspended" onClick={() => handleStatusSelect("suspended")}>
          Suspended
        </SelectItem>
        <SelectItem value="pending" onClick={() => handleStatusSelect("pending")}>
          Pending
        </SelectItem>
        <SelectItem
          value="deleted"
          onClick={() => handleStatusSelect("deleted")}
        >
          Deleted request
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
