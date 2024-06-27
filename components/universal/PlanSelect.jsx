import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export default function PlanSelect() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const router = useRouter();

  const onValueChange = (plan) => {
    router.push(
      `?plan=${plan}&status=${status}`
    );
  };
  return (
    <Select defaultValue="all" onValueChange={onValueChange} className="w-full">
      <SelectTrigger className="md:w-44">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem value={"all"}>All Plan</SelectItem>
        <SelectItem value="starterSpark">Starter Spark</SelectItem>
        <SelectItem value="growthGear">Growth Gear</SelectItem>
        <SelectItem value="premium">Premium</SelectItem>
      </SelectContent>
    </Select>
  );
}
