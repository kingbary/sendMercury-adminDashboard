import React from "react";
import { Button } from "../ui/button";

export default function MobileWithdrawalTable() {
  return (
    <>
    <div className="p-4 md:hidden border-b border-neutral-300">
      <div className="flex justify-between">
        <div>
          <p className="text-sleekOrange text-xs">Initiated</p>
          <p>Thrift Wears</p>
          <p className="text-primaryBlue text-sm">Brian Eze</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-midGray text-sm">NGN 230,000</p>
          <p>NGN 20,000</p>
          <p className="text-xs">12/10/2024 -18:00</p>
        </div>
      </div>
      <div className="flex mt-4 gap-2">
        <Button variant="default">Approve</Button>
        <Button variant="secondaryDestructive">Decline</Button>
      </div>
    </div>
    <div className="p-4 md:hidden border-b border-neutral-300">
      <div className="flex justify-between">
        <div>
          <p className="text-sleekOrange text-xs">Initiated</p>
          <p>Thrift Wears</p>
          <p className="text-primaryBlue text-sm">Brian Eze</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-midGray text-sm">NGN 230,000</p>
          <p>NGN 20,000</p>
          <p className="text-xs">12/10/2024 -18:00</p>
        </div>
      </div>
      <div className="flex mt-4 gap-2">
        <Button variant="default">Approve</Button>
        <Button variant="secondaryDestructive">Decline</Button>
      </div>
    </div>
    </>
  );
}
