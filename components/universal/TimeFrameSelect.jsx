import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function TimeFrameSelect({ handleTimeFrame }) {
  return (
    <Select
      onValueChange={(value) => handleTimeFrame(value)}
      className="w-full"
    >
      <SelectTrigger className="md:w-44">
        <SelectValue defaultValue={"basic"} placeholder="Annually" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem
          value="annually"
          onClick={() => handleTimeFrame("annual")}
        >
          Annually
        </SelectItem>
        <SelectItem
          value="month"
          onClick={() => handleTimeFrame("month")}
        >
          Monthly
        </SelectItem>
        <SelectItem
          value="quarter"
          onClick={() => handleTimeFrame("quarter")}
        >
          Quarterly
        </SelectItem>
        <SelectItem value="week" onClick={() => handleTimeFrame("week")}>
          Weekly
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
