import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductTypeSelect() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const router = useRouter();
  return (
    <Select
      onValueChange={(productType) =>
        router.push(
          `?productType=${productType ?? "all"}&status=${status || ""}`
        )
      }
      className="w-full"
    >
      <SelectTrigger className="md:w-44">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem>All Types</SelectItem>
        <SelectItem value="digital">Digital Product</SelectItem>
        <SelectItem value="physical">Physical Product</SelectItem>
      </SelectContent>
    </Select>
  );
}
