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
  const searchParams=useSearchParams()
  const plan=searchParams.get('plan')
  const router = useRouter();

  return (
    <Select
      onValueChange={(status) => router.push(`?plan=${plan ?? 'all'}&status=${status}`)}
      className="w-full"
    >
      <SelectTrigger className="md:w-44">
        <SelectValue defaultValue={"active"} placeholder="Active" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem value="active">Active</SelectItem>
        <SelectItem value="suspended">Suspended</SelectItem>
      </SelectContent>
    </Select>
  );
}
