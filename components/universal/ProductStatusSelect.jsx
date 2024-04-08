import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function ProductStatusSelect({ handleActiveTab }) {
  return (
    <Select onValueChange={(value) => handleActiveTab(value)} className="w-full">
      <SelectTrigger className="md:w-44">
        <SelectValue placeholder="Product Status" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem value="live" onClick={() => handleActiveTab("live")}>
          Live
        </SelectItem>
        <SelectItem value="pending" onClick={() => handleActiveTab("pending")}>
          Pending
        </SelectItem>
        <SelectItem
          value="deleted"
          onClick={() => handleActiveTab("deleted")}
        >
          Deleted request
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
