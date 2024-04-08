"use client";
import Image from "next/image";
import Link from "next/link";
// import React, { useState } from "react";
import PeriodSelect from "../universal/PeriodSelect";
import YearSelect from "../universal/YearSelect";
import Container from "../universal/Container";
import { useState } from "react";
import WithdrawalTable from "./WithdrawalTable";

export default function Withdrawal() {
  let [activeTab, setActiveTab] = useState("2023");
  const [tab, setTab] = useState(1);
  const handleTabClick = (selectedTab) => {
    setTab(selectedTab);
  };
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
      <div>
        <p className="font-bold">Withdrawals</p>
        <p>You have {"20"} pending withdrawals awaiting approval</p>
      </div>
      <div className="flex flex-col justify-between md:flex-row gap-6 p-3 mb-3">
        <div className="flex gap-2">
          <PeriodSelect handleActiveTab={setActiveTab} />
          <YearSelect handleActiveTab={setActiveTab} />
        </div>
      </div>
      <Container>
        <WithdrawalTable/>
      </Container>
    </div>
  );
}
