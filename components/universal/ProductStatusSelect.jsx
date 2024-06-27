import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductStatusSelect({ handleStatusSelect }) {
  const searchParams = useSearchParams();
  const productType = searchParams.get("productType");
  const router = useRouter();
  return (
    <Select
      onValueChange={(status) =>
        router.push(
          `?productType=${productType ?? "all"}&status=${
            status === "all" ? "" : status
          }`
        )
      }
      className="w-full"
    >
      <SelectTrigger className="md:w-44">
        <SelectValue placeholder="Product Status" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="active">Live</SelectItem>
        <SelectItem value="suspended">Suspended</SelectItem>
        <SelectItem value="pending">Pending</SelectItem>
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
