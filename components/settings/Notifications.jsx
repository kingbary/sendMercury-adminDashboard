import React from "react";
import Container from "../universal/Container";

export default function Notifications() {
  return (
    <div className="w-full md:w-3/4">
      <Container className="px-4">
        <p className="font-bold">Notification Settings</p>
        <p className="text-[#666] mb-10">
          Select your default notification channels
        </p>
        <div className="flex flex-col md:flex-row justify-between border-b-[1px] border-[#C4C4C4] mb-4 pb-4">
          <p className="text-[#666]">New vendor application</p>
          <div className="flex gap-1">
            <button className="py-1 px-[10px] text-[#525252] border-solid border-[1px] border-[#525252] rounded-[5px]">
              None
            </button>
            <button className="py-1 px-[10px] bg-[#0032C8] text-white rounded-[5px]">
              In app
            </button>
            <button className="py-1 px-[10px] bg-[#0032C8] text-white rounded-[5px]">
              Email
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between border-b-[1px] border-[#C4C4C4] pb-4">
          <p className="text-[#666]">New Features</p>
          <div className="flex gap-1">
            <button className="py-1 px-[10px] text-[#525252] border-solid border-[1px] border-[#525252] rounded-[5px]">
              None
            </button>
            <button className="py-1 px-[10px] bg-[#0032C8] text-white rounded-[5px]">
              In app
            </button>
            <button className="py-1 px-[10px] bg-[#0032C8] text-white rounded-[5px]">
              Email
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
