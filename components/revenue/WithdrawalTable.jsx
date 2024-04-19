import React from "react";
import { Button } from "../ui/button";
import Container from "../universal/Container";

export default function WithdrawalTable() {
  return (
    <Container className="lg:m-0 md:p-4 hidden md:block">
      <div className="hidden md:block">
        <div className="grid grid-cols-7 font-semibold w-full mb-6 text-sm justify-items-center">
          <p>SHOP NAME</p>
          <p className="whitespace-nowrap">VENDOR NAME</p>
          <p>AMOUNT</p>
          <p>BALANCE</p>
          <p>DATE</p>
          <p>TIME</p>
          <p>STATUS</p>
        </div>
        <>
          <div className="mb-6 py-2 border-b border-neutral-300 w-full">
            <div className="grid grid-cols-7 text-sm w-full justify-items-center">
              <p>Thrift Wears</p>
              <p>Brian Eze</p>
              <p>NGN 20,200</p>
              <p>NGN 220,203</p>
              <p>12/10/2024</p>
              <p>18:00</p>
              <div className="flex items-center gap-1">
                <p className="text-right text-[#F79E1B]">Initiated </p>
              </div>
            </div>
            <div className="flex mt-4 ml-8 gap-2">
              <Button variant="default">Approve</Button>
              <Button variant="secondaryDestructive">Decline</Button>
            </div>
          </div>
          <div className="mb-6 py-2 border-b border-neutral-300 w-full">
            <div className="grid grid-cols-7 text-sm w-full justify-items-center">
              <p>Thrift Wears</p>
              <p>Brian Eze</p>
              <p>NGN 20,200</p>
              <p>NGN 220,203</p>
              <p>12/10/2024</p>
              <p>18:00</p>
              <div className="flex items-center gap-1">
                <p className="text-right text-[#F79E1B]">Initiated </p>
              </div>
            </div>
            <div className="flex mt-4 ml-8 gap-2">
              <Button variant="default">Approve</Button>
              <Button variant="secondaryDestructive">Decline</Button>
            </div>
          </div>
        </>
      </div>
    </Container>
  );
}
