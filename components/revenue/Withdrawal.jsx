"use client";
import Image from "next/image";
import Link from "next/link";
// import React, { useState } from "react";
import PeriodSelect from "../universal/PeriodSelect";
import YearSelect from "../universal/YearSelect";
import { useState } from "react";
import WithdrawalTable from "./WithdrawalTable";
import MobileWithdrawalTable from "./MobileWithdrawalTable";
import useListWithdrawal from "@/hooks/queries/useGetWithdrawal";

export default function Withdrawal() {
  let [activeTab, setActiveTab] = useState("2023");
  const [tab, setTab] = useState(1);
  const handleTabClick = (selectedTab) => {
    setTab(selectedTab);
  };

  const { data, isLoading } = useListWithdrawal({
    pageParam: 1,
    limit: 20,
  });
  const transactions = data?.data?.data?.transactions;
  return (
    <div className="sm:px-6">
      <Link
        href="/revenue"
        className="flex items-center gap-2 p-4 font-bold text-primaryBlue text-lg"
      >
        <div className="bg-[#E1E7FA] flex justify-center items-center w-6 h-6 rounded-full">
          <Image
            src="/assets/icons/arrow-left.png"
            height={20}
            width={20}
            alt=""
          />
        </div>
        Back
      </Link>
      <div className="p-4">
        <p className="font-bold">Withdrawals</p>
        <p>You have {"20"} pending withdrawals awaiting approval</p>
      </div>
      <div className="flex flex-col justify-between md:flex-row gap-6 p-3 mb-3">
        <div className="flex flex-col md:flex-row gap-2">
          <PeriodSelect handleActiveTab={setActiveTab} />
          <YearSelect handleActiveTab={setActiveTab} />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mr-6">
          <div className="flex gap-3">
            <div className="bg-primaryBlue h-6 w-6 rounded-full"></div>Active
            Vendors
          </div>
          <div className="flex gap-3">
            <div className="bg-red-500 h-6 w-6 rounded-full"></div>Suspended
            Vendors
          </div>
        </div>
      </div>
      <WithdrawalTable transactions={transactions} />
      <MobileWithdrawalTable transactions={transactions} />
    </div>
  );
}
