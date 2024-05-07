"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function pages() {
  const router = useRouter();
  useEffect(() => {
    router.push("/settings/profile");
  });
  return null;
}
