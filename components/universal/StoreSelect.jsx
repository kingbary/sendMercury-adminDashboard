import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function StatusSelect({ handleActiveTab }) {
  return (
    <Select onValueChange={(value) => handleActiveTab(value)} className="w-full">
      <SelectTrigger className="md:w-44">
        <SelectValue defaultValue={"active"} placeholder="Amazon" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem value="amazon" onClick={() => handleActiveTab("amazon")}>
          Amazon
        </SelectItem>
        <SelectItem value="ebay" onClick={() => handleActiveTab("ebay")}>
          Ebay
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
